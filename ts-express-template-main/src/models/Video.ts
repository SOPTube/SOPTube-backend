import mongoose from "mongoose";
import { VideoInfo } from "../interface/video/VideoInfo";

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    uploaderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    watches: {
        type: String,
    },
    createdAt: {
        type: Date,
        timeStamp: true
    },
    likes: {
        type: Number,
    },
    length: {
        type: String,
        required: true,
    },
    timeAgo: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    comments: [{
        writerId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
        commentContent: {
            type: String,
            required: true
        },
        commentTimeAgo: {
            type: String,
            required: true
        },
        commentLikes: {
            type: Number,
        }
    }]
});


export default mongoose.model<VideoInfo & mongoose.Document>("Video", VideoSchema);