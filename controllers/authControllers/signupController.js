
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import { User } from '../../models/UserSchema.js';
dotenv.config();
async function hashPassword (password) {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
};

export const signUpController= async(req,res)=>{
    try {
         const {email,Username,password}=req.body;
        
        const currUser=await User.findOne({email});
        if(currUser){
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword=await hashPassword(password);

        const newUser= new User({
            email,
            password:hashedPassword,
            username:Username,
        })

        const accessToken = newUser.generateAccessToken();
        const refreshToken = newUser.generateRefreshToken();
        newUser.refreshToken = refreshToken;
        await newUser.save();


        res
        .cookie('refreshToken', refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        .status(201)
        .json({
          message: 'User created successfully',
          accessToken,
          user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
          }})

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}