import { seedAddress } from "./Address.js";
import { seedBrands } from "./Brands.js";
import { seedCategory } from "./Category.js";
import { seedProducts } from "./Products.js";
import { seedReview } from "./Review.js";
import { seedUser } from "./User.js";
import db from "../config/mongo-db-connection.js";

const seedData = async () => {
  try {
    console.log("Seed started please wait..");
    await seedAddress();
    await seedBrands();
    await seedCategory();
    await seedProducts();
    await seedReview();
    await seedUser();

    console.log("Seed completed");
  } catch (error) {
    console.log(error);
  }
};

seedData();
