import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAppContext from "../utils/Maincontext";

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const { menuOpenHandler, menuOpened, cartOpenHandler, cart } = useAppContext();

  useEffect(() => {
    if (cart.length !== 0) {
      setIsAnimating(true);

      const animationTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 100);

      return () => clearTimeout(animationTimeout);
    }
  }, [cart]);

  return (
    <>
      <nav className="w-screen h-auto py-5 px-10 shadow-lg rounded-b-lg hidden lg:block overflow-x-hidden">
        <div className="flex flex-row items-center justify-center">
          <div className="w-1/3">
            <div className="w-20 h-5 bg-black"></div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 w-1/3 min-w-fit">
            <div className="group">
              <Link to="">Főoldal</Link>
              <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="group">
              <Link to="repair">Szervíz</Link>
              <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="group">
              <Link to="brands">Termékek</Link>
              <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="group">
              <Link to="contact">Kapcsolat</Link>
              <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
          <div className="w-1/3 flex flex-row items-center justify-end min-w-fit gap-5">
            <div className={`h-7 w-7 bg-black transition-all duration-300 ${isAnimating ? "-translate-y-4" : "translate-y-0"}`} onClick={cartOpenHandler}>
            <div className="text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-[125%] -translate-y-1/2 p-2">
              {cart.length}
            </div>
            </div>
            <div className="group">
              <Link to="">Bejelentkezés / Regisztráció</Link>
              <div onClick={cartOpenHandler} className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`w-screen flex flex-row items-center justify-between h-auto lg:hidden rounded-b-md p-4 transition-all duration-200`}
      >
         <div className={`h-7 w-7 bg-black transition-all duration-300 ${isAnimating ? "-translate-y-4" : "translate-y-0"}`} onClick={cartOpenHandler}>
            <div className="text-red-600 w-5 h-5 rounded-full bg-white text-center border-2 border-black flex items-center justify-center translate-x-[125%] -translate-y-1/2 p-2">
              {cart.length}
            </div>
            </div>
            
        <div className="">
          <div className={`w-10 h-7 bg-black`}></div>
        </div>

        <div className="" onClick={menuOpenHandler}>
          <div className={`w-10 h-1 bg-black rounded-lg mb-2`}></div>
          <div className={`w-10 h-1 bg-black rounded-lg mb-2`}></div>
          <div className={`w-10 h-1 bg-black rounded-lg `}></div>
        </div>
      </div>

      <div
        className={`fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-white ${
          menuOpened ? "translate-x-0" : "translate-x-full"
        } transition-all duration-200 z-[9999]`}
      >
        <div
          className="absolute lg:hidden top-5 right-5 z-[9999]"
          onClick={menuOpenHandler}
        >
          <div
            className={`w-10 h-1 bg-black rounded-lg translate-y-3 rotate-45 mb-2`}
          ></div>
          <div className={`w-10 h-1 bg-black rounded-lg -rotate-45 `}></div>
        </div>
        <div className="flex flex-col text-3xl items-center justify-center gap-y-5 w-full min-w-fit">
          <div className="group" onClick={menuOpenHandler}>
            <Link to="">Főoldal</Link>
            <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </div>
          <div className="group" onClick={menuOpenHandler}>
            <Link to="repair">Szervíz</Link>
            <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </div>
          <div className="group" onClick={menuOpenHandler}>
            <Link to="brands">Termékek</Link>
            <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </div>
          <div className="group" onClick={menuOpenHandler}>
            <Link to="contact">Kapcsolat</Link>
            <div className="w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
