import React from "react";
import Image from "next/image";
import clientPromise from "../../database/mongoDB";
import { GetStaticPaths, GetStaticProps } from "next";
import { ObjectId } from "mongodb";

const CountryDetails = ({ country }) => {
  return (
    <div className=" flex items-center justify-center w-[100vw] h-[100vh] z-10 bg-red-300 flex-col">
      <h1 className=" font-bold text-3xl">{country.name} </h1>

      <div className=" relative flex items-center justify-center bg-black w-1/4 h-1/2">
        <Image
          src={country.largeImg}
          alt="Indonesia image"
          layout="fill"
          objectFit="cover"
          className="  "
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = params?.country_id as string;
  const collection = (await clientPromise)
    .db("Indie-proj")
    .collection("countries");
  const country = await collection.findOne({ _id: new ObjectId(id) });

  return { props: { country: JSON.parse(JSON.stringify(country)) } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collection = (await clientPromise)
    .db("Indie-proj")
    .collection("countries");
  const countries = await collection.find({}).toArray();

  const paths = countries.map((country) => ({
    params: { country_id: country._id.toString() },
  }));

  return { paths, fallback: false };
};
export default CountryDetails;
