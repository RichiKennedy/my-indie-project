import React from "react";
import Image from "next/image";

const MediumCard = ({ country }) => {
  return (
    <div className=" cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className=" relative h-80 w-80">
        <Image src={country.largeImg} layout="fill" className=" rounded-xl" />
      </div>
      <h3 className=" text-2xl mt-3">{country.name}</h3>
    </div>
  );
};

export default MediumCard;
