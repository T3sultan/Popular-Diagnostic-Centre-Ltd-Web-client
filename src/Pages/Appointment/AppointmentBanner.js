import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = (
      <p className="text-accent font-bold">
        You Picked <span className="text-secondary">{format(date, "PP")}</span>
      </p>
    );
  }
  return (
    <div className="hero min-h-screen bg-white -mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-6">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
