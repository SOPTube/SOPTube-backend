import mongoose from "mongoose";
import Video from "../models/Video";

const getCategoryVideo = async (categoryId: number) => {
  try {
    const categoryVideo = await Video.find({categoryId})
      .populate({
        path: "comments.writerId",
        select: ["name", "profileImg"],
      })
      .populate("uploaderId");
  
    if (categoryVideo.length === 0) return null;
    return categoryVideo;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default {
  getCategoryVideo
}
