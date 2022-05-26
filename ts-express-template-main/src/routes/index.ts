//router index file
import { Router } from 'express';
import CategoryRouter from "./CategoryRouter"
import VideoRouter from "./VideoRouter";

const router: Router = Router();

router.use('/category', CategoryRouter);
router.use("/video", VideoRouter);

export default router;