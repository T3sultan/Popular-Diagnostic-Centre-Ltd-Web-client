import React from "react";

const AllService = ({ service }) => {
  const { name, slots } = service;
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
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            className="btn btn-secondary text-white uppercase"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllService;
