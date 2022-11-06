import React from "react";

const AllService = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center  text-secondary">{name}</h2>
        <p className="justify-center text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-300">
              No Slot Available.Try another day
            </span>
          )}
        </p>
        <p className="justify-center text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="justify-center font-bold text-center">
          <small>Price: ${price}</small>{" "}
        </p>
        <div className="card-actions justify-center">
          {/* <button className=""></button> */}
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-sm btn-secondary
             text-white uppercase  bg-gradient-to-r
              from-indigo-500 via-purple-500 to-pink-500"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AllService;
