import React from 'react'

import HeroSection from '../../heroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
const Products = () => {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </div>
    )
}

export default Products
