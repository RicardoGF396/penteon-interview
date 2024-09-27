import Image from "next/image";
import { RefetchOptions, RefetchQueryFilters } from "react-query";

type ErrorFetchingProps = {
  refetch: (options?: RefetchOptions & RefetchQueryFilters) => Promise<any>;
};

export default function ErrorFetching({ refetch }: ErrorFetchingProps) {
  return (
    <div className="flex flex-1 justify-center items-center flex-col h-screen gap-y-3">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chromium_T-Rex-error-offline.svg/2048px-Chromium_T-Rex-error-offline.svg.png"
        alt="error"
        width={64}
        height={64}
      />
      <p className="text-slate-700 font-medium">Error trying to get data</p>
      <button
        onClick={() => refetch()}
        type="button"
        className="rounded-md bg-slate-900 px-4 py-1 text-sm text-white font-semibold"
      >
        Try again
      </button>
    </div>
  );
}
