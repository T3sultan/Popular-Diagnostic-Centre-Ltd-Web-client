import React from "react";
import InformationCard from "../../common/InformationCard";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";

const Information = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8 px-10">
      <InformationCard
        other="Started time 10:00 - 1:00"
        title="Opening Hours"
        img={clock}
        bg="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
      <InformationCard
        other="Salimgong Hospital"
        title="Visit our location"
        img={marker}
        bg="bg-gradient-to-r from-cyan-500 to-blue-500"
      />
      <InformationCard
        other="+00185445453"
        title="Contact us now"
        img={phone}
        bg="bg-gradient-to-r from-indigo-500"
      />
    </div>
  );
};

export default Information;
