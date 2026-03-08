import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import product from "../models/productSchema.js";
import user from "../models/userSchema.js";

let token;

export const register = async (req, res) => {
  const { name, email, pwd } = req.body;

  let userCheck = await user.findOne({ email });

  if (userCheck) {
    return res.json({
      success: true,
      msg: "User Already Registered",
    });
  }

  let hash = await bcrypt.hash(pwd, 10);

  await user.create({ name, email, pwd: hash });

  res.json({
    success: true,
    msg: "User Id created",
  });
};
export const login = async (req, res) => {
  const { email, pwd } = req.body;

  let userCheck = await user.findOne({ email });
  if (!userCheck) {
    return res.json({
      success: false,
      msg: "User Id Not Registered",
    });
  }
  let comparing = await bcrypt.compare(pwd, userCheck.pwd);

  if (!comparing) {
    return res.json({
      success: false,
      msg: "Invalid Password",
    });
  }

  token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "10m" });

  res.json({
    token,
    success: true,
    msg: "Successfully Login",
  });
};

export const add = async (req, res) => {
  const { name, description, category, subCategory, price, size } = req.body;

  // console.log(req.files.img1[0]);

  let image1 = req.files?.img1 ? req.files.img1[0] : null;
  let image2 = req.files?.img2 ? req.files.img2[0] : null;
  let image3 = req.files?.img3 ? req.files.img3[0] : null;
  let image4 = req.files?.img4 ? req.files.img4[0] : null;

  const images = [image1, image2, image3, image4].filter((i) => i !== null);

  let imageURLs = await Promise.all(
    images.map(async (item) => {
      let result = await cloudinary.uploader.upload(item.path, {
        resource_type: "image",
      });
      return result.secure_url;
    }),
  );

  let r1 = await product.create({
    name,
    description,
    category,
    subCategory,
    price: Number(price),
    size: size,
    image: JSON.stringify(imageURLs),
  });

  // console.log(images);
  // console.log(req.body);
};

export const list = (req, res) => {};
export const remove = (req, res) => {};
