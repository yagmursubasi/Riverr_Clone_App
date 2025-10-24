import { NextFunction, Request, Response } from "express";

//hata yönetimi için mw
const errorMiddleware = (
  err: { status?: number; message?: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //geliştirme ortamında terminalde detayları görebilmek için
  console.log("Hata meydana geldi"),
    console.error("Hata detayları:", {
      message: err.message || "Bilinmeyen hata",
      status: err.status || 500,
      stack: (err as Error).stack || "Stack bilgisi yok",
    });

  //Kullanıcıya hata bildir
  const errStatus: number = err.status || 500;
  const errMessage: string = err.message || "Üzgünüz, bir şeyler ters gitti";

  return res.status(errStatus).json({
    status: "error",
    statusCode: errStatus,
    message: errMessage,
  });
};

export default errorMiddleware;
