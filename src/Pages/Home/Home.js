import React from "react";
import Banner from "./Banner";
import Exceptional from "./Exceptional";
import Information from "./Information";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Information />
      <Services />
      <Exceptional />
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
