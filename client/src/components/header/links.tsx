import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link
        to="/login"
        className="transition text-[#62646a] hover:text-green-500"
      >
        Sign in
      </Link>
      <Link
        to="/register"
        className="transition border rounded-sm px-2 py-1 hover:bg-[#404145] hover:text-white "
      >
        Join
      </Link>
    </>
  );
};

export default Links;
