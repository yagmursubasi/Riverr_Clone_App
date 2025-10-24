import type { ISellerUser } from "../../types";
import Rating from "../../components/rating";
import { PiStarFourFill } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi";

type Props = {
  user: ISellerUser;
};

const UserInfo = ({ user }: Props) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl text-gray-600 font-semibold">Get to know {user.username}</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-6 gap-5">
        {/* Fotoğraf */}
        <img src={user.photo} alt={user.username} className="w-24 h-24 rounded-full object-cover" />

        {/* Bilgiler */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="text-lg font-semibold">{user.username}</h4>
          <div className="flex items-center gap-2 text-gray-900">
            <Rating rating={5} reviews={25} />
            <div className="border-l border-l-gray-400 flex items-center pl-2 gap-1">
              <span className="text-sm font-semibold">Level 2</span>
              <PiStarFourFill className="text-gray-900" />
              <PiStarFourFill className="text-gray-900" />
              <PiStarFourFill className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button className="font-medium border border-gray-400 px-4 py-2 rounded-lg hover:shadow-md cursor-pointer">
          Contact Me
        </button>
        <div className="flex items-center gap-2  font-medium border border-gray-400 px-4 py-2 rounded-lg hover:shadow-md cursor-pointer">
          <HiOutlineVideoCamera size={20} />
          <button>Book a consultation</button>
        </div>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-md p-5 my-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="From" value={user.country} />
          <Field label="Member Since" value={user.createdAt} />
          <Field label="Phone" value={user.phone} />
          <Field label="Email" value={user.email} />
        </div>
        <div className=" text-gray-500 pt-3 mt-3 border-t border-gray-300 ">
          <p>{user.desc}</p>
        </div>
      </div>
    </div>
  );
};

type FieldProps = {
  label: string;
  value: string | Date;
};

const Field = ({ label, value }: FieldProps) => {
  const dateValue = value instanceof Date ? value : new Date(value);

  const formatted =
    label === "Member Since"
      ? dateValue.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : String(value);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500 font-light">{label}</span>
      <span className="text-gray-500 font-semibold">{formatted}</span>
    </div>
  );
};

export default UserInfo;
