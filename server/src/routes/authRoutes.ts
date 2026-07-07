import express from "express";
import { login, register } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { profileController } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login",login);
router.get("/profile", authMiddleware,profileController)

export default router;