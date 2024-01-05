import React from 'react'
import Web from '../src/images/hero.png'
import Common from './Common'


const About = () => {
    return (
        <>
            <Common name='Welcome to About page' imgsrc={Web} visit='/contect' btname='Contect Now' />
        </>
    )
}

export default About