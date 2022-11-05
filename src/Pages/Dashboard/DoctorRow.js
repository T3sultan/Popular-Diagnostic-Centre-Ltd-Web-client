import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, img, email, specialty } = doctor;

  const handleDelete = email => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log("delete data", data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          delete
        </label>
        {/* <button
          onClick={() => handleDelete(email)}
          className="btn btn-xs btn-error"
        >
          delete
        </button> */}
      </td>
    </tr>
  );
};

export default DoctorRow;
