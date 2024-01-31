import React from "react";
import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const AccordionItem = ({ open, toggle, question, answer }) => {
    return (
        <div>
            <div
                className='bg-white lg:py-[24px] lg:px-[40px] xs:py-[20px] xs:px-[10px] flex justify-between items-center rounded-[10px] cursor-pointer mt-[33px]'
                onClick={toggle}>
                <h3 className='text-[#262626] lg:text-[20px] xs:text-[14px] font-[600] leading-[30px] lg:w-[975px] xs:w-[300px]'>{question}</h3>
                <div className='lg:text-[20px] xs:text-[16px] flex p-[10px] items-start gap-[10px]'
                    style={{background: `rgba(10, 106, 86, 0.20)`, borderRadius: '100px'}}>
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className='bg-white lg:px-[50px] xs:px-[10px] pb-[20px] text-[#4C4C4D] lg:text-[18px] xs:text-[14px] font-[400] leading-[27px]'>{answer}</div>
            </Collapse>
        </div>
    )
};

export default AccordionItem;
