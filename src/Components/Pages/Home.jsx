import React from 'react'
import NavBar from '../navBar'
import SliderSection from '../sliderSection'
import Offer from '../Offer'
import MobileSection from '../MobileSection'
import SmartWatch from '../SmartWatch'
import { OfferSection } from '../OfferSection'
import { Testimonials } from '../Testimonials'
import { Social } from '../Social'
import { Contact } from '../Contact'
import Footer from '../Footer'
export const Home = () => {
  return (
    <React.Fragment>
        <NavBar />
        <SliderSection/>
        <Offer/>
        <MobileSection/>
        <SmartWatch/>
        <OfferSection/>
        <Testimonials/>
        <Social/>
        <Contact/>
        <Footer/>
    </React.Fragment>
  )
}
