import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import error from "../utils/error.js";

// JWT payload tipi
interface JwtPayload {
  id: string;
  isSeller?: boolean;
}

// Express Request tipini genişlet
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      isSeller?: boolean;
    }
  }
}

// Protect middleware
const protect = (req: Request, res: Response, next: NextFunction) => {
  // 1️) Header veya cookie’den token al
  const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

  // 2️) Token yoksa 401 Unauthorized döndür
  if (!token) return next(error(401, "Token bulunamadı, giriş yapmalısınız"));

  // 3️) Token geçerli mi kontrol
  jwt.verify(
    token,
    process.env.JWT_KEY as string,
    (err: Error | null, decoded?: object | string) => {
      //toke geçersiz ise hata gönder
      if (err) return next(error(403, "Token geçersiz veya süresi dolmuş"));
      //token geçerliyse req nesnesi içerisine kullanıc bilgilerini ekle
      const { id, isSeller } = decoded as JwtPayload;
      req.userId = id;
      req.isSeller = isSeller;
      //sonraki adıma geç
      next();
    }
  );
};

export default protect;
