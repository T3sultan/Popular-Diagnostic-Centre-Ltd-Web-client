import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../../common/Button";

const Exceptional = () => {
  return (
    <div className="hero bg-white  min-h-fit">
      <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
        <div className="">
          <h1 className="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button title="Get Started" />
        </div>
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Exceptional;
