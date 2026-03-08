import mongoose from "mongoose";

const mongooseConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
export default mongooseConnect;
