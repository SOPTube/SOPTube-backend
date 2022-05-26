import { Router } from 'express';
import VideoRouter from "./VideoRouter";

const router = Router();

router.use("/video", VideoRouter);

export default router;