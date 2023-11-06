import React, { useState } from "react";
import allItems from "../utils/Database";
import useAppContext from "../utils/Maincontext";
import Trendingslider from "../components/Trendingslider";

const Productpage = () => {
  const [imgSrc, setImgSrc] = useState<string>();

  const { id, addToCart } = useAppContext();

  const filteredItems = allItems.filter((item) => item.id === id);

      function formatNumberWithDots(number: number) {
        // Format the number with dots, e.g., 1,000,000
        const formattedNumber = number.toLocaleString();
        return <span>{formattedNumber}</span>;
      }

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-[19px] py-20">
        {filteredItems.map((item) => (
          <>
            <div className="flex flex-col lg:flex-row gap-10 h-full">
              <div className="w-full h-auto flex flex-col items-center justify-start px-20 mb-20 lg:mb-0">
                <img
                  src={imgSrc ? imgSrc : item.mainImg}
                  className="w-full rounded-lg"
                  alt={"It is the main picture"}
                />

                <div className="grid grid-cols-3 items-center gap-8 w-full mt-10 -mb-14">
                  <img
                    src={item.mainImg}
                    onMouseOver={() => setImgSrc(item.mainImg)}
                    className="border border-white hover:border-blue-400 rounded-md"
                  />
                  <img
                    src={item.extraImg[0]}
                    onMouseOver={() => setImgSrc(item.extraImg[0])}
                    className="border border-white hover:border-blue-400 rounded-md"
                  />
                  <img
                    src={item.extraImg[1]}
                    onMouseOver={() => setImgSrc(item.extraImg[1])}
                    className="border border-white hover:border-blue-400 rounded-md"
                  />
                </div>
              </div>
              <div className="bg-gray-300 w-full h-fit lg:px-20 flex flex-col items-center justify-end max-w-fit p-10 lg:py-10 gap-y-8 rounded-md shadow-lg">
                <p className="text-4xl font-medium">{item.name}</p>

                <div className="w-full flex flex-row items-center justify-evenly pb-2 border-b-2 border-black">
                  <p className="text-2xl">Márka</p>
                  <p className="text-2xl font-bold uppercase">{item.brand}</p>
                </div>

                <div className="w-full flex flex-row items-center justify-evenly pb-2 border-b-2 border-black">
                  <p className="text-2xl">Szín</p>
                  <p className="text-2xl font-bold uppercase">
                    {item.color === "red"
                      ? "Piros"
                      : item.color === "black"
                      ? "Fekete"
                      : item.color === "white"
                      ? "Fehér"
                      : item.color === "gold"
                      ? "Arany"
                      : item.color}
                  </p>
                </div>

                <div className="w-full flex flex-row items-center justify-evenly pb-2 border-b-2 border-black">
                  <p className="text-2xl">Tárhely</p>
                  <p className="text-2xl font-bold uppercase">
                    {item.storage} GB
                  </p>
                </div>

                <p className="text-md font-medium text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum ea iste voluptas amet ipsa fugit impedit libero dicta
                  in. Error ex corrupti accusantium doloremque dolores odit
                  nesciunt, fuga sequi incidunt?
                </p>

                <h1 className="text-2xl -mb-4">Ár</h1>
                <h1 className="text-2xl font-bold">{formatNumberWithDots(item.price)} Ft</h1>
                <div className="grid grid-cols-2 gap-5 w-full">
                  <button onClick={() => addToCart(item.id, 1, item.price, item.price)} className="rounded-md text-md bg-transparent border-2 border-black text-black uppercase py-3 lg:py-4 px-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all">
                    Add to Cart
                  </button>
                  <button className="rounded-md text-md border-2 border-red-600 bg-red-600 text-white uppercase py-3 lg:py-4 font-semibold hover:bg-transparent hover:text-red-600 duration-300 transition-all">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 px-5 lg:px-0">
          <div className="rounded-md shadow-lg bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <h1 className="font-bold text-2xl">Garancia:</h1>
            <p className="text-lg">2 év garancia blokkal jótálással</p>
          </div>
          <div className="rounded-md shadow-lg bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <h1 className="font-bold text-2xl">Termék méretei:</h1>
            <p className="text-lg">158x140cm 0.3kg</p>
          </div>
          <div className="rounded-md shadow-lg bg-gray-300 p-4 text-black text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <h1 className="font-bold text-2xl">Van raktáron?</h1>
            <p className="text-lg">Van</p>
          </div>
        </div>
      </section>
      <Trendingslider />
    </>
  );
};

export default Productpage;
