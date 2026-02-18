import express from "express";
import { dashboard, login, register } from "../Controller/authController.js";
import upload from "../Middleware/multer.js";
// import verifyToken from "../Middleware/verify.js";

let homeRouter = express.Router();

homeRouter.post("/register", register);
homeRouter.post("/login", login);
homeRouter.post(
  "/dashboard",
  upload.fields([
    { name: "img1", maxCount: 1 },
    { name: "img2", maxCount: 1 },
    { name: "img3", maxCount: 1 },
    { name: "img4", maxCount: 1 },
  ]),
  dashboard,
);

export default homeRouter;
