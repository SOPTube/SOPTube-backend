import mongoose from "mongoose";
import { UserInfo } from "../interface/user/UserInfo";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String
    },
    subscribes: {
        type: String,
        default: 0,
    }
})

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);