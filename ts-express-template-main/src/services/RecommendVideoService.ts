import { RecommendVideoCreateDto } from "../interface/recommends/RecommendVideoCreateDto";
import { RecommendVideoResponseDto } from "../interface/recommends/RecommendVideoResponseDto";
import RecommendVideo from "../models/RecommendVideo";

const getRecommendVideos = async (): Promise<
  RecommendVideoResponseDto[] | null
> => {
  try {
    const recommendVideos = await RecommendVideo.find();

    if (!recommendVideos) {
      return null;
    }
    console.log(recommendVideos);
    return recommendVideos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createRecommendVideos = async (
  recommendVideoCreateDto: RecommendVideoCreateDto
): Promise<RecommendVideoCreateDto> => {
  try {
    const recommendVideo = new RecommendVideo({
      uploaderId: recommendVideoCreateDto.uploaderId,
      title: recommendVideoCreateDto.title,
      thumbnail: recommendVideoCreateDto.thumbnail,
      timeAgo: recommendVideoCreateDto.timeAgo,
      watches: recommendVideoCreateDto.watches,
    });

    await recommendVideo.save();

    const data = {
      _id: recommendVideo._id,
      uploaderId: recommendVideoCreateDto.uploaderId,
      title: recommendVideoCreateDto.title,
      thumbnail: recommendVideoCreateDto.thumbnail,
      timeAgo: recommendVideoCreateDto.timeAgo,
      watches: recommendVideoCreateDto.watches,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getRecommendVideos,
  createRecommendVideos,
};
