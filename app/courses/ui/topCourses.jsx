'use client'

import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { courses } from '../lib/data';
import { CourseCardWrapper } from './wrapper';
import Link from 'next/link';

function TopCourses() {

    const cardsPerBatch = 6;
    const maxIndex = Math.ceil(courses.length / cardsPerBatch) - 1;
    const maxIndexArray = Array.from({ length: maxIndex }, (_, index) => index);

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <section className="padding-x padding-y bg-white mx-auto mb-8 max-width">
            <h2 className="w-full text-3xl lg:text-4xl font-bold text-center mb-3">Top Courses</h2>
            <p className="text-gray-600 text-center text-base md:text-lg leading-5 md:width-[80%] md:mx-auto mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
            </p>

            <div className="w-full px-0">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {maxIndexArray.map((course, index) => (
                        <div key={index} className='flex transition-all duration-500'>
                            <CourseCardWrapper key={index} currCourses={courses.slice(index * cardsPerBatch, (index + 1) * cardsPerBatch)} />
                        </div>
                    ))}
                </Slider>
                <div className='hidden md:flex justify-center mt-6 mb-4 font-semibold text-base'>
                    <button onClick={previous} className="custom-btn mr-6">PREVIOUS</button>
                    <button onClick={next} className="custom-btn">NEXT</button>
                </div>
                <div className='flex md:hidden justify-center mb-4'>
                    <Link href='/courses'><button className="custom-btn mr-6">See More</button></Link>
                </div>
            </div>

        </section >



    );
}

export default TopCourses;