import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import Wrapper from '../utility/Wrapper';

const Hero = () => {
    return (
        <section className='hero'>
            <Wrapper >
                <LeftContent />
                <RightContent />
            </Wrapper>
        </section>
    )
}

export default Hero;