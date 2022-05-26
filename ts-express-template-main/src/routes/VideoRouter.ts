import { Router } from "express";
import VideoController from "../controllers/VideoController";

const router = Router();

router.get("/:videoId", VideoController.getVideo)
router.post("/:videoId/comment", VideoController.createComment)

export default router;
