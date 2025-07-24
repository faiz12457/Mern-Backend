import { Category } from "../models/categorySchema.js";

const category = [
  {
    _id: "680b6534f70ee7b877517ebf",

    name: "electronics",
    __v: 0,
  },
  {
    _id: "680b78698b000b0e614553b1",
    name: "Accessories",
    __v: 0,
  },
  {
    _id: "680b786a8b000b0e614553bf",
    name: "Electronics",
    __v: 0,
  },
  {
    _id: "680b78708b000b0e6145540b",
    name: "Home",
    __v: 0,
  },
  {
    _id: "680b78688b000b0e614553a5",
    name: "Footwear",
    __v: 0,
  },
  {
    _id: "680b6276f70ee7b877517ea1",
    name: "men's clothing",
    __v: 0,
  },
  {
    _id: "680b6417f70ee7b877517eaf",
    name: "John Hardy Women's Chain Bracelet",
    __v: 0,
  },
  {
    _id: "680b64a2f70ee7b877517eb7",
    name: "jewelery",
    __v: 0,
  },
  {
    _id: "680b78678b000b0e6145539d",
    name: "Fitness",
    __v: 0,
  },
  {
    _id: "680b786a8b000b0e614553b7",
    name: "Clothing",
    __v: 0,
  },
  {
    _id: "6817bf240c100879d941f726",
    name: "phone",
    __v: 0,
  },
  {
    _id: "680b786c8b000b0e614553db",
    name: "Travel",
    __v: 0,
  },
  {
    _id: "680b78718b000b0e61455415",
    name: "Kitchen",
    __v: 0,
  },
];
export const seedCategory = async () => {
  try {
    await Category.insertMany(category);
    console.log("Category Seed Successfully");
  } catch (error) {
    console.log(error);
  }
};
