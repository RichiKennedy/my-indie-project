import { React, useEffect, useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

const Navbar = () => {
  const [color, setColor] = useState("rgba(0, 0, 0, 0.3)");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 5) {
        setColor("white");
        setTextColor("#000000");
      } else {
        setColor("rgba(0, 0, 0, 0.3)");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className=" fixed w-[100vw] top-0 z-20 grid grid-cols-3 ease-in duration-75 bg-black/30 shadow-md p-5 md: px-10"
    >
      {/* left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        {/* <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
        <Link href="/">
          <h1 className=" text-5xl text-red-400"> Shh.. </h1>
        </Link>
      </div>

      {/* middle */}
      <div className="  flex items-cente md:border-2 rounded-full py-2 md: shadow-sm mr-5">
        <input
          style={{ color: `${textColor}` }}
          className=" pl-5 bg-transparent outline-none flex-grow text-sm text-white placeholder-white"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className=" hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className=" flex items-center space-x-4 justify-end text-gray-400">
        <p
          style={{ color: `${textColor}` }}
          className=" cursor-pointer hidden md:inline text-sm"
        >
          Become a host
        </p>

        <GlobeAltIcon
          style={{ color: `${textColor}` }}
          className=" h-6 cursor-pointer"
        />

        <div className=" flex items-center border-2 rounded-full p-2 md:shadow-sm space-x-2">
          <MenuIcon
            style={{ color: `${textColor}` }}
            className=" h-6 cursor-pointer"
          />
          <UserCircleIcon
            style={{ color: `${textColor}` }}
            className=" h-6 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
