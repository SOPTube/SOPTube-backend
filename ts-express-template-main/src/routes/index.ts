import { Router } from "express";
import CategoryRouter from "./CategoryRouter";
import VideoRouter from "./VideoRouter";
import RecommendRouter from "./RecommendVideoRouter";

const router: Router = Router();

router.use("/category", CategoryRouter);
router.use("/video", VideoRouter);
router.use("/recommend", RecommendRouter);

export default router;
