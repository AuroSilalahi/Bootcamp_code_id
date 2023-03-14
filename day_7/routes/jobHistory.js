import { Router } from "express";
import historyController from "../controllers/jobHistory";

const router = Router();

router.get("/", historyController.findAll);
router.get("/:id", historyController.findOne);
router.post("/", historyController.create);
router.put("/:id", historyController.update);
router.delete("/:id", historyController.deleted);

export default router;
