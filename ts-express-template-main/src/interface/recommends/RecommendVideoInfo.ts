import { CommonVideoFields } from "../common/commonVideoFields";
import mongoose from "mongoose";

export interface RecommendVideoInfo extends CommonVideoFields {
    uploaderId: mongoose.Types.ObjectId;
}