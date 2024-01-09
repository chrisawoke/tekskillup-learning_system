import React from 'react';
import Image from 'next/image';
import { upcomingCourses as courses, stats } from '../lib/data';

const UpcomingCourses = () => {
   

    return (
        <div className="padding-x padding-y my-2">
            <div className="">
                <h2 className="text-2xl font-bold text-center mb-2">Upcoming Courses</h2>
                <p className="text-gray-600 text-center text-lg mb-4 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce</p>

                {/* Courses List */}
                <div className="my-3">
                    {courses.map((course) => (
                        <div key={course.id} className="flex flex-col md:flex-row justify-between items-center rounded-lg p-4 shadow-card-100 my-8">
                            <Image src={course.imageUrl} alt={course.title} width={320} height={180} className="rounded-md mr-4 " />
                            <div className="flex flex-col mt-4 md:mt-0 md:ml-4 flex-grow w-[33%] items-start justify-center">
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                <div className='flex mr-4 items-center mt-4'>
                                    <Image src={course.instructorAvatarUrl} alt={course.instructor} width={48} height={48} className="rounded-full mr-2" />
                                    <p className="text-lg font-bold">{course.instructor}</p>
                                </div>
                            </div>
                            <div className="flex justify-center flex-col w-[12.5%] mr-3  items-center">
                                <span className="text-lg text-gray-500 font-bold mb-2">Lesson</span>
                                <span className="font-bold items-start text-xl">{course.lessonCount}</span>
                            </div>
                            <div className="flex justify-center flex-col w-[17.5%] mr-3  items-center">
                                <span className="text-lg text-gray-500 font-bold mb-2">Duration</span>
                                <span className="font-bold items-start text-xl text-center">{course.duration} Hours</span>
                            </div>

                            <div className="flex justify-center flex-col w-[12.5%] mr-3  items-center">
                                <span className="text-lg text-gray-500 font-bold mb-2">Price</span>
                                <span className="font-bold items-start text-xl text-[#0A6A56]">${course.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className='p-4 rounded-lg'>
                            <p className=" text-7xl text-[#0A9F80] font-semibold">{stat.number}</p>
                            <p className="text-lg my-2 text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingCourses;
