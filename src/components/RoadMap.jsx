import React from 'react';
import { ROADMAP_DATA } from '../utils/helper';
import downArrow from '../assets/images/svg/down-arrow.svg';
import roadmapIcon from '../assets/images/svg/roadmap-icon.svg';
import Heading from './common/Heading';

const Roadmap = () => {
    return (
        <div id="roadmap">
            <div className="container max-w-[1172px] mx-auto max-xl:px-4">
                <Heading myText="RoadMap" />
            </div>
            <div className="border-b-2 border-black w-full"></div>

            <div className="relative flex flex-col items-center container max-w-[1172px] mx-auto max-xl:px-4 pl-4 xl:border-x-2 lg:pt-[99px] pt-10 xl:pb-[300px] lg:pb-[120px] md:pb-[40px] pb-8">
                <div className="absolute top-0 xl:h-[1850px] lg:h-[1900px] md:h-[1340px] h-[1900px] max-lg:left-[6%] max-md:left-[88%]">
                    <img
                        src={downArrow}
                        alt="down-arrow"
                        className="w-4 h-full lg:mt-[150px] mt-10 xl:mr-3" />
                </div>

                {ROADMAP_DATA.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-full items-start ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                        <div
                            className={`relative lg:w-1/2 w-full ${index % 2 === 0
                                ? 'justify-end lg:pl-[75px] md:pl-23 max-lg:pb-8 max-md:pb-7'
                                : 'justify-start lg:pr-[75px] md:pr-5 lg:pl-9 md:pl-23 max-lg:pb-8 max-md:pb-7'
                                } flex flex-col`}>
                            <p className="md:text-sm text-xs font-normal mb-2">{item.phase}</p>
                            <h2 className="lg:text-4xl text-2xl leading-[110%] font-semibold mb-2">{item.title}</h2>
                            <p className="text-black font-normal lg:text-base text-sm md:pr-2">{item.description}</p>
                        </div>

                        <div className="md:size-14 w-11 h-[39px] bg-white border-2 border-black rounded-full flex items-center justify-center text-lg font-bold md:absolute relative md:transform md:-translate-x-1/2 lg:left-1/2 md:left-[7%]">
                            <img
                                src={roadmapIcon}
                                alt="roadmap-icon"
                                className="md:w-8 md:h-7 w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="border border-black w-full"></div>
        </div>
    );
};

export default Roadmap;
