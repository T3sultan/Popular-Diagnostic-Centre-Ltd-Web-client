import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AllService from "./AllService";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="px-10 mt-4">
      <h2 className="text-xl text-primary text-center">
        Available Appointment on {format(date, "PP")}{" "}
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map(service => (
          <AllService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
