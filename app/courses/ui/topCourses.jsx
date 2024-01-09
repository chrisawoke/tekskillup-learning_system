'use client'

import React, { useState } from 'react';
import { courses } from '../lib/data';
import CardWrapper from './CardWrapper';

export default function TopCourses() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerBatch = 6;
    const maxIndex = Math.ceil(courses.length / cardsPerBatch) - 1;
    const maxIndexArray = Array.from({ length: maxIndex }, (_, index) => index);

    const nextBatch = () => {
        setCurrentIndex((prevIndex) => (prevIndex < maxIndex - 1 ? prevIndex + 1 : prevIndex));
    };

    const prevBatch = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const slideStyle = {
        transform: `translateX(-${currentIndex * (100)}%)`,
        transition: 'transform 0.5s ease-in-out',
    };

    return (
        <section className="bg-white padding-x mx-auto mb-8">
            <h2 className="w-full text-2xl md:text-2xl font-bold text-center mb-2">Top Courses</h2>
            <p className="text-gray-600 text-center mb-3 text-sm md:text-lg leading-5 md:width-[80%] md:mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
            </p>

            <div className="overflow-hidden relative">
                <div className="flex w-[300%]">
                    {maxIndexArray.map((course, index) => (
                        <div className='flex transition-all duration-500' style={slideStyle}>
                            <CardWrapper key={index} currCourses={courses.slice(index * cardsPerBatch, (index + 1) * cardsPerBatch)} />
                        </div>
                    ))}
                </div>
            </div>


            <div className='hidden md:flex justify-center mb-4'>
                <button onClick={prevBatch} className="custom-btn mr-6"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
                <button onClick={nextBatch} className="custom-btn"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
            </div>

            <div className='flex md:hidden justify-center mb-4'>
                <button className="custom-btn mr-6">See More</button>
            </div>
        </section>
    );
}