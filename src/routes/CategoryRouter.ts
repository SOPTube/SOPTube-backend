import { Router } from "express";
import CategoryController from "../controllers/CategoryController";

const router: Router = Router();

router.get('/:category', CategoryController.getCategoryVideo);

export default router;