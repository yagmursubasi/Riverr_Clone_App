import { Link } from "react-router-dom";
import type { IGig } from "../../types";
import { FaStar } from "react-icons/fa6";
import Buttons from "./buttons";

type Props = {
  item: IGig;
  buttons: boolean;
};

const Card = ({ item, buttons }: Props) => {
  return (
    <div>
      {buttons && <Buttons item={item} />}
      <Link
        to={`/detail/${item._id}`}
        className="rounded-md border border-gray-50 shadow-md hover:shadow-lg group hover:scale-[1.02] overflow-hidden"
      >
        <div className="w-full aspect-[16/9] rounded-md">
          <img
            src={item.coverImage}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-3 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <img
              src={item.user.photo}
              alt={item.user.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p>
              <span className="text-gray-600">Ad by </span>
              <span className="font-bold text-gray-900">{item.user.username}</span>
            </p>
          </div>

          <h3 className="text-gray-700 text-lg">{item.description}</h3>

          <div className="flex items-center gap-1">
            <FaStar className="text-gray-900" />
            <span className="font-bold">{item.starCount.toFixed(1)}</span>
            <span className="text-gray-600">({item.reviewCount} Reviews)</span>
          </div>

          <span className="font-bold text-gray-900">From €{item.package_price}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
