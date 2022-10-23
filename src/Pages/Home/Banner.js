import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import Button from "../../common/Button";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "450px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "8px",
      }}
      className="hero bg-white -mt-20 min-h-fit"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
