import express, { Request, Response } from "express";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import CategoryService from "../services/CategoryService";

/**
 *  @route Get /category/:category
 *  @desc Get Category Videos
 *  @access Public
 */
const getCategoryVideo = async (req: Request, res: Response) => {
    const { category } = req.params;

    try {
        const data = await CategoryService.getCategoryVideo(category);
        if (!data) res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_VIDEO_SUCEESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    getCategoryVideo
}