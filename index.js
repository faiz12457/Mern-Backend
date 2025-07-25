import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import authRoute from "./routes/authRoutes.js";
import productRoute from "./routes/productRoute.js"
import addressRoute from "./routes/addressRoutes.js"
import reviewRouter from "./routes/reviewRouter.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRouter.js"
import userRouter from "./routes/userRoutes.js"
import db from "./config/mongo-db-connection.js";
import "./config/passport-setup.js";
const app = express();
const port = 3000;

app.use(
  cors({
    origin:[process.env.FRONT_END_URL,process.env.LOCAL_URL ],//  React frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/products",productRoute);
app.use("/address",addressRoute)
app.use("/review",reviewRouter);
app.use("/cart",cartRouter);
app.use('/order',orderRouter);
app.use('/user',userRouter);




app.get("/", (req, res) => {
  res.send("running");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
