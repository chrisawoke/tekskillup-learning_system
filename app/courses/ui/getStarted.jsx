import Image from 'next/image';
import React from 'react';

export default function Platform() {
    const mobileImageUrl = '/assets/image/courses/courses-platform-mobile.png';
    const desktopImageUrl = '/assets/image/courses/courses-platform-desktop.png';

    return (
        <div className="px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row justify-center items-center mb-6">

                <div className="flex flex-col md:flex-row md:mr-4 md:w-[50%]">
                    {/* left */}
                    <div className='w-full'>
                        <h1 className="text-3xl font-bold mb-4 w-full lg:text-5xl"><span className='font-bold text-4xl lg:text-6xl text-[#0A6A56] leading-8 lg:leading-[64px]'>Start</span>learning From Best Platforms</h1>
                        <p className="text-[#59595A] mb-4 text-xs text-center md:text-left md:text-xl leading-7">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.</p>
                        <div className='w-full flex justify-center md:justify-start'>
                            <button className="custom-btn mx-auto md:ml-0">
                                Get started
                                <span className="ml-2">➜</span>
                            </button>
                        </div>


                        <div className="flex justify-center my-4">
                            <div className="flex flex-col items-center md:items-start my-4 w-[50%] mr-4">
                                <p className="text-4xl font-bold mb-2 lg:text-6xl">25k+</p>
                                <p className="text-xs md:text-xl">Happy Students</p>
                            </div>
                            <div className="flex flex-col  items-center md:items-start  my-4 w-[50%]">
                                <p className="text-4xl font-bold mb-2 lg:text-6xl">7+</p>
                                <p className="text-xs md:text-xl">Experienced Instructors</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conditional rendering of images */}
                <div className='w-full md:w-[50%]'>
                    {/* Mobile Image */}
                    <div className="md:hidden relative w-full">
                        <Image
                            src={mobileImageUrl}
                            layout="responsive"
                            objectFit="cover"
                            width={330}
                            height={380}
                            alt="Collage of educational activities with students and instructors"
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="hidden md:block md:w-[80%] md:m-auto mr-0">
                        <Image
                            src={desktopImageUrl}
                            layout="responsive"
                            width={200}
                            height={300}
                            objectFit="cover"
                            alt="Collage of educational activities with students and instructors"
                        />
                    </div>

                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between py-4">
                <div className="w-full sm:w-1/3 flex flex-col items-center py-4 mr-4">
                    <div className="relative mb-4 flex flex-col items-center justify-center h-12 w-12">
                        <Image
                            src='/assets/image/courses/courses-icon-one.svg'
                            alt="Globalization icon"
                            layout='fill'
                            className="mx-auto"
                        />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2 md:text-2xl">Globalization</h3>
                    <p className="text-sm text-gray-600 text-center md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
                    </p>
                </div>

                <div className="w-full sm:w-1/3 flex flex-col items-center py-4 mr-4">
                    <div className="relative mb-4 flex flex-col items-center justify-center h-12 w-12">
                        <Image
                            src='/assets/image/courses/courses-icon-two.svg'
                            alt="Latest Top Skills icon"
                            layout='fill'
                            className="mx-auto"
                        />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2 md:text-2xl">Latest Top Skills</h3>
                    <p className="text-sm text-gray-600 text-center md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
                    </p>
                </div>

                <div className="w-full sm:w-1/3 flex flex-col items-center py-4">
                    <div className="relative mb-4 flex flex-col items-center justify-center h-12 w-12">
                        <Image
                            src='/assets/image/courses/courses-icon-three.svg'
                            alt="Cost-effectiveness icon"
                            layout='fill'
                            className="mx-auto"
                        />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2 md:text-2xl">Cost-effectiveness</h3>
                    <p className="text-sm text-gray-600 text-center md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
                    </p>
                </div>
            </div>

        </div>
    );
}