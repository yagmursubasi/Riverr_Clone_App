import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/authProvider";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import type { IGig } from "../../types";
import Card from "../../components/card";

const MyGigs = () => {
  //Kullanıcı bilgilerini context'ten al
  const { user } = useAuth();

  //Kullanıcıya ait hizmetleri al
  const { data, isLoading, error, refetch } = useQuery<IGig[]>({
    queryKey: ["my-gigs", user?._id],
    queryFn: async () => {
      const res = await api.get("/gigs", { params: { userId: user?._id } });
      return res.data.gigs; // burası artık IGig[] döndürüyor
    },
  });

  return (
    <div>
      <h1 className="font-bold text-3xl mb-5 text-gray-600">My Gigs</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} refetch={refetch} />
        ) : (
          data && (
            <div className="layout">
              {data.map((gig, key) => (
                <Card key={gig._id ?? key} item={gig} buttons />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyGigs;
