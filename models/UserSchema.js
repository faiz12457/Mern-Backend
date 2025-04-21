import mongoose, { Schema, model } from "mongoose";
import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,

  },

  password: {
    type: String,
  },

  refreshToken: {
    type: String,
  },
  googleId:{
    type:String
  }
});

// userSchema.methods.hashPassword = async function (password) {
//   const saltRound = 10;
//   return await bcrypt.hash(password, saltRound);
// };

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_KEY, { expiresIn: "1d" });
};

userSchema.methods.generateRefreshToken=function(){
  return jwt.sign({id:this._id},process.env.REFRESH_TOKEN_KEY,{expiresIn:"7d"})
}



export const User = model("user", userSchema);
