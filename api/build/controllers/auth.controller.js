import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import error from "../utils/error.js";
import catchAsync from "../utils/catchAsync.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
//--------Kaydol------Yeni Hesap Oluştur---------
export const register = catchAsync(async (req, res, next) => {
    //şifeyi salt'la ve hash'le
    const hashedPass = bcrypt.hashSync(req.body.password, 12);
    await uploadToCloudinary(req, res, next);
    //kullanıcıyı veritabanına kaydet
    const newUser = await User.create({
        ...req.body,
        password: hashedPass,
    });
    // mongoose dokümanını sade objeye çevir
    const userObject = newUser.toObject();
    // password'u kaldır
    const { password, ...userWithoutPass } = userObject;
    res.status(200).json({ message: "Hesabınız oluşturuldu", data: userWithoutPass });
});
//---------Giriş Yap----------
export const login = catchAsync(async (req, res, next) => {
    //ismine göre kullanıcıyı ara
    const user = await User.findOne({ username: req.body.username });
    //kullanıcı bulunamazsa hata gönder
    if (!user) {
        return next(error(404, "Girdiğiniz bilgiler yanlış"));
    }
    //veritabanındaki hashlenmiş şifre ile isteğin body'sinden gelen normal şifreyi karşılaştır
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    //şifreler aynı değilse hata gönder
    if (!isPasswordCorrect) {
        return next(error(401, "Girdiğiniz bilgiler yanlış"));
    }
    //şifre doğruysa jwt tokeni luştur
    const token = jwt.sign({ id: user._id, isSeller: user.isSeller }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_DURATION,
    });
    //şifre alanını kaldır
    const userObject = user.toObject();
    const { password, ...userWithoutPass } = userObject;
    //tokeni clianta gönder
    res
        .cookie("token", token, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production", // HTTPS’de zorunlu
        expires: new Date(Date.now() + 14 * 24 * 3600 * 1000),
    })
        .status(200)
        .json({ message: "Hesaba giriş yapıldı", token, user: userWithoutPass });
});
//--------------Çıkış Yap---------------
export const logout = catchAsync(async (req, res, next) => {
    res
        .clearCookie("token", { httpOnly: true })
        .status(200)
        .json({ message: "Hesaptan çıkış yapıldı" });
});
//-------------Profil Bilgilerini Al ----------
export const profile = catchAsync(async (req, res, next) => {
    //req nesnesi içerisindeki kullanıcı id'sine karşılık gelen kullanıcının verilerini al
    const user = await User.findById(req.userId);
    if (!user)
        return next(error(404, "Kullanıcı bulunamadı"));
    //şifre alanını kaldır
    const userObject = user.toObject();
    const { password, ...userWithoutPass } = userObject;
    res.status(200).json({ message: "Profil bilgileri alındı", user: userWithoutPass });
});
