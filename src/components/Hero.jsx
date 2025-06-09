import React from 'react';
import heroImage from '../assets/images/png/hero-image.png';

const Hero = () => {
    return (
        <div className="lg:pt-[42px] md:pt-6 pt-2 max-w-[1920px] mx-auto">
            <h1 className="font-normal xl:text-[157px] text-shadow-effect lg:text-[120px] md:text-[80px] text-5xl ff-moderno text-center leading-[100%] md:pb-2">
                THE HUSTLIN’ HARDOS.
            </h1>
            <img
                className="w-full border-y-2 border-black pointer-events-none"
                src={heroImage}
                alt="hero"
            />
        </div>
    );
};

export default Hero;
