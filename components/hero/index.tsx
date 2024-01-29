"use client"
import React, { useRef, useState } from 'react'
import Navbar from '../navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import "swiper/css";

const Hero = () => {
  return (
    <header>
      <Navbar />
      <div className='border-b-[0.5px] border-primary h-[700px] flex flex-col justify-end py-20'>
        <div className='container mx-auto'>
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
      </div>d
    </header>
  )
}

export default Hero