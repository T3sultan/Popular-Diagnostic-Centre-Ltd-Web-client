import React from "react";

const Review = props => {
  const { name, description, img, location } = props.review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div className="card-body">
        <p className="my-4 text-gray-500 text-sm">{description}</p>
        <div className="flex items-center ">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
              <img className="" src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
