import { CommonVideoFields } from "../common/commonVideoFields";
import mongoose from "mongoose";

export interface VideoInfo extends CommonVideoFields {
    uploaderId: mongoose.Schema.Types.ObjectId;
    category: string;
    createdAt: Date;
    likes: number;
    length: string;
    content: string;
    comments: VideoCommentInfo[];
}

export interface VideoCommentInfo {
    writerId: mongoose.Schema.Types.ObjectId;
    CommentContent: string;
    CommentTimeAgo: string;
    CommentLikes: number;
}