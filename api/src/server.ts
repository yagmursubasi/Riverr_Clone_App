import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";

import gigRouter from "./routes/gig.routes.js";
import errorMiddleware from "./middlewares/errorHandler.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//env dosyasındaki değişkenlere eriş
dotenv.config();

//veritabanı ile bağlantı kur
mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => console.log("🏀 veritabanı ile bağlantı kuruldu"))
  .catch((err) => console.log("veritabanına bağlanamadı", err));

//express uygulamasını başlat
const app = express();
//middlewares
app.use(express.json());

//cookiepaser mw
app.use(cookieParser());

//cors hatasını önleyen mw
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

const port = process.env.PORT;

//routes
app.use("/api/auth", authRouter);
app.use("/api/gigs", gigRouter);

//hata yönetimi için mw
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`🎾 Server ${port}. portu dinlemeye başladı`);
});
