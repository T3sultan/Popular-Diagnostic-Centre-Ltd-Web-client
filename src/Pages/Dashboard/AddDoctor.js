import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then(res => res.json())
  );

  const imageStorageKey = "69d98bda9256f022e7b05d832a539c33";

  /**
   3 ways to store images
  
   1.third party storage  //free open public storage is ok for practice project
   2.your own storage in yur own server (file system)
   3.database mongodb
   YUP: to validate file :search yup file validation for react 

   */

  const onSubmit = async data => {
    // console.log("update data", data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          //send to your database
          fetch(`http://localhost:5000/doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }

        console.log("image result", result);
      });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <p className="text-red-400" role="alert">
                {errors.name.message}
              </p>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "error message", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <p className="text-red-400" role="alert">
                {errors.email.message}
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-400" role="alert">
                {errors.email.message}
              </p>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {services.map(service => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        {/* image filed */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: { value: true, message: "Image is required" },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <p className="text-red-400" role="alert">
                {errors.name.message}
              </p>
            )}
          </label>
        </div>

        {/* {errorMessage} */}
        <input
          className="btn w-full max-w-xs text-black"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
