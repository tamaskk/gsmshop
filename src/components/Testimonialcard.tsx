import React from "react";
import profile1 from "../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.webp";

const Testimonialcard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center rounded-xl shadow-2xl p-10 border-2 border-white hover:border-gray-300 transition-all duration-300">
      <img src={profile1} className="w-20 h-20 rounded-full gap-5" />
      <p className="font-bold text-2xl mb-10">Kiss Attila</p>
      <p className="italic text-md font-light px-10">
        "Nagyon gyors és kedves kiszolgálás! Bármikor bárhol ajánlom őket!"
      </p>
    </div>
  );
};

export default Testimonialcard;
