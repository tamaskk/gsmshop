import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-[1200px] px-[19px] py-20 grid grid-cols-1 lg:grid-cols-3 flex-row items-center justify-between gap-y-14">
        <div className="flex flex-col items-center justify-start gap-y-5">
          <div className="w-10 h-3 bg-white"></div>
          <h1>Minden jog fenttartva hozzánk</h1>
        </div>
        <div className="flex flex-col items-center justify-start gap-y-5">

            <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">ÁSZF</h1>
            <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Egyéb nyilatkozat</h1>
            <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Egyéb nyilatkozat</h1>
            <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Egyéb nyilatkozat</h1>
        </div>
        <div className="flex flex-col items-center justify-start gap-y-5">

        <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Footer menüpont 1</h1>
        <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Footer menüpont 2</h1>
        <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Footer menüpont 3</h1>
        <h1 className="border-b-2 border-gray-950 hover:border-white transition-all duration-300 cursor-pointer">Footer menüpont 4</h1>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
