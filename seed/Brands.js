import { Brand } from "../models/brandSchema.js";

const brands = [
  {
    _id:"680b6534f70ee7b877517ec2",
    name: "Western Digital",
    __v: 0,
  },
  {
    _id:"680b66e3f70ee7b877517ece",
    name: "SlimWear",
    __v: 0,
  },
  {
    _id:"680b78688b000b0e614553a0",
    name: "Urban Threads",
    __v: 0,
  },
  {
    _id:"680b786b8b000b0e614553c6",
    name: "BrightLite",
    __v: 0,
  },
  {
    _id:"680b786d8b000b0e614553de",
    name: "StridePro",
    __v: 0,
  },
  {
    _id:"680b786d8b000b0e614553e8",
    name: "FitPulse",
    __v: 0,
  },
  {
    _id:"6817cd1fcb3e95f08b93c663",
    name: "samsung",
    __v: 0,
  },
  {
    _id:"680b6762f70ee7b877517ed4",
    name: "PrincessCuts",
    __v: 0,
  },
  {
    _id:"680b786a8b000b0e614553ba",
    name: "ZenWear",
    __v: 0,
  },
  {
    _id:"680b786c8b000b0e614553d0",
    name: "CraftLuxe",
    __v: 0,
  },
  {
    _id:"680b6341f70ee7b877517eaa",
    name: "PremiumTees",
    __v: 0,
  },
  {
    _id:"680b6417f70ee7b877517eb2",
    name: "John Hardy",
    __v: 0,
  },
  {
    _id:"680b64a2f70ee7b877517eba",
    name: "PetiteGems",
    __v: 0,
  },
  {
    _id:"680b67d2f70ee7b877517eda",
    name: "OwlEars",
    __v: 0,
  },
  {
    _id:"680b78688b000b0e614553a8",
    name: "TechNova",
    __v: 0,
  },
  {
    _id:"680b786e8b000b0e614553ee",
    name: "SonicWave",
    __v: 0,
  },
  {
    _id:"680b6276f70ee7b877517ea4",
    name: "Fjallraven",
    __v: 0,
  },
  {
    _id:"680b6630f70ee7b877517ec8",
    name: "CottonCo",
    __v: 0,
  },
  {
    _id:"680b786c8b000b0e614553d6",
    name: "CookMaster",
    __v: 0,
  },
];
export const seedBrands = async () => {
  try {
    await Brand.insertMany(brands);
    console.log("Brands Seed Successfully");
  } catch (error) {
    console.log(error);
  }
};
