import React from 'react'

import HeroSection from '../../heroSection/HeroSection'
import {homeObjectOne,homeObjectTwo, homeObjectThree, homeObjectFour} from './Data';
import Footer from '../../footer/Footer';

export const Home = () => {

    return (
        <>
            <HeroSection {...homeObjectOne}></HeroSection>
            <HeroSection {...homeObjectThree}></HeroSection>
            <HeroSection {...homeObjectTwo}></HeroSection>
            <HeroSection {...homeObjectFour}></HeroSection>
            <Footer></Footer>
        </>
    )
}
