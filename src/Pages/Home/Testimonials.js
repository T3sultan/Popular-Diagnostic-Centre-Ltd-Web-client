import React from "react";
import quote from "../../assets/icons/quote.svg";
import doctor1 from "../../assets/tinified/Dr.-Md.-Shayedat-Ullah.jpg";
import doctor2 from "../../assets/tinified/Dr.-M.S.-Alam.jpg";
import doctor3 from "../../assets/tinified/Dr.-Tamanna-Ahmed.jpg";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Dr. Md. Shayedat Ullah",
      img: doctor1,
      description:
        "MBBS (Dhaka), BCS (Health), MACP (USA), MD (Endocrinology & Metabolism) (BSMMU) Diabetes, Thyroid & Hormone & Metabolic Diseases Specialist Sheikh Hasina National Institute of Burn & Plastic Surgery",
      location: "Dhaka Medical",
    },
    {
      _id: 2,
      name: "Dr. Md. Ibrahim Khalil",
      img: doctor2,
      description:
        "MBBS, FCPS (Surgery), FACS (USA), FRCS (UK), Fellow- Colorectal Surgery ( Japan) Colorectal (Piles, Fistula, Fissure, Rectum Cancer) Specialist Surgeon Dhaka Medical College & Hospital",
      location: "Dhaka Medical",
    },
    {
      _id: 3,
      name: "Dr.Tamanna Ahmed",
      img: doctor3,
      description:
        "MBBS, MS (Plastic Surgery) Plastic, Aesthetic, Breast, Hand, Burn & Cosmetic Surgery Specialist Sheikh Hasina National Institute of Burn & Plastic Surgery",

      location: "Dhaka Medical",
    },
  ];
  return (
    <section className="my-20 px-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2>What our Patients say</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {reviews.map(review => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
