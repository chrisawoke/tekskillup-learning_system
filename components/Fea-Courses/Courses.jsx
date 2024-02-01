"use client";

import { useState, useEffect } from 'react'
import AllCourses from './CourseData'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaUserAlt  } from "react-icons/fa";

const  Courses = () => {
    const [data, setData] = useState([]);
    const [course, setCourse] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSetDefault = () => {
      setData(AllCourses);
      setSelectedItem(null);
    }
    
    useEffect(() => {
     setData(AllCourses);
     const courseName = [... new Set(AllCourses.map((item) => item.tag))]
     setCourse(courseName);
   },[])

   const course_filter = (itemData) => {
    setSelectedItem(itemData)
      const filterData = AllCourses.filter((item) => item.tag == itemData);
      setData(filterData);
    }

  return (
    <>
      <div className='flex-center'>
      <div className='mt-[4rem] md:mt-[5rem] px-8 md:px-24 w-full'>
          <h1 className='text-[#262626] text-[2rem] md:text-[3rem] font-extrabold leading-[60px] text-center'>Featured Courses</h1>
          <h3 className='text-[#050505] md:text-[1.11rem] leading-[27px] text-center mt-[20px] px-8 md:px-24 lg:px-0'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim <br className='lg:block xs:hidden' /> lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</h3>

        <div className='mt-[47px]'>
          <div>
            <ul className='flex lg:gap-5 xs:gap-3 lg:ms-[15rem] flex-wrap justify-center'>
              <li><button 
                      onClick={handleSetDefault} 
                      className='bg-[#0A6A56] rounded-[10px] lg:w-[159px] xs:w-[100px] p-[8px] text-center text-[#fff] lg:text-[1rem] xs:text-[12px] font-[600] leading-[24px] hover:border-green_500'
                  >
                    General
                  </button>
              </li>
              {
                course.map((item) => {
                  return (
                    <button 
                      key={item}
                      className={`${selectedItem === item ? "text-green_600" : "text-black"} rounded-[10px] lg:w-[159px] xs:w-[100px] p-[8px] text-center lg:text-[16px] xs:text-[12px] font-[600] leading-[24px]`}
                      style={{border: `1px solid rgba(0, 0, 0, 0.30)`}}
                      onClick={() => {course_filter(item)}}
                    >
                      {item}
                    </button>
                  )
                })
              }
            </ul>
          </div>
          <div className='grid grid-col1-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[64px] justify-center lg:justify-start'>
            {
                data.map((item) => {
                  return (
                    <div key={item.id}>
                      <div style={{boxShadow: `0px 0px 4px 2px rgba(0, 0, 0, 0.10)`}} className='bg-[#fff] rounded-[8px] p-[10px] mb-6'>
                        <Image src={item.image} width='340' height='196' loading='lazy' alt='' />
                        <h1 className='flex gap-[5px] items-center mt-[34px]'><Image src='/assets/icons/play.svg' width='24' height='24' alt='' /> <span className='text-[#00000080] text-[12px] leading-[18px] font-[600]'>{item.plays} Plays</span></h1>
                        <h1 className='text-[#000] text-[20px] font-[700] leading-[30px] mt-[15px]'>{item.heading}</h1>
                      <div className='flex justify-between items-center mt-[20px]'>
                          <div className='flex gap-[10px] items-start'>
                            <h2 className='text-[#000] text-[12px] font-[700] leading-[18px]'>{item.sellingPrice}</h2>
                            <h2 className='text-[#0000004D] text-[12px] font-[700] leading-[18px] line-through'>{item.costPrice}</h2>
                          </div>
                          <div className='flex gap-[10px] items-center'>
                            <Image src='/assets/image/Group 29.svg' height={75} width={75} alt='rating star' />
                            <h2 className='text-[#80819A] text-[12px] font-[400] leading-[19.8px]'>{item.review} Ratings</h2>
                          </div>
                      </div>
                      <div className='bg-[#00000033] w-full h-[1px] mt-[31px]' />
                      <div className='flex justify-between items-start mt-[18px]'>
                        <div className=''>
                          <h2 className='text-[#00000080] text-[12px] font-[600] leading-[18px] flex  justify-center items-center gap-[10px]'><FaUserAlt className='text-[24px]' /> <span>{item.NumStudents} Students</span></h2>
                        </div>
                        <button className='bg-[#0A6A56] rounded-[4px] w-[70px] h-[30px] p-[5px] text-[#fff] text-[25px] font-[500]  hover:border-green_500 flex justify-center items-center'><FaArrowRight/></button>
                      </div>
                      </div>
                    </div>
                  )
                })
            }
          </div>
      </div>
      <div className="flex-center mt-10 mb-16">
          <Link 
            href="#"
            className="custom-btn2" 
          >
            View More
          </Link>
      </div>
      </div>
    </div>
      <div className="bg-teal-800 bg-opacity-5 w-full h-16"></div>
    </>
  )
}

export default Courses