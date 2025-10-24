//hata yönetimi için mw
const errorMiddleware = (err, req, res, next) => {
    //geliştirme ortamında terminalde detayları görebilmek için
    console.log("Hata meydana geldi"),
        console.error("Hata detayları:", {
            message: err.message || "Bilinmeyen hata",
            status: err.status || 500,
            stack: err.stack || "Stack bilgisi yok",
        });
    //Kullanıcıya hata bildir
    const errStatus = err.status || 500;
    const errMessage = err.message || "Üzgünüz, bir şeyler ters gitti";
    return res.status(errStatus).json({
        status: "error",
        statusCode: errStatus,
        message: errMessage,
    });
};
export default errorMiddleware;
