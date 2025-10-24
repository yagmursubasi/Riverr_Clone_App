import { items } from "../../utils/constants";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Info = () => {
  return (
    <section className="my-10 bg-green-100 bg-opacity-70 rounded-md p-4 sm:p-6">
      <h1 className="text-4xl">
        <span className="font-extrabold tracking-tighter">fıverr</span>
        <span className="ml-1">pro.</span>
      </h1>
      <p className="text-3xl font-light my-6 sm:my-8">
        The <span className="text-green-500">premium</span> freelance solution
        for businesses
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((i, key) => (
          <div key={key}>
            <h5 className="font-semibold flex items-center gap-3">
              <BsFillPatchCheckFill size={20} />
              {i.title}
            </h5>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6 sm:my-8 ">
        <button className=" bg-[#404145] hover:bg-[#57585d]  text-white px-4 py-2 rounded-md  ">
          Try Now
        </button>
      </div>
    </section>
  );
};

export default Info;
