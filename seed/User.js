import { User } from "../models/UserSchema.js";

const users = [
  {
    _id: "688280016c906f2f13c0673c",
    userName: "faiz",
    email: "faizrizvi322@gmail.com",
    isVerified: true,
    isAdmin: false,
    provider: "local",
    password: "$2b$10$FxysgzBHQrjb5lIPX0rLs.htD/0qni0HFq1e30m2rbOu6TE9Elj12",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODI4MDAxNmM5MDZmMmYxM2MwNjczYyIsImlhdCI6MTc1MzM4MjkxNCwiZXhwIjoxNzUzOTg3NzE0fQ.VeAoOVvejeyAfIunAkBoDSCYwbkpsyxtZF9sTAalLOw",
    __v: 0,
  },
  {
    _id: "6881f7dfd5f39ba38fb7f57c",
    userName: "faiz",
    email: "faizrizvi45@gmail.com",
    isVerified: true,
    isAdmin: false,
    provider: "local",
    password: "$2b$10$XLkbkm/7OqhXMkHKL.7ID.DQabwqiN.8exXoyW1EuLdoH.W6Fir9e",
    refreshToken: null,
    __v: 0,
  },
];

export const seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User Seed Successfully");
  } catch (error) {
    console.log(error);
  }
};
