import express from "express";
import { login, logout, register, profile, } from "../controllers/auth.controller.js";
import upload from "../utils/multer.js";
import protect from "../middlewares/protect.js";
//1)Router oluşturma
const router = express.Router();
//2)yolları belirle
router.route("/register").post(upload.single("photo"), register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(protect, profile);
//3)router'ı app'e tanıt
export default router;
