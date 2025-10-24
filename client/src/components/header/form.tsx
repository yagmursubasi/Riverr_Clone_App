import type { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = (form.elements[0] as HTMLInputElement).value.trim();
    if (!text) return;

    // Hero’dakiyle aynı yönlendirme:
    navigate(`/search?query=${text}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex border border-gray-300 rounded overflow-hidden max-w-[500px]"
    >
      <input
        type="text"
        className="w-full h-full px-3 outline-none"
        placeholder="Search for any service..."
        defaultValue={params.get("query") || undefined}
      />
      <button className="bg-[#404145] hover:bg-[#57585d] p-2 text-white text-xl max-sm:hidden cursor-pointer">
        <IoSearch />
      </button>
    </form>
  );
};

export default Form;
