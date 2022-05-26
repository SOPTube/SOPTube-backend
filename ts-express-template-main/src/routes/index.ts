import { Router } from "express";
import VideoRouter from "./VideoRouter";
import RecommendRouter from "./RecommendVideoRouter";

const router = Router();

router.use("/video", VideoRouter);
router.use("/recommend", RecommendRouter);

export default router;
