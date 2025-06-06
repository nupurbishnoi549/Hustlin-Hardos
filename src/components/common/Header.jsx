import React, { useState, useEffect } from "react";
import { NAV_LINKS, SOCIAL_ICONS, STOCK_VALUES } from "../../utils/helper";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <div className="text-black">
            <div className="overflow-hidden py-[14px] max-w-[1920px] bg-black mx-auto px-4 text-sm border-b border-black z-50 relative">
                <div className="whitespace-nowrap animate-scroll flex gap-x-6">
                    {STOCK_VALUES.map((item, index) => (
                        <div key={index} className="flex items-center md:mr-[62px] mr-6">
                            <span className="font-normal mr-2 text-base text-white">{item.title}</span>
                            <span className={`ml-1 px-1 py-[2px] border rounded-[5px] ${item.color}`}>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-b border-black z-50 relative">
                <div className="container mx-auto max-w-[1172px] px-4">
                    <div className="flex items-center justify-between max-w-[658px] ml-auto py-3">
                        <a href="#" className="z-[52]">
                            <h1 className="text-2xl font-normal ff-moderno">Hustlin' Hardos</h1>
                        </a>
                        <div className="md:flex hidden items-center space-x-[18px]">
                            {SOCIAL_ICONS.map((icon, index) => (
                                <a key={index}
                                    href={icon.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        src={icon.img}
                                        alt={icon.title}
                                        className="w-6 h-6 cursor-pointer hover:scale-105 transition-all duration-300" />
                                </a>
                            ))}
                            <button className="bg-yellow-400 text-black px-[6px] py-2 font-semibold border border-black hover:bg-white transition-all duration-500">
                                CONNECT WALLET
                            </button>
                        </div>
                        <button
                            className="md:hidden text-3xl z-[52] font-bold focus:outline-none transition-all duration-300"
                            onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-b border-black w-full z-40 relative md:flex hidden justify-center">
                {NAV_LINKS.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="px-4 py-2 border-x border-black hover:text-red-500 transition-all duration-300"
                    >
                        {item.title}
                    </a>
                ))}
            </div>

            {menuOpen && (
                <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-4 bg-[url(../src/assets/images/png/bg-img.png)]">
                    {NAV_LINKS.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="text-xl text-black hover:text-red-500 transition-all duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.title}
                        </a>
                    ))}

                    <div className="flex space-x-4 pt-4">
                        {SOCIAL_ICONS.map((icon, index) => (
                            <a
                                key={index}
                                href={icon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={icon.img}
                                    alt={icon.title}
                                    className="w-6 h-6 hover:scale-125 transition-all duration-300"
                                />
                            </a>
                        ))}
                    </div>

                    <button className="bg-yellow-400 text-black px-6 py-2 font-semibold border border-black hover:bg-yellow-500 transition-all duration-500 mt-4">
                        CONNECT WALLET
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
