import express from "express";
import regionsRoutes from "./regions.js";
import countryRoutes from "./countries.js";
import departmentRoutes from "./departments.js";
import jobRoutes from "./jobs.js";
import locationRoutes from "./locations.js";
import historyRoutes from "./jobHistory.js";
import employeeRoutes from "./employee.js";

const router = express.Router();

router.use("/regions", regionsRoutes);
router.use("/countries", countryRoutes);
router.use("/departments", departmentRoutes);
router.use("/jobs", jobRoutes);
router.use("/locations", locationRoutes);
router.use("/history", historyRoutes);
router.use("/employees", employeeRoutes);

export default router;
