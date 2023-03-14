import { Router } from "express";
import departmentsController from "../controllers/departments";

const router = Router();

router.get("/", departmentsController.findAll);
router.get("/:id", departmentsController.findOne);
router.post("/", departmentsController.create);
router.put("/:id", departmentsController.update);
router.delete("/:id", departmentsController.deleted);

export default router;
