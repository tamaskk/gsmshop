import React from 'react'
import WhyChooseCard from './WhyChooseCard'



const Whychoose = () => {
  return (
    <section className='w-screen h-auto flex items-center justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-12 lg:gap-5 px-10 lg:px-20 py-10 lg:py-32'>
            <WhyChooseCard />
            <WhyChooseCard />
            <WhyChooseCard />

        </div>        
    </section>
  )
}

export default Whychoose