import { Request, Response } from "express";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import VideoService from "../services/VideoService";
import { CommentCreateDto } from "../interface/video/CommentCreateDto";

const getVideo = async (req: Request, res: Response) => {
    const { videoId } = req.params;

    try {
        
        const data = await VideoService.getVideo(videoId);

        if (!data) {
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND))
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_VIDEO_AND_COMMENTS_SUCCESS, data))

        
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR))
    }

}

const createComment = async (req: Request, res: Response ) => {
    const { videoId } = req.params;
    const commentCreateDto: CommentCreateDto = req.body;

    try {

        const data = await VideoService.createComment(videoId, commentCreateDto)
        if (!data) {
            return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND))
        }

        return res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_COMMENT_SUCCESS, data))

    } catch(error) {

        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR))

    }
}

export default {
    getVideo,
    createComment,
}