import React from 'react'
import { Link } from "react-router-dom";
import bg from '../assets/mike-petrucci-c9FQyqIECds-unsplash (1).webp'



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
          <div className='w-[14rem]'>
            <img src={bg} className='rounded-lg'/>
          </div>
          <div className=" flex flex-col items-start justify-center text-[1.1rem] font-light p-[0.5rem]">
            <p className='text-[1.3rem] font-bold'>Istore</p>
            <p className="font-thin mt-[1.4rem]">Westend alsó szint 143. üzlet</p>
          </div>
        </a>
      </div>
    );
  };

  export default SliderCard;