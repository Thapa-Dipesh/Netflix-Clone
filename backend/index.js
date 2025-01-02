import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDb from "./config/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
connectToDb();

const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// apis
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
