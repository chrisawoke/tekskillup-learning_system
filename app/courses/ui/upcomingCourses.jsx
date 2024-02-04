import React from 'react';
import Image from 'next/image';
import { upcomingCourses as courses, stats } from '../lib/data';

const UpcomingCourses = () => {


    return (
        <section className="padding-x padding-y my-8 max-width">
            <div className="">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-3">Upcoming Courses</h2>
                <p className="text-gray-600 text-center text-base md:text-lg max-w-5xl mx-auto mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce</p>

                {/* Courses List */}
                <div className="my-3">
                    {courses.map((course) => (
                        <div key={course.id}>
                            <div className="hidden md:flex justify-between items-center rounded-lg p-4 shadow-card-100 my-8">
                                <Image
                                    src={course.imageUrl}
                                    alt={course.title}
                                    width={320}
                                    height={180}
                                    className="rounded-md mr-4 transition-transform duration-700 ease-in-out transform hover:scale-105 cursor-pointer"
                                />

                                <div className="flex flex-col mt-4 md:mt-0 md:ml-4 flex-grow w-[33%] items-start justify-center mr-2">
                                    <h3 className="text-lg font-semibold lg:text-xl">{course.title}</h3>
                                    <div className='flex mr-4 items-center mt-4'>
                                        <Image src={course.instructorAvatarUrl} alt={course.instructor} width={48} height={48} className="rounded-full mr-2 " />
                                        <p className="text-base font-bold lg:text-lg">{course.instructor}</p>
                                    </div>
                                </div>
                                <div className="flex justify-start flex-col w-[12.5%] mr-3  items-start">
                                    <span className="text-base lg:text-lg text-gray-500 font-bold mb-2">Lesson</span>
                                    <span className="font-bold items-start text-lg lg:text-xl">{course.lessonCount}</span>
                                </div>
                                <div className="flex justify-start flex-col w-[17.5%] mr-3  items-start">
                                    <span className="text-base lg:text-lg text-gray-500 font-bold mb-2">Duration</span>
                                    <span className="font-bold items-start text-lg lg:text-xl">{course.duration} Hours</span>
                                </div>

                                <div className="flex justify-start flex-col w-[12.5%] mr-3  items-start">
                                    <span className="text-base lg:text-lg text-gray-500 font-bold mb-2">Price</span>
                                    <span className="font-bold items-start text-lg lg:text-xl text-[#0A6A56]">${course.price}</span>
                                </div>
                            </div>

                            <div key={course.id} className="md:hidden flex flex-col items-center rounded-lg p-4 shadow-lg my-8 w-full">
                                <div className="relative w-full h-40 rounded-full aspect-video">
                                    <Image
                                        src={course.imageUrl}
                                        alt={course.title}
                                        layout='fill'
                                        className="rounded-t-lg rounded-b-lg"
                                    />
                                </div>
                                <div className="flex flex-col items-center mt-4 w-full">
                                    <div className="w-20 h-20 relative mb-2">
                                        <Image
                                            src={course.instructorAvatarUrl}
                                            alt={course.instructor}
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-center">{course.title}</h3>
                                    <p className="text-sm font-semibold text-center">{course.instructor}</p>
                                </div>
                                <hr className="my-2 w-full" />
                                <div className='flex flex-col items-center w-full'>
                                    <div className="flex justify-between items-center w-full px-4">
                                        <span className="text-base text-gray-500 font-semibold">Lesson</span>
                                        <span className="font-semibold text-lg">{course.lessonCount}</span>
                                    </div>
                                    <div className="flex justify-between items-center w-full px-4 my-1">
                                        <span className="text-base text-gray-500 font-semibold">Duration</span>
                                        <span className="font-semibold text-lg">{course.duration} Hours</span>
                                    </div>
                                    <div className="flex justify-between items-center w-full px-4">
                                        <span className="text-base text-gray-500 font-semibold">Price</span>
                                        <span className="font-semibold text-lg text-[#0A6A56]">${course.price}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics */}
                {/* <div className="text-center flex w-full flex-wrap justify-center">
                    {stats.map((stat, index) => (
                        <div key={index} className='p-4 rounded-lg mx-2'>
                            <p className="text-7xl text-[#0A9F80] font-semibold">{stat.number}</p>
                            <p className="text-lg my-2 text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default UpcomingCourses;
