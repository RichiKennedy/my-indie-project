import { React, useState, useEffect } from "react";
import Image from "next/image";
import HeroImg from "../assets/images/shh2.jpg";
import Aeroplane from "../assets/images/aeroplane.jpg";
import Coral from "../assets/images/coral.jpg";
import Navbar from "./Navbar";
import Domi from "../assets/images/domi-chung.jpg";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="  relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-fixed z-0 ">
      <Image
        className="  "
        style={{ transform: `translateY(${offsetY * 0.7}px)` }}
        src={Domi}
        alt="Hero image"
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute flex flex-col space-y-5 top-0 left-0 right-0 bottom-0 bg-black/20 justify-end md:justify-center items-start p-5  ">
        <h3 className=" text-lg sm:text-xl md:text-3xl text-white ">
          {" "}
          Discover the local secrets on your next travel <br /> Before they
          install an instagram swing!
        </h3>

        <p className=" hidden md:block text-base md:text-2xl text-white mb-10">
          {" "}
          A carfully, pieced together insporational travel app from my own
          personal experiences{" "}
        </p>
        <p className=" text-sm sm:text-lg text-white ">
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
