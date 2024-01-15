import React from 'react'
import Image from 'next/image'

const testimonial = () => {
  return (
    <div className='xs:px-[0.75rem] lg:px-[8rem] w-[100vw] lg:ms-[-2rem]'>
      <div className='flex gap-[5px] items-center mt-[5rem]'>
        <div className='bg-[#525596] w-[72.995px] h-[2px]'></div>
        <h4 className='text-[#0A6A56] text-[18.249px] font-[400] leading-[3.65px] font-inter'>TESTIMONIAL</h4>
      </div>
      <div className='lg:flex lg:justify-between lg:gap-[230px]'>
        <div>
          <h1 className='text-[#000] text-[40px] font-[700] font-inter mt-[29px]'>What They Say?</h1>
          <h3 className='text-[#696984] text-[18px] font-[400] leading-[32px] font-inter lg:w-[469px] mt-[40px]'>Tekskillup has got more than 100k positive ratings from our users around the world.</h3>
          <h3 className='text-[#696984] text-[18px] font-[400] leading-[32px] font-inter lg:w-[469px] mt-[20px]'>Some of the students and teachers were greatly helped by the Skilline.</h3>
          <h3 className='text-[#696984] text-[18px] font-[400] leading-[32px] font-inter mt-[20px]'>Are you too? Please give your assessment</h3>
        </div>
        <div>
          <Image src='/assets/image/Frame 427320641.png' width='330' height='330' className='lg:ms-[3rem] xs:mt-[5rem] lg:mt-0' />
          <h3 className='text-[#696984] text-[18px] font-[400] leading-[36px] font-inter lg:w-[533px] mt-[52px]'>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Tekskillup is exactly what our business has been lacking."</h3>
          <h3 className='text-[#000] text-[18px] font-[600] font-inter mt-[20px]'>Samson James</h3>
          <h3 className='text-[18px] font-[600] leading-[39.418px] font-inter mt-[3px]' style={{ color: `rgba(0, 0, 0, 0.50)` }}>Lorem sempe tr</h3>
          <div className='flex lg:gap-[43px] lg:ms-[-0.7rem]'>
            <Image src='/assets/image/L-arrow.svg' width='72' height='72' />
            <Image src='/assets/image/R-arrow.svg' width='72' height='72' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimonial