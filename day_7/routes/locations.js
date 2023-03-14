import { Router } from "express";
import locationsController from "../controllers/locations";

const router = Router();

router.get("/", locationsController.findAll);
router.get("/:id", locationsController.findOne);
router.post("/", locationsController.create);
router.put("/:id", locationsController.update);
router.delete("/:id", locationsController.deleted);

export default router;
