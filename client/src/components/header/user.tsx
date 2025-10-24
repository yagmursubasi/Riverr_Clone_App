import { Link } from "react-router-dom";
import type { IUser } from "../../types";

type Props = {
  data: IUser;
  logout: () => void;
};

const User = ({ data, logout }: Props) => {
  return (
    <>
      <img src={data.photo} alt="" className="size-[40px] rounded-full object-cover " />
      <span>{data.username} </span>

      <div className="w-[150px] text-[13px] flex-col absolute top-[40px] left-0 transition duration-500 bg-gray-200 rounded-md  text-center hidden group-hover:flex ">
        {data.isSeller && (
          <>
            <Link to="/my-gigs" className="link">
              Gigs
            </Link>
            <Link to="/add-gig" className="link text-nowrap">
              Add gig
            </Link>
          </>
        )}

        <Link to="/" className="link">
          Orders
        </Link>
        <Link to="/" className="link">
          Messages
        </Link>
        <button onClick={logout} className="link">
          Logout
        </button>
      </div>
    </>
  );
};

export default User;
