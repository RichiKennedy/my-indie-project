import Image from "next/image";
import { React, useState, useEffect } from "react";
import Map from "../assets/images/map.jpg";

const HeroCountry = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-fixed z-0">
      <Image
        src={Map}
        layout="fill"
        objectFit="cover "
        style={{ transform: `translateY(${offsetY * 0.7}px)` }}
      />
      <div className=" absolute top-0 right-0 bottom-0 left-0 bg-black/60 flex justify-center items-center pl-5 flex-col ">
        <h2 className=" text-white text-8xl text-start  "> Heading </h2>
        <h4 className=" text-red-300 text-2xl">
          {" "}
          Select a country that tickles your fancy{" "}
        </h4>
      </div>
    </div>
  );
};

export default HeroCountry;
