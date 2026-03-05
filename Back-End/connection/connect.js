import mongoose from "mongoose";

const mongooseConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
};
export default mongooseConnect;
