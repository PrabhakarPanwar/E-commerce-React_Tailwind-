import express from "express";
import cors from "cors";
import homeRouter from "./authRoute/Router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(homeRouter);

app.listen(8000, () => {
  console.log("ok");
});
