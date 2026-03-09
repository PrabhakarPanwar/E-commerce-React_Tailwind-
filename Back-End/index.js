import express from "express";
import cors from "cors";
import homeRouter from "./authRoute/Router.js";
import mongooseConnect from "./connection/connect.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://fashioncity001.netlify.app", // allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

mongooseConnect();

app.use(homeRouter);
app.listen(process.env.PORT, () => {
  console.log("ok");
});
