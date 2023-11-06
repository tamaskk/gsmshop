import React from 'react'
import iPhone from '../assets/iphone.jpg'
import useAppContext from '../utils/Maincontext'
import { Link, useNavigate } from 'react-router-dom'

const Brandscard: React.FC<{ name: string, img: string, brand: string }> = ({ img, name, brand }) => {
    const { setBrand } = useAppContext();
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Update the state if needed (e.g., setBrand(brand))
        console.log('Clicked on card:', brand);
        navigate(`/categories/phones`);
    };

    return (
        <article onClick={() => { setBrand(brand); handleCardClick(); }} className='flex flex-col items-center justify-center shadow-lg transition-all duration-200 border-2 border-transparent p-2 rounded-md hover:border-gray-400'>
            <div className='max-w-fit'>
                <img src={img} className='rounded-md max-h-fit' />
            </div>
            <h1 className='text-2xl font-medium py-10'>{name}</h1>
        </article>
    );
}

export default Brandscard