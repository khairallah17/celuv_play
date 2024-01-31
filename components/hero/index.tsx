"use client"
import React, { useRef, useState } from 'react'
import Navbar from '../navbar'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <header className='overflow-hidden'>
      <Navbar />
      <div className='border-b-[0.5px] border-primary h-[60vh] flex flex-col justify-end py-20 relative'>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          className="mySwiper h-full w-full top-0 !absolute z-[-1]"
        >
          
          <SwiperSlide className='h-full'>
            <Image fill src="/site-banner-main.png" alt='slide image' quality={100} sizes='100vw' className='bg-cover bg-center bg-'/>
          </SwiperSlide>
          <SwiperSlide className='h-full'>
            <Image fill src="/site-banner-1.png" alt='slide image' quality={100} sizes='100vw' className='bg-cover bg-center'/>
          </SwiperSlide>
          
        </Swiper>
        <div className='h-full w-full absolute bg-black top-0 z-20 bg-opacity-20'></div>
        <div className='container mx-auto relative z-50'>
          <h3 className='uppercase text-3xl font-bold bg-linear-primary bg-clip-text text-transparent'>
            dismatling the barier
          </h3>
          <p className='uppercase text-3xl bg-linear-primary bg-clip-text text-transparent mb-10'>
            seamless integration to daily life
          </p>
          <h1 className='uppercase text-7xl font-bold bg-linear-primary bg-clip-text text-transparent'>
            web 3 theme park <br /> defi infrastructure
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Hero