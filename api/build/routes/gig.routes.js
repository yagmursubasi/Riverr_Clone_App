import express from "express";
import { createGig, deleteGig, getAllGigs, getGig } from "../controllers/gig.controller.js";
import protect from "../middlewares/protect.js";
import upload from "../utils/multer.js";
//1)Router oluşturma
const router = express.Router();
//2)yolları belirle
router
    .route("/")
    .get(getAllGigs)
    .post(protect, upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "images", maxCount: 6 },
]), createGig);
router.route("/:id").delete(protect, deleteGig).get(getGig);
//3)router'ı app'e tanıtmak için export et
export default router;
