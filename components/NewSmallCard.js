import React from "react";

import Image from "next/image";
import Link from "next/link";

const NewSmallCard = ({ country }) => {
  return (
    <Link href={"/country/" + country._id} key={country._id}>
      <div className="  shadow-md flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className=" relative h-16 w-16">
          <Image
            src={country.smallImg}
            alt="/"
            layout="fill"
            objectFit="cover"
            className=" rounded-lg"
          />
        </div>
        <div>
          <h1> {country.name} </h1>
        </div>
      </div>
    </Link>
  );
};

export default NewSmallCard;
