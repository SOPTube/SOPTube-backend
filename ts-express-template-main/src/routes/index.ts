//router index file
import { Router } from 'express';
import CategoryRouter from "./CategoryRouter"

const router: Router = Router();

router.use('/category', CategoryRouter);

export default router;