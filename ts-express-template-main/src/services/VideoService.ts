import Video from "../models/Video"
import { commentInfo } from "../interface/video/VideoInfo";
import { CommentCreateDto } from "../interface/video/CommentCreateDto";


const getVideo = async (videoId: string) => {

    try {

        const data = await Video.findById(videoId)
        .populate({
            path: "comments.writerId", 
            select: [ "name", "profileImg"]
        })
        .populate("uploaderId")

        return data

    } catch (error) {
        console.log(error)
        throw(error);
        
    }
}


const createComment = async (videoId: string, commentCreateDto: CommentCreateDto) => {

    try {

        const foundVideo = await Video.findById(videoId);

        if (!foundVideo) {
            return null
        }

        const newComment = {
            writerId: commentCreateDto.writerId,
            commentContent: commentCreateDto.commentContent,
            commentTimeAgo: "2주 전",
            commentLikes: 10
        }
        
        const newComments: commentInfo[] = [ ...foundVideo.comments, newComment ]

        const updateVideo = await Video.findOneAndUpdate({ _id: videoId }, { comments: newComments}, { new: true })
        if (!updateVideo) return null; 

        const data = await Video.findById(videoId)
        .populate({
            path: "comments.writerId", 
            select: [ "name", "profileImg"]
        })
        .populate("uploaderId")
    
        return data;

    } catch(error) {
        console.log(error)
        throw(error);
    }
    
    
}

export default {
    getVideo,
    createComment,
    
}