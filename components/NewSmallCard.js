import React from "react";
import { SmallCardData } from "./SmallCardData";
import Image from "next/image";

const NewSmallCard = (slides) => {
  return (
    <div
      id="gallery"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {SmallCardData.map((slide, index) => {
        return (
          <div className="bg-white flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className=" relative h-16 w-16">
              <Image
                src={slide.image}
                alt="/"
                layout="fill"
                objectFit="cover"
                className=" rounded-lg"
              />
            </div>
            <div>
              <h2> {slide.country} </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewSmallCard;
