type ErrorInfo = {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
};

type Props = {
  info?: ErrorInfo;
  refetch?: () => void;
};

const Error = ({ info, refetch }: Props) => {
  return info?.response?.data?.message === "Hiç hizmet bulunamadı" ? (
    <div className="flex flex-col gap-4 items-center justify-center py-10 max-w-md mx-auto bg-amber-50 border border-amber-200 text-amber-800 rounded-md my-20">
      No gigs found.
    </div>
  ) : (
    <div className="flex flex-col gap-4 items-center justify-center py-10 max-w-md mx-auto bg-amber-50 border border-amber-200 text-amber-800 rounded-md my-20">
      {info?.message || "An unexpected error occurred."}

      <p>Please try again later.</p>
      {refetch && (
        <button
          onClick={refetch}
          className="border border-gray-300 py-1 px-3 rounded-md bg-gray-200 hover:bg-gray-500/20 transition cursor-pointer"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
