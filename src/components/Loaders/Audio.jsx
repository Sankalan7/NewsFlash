import React from "react";
import { Audio } from "react-loader-spinner";

const AudioLoader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]">
      <Audio color="white" height={550} width={80} />
    </div>
  );
};

export default AudioLoader;
