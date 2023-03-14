import { Router } from "express";
import jobsController from "../controllers/jobs";

const router = Router();

router.get("/", jobsController.findAll);
router.get("/:id", jobsController.findOne);
router.post("/", jobsController.create);
router.put("/:id", jobsController.update);
router.delete("/:id", jobsController.deleted);

export default router;
