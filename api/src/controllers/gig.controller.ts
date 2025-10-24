import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync.js";
import Gig from "../models/gig.model.js";
import error from "../utils/error.js";
import { uploadFilesToCloudinary } from "../utils/cloudinary.js";
import { ExtendedFiles, Filters, Query } from "../types/index.js";

const buildFilters = (query: Query): Filters => {
  let filters: Filters = {};

  if (query.userId) filters.user = query.userId;

  if (query.category) {
    filters.category = { $regex: new RegExp(`^${query.category.trim()}$`, "i") };
  }

  if (query.min || query.max) {
    filters.package_price = {};

    if (query.min) filters.package_price.$gte = Number(query.min);
    if (query.max) filters.package_price.$lte = Number(query.max);
  }

  if (query.search) filters.title = { $regex: query.search.trim(), $options: "i" };

  return filters;
};

export const getAllGigs = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const filters = buildFilters(req.query);

    const gigs = await Gig.find(filters).populate("user", "username photo");

    if (gigs.length === 0) return next(error(404, "Hiç hizmet bulunamadı"));

    res.status(200).json({ results: gigs.length, message: "işlem başarılı", gigs });
  }
);

export const getGig = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const gig = await Gig.findById(req.params.id).populate("user", "-password");
    res.status(200).json({ message: "Hizmet verisi alındı", gig });
  }
);

export const createGig = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //isteği atan kullanıcının hesabı isSeller hesabı değilse hata gönder
    if (!req.isSeller) return next(error(403, "Sadece seller hesabı hizmet oluşturabilir"));

    //kapak fotoğraflarının ve diğer fotoğrafların url'lerini al
    const files = req.files as unknown as ExtendedFiles;

    console.log(files);

    // Cover image tek
    const coverUrl = files.coverImage
      ? (await uploadFilesToCloudinary(files.coverImage, next, "gig-cover"))[0]
      : "";

    // Diğer resimler array
    const imageUrls = files.images
      ? await uploadFilesToCloudinary(files.images, next, "gig-images")
      : [];

    req.body.coverImage = coverUrl;
    req.body.images = imageUrls;

    // package_features string ise array'e çevir
    if (typeof req.body.package_features === "string") {
      req.body.package_features = req.body.package_features.split(",");
    }

    //yeni hizmet belgesi oluştur
    const savedGig = await Gig.create({ ...req.body, user: req.userId });
    //client'a cevap gönder
    res.status(200).json({ message: "işlem başarılı", gig: savedGig });
  }
);
export const deleteGig = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //Hizmet detaylarını al
    const gig = await Gig.findById(req.params.id);

    //İşlemi yapan kişi  hizmet sahibi değilse hata döndür
    if (String(gig?.user) !== req.userId) return next(error(403, "Bu işlemi yapmaya yetkiniz yok"));

    //Hizmeti sil
    await Gig.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Hizmet başarıyla silindi." });
  }
);
