import { Router } from "express";
import regionsController from "../controllers/regions";

const router = Router();

router.get("/", regionsController.findAll);
router.get("/:id", regionsController.findOne);
router.post("/", regionsController.create);
router.put("/:id", regionsController.update);
router.delete("/:id", regionsController.deleted);
router.get("/sql/:id", regionsController.qureySQL);

export default router;
