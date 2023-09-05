import mongoose from "mongoose";

const config = async () => {
  await mongoose.connect(process.env.MONGO_URL!).then((res) => {
    console.log(`mongoDB connected`);
  });
};

export default config;
