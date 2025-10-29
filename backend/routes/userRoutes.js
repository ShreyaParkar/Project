import express from "express";
import multer from "multer";
import { signup, login, getProfile, updateProfilePic } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/user", signup);
router.post("/auth/login", login);
router.get("/user", authMiddleware, getProfile);
router.patch("/user", authMiddleware, upload.single("image"), updateProfilePic);

export default router;
