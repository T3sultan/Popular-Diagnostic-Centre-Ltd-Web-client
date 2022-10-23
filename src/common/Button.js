import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="btn border-white text-white  uppercase font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {title}
      </button>
    </div>
  );
};

export default Button;
