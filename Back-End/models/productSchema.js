import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subCategory: String,
  size: String,
  price: Number,
  image: String,
});
let product = mongoose.model("product", productSchema);

export default product;
