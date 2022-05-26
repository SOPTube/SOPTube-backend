import mongoose from "mongoose";
import Video from "../models/Video";

const getCategoryVideo = async (category: string) => {
    try {
        const categoryVideo = await Video.find({category});
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