import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  pwd: String,
  email: String,
});

let user = mongoose.model("user", userSchema);

export default user;
