import React from 'react'
import Header from '../components/Header'
import Whychoose from '../components/Whychoose'
import Slider from '../components/Slider'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import Trendingslider from '../components/Trendingslider'
import FAQSection from '../components/FAQ'

const Index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Whychoose />
      <Slider />
      <Banner />
      <Testimonials />
      <Trendingslider />
      <FAQSection />
    </div>
  )
}

export default Index