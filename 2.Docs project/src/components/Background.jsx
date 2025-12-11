import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen z-[2] fixed">
        <div className=" selection:text-blue-700 flex justify-center w-full py-10 absolute top-[5%] text-gray-500 text-xl font-semibold">
          Documents
        </div>
        <h1 className=" selection:text-red-700 text-[13vw] leading-none tracking-wide absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-600">
          Docs<span className="text-green-800">.</span>
        </h1>
      </div>
    </>
  );
};

export default Background;
