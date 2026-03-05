import express from "express";
import cloudinaryConnect from "../Middleware/cloudinary.js";
import {
  add,
  list,
  login,
  register,
  remove,
} from "../Controller/authController.js";
import upload from "../Middleware/multer.js";
import "dotenv/config";
import verifyToken from "../Middleware/verify.js";

let homeRouter = express.Router();
cloudinaryConnect();

homeRouter.post("/register", register);
homeRouter.post("/login", login);
homeRouter.get("/verify",verifyToken);
homeRouter.post(
  "/add",
  upload.fields([
    { name: "img1", maxCount: 1 },
    { name: "img2", maxCount: 1 },
    { name: "img3", maxCount: 1 },
    { name: "img4", maxCount: 1 },
  ]),
  add,
);
homeRouter.post("/list", list);
homeRouter.post("/remove", remove);

export default homeRouter;
