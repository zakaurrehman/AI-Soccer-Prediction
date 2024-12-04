import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Stats from '../Components/Stats'
import About from '../Components/About'
import WhyUseSection from '../Components/WhyUseSection'
import PricingSection from '../Components/PricingSection'
import PortfolioSection from '../Components/PortfolioSection'
import TestimonialsSection from '../Components/TestimonialsSection'
import FAQ from '../Components/FAQ'
import Contact from '../Components/Contact'
import Footerd from '../Components/Dashboard/Footerd';

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Stats/>
        <About/>
        <WhyUseSection/>
        <PricingSection/>
        <PortfolioSection/>
        <TestimonialsSection/>
        <FAQ/>
        <Contact/>
        <Footerd/>
    </div>
  )
}

export default Home