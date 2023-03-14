import { Router } from "express";
import countriesController from "../controllers/countries";

const router = Router();

router.get("/", countriesController.findAll);
router.get("/:id", countriesController.findOne);
router.post("/", countriesController.create);
router.put("/:id", countriesController.update);
router.delete("/:id", countriesController.deleted);

export default router;
