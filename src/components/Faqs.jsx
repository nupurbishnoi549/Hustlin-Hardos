import React, { useState, useRef, useEffect } from 'react';
import { FAQS_LIST } from '../utils/helper';
import Heading from './common/Heading';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) {
                content.style.maxHeight = openIndex === index ? `${content.scrollHeight}px` : '0px';
            }
        });
    }, [openIndex]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id='faqs' className="text-black border-b-2">
            <div className="container max-w-[1140px] mx-auto max-xl:px-4">
                <Heading myText="Faqs" />
            </div>
            <div className="border border-black w-full"></div>
            <div className="container max-w-[1140px] mx-auto max-xl:px-4">
                <div className="border-x-2 border-black divide-y">
                    {FAQS_LIST.map((faq, index) => (
                        <div key={index} className="md:py-8 md:pl-[30px] md:pr-11 p-3">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left md:text-2xl cursor-pointer text-lg font-semibold flex justify-between items-center"
                            >
                                {faq.question}
                                <span className="text-2xl">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                style={{ maxHeight: '0px' }}
                            >
                                <p className="md:mt-4 mt-2 text-black max-w-[992px] md:text-base text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
