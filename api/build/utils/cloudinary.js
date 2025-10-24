import { v2 as cloudinary } from "cloudinary";
import error from "./error.js";
// Configuration
cloudinary.config({
    cloud_name: "dn1cf2sjj",
    api_key: "169811973563116",
    api_secret: "EBl4mPSEkphPMi4ejrIbY1nwKW4",
});
export const uploadToCloudinary = async (req, res, next, folder = "avatars", type = "image") => {
    try {
        const filePath = req.file?.path; // multer ile dosya al
        if (!filePath)
            return next(error(400, "Dosya bulunamadı"));
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folder,
            resource_type: type,
        });
        req.body.photo = result.secure_url; // MongoDB’ye kaydet
    }
    catch (err) {
        return next(error(400, "Fotoğraf yüklenemedi"));
    }
};
/**
 * Çoklu dosyayı Cloudinary'e yükler (gig için)
 * for yerine Promise.all kullanıldı
 */
export const uploadFilesToCloudinary = async (files, next, folder = "uploads") => {
    try {
        const uploadPromises = files.map((file) => cloudinary.uploader
            .upload(file.path, {
            folder,
            resource_type: "image",
            transformation: [
                {
                    width: 1280,
                    height: 720,
                    crop: "fill",
                    gravity: "auto",
                    quality: "auto",
                    fetch_format: "auto",
                },
            ],
        })
            .then((result) => result.secure_url));
        const urls = await Promise.all(uploadPromises);
        return urls;
    }
    catch (err) {
        return next(error(400, "Dosyalar yüklenemedi"));
    }
};
export default cloudinary;
