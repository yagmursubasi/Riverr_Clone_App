//Aldığı parametrelere göre hta mw'ne gönderebilmek üzere bir error nesnesi oluştur
const error = (status, message) => {
    //Bir error nesnesi oluştur
    const err = new Error(message);
    //Error nesnesine status bilgisi ekle
    err.status = status;
    //Error nesnesini döndür
    return err;
};
export default error;
