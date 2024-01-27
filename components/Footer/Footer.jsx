import Image from 'next/image'
import Link from 'next/link'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { footerLinks } from '@/constants';




const Footer = () => {
    return (
        <footer className='mx-auto max-width bg-green_rgba md:bg-white'>
            {/* horizontal line */}
            <div className='px-8 md:px-24 lg:flex justify-between mt-[3rem] md:mt-[5rem] pt-[78px] pb-[50px]' style={{ borderTop: `1px solid rgba(0, 0, 0, 0.15)`, borderBottom: `1px solid rgba(0, 0, 0, 0.15)` }}>
            <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-28 sm:items-center md:items-start">
                <div className="flex flex-col sm:flex-row gap-16 md:gap-28">
                    <div className='md:pt-3'>
                        <Image src='/assets/image/Logo.png' width='150' height='150' loading='lazy' alt='logo' />
                        <h2 className='text-sm sm:text-[1rem] leading-[24px] font-[400] mt-5 flex items-center gap-2'><IoMdMail /> hello@Tekskillup.com</h2>
                        <h2 className='text-sm sm:text-[1rem] leading-[24px] font-[400] mt-5 flex items-center gap-2'><FaPhoneAlt /> +91 91813 23 2309</h2>
                        <h2 className='text-sm sm:text-[1rem] leading-[24px] font-[400] mt-5 flex items-center gap-2'><IoLocationSharp /> Somewhere in the World</h2>
                    </div>
                    <div className='flex gap-16 md:gap-32'>
                        {footerLinks.map((item) => (
                            <div key={item.id}>
                                <h3 className='md:pt-5 mb-8 text-lg font-semibold text-black'>
                                    {item.title}
                                </h3>
                                {item.links.map(({ id, href, link }) => (
                                    <div className='pb-5' key={id}>
                                        <Link
                                            href={href}
                                            className='text-sm sm:text-[1rem] text-[#59595A] hover:text-green_600'
                                        >
                                            {link}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:px-24 lg:px-0 w-full">
                    <div className='rounded-md border-2 p-5 w-full lg:p-5'>
                        <h1 className='text-[#000] text-base sm:text-[1.2rem] md:text-[18px] font-[600] leading-[27px]'>Subscribe to our Newsletter</h1>
                        <form className='mt-7'>
                            <input type='text' placeholder='Enter your name' className='text-[#656567] text-sm sm:text-[1rem] font-[400] leading-[20px] w-full h-[45px] p-[20px] outline-none' style={{ background: `var(--White-99, #FCFCFD)`, border: `1px solid var(--White-95, #F1F1F3`, borderRadius: '6px' }} /><br />
                            <input type='email' placeholder='Enter your email' className='text-[#656567] text-sm sm:text-[1rem] font-[400] leading-[20px] w-full h-[45px] p-[20px] mt-5 outline-none' style={{ background: `var(--White-99, #FCFCFD)`, border: `1px solid var(--White-95, #F1F1F3`, borderRadius: '6px' }} /><br />
                            <button type='submit' className='bg-[#086250] rounded-[10px] w-full h-[45px] p-[10px] flex justify-center items-center mt-3 text-[#fff] text-sm sm:text-[1rem] font-[600] leading-[28px]'>Subscribe</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <center className='flex-center gap-10 mt-12'>
                    <div className='bg-[#F1F1F3] border-1 border-[#F7F7F8] border-solid rounded-[6px] p-[12px]'>
                        <Image src='/assets/icons/facebook.svg' width='20' height='20' loading='lazy' alt='' />
                    </div>
                    <div className='bg-[#F1F1F3] border-1 border-[#F7F7F8] border-solid rounded-[6px] p-[12px]'>
                        <Image src='/assets/icons/twitter.svg' width='20' height='20' loading='lazy' alt='' />
                    </div>
                    <div className='bg-[#F1F1F3] border-1 border-[#F7F7F8] border-solid rounded-[6px] p-[12px]'>
                        <Image src='/assets/icons/linkedin.svg' width='20' height='20' loading='lazy' alt='' />
                    </div>
                </center>
                <h1 className='text-[#656567] text-[14px] text-center font-[400] leading-[21px] font-inter my-8'>© 2024 Tekskillup. All rights reserved.</h1>
            </div>
        </footer>
    )
}

export default Footer