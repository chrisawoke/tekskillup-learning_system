"use client";

import React from 'react'
import { useState } from 'react'
import faqData from './FaqData'
import AccordionItem from './AccordionItem'

const Faq = () => {
    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }

    return (
        <div className='xs:px-[0.75rem] lg:px-[10rem] w-[100vw] lg:ms-[-2rem]'>
            <div style={{ background: `rgba(10, 106, 86, 0.03)`, borderRadius: '10px', }} className='mt-[7rem] lg:w-[1100px] xs:w-[100%] lg:p-[80px] xs:py-[15px] px-[5px]'>
                <h1 className='text-[#262626] text-center lg:text-[40px] xs:text-[35px] font-[700] leading-[48px] font-inter'>Frequently Asked Questions</h1>
                <h3 className='text-[#333] lg:text-[18px] xs:text-[16px] font-[400] leading-[30px] font-inter text-center mt-[19px]'>Still you have any questions? Contact our Team via <br className='lg:block xs:hidden' /> support@tekskillup.com</h3>
                <div className='mt-[3rem]'>
                    {faqData.map((data, index) => {
                        return (
                            <AccordionItem
                                key={index}
                                open={index === open}
                                question={data.question}
                                answer={data.answer}
                                toggle={() => toggle(index)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq