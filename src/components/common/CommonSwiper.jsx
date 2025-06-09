import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import leftArrow from '../../assets/images/svg/left-arrow.svg';
import rightArrow from '../../assets/images/svg/right-arrow.svg';
import hustlinPic from '../../assets/images/png/hustlin-short-pic.png';
import twitterIcon from '../../assets/images/svg/twitter-two.svg';

const CommonSlider = ({ data, title, isTweets }) => {
    return (
        <>
           <div className="container max-w-[1172px] mx-auto px-4 relative">
                <h2 className={`lg:text-[80px] md:text-6xl text-4xl leading-[104%] font-normal lg:py-[89px] md:py-10 py-7 text-black ${isTweets ? 'uppercase' : ''}`}>
                    {title}
                </h2>

                <button className="custom-prev absolute top-[45%] max-sm:top-[35%] xl:right-[5%] sm:right-[10%] right-[12%] z-10 w-[18px] h-9">
                    <img src={leftArrow} alt="left-arrow" width={18} height={36} />
                </button>
                <button className="custom-next absolute top-[45%] max-sm:top-[35%] right-[4%] xl:right-0 z-10 w-[18px] h-9">
                    <img src={rightArrow} alt="right-arrow" width={18} height={36} />
                </button>
            </div>

            <div className="border border-black w-full"></div>

            <div className="container max-w-[1172px] mx-auto px-4">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                    spaceBetween={0}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: isTweets ? 3 : 2,
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`border-black p-[26px] ${index % 2 === 0 ? 'border-l-1 border-r-1' : 'border-l-1 border-r-1'} ${isTweets ? 'flex flex-col items-start justify-center h-[259px]' : 'bg-[#EFE7E1] flex flex-col items-center justify-center h-[326px]'
                                    }`}>
                                {!isTweets && (
                                    <img
                                        src={hustlinPic}
                                        alt="hustlin"
                                        width={88}
                                        height={88}
                                        className="size-[88px] rounded-full mx-auto mb-4"
                                    />
                                )}

                                <h3
                                    className={`md:text-4xl text-3xl ${isTweets
                                            ? 'text-left text-black font-semibold pb-2'
                                            : 'text-center text-[#70675F] font-[900] pb-4'
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                {isTweets && (
                                    <div className="flex gap-[11px] pb-3">
                                        <img src={twitterIcon} alt="twitter" width={22} height={18} />
                                        <p className="text-sm font-normal">{item.date}</p>
                                    </div>
                                )}

                                <p className={`text-sm ${isTweets ? 'text-left' : 'text-center'} max-w-[407px] mx-auto`}>
                                    {item.description}
                                </p>

                                {isTweets && (
                                    <a href="#" className="hover:underline font-normal text-sm pt-3">
                                        Read More ...
                                    </a>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="border border-black w-full"></div>
        </>
    );
};

export default CommonSlider;
