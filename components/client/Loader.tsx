import Image from "next/image";
import React from "react";
import loadImage from "./svg/load.svg";
export default function Loader() {
  return (
    <div className="select-none flex justify-center items-center">
      <div>
        <Image src={loadImage} alt="loader" width={80} height={80} draggable={false} />
        <h1 className="-translate-x-2 font-semibold text-lg">Loading...</h1>
      </div>
    </div>
  );
}
