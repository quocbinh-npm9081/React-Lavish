import React from 'react'

import HeroSection from '../../heroSection/HeroSection'
import {homeObjectOne,homeObjectTwo, homeObjectThree, homeObjectFour} from './Data';
export const Home = () => {

    return (
        <>
            <HeroSection {...homeObjectOne}></HeroSection>
            <HeroSection {...homeObjectThree}></HeroSection>
            <HeroSection {...homeObjectTwo}></HeroSection>
            <HeroSection {...homeObjectFour}></HeroSection>

        </>
    )
}
