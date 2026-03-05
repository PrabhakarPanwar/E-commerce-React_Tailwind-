import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subCategory: String,
  size: String,
  price: Number,
  image: String,
});
let user = mongoose.model("commerce", userSchema);

export default user;
