import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import type { IGig } from "../../types";

type Props = {
  gig: IGig;
};

const BreadCrumb = ({ gig }: Props) => {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link to="/">
          <AiOutlineHome />
        </Link>
        <span>/</span>
        <Link to={`/search?category=${encodeURIComponent(gig.category)}`}>
          <span className="hover:underline">{gig.category}</span>
        </Link>
        <span>/</span>
        <span>{gig.title}</span>
      </p>
    </div>
  );
};

export default BreadCrumb;
