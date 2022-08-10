import React from "react";
import { SmallCardData } from "../components/SmallCardData";
import CountryImages from "../components/CountryImages";
import HeroCountry from "../components/HeroCountry";
import Navbar from "../components/Navbar";

const Countries = () => {
  return (
    <div>
      <Navbar />
      <HeroCountry />

      <section>
        <CountryImages bigSlide={SmallCardData} />
      </section>
    </div>
  );
};

export default Countries;
