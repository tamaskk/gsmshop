import React from "react";
import Clock from "../assets/clock.svg";

const WhyChooseCard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5">
      <img src={Clock} className="w-[10rem]" />
      <h1 className="text-2xl font-semibold">Gyors szervíz</h1>
      <p className="px-5 lg:px-20 font-thin">
        Budapesten a leggyorsabb és a legprecízebb szervíz az nálunk
        találhatóak!
      </p>
    </div>
  );
};

export default WhyChooseCard;
