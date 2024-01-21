import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <div>
        <h1 className='text-[#262626] lg:text-[40px] xs:text-[33px] font-[700] leading-[88.588px] font-inter text-center'>Top Categories</h1>
        <h2 className='text-[#59595A] text-[20px] font-[400] leading-[39.865px] font-inter text-center'>24,000+ unique online courses list design</h2>
        <div className='flex flex-wrap gap-[2rem] mt-[90px]'>
            <div style={{border: `1.518px solid rgba(8, 2, 2, 0.20)`}} className='bg-[#fff] rounded-[10.629px] py-[74.8663px] px-[36.925px] w-[260px]'>
                <div style={{background: `rgba(4, 170, 21, 0.15)`, border: `1.518px solid #04AA15`, borderRadius: `151.845px`}} className='p-[21.258px] w-[78.96px] h-[75.92px] ms-[3rem]'>
                    <Image src='/assets/icons/book.svg' width='36' height='36' alt='' />
                </div>
                <h1 className='text-[#000] text-[24px] font-[600] leading-[36px] text-center font-inter mt-[28px]'>Web Development</h1>
                <p className='text-[#0000007F] text-[18px] font-[600] leading-[27px] text-center font-inter mt-[28px]'>30 Courses</p>
            </div>
            <div style={{border: `1.518px solid rgba(8, 2, 2, 0.20)`}} className='bg-[#fff] rounded-[10.629px] py-[74.8663px] px-[36.925px] w-[260px]'>
                <div style={{background: `rgba(170, 4, 154, 0.15)`, border: `1.518px solid #AA049A`, borderRadius: `151.845px`}} className='p-[21.258px] w-[78.96px] h-[75.92px] ms-[3rem]'>
                    <Image src='/assets/icons/box.svg' width='36' height='36' alt='' />
                </div>
                <h1 className='text-[#000] text-[24px] font-[600] leading-[36px] text-center font-inter mt-[28px]'>Digital Marketing</h1>
                <p className='text-[#0000007F] text-[18px] font-[600] leading-[27px] text-center font-inter mt-[28px]'>30 Courses</p>
            </div>
            <div style={{border: `1.518px solid rgba(8, 2, 2, 0.20)`}} className='bg-[#fff] rounded-[10.629px] py-[74.8663px] px-[36.925px] w-[260px]'>
                <div style={{background: `rgba(237, 0, 0, 0.15)`, border: `1.518px solid #ED0000`, borderRadius: `151.845px`}} className='p-[21.258px] w-[78.96px] h-[75.92px] ms-[3rem]'>
                    <Image src='/assets/icons/briefcase.svg' width='36' height='36' alt='' />
                </div>
                <h1 className='text-[#000] text-[24px] font-[600] leading-[36px] text-center font-inter mt-[28px]'>Mobile App Development</h1>
                <p className='text-[#0000007F] text-[18px] font-[600] leading-[27px] text-center font-inter mt-[28px]'>30 Courses</p>
            </div>
            <div style={{border: `1.518px solid rgba(8, 2, 2, 0.20)`}} className='bg-[#fff] rounded-[10.629px] py-[74.8663px] px-[36.925px] w-[260px]'>
                <div style={{background: `rgba(3, 198, 241, 0.15)`, border: `1.518px solid #03C6F1`, borderRadius: `151.845px`}} className='p-[21.258px] w-[78.96px] h-[75.92px] ms-[3rem]'>
                    <Image src='/assets/icons/codepen.svg' width='36' height='36' alt='' />
                </div>
                <h1 className='text-[#000] text-[24px] font-[600] leading-[36px] text-center font-inter mt-[28px]'>Frontend Development</h1>
                <p className='text-[#0000007F] text-[18px] font-[600] leading-[27px] text-center font-inter mt-[28px]'>30 Courses</p>
            </div>
        </div>
    </div>
  )
}

export default Categories