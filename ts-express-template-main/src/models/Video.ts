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
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    watches: {
        type: String,
        default: 0,
    },
    createdAt: {
        type: Date,
        timeStamp: true
    },
    likes: {
        type: Number,
        default: 0,
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
            default: 0,
        }
    }]
});


export default mongoose.model<VideoInfo>("Video", VideoSchema);