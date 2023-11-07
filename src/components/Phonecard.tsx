import React from 'react'
import iphone from '../assets/iphone.webp'

const Phonecard: React.FC<{name: string, price: string}> = ({ name, price }) => {
  return (
    <article className='flex flex-col items-center justify-center'>
        <img src={iphone} />
        <h1>{name}</h1>
        <h1>{price}</h1>
        <button>Termék megtekintése</button>
    </article>
  )
}

export default Phonecard