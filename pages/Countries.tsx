import React, { useState, useEffect } from "react";
import { SmallCardData } from "../components/SmallCardData";
import CountryImages from "../components/CountryImages";
import HeroCountry from "../components/HeroCountry";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Countries = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("useEffect hook inView =", inView);
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ scale: 0.5 });
    }
  }, [inView]);
  return (
    <div className=" bg-gray-900 text-pink-100">
      <Navbar />
      <HeroCountry />
      <section className=" grid grid-cols-3 justify-center h-[200px] md:h-[300px] lg:h-[400px] p-5 gap-5 ">
        <div className="relative h-full w-full  ">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1527731149372-fae504a1185f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            layout="fill"
            objectFit="cover"
            className="relative  "
          />
          <h1 className=" cursor-pointer hover:scale-105 ease-out duration-150    hover:opacity-0 absolute bg-black/40 top-0 right-0 bottom-0 left-0  flex items-center justify-center">
            {" "}
            Bali surf spots
          </h1>
        </div>
        <div className="relative h-full w-full">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1534470397273-a1c104354754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
            layout="fill"
            objectFit="cover"
            className=" hover:scale-105 ease-out duration-150 cursor-pointer "
          />
        </div>
        <div className="relative h-full w-full">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            layout="fill"
            objectFit="cover"
            className=" hover:scale-105 ease-out duration-150 cursor-pointer "
          />
        </div>
      </section>
      <ul
        ref={ref}
        className=" h-[60vh] lg:h-[90vh] flex flex-col   justify-between items-center px-15 py-20 uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <motion.li className=" text-bold text-center " animate={animation}>
          {" "}
          for the{" "}
        </motion.li>
        <motion.li
          className=" text-center  h-[30vh] w-[90vw] flex items-center justify-between "
          animate={animation}
        >
          <div></div>
          <p className=" text-xs md:text-base xl:text-xl text-start w-[35vw]  lowercase">
            {" "}
            Select a country below and be mind blown by the many places and
            adventures each country offers. Each selection has been first-hand
            experperienced and without a doubt will point you in the right
            direction.
          </p>
          curious
        </motion.li>
        <motion.li className=" text-end " animate={animation}>
          {" "}
          traveller
        </motion.li>
      </ul>

      <section>
        <CountryImages bigSlide={SmallCardData} />
      </section>
    </div>
  );
};

export default Countries;
