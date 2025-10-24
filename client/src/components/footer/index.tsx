import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPinterest,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t h-[100px] border-gray-300 px-6 py-6 flex flex-col md:flex-row  justify-between text-gray-700 text-sm">
      <div className="flex items-center gap-2">
        <img src="/fiverr.png" alt="Fiverr Logo" className="h-5" />
        <span>&copy; Fiverr International Ltd. 2025</span>
      </div>

      {/* Sağ taraf */}
      <div className="flex items-center gap-4 mt-3 md:mt-0 text-gray-600">
        <FaTiktok className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
        <FaFacebook className="icon" />
        <FaPinterest className="icon" />
        <FaXTwitter className="icon" />

        <span className="text-gray-400">•</span>

        <div className="flex items-center gap-1 icon">
          <FaGlobe />
          <span>English</span>
        </div>

        <div className="flex items-center gap-1 icon">
          <FaEuroSign />
          <span>EUR</span>
        </div>

        <button className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-[10px] hover:bg-gray-100 transition">
          <FaXTwitter size={10} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
