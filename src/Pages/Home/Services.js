import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import teeth from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "A cavity filling is when the dentist fills the opening in your tooth with some kind of material.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Best Teeth Whitening At LASER DENTAL In Uttara. We Utilise World's Most Advanced Teeth Whitening System",

      img: teeth,
    },
  ];
  return (
    <div className="my-12 px-10">
      <div className="text-center">
        <h3 className="text-secondary font-bold uppercase">Our Services</h3>
        <h2 className="text-2xl font-bold">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 ">
        {services.map(service => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
