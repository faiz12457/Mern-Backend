import { Address } from "../models/addressSchema.js";

const address = [
  {
    _id: "688215b4f7f190c0d0754659",
    type: "Home",
    user: "6881f7dfd5f39ba38fb7f57c",
    street: "10 B/1 Ghaziabad sanda road islampura lahore",
    province: "Punjab",
    city: "Lahore",
    country: "Pakistan",
    postalCode: 32145,
    phoneNumber: 3314437110,
    __v: 0,
  },
];

export const seedAddress = async () => {
  try {
    await Address.insertMany(address);
    console.log("Address Seed Successfully");
  } catch (error) {
    console.log(error);
  }
};
