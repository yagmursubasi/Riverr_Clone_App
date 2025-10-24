import type { IGig } from "../../types";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Rating from "../../components/rating";

type Props = {
  gig: IGig;
};

const GigInfo = ({ gig }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-5 mt-10 ">
      <h1 className=" text-3xl font-semibold max-md:text-2xl mb-4 ">{gig.description}</h1>
      <div className="flex items-center gap-3">
        <img src={gig.user.photo} alt={gig.user.username} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <h4 className=" font-medium">{gig.user.username}</h4>
          <Rating rating={gig.starCount || 0} reviews={gig.reviewCount || 0} />
        </div>
      </div>
      <Splide options={{ perPage: 1, pagination: true, arrows: true, gap: "1rem" }}>
        {gig.images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image}
              alt={`Gig Image ${index + 1}`}
              className="w-full h-[30vh] object-contain rounded-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            />
          </SplideSlide>
        ))}
      </Splide>
      <div>
        <h2 className=" text-2xl text-gray-800 font-semibold mb-4 mt-8 ">About This Gig</h2>
        <p className=" text-gray-600 leading-7">{gig.package_description}</p>
      </div>
    </div>
  );
};

export default GigInfo;
