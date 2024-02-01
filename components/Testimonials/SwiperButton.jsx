"use client"

import { useSwiper } from 'swiper/react';
import { BsArrowLeft, BsArrowRight } from  'react-icons/bs'
import { useState } from 'react';

export const SwiperNavButtons = () => {
  const [hover, setHover] = useState(0)
  const swiper = useSwiper();

  return (
    <div className="flex gap-20 mt-4 pb-10">
            <div className="p-3.5 rounded-full bg-white hover:bg-green_400 shadow-md"
              onClick={() => swiper.slidePrev()}
            >
              <BsArrowLeft 
              className='cursor-pointer text-3xl text-green_700' />
            </div>
            <div className="p-3.5 rounded-full bg-white hover:bg-green_400 shadow-md"
              onClick={() => swiper.slideNext()}
            >
              <BsArrowRight  
              className='cursor-pointer text-3xl text-green_700' />
        </div>
    </div>
  );
};