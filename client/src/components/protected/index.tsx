import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import Loader from "../loader";

const Protected = () => {
  //Kullanıcı verilerini al
  const { user, isLoading } = useAuth();
  //kullanıcı verisi yüklenene kadar loader bas
  if (isLoading) return <Loader designs="my-20 size-10" />;

  //kullanıcı hesabı satıcı değilse  anasayfaya yönlendir
  if (!user?.isSeller) return <Navigate to="/" replace />;

  //Kullanıcı hesabı satıcı ise sayfayı göster

  return <Outlet />;
};

export default Protected;
