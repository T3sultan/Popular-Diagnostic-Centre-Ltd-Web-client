import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AllService from "./AllService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);

  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
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
          <AllService
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          date={date}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
