import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import type { IFormUser, ILoginUser, IUser } from "../types";
import api from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    //Eğer token yoksa çalışması
    const token = localStorage.getItem("token") || document.cookie;
    if (!token) return setIsLoading(false);

    setIsLoading(true);

    api
      .get("/auth/profile")
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        toast.info("Oturumunuzun süresi doldu.Lütfen tekrar giriş yapın");
      })
      .finally(() => setIsLoading(false));
  }, []);

  //kaydol
  const register = (user: IFormUser) => {
    api
      .post("/auth/register", user, {
        headers: { "Content-Type": "multipart/form-data" }, //frontenden backende foto,video vs dosya göndermek için bu yazılmalı
      })
      .then(() => {
        toast.info("Hesabınız Oluşturuldu.Giriş yapabilirsiniz");
        navigate("/login");
      })
      .catch((err) => toast.error(err.response?.data?.message));
  };

  //giriş yap
  const login = (user: ILoginUser) => {
    setIsLoading(true);
    api
      .post("/auth/login", user)
      .then((res) => {
        //kullanıcı state'ni güncelle
        setUser(res.data.user);

        //tokeni local'e kaydet
        localStorage.setItem("token", res.data.token);

        toast.success("Oturumunuz açıldı");

        //yönlendir
        navigate("/");
      })
      .catch((err) => toast.error(err.response?.data?.message))
      .finally(() => setIsLoading(false));
  };
  //çıkış yap
  const logout = () => {
    api
      .post("/auth/logout")
      .then(() => {
        setUser(null);
        localStorage.removeItem("token");
        toast.info("Oturumunuz kapandı");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
      {children}{" "}
    </AuthContext.Provider>
  );
};

//contexte aboneliğimizi kolaylaştıracak hook
export const useAuth = () => {
  return useContext(AuthContext);
};
