import { useState, useEffect } from "react";
import Image from "next/image";
import clientPromise from "../../database/mongoDB";
import { GetStaticPaths, GetStaticProps } from "next";
import { ObjectId } from "mongodb";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-scroll/modules";

const CountryDetails = ({ country }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]  ">
        <Image
          src={country.hero}
          layout="fill"
          objectFit="cover"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
        <div className=" absolute  top-0 right-0 bottom-0 left-0 flex items-center  ">
          <h1 className=" text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl  ml-10">
            {" "}
            {country.name}
          </h1>
        </div>
      </section>
      <section className="  bg-black flex items-center flex-col justify-evenly h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <p className=" text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
          See what {country.name} has to offer!
        </p>
        <ul className=" flex-col sm:flex-row h-[200px] w-full text-white flex justify-evenly items-center   text-xl sm:text-3xl md:text-4xl lg:text-5xl  ">
          <li className=" flex">
            {" "}
            Where To <h1 className=" text-red-300 ml-3"> Go</h1>{" "}
          </li>
          <li className=" flex">
            {" "}
            Where To <h1 className=" text-red-300 ml-3">Stay</h1>{" "}
          </li>
          <li className=" flex">
            {" "}
            Where To <h1 className=" text-red-300 ml-3">Eat</h1>{" "}
          </li>
        </ul>
      </section>
      <section className=" h-[200px] md:h-[300px] lg:[400px] grid grid-cols-3 gap-1 bg-black ">
        <Link to="div1" spy={true} smooth={true} offset={-100} duration={500}>
          <div className=" relative h-full w-full cursor-pointer ">
            <Image
              src={country.categoryImg1}
              alt="Indonesia image"
              layout="fill"
              objectFit="cover"
              className="  "
            />
            <div className=" absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 hover:bg-black/0 bg-black/40">
              <h1 className=" text-white capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {" "}
                go{" "}
              </h1>
            </div>
          </div>
        </Link>
        <Link to="div2" spy={true} smooth={true} offset={-100} duration={500}>
          <div className=" relative h-full w-full cursor-pointer ">
            <Image
              src={country.categoryImg2}
              alt="Indonesia image"
              layout="fill"
              objectFit="cover"
              className=" "
            />
            <div className=" absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 hover:bg-black/0 bg-black/40">
              <h1 className=" text-white capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {" "}
                stay{" "}
              </h1>
            </div>
          </div>
        </Link>
        <Link to="div3" spy={true} smooth={true} offset={-100} duration={500}>
          <div className=" relative h-full w-full cursor-pointer ">
            <Image
              src={country.categoryImg3}
              alt="Indonesia image"
              layout="fill"
              objectFit="cover"
              className="  "
            />
            <div className=" absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 hover:bg-black/0 bg-black/40">
              <h1 className=" text-white capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {" "}
                eat{" "}
              </h1>
            </div>
          </div>
        </Link>
      </section>
      <div id="div1" className=" w-[100vw] h-[100vh] bg-red-400"></div>
      <div id="div2" className=" w-[100vw] h-[100vh] bg-green-400"></div>
      <div id="div3" className=" w-[100vw] h-[100vh] bg-blue-400"></div>
      <Footer />
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
