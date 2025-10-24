import type { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = (form.elements[0] as HTMLInputElement).value;

    navigate(`/search?query=${text}`);
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-[#0c3811] to-[#288549]  max-md:m-[-20px] h-[40vh] text-white px-6 py-5 md:px-12 md:py-10  md:rounded-md flex flex-col justify-center items-center ">
        <div className="max-w-[600px] ">
          <h1 className="text-5xl text-center font-thin ">
            Our freelancers <br /> will take it from here
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-md w-full flex gap-5 mt-10"
          >
            <input
              type="text"
              placeholder="Search services..."
              className="flex-1 p-2 text-gray-800 focus:outline-none"
            />
            <button className="m-1  bg-[#0c3811] hover:bg-[#288549] text-white p-[9px] rounded-md transition  ">
              <IoSearch size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
