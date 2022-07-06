import mongoose from "mongoose";

export interface CommentCreateDto {
    writerId: mongoose.Types.ObjectId; 
    commentContent: string;
}