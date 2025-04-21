import passport from "passport";
import dotenv from "dotenv";
dotenv.config();
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/UserSchema.js";



passport.use(new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET

},async(accessToken, refreshToken, profile, done)=>{

 try {
   const existingUser=await User.findOne({email:profile.emails[0].value});

   if (existingUser) {
    const access = existingUser.generateAccessToken();
    const refresh = existingUser.generateRefreshToken();
    existingUser.refreshToken = refresh;
    await existingUser.save();
    
    existingUser.tokens = { accessToken: access, refreshToken: refresh };
     return done(null, existingUser);
  }
  
  const newUser = new User({
    username: profile.displayName,
    googleId: profile.id,
    email: profile.emails[0].value
  });
  
  const access=newUser.generateAccessToken();
  const refresh=newUser.generateRefreshToken();
  newUser.refreshToken = refresh;
  await newUser.save();
  newUser.tokens = {
    accessToken: access,
    refreshToken: refresh
  };
  return done(null, newUser);
    
 } catch (error) {
    return done(error, null);
 }

}))



