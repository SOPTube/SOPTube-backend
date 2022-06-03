import Video from "../models/Video";

const getCategoryVideo = async (category: string) => {
  try {
    console.log(category)
    const categoryVideo = await Video.find({category})
      .populate({
        path: "uploaderId",
        select: ["name", "profileImg"],
      })
  
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
