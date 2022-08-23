import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SmallCard from "../components/SmallCard";
import { SmallCardData } from "../components/SmallCardData";
import NewSmallCard from "../components/NewSmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GetStaticProps } from "next";
import clientPromise from "../database/mongoDB";

export default function Home({ exploreData, cardsData, countries }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("useEffect hook inView =", inView);
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ scale: 0 });
    }
  }, [inView]);
  return (
    <div>
      <Head>
        <title>Shh..</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Hero />

      <main className=" max-w-7xl mx-auto px-8 sm:px-16 z-10">
        <section className="pt-6 ">
          <h2 className=" text-4xl font-semibold pb-5">Wow</h2>
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {countries?.map((country, key) => {
              return <NewSmallCard country={country} key={country._id} />;
            })}
          </div>
        </section>

        <section ref={ref}>
          <h2 className=" text-4xl font-semibold py-8"> Discover</h2>
          <motion.div
            animate={animation}
            className=" flex space-x-3 overflow-scroll scrollbar-hide p-3 scroll-smooth "
          >
            {countries?.map((country, key) => (
              <MediumCard country={country} key={key} />
            ))}
          </motion.div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const collection = (await clientPromise)
    .db("Indie-proj")
    .collection("countries");
  const countries = await collection.find({}).sort({ order: -1 }).toArray();

  return {
    props: { countries: JSON.parse(JSON.stringify(countries)) },
  };
};
