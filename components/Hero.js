import React from "react";
import Image from "next/image";
import HeroImg from "../assets/images/shh2.jpg";
import Aeroplane from "../assets/images/aeroplane.jpg";

const Hero = () => {
  return (
    <div className=" relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]  ">
      <Image
        className=" opacity-60"
        src={HeroImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute top-1/2 w-full text-center">
        <p className=" text-sm sm:text-lg  ">
          Not sure where to look? Perfect.
        </p>
        <button
          className=" text-purple-500 bg-white px-10 py-4 shadow-lg 
        rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-200"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
