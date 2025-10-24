import { FaRegClock, FaArrowsRotate, FaArrowRight } from "react-icons/fa6";
import type { IGigDetail } from "../../types";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

type Props = {
  data: IGigDetail;
};

const PackageInfo = ({ data }: Props) => {
  return (
    <div className="h-fit flex flex-col gap-8 border shadow rounded-md p-5 mb-20 md:mt-35 md:sticky md:top-20 whitespace-nowrap">
      <div className="flex justify-between text-lg font-semibold">
        <h2>{data.package_title} </h2>
        <p>€{data.package_price.toLocaleString()}</p>
      </div>
      <p className="text-gray-600 whitespace-normal">{data.package_description}</p>
      <div className="flex  gap-10 text-gray-700">
        <p className="font-medium">
          <FaRegClock className="inline-block mb-1 mr-2 text-gray-600" />
          <span>{data.package_duration}</span>-day delivery
        </p>
        <p className="font-medium">
          <FaArrowsRotate className="inline-block mb-1 mr-2 text-gray-600" />
          <span>{data.package_revisions}</span> revisions
        </p>
      </div>
      <ul>
        {data.package_features.map((feature, index) => (
          <li key={index} className="relative pl-6 mb-3 text-gray-500">
            <ImCheckmark className="absolute left-0 top-1 text-gray-900" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="flex items-center bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
        <span className="flex-1">Continue</span>
        <FaArrowRight className="mr-2" />
      </button>
      <button className="flex items-center justify-center border text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
        <span>Contact us</span>
        <MdKeyboardArrowDown size={25} />
      </button>
    </div>
  );
};

export default PackageInfo;
