import React from "react";
import Banner from "./Banner";
import Exceptional from "./Exceptional";
import Information from "./Information";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Information />
      <Services />
      <Exceptional />
    </div>
  );
};

export default Home;
