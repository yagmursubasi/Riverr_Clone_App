import jwt from "jsonwebtoken";
import error from "../utils/error.js";
// Protect middleware
const protect = (req, res, next) => {
    // 1️) Header veya cookie’den token al
    const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;
    // 2️) Token yoksa 401 Unauthorized döndür
    if (!token)
        return next(error(401, "Token bulunamadı, giriş yapmalısınız"));
    // 3️) Token geçerli mi kontrol
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        //toke geçersiz ise hata gönder
        if (err)
            return next(error(403, "Token geçersiz veya süresi dolmuş"));
        //token geçerliyse req nesnesi içerisine kullanıc bilgilerini ekle
        const { id, isSeller } = decoded;
        req.userId = id;
        req.isSeller = isSeller;
        //sonraki adıma geç
        next();
    });
};
export default protect;
