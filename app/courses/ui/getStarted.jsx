import Image from 'next/image';
import React from 'react';

export default function Platform() {

    const imageUrl = '/assets/image/courses/courses-platform-mobile.png';

    return (
        <section className="padding-x padding-y mb-8 max-width aspect-video">
            <div className="flex flex-col md:flex-row justify-center items-center mb-6">

                <div className="flex flex-col md:flex-row md:mr-4 md:w-[50%]">
                    {/* left */}
                    <div className='w-full'>
                        <h1 className="text-4xl text-center md:text-left font-bold mb-4 w-full leading-tight"><span className=' text-[#0A6A56] mb-4 text-5xl'>Start-</span>Learning From The Best Platforms</h1>
                        <p className="text-[#59595A] mb-4 text-paragraph text-center md:text-left">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.</p>
                        <div className='w-full flex justify-center md:justify-start'>
                            <button className="custom-btn mx-auto md:ml-0 text-paragraph">
                                Get started
                                <span className="ml-2 rotate-arrow">➜</span>
                            </button>
                        </div>


                        <div className="flex justify-center my-4">
                            <div className="flex flex-col items-center md:items-start my-4 w-[50%] mr-4">
                                <p className="text-4xl font-bold mb-2 lg:text-6xl">25k+</p>
                                <p className="text-base md:text-lg text-center font-semibold">Happy Students</p>
                            </div>
                            <div className="flex flex-col  items-center lg:items-start  my-3 w-[50%]">
                                <p className="text-4xl font-bold mb-2 lg:text-6xl">7+</p>
                                <p className="text-base md:text-lg text-center font-semibold">Experienced Instructors</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conditional rendering of images */}
                <div className='w-full md:w-[50%] md:flex md:justify-end'>
                    {/* Mobile Image */}
                    <div className="md:hidden flex justify-center relative w-full">
                        <Image
                            src={imageUrl}
                            width={400}
                            height={500}
                            alt="Collage of educational activities with students and instructors"
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="hidden md:flex md:w-[90%] mr-0 justify-end">
                        <Image
                            src={imageUrl}
                            width={400}
                            height={500}
                            alt="Collage of educational activities with students and instructors"
                        />
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-4 gap-x-6">
                <div className="w-full flex flex-col items-center py-4 mr-4">
                    <div className="relative mb-4 flex flex-col items-center justify-center h-12 w-12">
                        <Image
                            src='/assets/image/courses/courses-icon-one.svg'
                            alt="Globalization icon"
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2 md:text-2xl">Globalization</h3>
                    <p className="text-base text-gray-600 text-center md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
                    </p>
                </div>

                <div className="w-full flex flex-col items-center py-4 mr-4">
                    <div className="relative mb-4 flex flex-col items-center justify-center h-12 w-12">
                        <Image
                            src='/assets/image/courses/courses-icon-two.svg'
                            alt="Latest Top Skills icon"
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2 md:text-2xl">Latest Top Skills</h3>
                    <p className="text-base text-gray-600 text-center md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
                    </p>
                </div>

                <div className="w-full flex flex-col items-center py-4">
                    <div className="relative mb-4 flex flex-col items-center justify-center h-12 w-12">
                        <Image
                            src='/assets/image/courses/courses-icon-three.svg'
                            alt="Cost-effectiveness icon"
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2 md:text-2xl">Cost-effectiveness</h3>
                    <p className="text-base text-gray-600 text-center md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi vel dui dignissim laoreet. Fusce
                    </p>
                </div>
            </div>

        </section>
    );
}