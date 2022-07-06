import { Router } from "express";
import { RecommendVideoController } from "../controllers";

const router: Router = Router();

router.get("/", RecommendVideoController.getRecommendVideos);
router.post("/", RecommendVideoController.createRecommendVideos);

export default router;
