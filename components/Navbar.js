import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md: px-10">
      {/* left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        {/* <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
        <h1 className=" text-5xl text-red-400"> Shh.. </h1>
      </div>

      {/* middle */}
      <div className=" flex items-cente md:border-2 rounded-full py-2 md: shadow-sm mr-5">
        <input
          className=" pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className=" hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className=" flex items-center space-x-4 justify-end text-gray-400">
        <p className=" cursor-pointer hidden md:inline text-sm">
          Become a host
        </p>
        <GlobeAltIcon className=" h-6 cursor-pointer" />
        <div className=" flex items-center border-2 rounded-full p-2 md:shadow-sm space-x-2">
          <MenuIcon className=" h-6 cursor-pointer" />
          <UserCircleIcon className=" h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
