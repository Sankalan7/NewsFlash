import React from "react";
import { Dna } from "react-loader-spinner";

const DNA = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-900">
      <Dna height={550} width={80} />
    </div>
  );
};

export default DNA;
