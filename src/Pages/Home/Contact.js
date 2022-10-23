import React from "react";
import bg from "../../assets/images/appointment.png";
import Button from "../../common/Button";

const Contact = () => {
  return (
    <div className="px-10 my-4">
      <section
        style={{
          background: `url(${bg})`,
        }}
      >
        <div className=" min-h-full ">
          <div className="hero-content justify-center items-center text-center ">
            <div className="max-w-md">
              <h1 className="text-2xl text-secondary ">Connect us</h1>
              <h3 className="text-2xl text-white ">Stay connected with us</h3>

              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered input-md w-full max-w-xs mt-8"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered input-md w-full max-w-xs mt-4"
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className="input mt-4  input-bordered input-lg w-full max-w-xs"
              />

              <div className="mt-4">
                <Button title="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
