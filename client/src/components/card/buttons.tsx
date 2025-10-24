import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IGig } from "../../types";
import api from "../../api";

type Props = {
  item: IGig;
};

const Buttons = ({ item }: Props) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => api.delete(`/gigs/${item._id} `),

    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["my-gigs"] });
    },
  });
  return (
    <div className="flex justify-end px-2">
      <button
        disabled={isPending}
        onClick={() => mutate()}
        className="btns bg-red-400 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
