'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import { categories } from '../lib/data';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    const [isHovered, setIsHovered] = useState(false);

    const defaultStyle = {
        width: '48px',
        height: '48px',
        color: 'white',
        fontWeight: 'bold',
        display: "block",
        background: "black",
        opacity: isHovered ? '0.5' : '0.03',
        borderRadius: '50%',
        fontSize: '36px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div
            className={className}
            style={{ ...defaultStyle }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
}

const PopularCats = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };


    return (
        <section className="padding-x padding-y mt-14 mb-12 max-width">
            <h2 className="w-full text-3xl lg:text-4xl font-bold text-center">Popular Categories</h2>
            <div className='w-full p-6'>
                <Slider {...settings} >
                    {categories.map((category, index) => (
                        <div className='h-max'>
                            <div key={index} className="flex rounded-lg p-3 my-4 shadow-card-100  cursor-pointer" >
                                <div className='mr-4 p-4 bg-[#04AA15] bg-opacity-15 rounded-full border-4 border-[#04AA15] w-[64px] h-[64px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#04AA15" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg  font-bold">{category.name}</p>
                                    <p className="text-base  text-gray-400">{category.count} Courses</p>
                                </div>
                            </div>
                            {/* <div key={index} className="flex rounded-lg p-3 my-4 shadow-card-100  cursor-pointer" >
                                <div className='mr-4 p-4 bg-[#04AA15] bg-opacity-15 rounded-full border-4 border-[#04AA15] w-[64px] h-[64px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#04AA15" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className=''>
                                    <p className="text-lg  font-bold">{category.name}</p>
                                    <p className="text-base  text-gray-400">{category.count} Courses</p>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PopularCats;