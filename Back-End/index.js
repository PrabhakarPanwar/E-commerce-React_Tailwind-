import express from "express";
import cors from "cors";
import homeRouter from "./authRoute/Router.js";
import mongooseConnect from "./connection/connect.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongooseConnect();

app.use(homeRouter);

app.listen(8000, () => {
  console.log("ok");
});
