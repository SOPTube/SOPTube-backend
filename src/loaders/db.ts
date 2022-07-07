import mongoose from "mongoose";
import config from "../config";
import RecommendVideo from "../models/RecommendVideo";
import User from "../models/User";
import Video from "../models/Video";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    await User.createCollection().then(() => {
      console.log("User Collection is created!");
    });
    await RecommendVideo.createCollection().then(() => {
      console.log("RecommendVideo Collection is created!");
    });
    await Video.createCollection().then(() => {
      console.log("Video Collection is created!");
    });

    mongoose.set("autoCreate", true);

    console.log("Mongoose Connected ...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
