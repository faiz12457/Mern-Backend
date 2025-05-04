import dotenv from "dotenv";

dotenv.config();
import { User } from "../../models/UserSchema.js";


export const loginController=async (req, res) => {
    const { email, password } = req.body;
  
    try {
    
      const user = await User.findOne({ email });
      if (!user || !user.password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
    
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
    
      user.refreshToken = refreshToken;
      await user.save();
  
    
      res
        .cookie('refreshToken', refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .status(200)
        .json({
          message: 'Login successful',
          accessToken,
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
        });
  
    } catch (err) {
      
      res.status(500).json({ message: err });
    }
  }