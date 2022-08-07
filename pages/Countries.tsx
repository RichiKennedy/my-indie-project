import React from "react";
import { SmallCardData } from "../components/SmallCardData";
import CountryImages from "../components/CountryImages";
import HeroCountry from "../components/HeroCountry";

const Countries = () => {
  return (
    <div>
      <HeroCountry />
      <section>
        <CountryImages bigSlide={SmallCardData} />
      </section>
    </div>
  );
};

export default Countries;
