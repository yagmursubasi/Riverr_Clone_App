import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import GigInfo from "./gig-info";
import UserInfo from "./user-info";
import PackageInfo from "./package-info";
import type { IGigDetail } from "../../types";
import BreadCrumb from "./bread-crumb";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useQuery<IGigDetail>({
    queryKey: ["gig", id],
    queryFn: () => api.get(`/gigs/${id}`).then((res) => res.data.gig),
  });

  return (
    <div>
      {isLoading ? (
        <Loader designs="my-20 size-10" />
      ) : error ? (
        <Error refetch={refetch} message={error?.message} />
      ) : (
        data && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div>
              <BreadCrumb gig={data} />
              <GigInfo gig={data} />
              <UserInfo user={data.user} />
            </div>

            <PackageInfo data={data} />
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
