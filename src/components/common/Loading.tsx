import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <LoaderCircle className="w-10 h-10 animate-spin text-[#4640DE]" />
    </div>
  );
};

export default Loading;
