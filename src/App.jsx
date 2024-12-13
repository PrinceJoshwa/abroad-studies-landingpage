import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import EndToEndSupport from './components/EndToEndSupport'
import SOP from './components/SOP'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import SupportServices from './components/SupportServices'
import SteppingAbroad from './components/SteppingAbroad'
import ApplicationProcess from './components/ApplicationProcess'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <EndToEndSupport />
      <SOP />
      <HowItWorks />
      <SupportServices />
      <SteppingAbroad />
      <ApplicationProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

