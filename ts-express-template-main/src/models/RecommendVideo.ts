import mongoose from "mongoose";
import { RecommendVideoInfo } from "../interface/recommends/RecommendVideoInfo";

const RecommendsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    uploaderId: {
        type: String,
        required: true,
    },
    watches: {
        type: Number,
    },
    timeAgo: {
        type: String,
        required: true,
    }
})

export default mongoose.model<RecommendVideoInfo & mongoose.Document>("Recommend", RecommendsSchema);