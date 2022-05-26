import { CommonVideoFields } from "../common/CommonVideoFields";
import mongoose from "mongoose";

export interface VideoInfo extends CommonVideoFields {
    uploaderId: mongoose.Types.ObjectId;
    category: string;
    createdAt: Date;
    likes: number;
    length: string;
    content: string;
    comments: commentInfo[];
}

export interface commentInfo {
    writerId: mongoose.Types.ObjectId;
    commentContent: string;
    commentTimeAgo: string;
    commentLikes: number;
}