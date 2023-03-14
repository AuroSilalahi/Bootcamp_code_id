import { Router } from "express";
import employeeController from "../controllers/employee";

const router = Router();

router.get("/", employeeController.findAll);
router.get("/:id", employeeController.findOne);
router.post("/", employeeController.create);
router.put("/:id", employeeController.update);
router.delete("/:id", employeeController.deleted);

export default router;
