//router index file
import { Router } from 'express';
// import VideoRouter from "./VideoRouter";
import CategoryRouter from "./CategoryRouter"

const router: Router = Router();

// router.use('/video', VideoRouter);
router.use('/category', CategoryRouter);

export default router;