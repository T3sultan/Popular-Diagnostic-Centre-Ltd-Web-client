import React from "react";

const InformationCard = ({ img, title, other, bg }) => {
  return (
    <div className={`card lg:card-side  shadow-xl ${bg}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{other}</p>
      </div>
    </div>
  );
};

export default InformationCard;
