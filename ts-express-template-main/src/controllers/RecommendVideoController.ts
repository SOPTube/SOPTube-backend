import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { RecommendVideoResponseDto } from "../interface/recommends/RecommendVideoResponseDto";
import { RecommendVideoCreateDto } from "../interface/recommends/RecommendVideoCreateDto";
import RecommendVideoService from "../services/RecommendVideoService";

/**
 * @route GET /recommend
 * @desc 추천 영상 리스트 조회하기
 * @access Public
 */

const getRecommendVideos = async (req: Request, res: Response) => {
  try {
    const data = await RecommendVideoService.getRecommendVideos();

    if (!data) {
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_RECOMMEND_VIDEO, data));
  } catch (error) {
    console.log(error);

    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route POST /recommend
 * @desc 추천 영상 리스트 추가하기
 * @access Public
 */

const createRecommendVideos = async (req: Request, res: Response) => {
  const recommendCreateDto: RecommendVideoCreateDto = req.body;

  try {
    const data = await RecommendVideoService.createRecommendVideos(
      recommendCreateDto
    );

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_COMMENT_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  getRecommendVideos,
  createRecommendVideos,
};
