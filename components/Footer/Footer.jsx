import React from 'react'
import Image from 'next/image'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";




const Footer = () => {
    return (
        <div className='xs:px-[0.75rem] lg:px-[5rem] w-[100vw] lg:ms-[-2rem]'>
            <div className='lg:flex lg:flex-wrap justify-between gap-[128px] bg-[#fff] mt-[5rem] pt-[78px] pb-[50px]' style={{ borderTop: `1px solid rgba(0, 0, 0, 0.15)`, borderBottom: `1px solid rgba(0, 0, 0, 0.15)` }}>
                <div>
                    <Image src='/assets/image/Logo.png' width='150' height='150' loading='lazy' alt='' />
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5 flex items-center gap-1'><IoMdMail /> hello@Tekskillup.com</h2>
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5 flex items-center gap-1'><FaPhoneAlt /> +91 91813 23 2309</h2>
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5 flex items-center gap-1'><IoLocationSharp /> Somewhere in the World</h2>
                </div>
                <div className='lg:mt-0 xs:mt-[4rem]'>
                    <h1 className='text-[#000] text-[18px] font-[600] leading-[27px] font-inter mt-3'>Home</h1>
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-8'>Benefits</h2>
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5'>Our Courses</h2>
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5'>Our Testimonials</h2>
                    <h2 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5'>Our FAQ</h2>
                </div>
                <div className='lg:mt-0 xs:mt-[4rem]'>
                    <h1 className='text-[#000] text-[18px] font-[600] leading-[27px] font-inter mt-3'>About Us</h1>
                    <h1 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-8'>Company</h1>
                    <h1 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5'>Achievements</h1>
                    <h1 className='text-[#59595A] text-[16px] leading-[24px] font-[400] font-inter mt-5'>Our Goals</h1>
                </div>
                <div className='lg:mt-0 xs:mt-[4rem]'>
                    <h1 className='text-[#000] text-[18px] font-[600] leading-[27px] font-inter mt-3'>Subscribe to our Newsletter</h1>
                    <form className='mt-7'>
                        <input type='text' placeholder='Enter your name' className='text-[#656567] text-[16px] font-[400] leading-[20px] font-inter w-[318px] h-[45px] p-[20px] outline-none' style={{ background: `var(--White-99, #FCFCFD)`, border: `1px solid var(--White-95, #F1F1F3`, borderRadius: '6px' }} /><br />
                        <input type='email' placeholder='Enter your email' className='text-[#656567] text-[16px] font-[400] leading-[20px] font-inter w-[318px] h-[45px] p-[20px] mt-5 outline-none' style={{ background: `var(--White-99, #FCFCFD)`, border: `1px solid var(--White-95, #F1F1F3`, borderRadius: '6px' }} /><br />
                        <button type='submit' className='bg-[#086250] rounded-[10px] w-[318px] h-[45px] p-[10px] flex justify-center items-center mt-3 text-[#fff] text-[16px] font-[600] leading-[28px] font-inter'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div>
                <center className='flex items-center gap-5 mt-12 lg:ms-[32rem] xs:ms-[7rem]'>
                    <div className='bg-[#F7F7F8] border-1 border-[#F1F1F3] border-solid rounded-[6px] p-[12px]'>
                        <Image src='/assets/icons/facebook.svg' width='20' height='20' loading='lazy' alt='' />
                    </div>
                    <div className='bg-[#F7F7F8] border-1 border-[#F1F1F3] border-solid rounded-[6px] p-[12px]'>
                        <Image src='/assets/icons/twitter.svg' width='20' height='20' loading='lazy' alt='' />
                    </div>
                    <div className='bg-[#F7F7F8] border-1 border-[#F1F1F3] border-solid rounded-[6px] p-[12px]'>
                        <Image src='/assets/icons/linkedin.svg' width='20' height='20' loading='lazy' alt='' />
                    </div>
                </center>
                <h1 className='text-[#656567] text-[14px] text-center font-[400] leading-[21px] font-inter mt-5'>© 2024 Tekskillup. All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer