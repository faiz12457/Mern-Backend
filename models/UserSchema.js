import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  userName: {
    type: String,
  },

  password: {
    type: String,
  },

  email: {
    type: String,
  },
  refreshToken: {
    type: String,
  },

  profilePic: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  provider: { type: String, enum: ["local", "google"] },
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.hashedPassword = async function (password, saltRounds = 10) {
  return await bcrypt.hash(password, saltRounds);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "1d",
  });
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: "7d",
  });
};

export const User = model("User", userSchema);
