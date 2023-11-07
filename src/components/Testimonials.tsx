import React from 'react'
import Testimonialcard from './Testimonialcard'

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-[1200px] px-[19px] pb-20 flex flex-col items-center justify-center">
        <h1 className='text-3xl lg:text-4xl mb-10 text-center'>Mit gondolnak rólunk a vásárlóink?</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <Testimonialcard />
            <Testimonialcard />
            <Testimonialcard />
        </div>        
    </section>
  )
}

export default Testimonials