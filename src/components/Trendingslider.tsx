import React, { useState, useRef, useEffect } from "react";
import TrendingsliderCard from "./Trendingslidercard";

const Slider = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
    }
  };

  const nextSlide = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
    }
  };

  useEffect(() => {
    if (boxRef.current) {
      // Perform the scrolling action here if needed
    }
  }, [boxRef]);

  return (
    <div className="w-screen h-auto bg-gray-100">

    <div className="mx-auto max-w-[1200px] px-[19px] pb-20">
      <div className="flex flex-row-reverse justify-between w-full items-center py-10">
        <h1 className="text-3xl font-semibold">Legjobb ajánlataink</h1>
        <div className="w-auto flex items-center justify-between">
          <button onClick={prevSlide} className="border py-2 px-5 border-none bg-black text-white text-2xl flex items-center justify-center text-center rounded-lg">
            &lt;
          </button>
          <button onClick={nextSlide} className="border py-2 px-5 border-none ml-5 bg-black text-white text-2xl flex items-center justify-center text-center rounded-lg">
            &gt;
          </button>
        </div>
      </div>
      <div
        ref={boxRef}
        id="asdasd"
        className="scrollBarCustom flex gap-[2.2rem] overflow-x-scroll overflow-y-hidden py-[1rem] px-[0.6rem] relative scroll-smooth"
      >
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
        <TrendingsliderCard />
      </div>
    </div>
    </div>

  );
};

export default Slider;
