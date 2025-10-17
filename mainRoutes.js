import express from "express";
import { publicRoute, protectedRoute } from "../controllers/mainController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route
router.get("/public", publicRoute);

// Protected route (with token validation)
router.get("/protected", authMiddleware, protectedRoute);

export default router;
