import Image from "next/image";
import React from "react";
import { SmallCardData } from "./SmallCardData";

const CountryImages = (bigSlide) => {
  return (
    <div className="  gap-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
      {SmallCardData.map((slideImage, key) => {
        return (
          <div key={key} className=" relative h-[300px] w-[100%]   ">
            <Image
              src={slideImage.image}
              alt="countries"
              layout="fill"
              objectFit="cover"
              className=" cursor-pointer "
            />
            <div className="absolute bg-black/40 top-0 right-0 bottom-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer">
              <h1 className=" text-white text-4xl ">{slideImage.country}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryImages;
