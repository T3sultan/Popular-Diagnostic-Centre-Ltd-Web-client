import React from "react";
import doctor from "../../assets/tinified/doctor4.png";
import bg from "../../assets/images/appointment.png";
import Button from "../../common/Button";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
      }}
      className="flex justify-center items-center mt-20"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-75px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold  text-primary my-2">Appointment</h3>
        <h2 className="text-2xl my-4 text-white">Make an Appointment Today</h2>
        <p className="text-gray-400 my-4">
          Ask for an appointment of the doctor quickly with <br />
          almost a single click. We take care of the rest. <br />
          Visit the doctor, take the service based on your <br />
          appointment. Get back to good health and happiness.
        </p>
        <Button className="" title="Get Started" />
      </div>
    </section>
  );
};

export default MakeAppointment;
