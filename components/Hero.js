import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Domi from "../assets/images/domi-chung.jpg";
import Shh from "../assets/images/shh2.jpg";

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
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        src={Shh}
        alt="Hero image"
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute flex flex-col space-y-5 top-0 left-0 right-0 bottom-0 bg-black/20 justify-end md:justify-center items-start p-5  ">
        <h3 className=" text-xg sm:text-2xl md:text-5xl text-white capitalize ">
          {" "}
          Get inspired!
        </h3>

        <p className=" hidden md:block text-base md:text-2xl text-white  w-[100vw]">
          A carfully pieced together insporational travel app{" "}
          <span className=" text-red-300">
            {" "}
            from my own personal experiences
          </span>
        </p>

        <p className=" text-sm sm:text-lg text-white ">
          Not sure where to look? Perfect.
        </p>

        {/* button on Hero should link to Countries page */}
        <Link href="/Countries" passHref>
          <button
            className=" text-purple-500 bg-white px-10 py-4 shadow-lg
          rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-200"
          >
            I'm Flexible
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
