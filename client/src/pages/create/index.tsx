import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import Input from "../../components/input";
import Select from "../../components/input/select";
import { categories, inputs } from "../../utils/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const Create = () => {
  const navigate = useNavigate();
  //tanstack/react-query kullanarak mutation işlemi yap
  const { isPending, mutate } = useMutation({
    mutationFn: (data: FormData) =>
      api.post("/gigs", data, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: (res) => {
      toast.success("Gig created successfully!");
      navigate(`/detail/${res.data.gig._id}`);
    },
  });

  //form gönderme işlemi
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //inputlardan gelen verileri al
    const data = new FormData(e.currentTarget);

    //api'e post isteği at
    mutate(data);
  };
  return (
    <div>
      <h1 className="font-bold text-3xl mb-5 text-gray-600">Create New Gig </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          {inputs.map((props, key) => (
            <Input key={key} {...props} />
          ))}
          <Select label="Category" options={categories} name="category" />
        </div>
        <div className="flex justify-center">
          <button
            disabled={isPending}
            className="mt-5 bg-green-500 disabled:opacity-70 text-white font-semibold px-6 py-2 w-1/4 rounded-md max-md:w-full  hover:bg-green-600 transition"
          >
            {isPending ? <Loader /> : "Create Gig"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
