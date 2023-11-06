import React from 'react'
import { Link } from "react-router-dom";
import useAppContext from "../utils/Maincontext.js";
import bg from '../assets/kevin-bhagat-Co-usQ-kpO0-unsplash.jpg'

const SliderCard: React.FC = () => {

    const bgStyle = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url(${bg})`
      };
    return (

      <div className="cursor-pointer outline-2 outline-slate-300 hover:outline-slate-300 transition-all duration-300 border-2 border-slate-300 hover:border-black rounded-lg">
        <a href="#" className="decoration-none text-black">
          <div className='w-[14rem] p-2 rounded-lg'>
            <img src={bg} className='rounded-lg'/>
          </div>
          <div className=" flex flex-col items-start justify-center text-[1.1rem] font-light p-2">
            <p className=''>Iphone 14 pro max</p>
            <p className="text-[1.3rem] font-bold mt-[1.4rem]">240.999Ft</p>
          </div>
        </a>
      </div>
    );
  };

  export default SliderCard;