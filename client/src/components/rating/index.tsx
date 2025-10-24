import { FaStar } from "react-icons/fa6";

type Props = {
  rating: number;
  reviews: number;
};

const Rating = ({ rating, reviews }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-1 ">
        <FaStar />
        <span className="text-gray-700 font-semibold">{rating}</span>
        <span className="text-sm text-gray-500 underline">({reviews} reviews)</span>
      </div>
    </div>
  );
};

export default Rating;
