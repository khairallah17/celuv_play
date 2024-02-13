"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../../navbar'
import { motion, useMotionValue } from "framer-motion"
import { PanInfo } from 'framer-motion'
import GlobalContextHooks from '@/hooks/GlobalContextHooks'

const Hero = () => {

  const { setActiveNav } = GlobalContextHooks()

  const [slideIndex, setSlideIndex] = useState<number>(0)
  const [dragging, setDragging] = useState<boolean>(false)

  const dragX = useMotionValue(0)

  const DRAG_BUFFER = 100

  useEffect(() => {
    setActiveNav("about us")
  }, [])

  const handleDragEvent = (event: MouseEvent, info: PanInfo) => {
    // setSlideIndex(prev => prev == 0 ? 1 : 0)
  }

  const handleDragEnd = () => {
    setDragging(false)

    const x = dragX.get()
  
    if (x > DRAG_BUFFER)
      setSlideIndex(0)
    else if (x < -DRAG_BUFFER)
      setSlideIndex(1)
  }

  const handleDragStart = () => {
    setDragging(true)
  }


  return (
    <header className='overflow-hidden'>
      <Navbar />
      <div className='container mx-auto flex flex-col justify-end relative overflow-hidden'>
        <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
        style={{
          x: dragX
        }}
        animate={{
          translateX: `-${slideIndex * 100}%`
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className='relative z-50 flex items-center w-full h-[500px] lg:h-[700px]'>

            <div className='bg-slide1 bg-cover bg-right-top lg:bg-center h-full w-full shrink-0 rounded-3xl'></div>
            <div className='bg-slide2 bg-cover bg-right-top lg:bg-center h-full w-full shrink-0 rounded-3xl'></div>
            
            {/* <div className='h-full w-full absolute bg-black top-0 z-20 bg-opacity-20 flex p-10 justify-end flex-col'>
              <h3 className='uppercase lg:flex hidden text-3xl font-bold text-white'>
                dismatling the barier
              </h3>
              <p className='uppercase lg:flex hidden text-3xl text-white mb-10'>
                seamless integration to daily life
              </p>
              <h1 className='uppercase lg:flex hidden text-7xl font-bold text-white'>
                web 3 theme park <br /> defi infrastructure
              </h1>
            </div> */}

        </motion.div>
      </div>
      <div className="container mx-auto flex w-full items-center justify-center">
        <motion.div
          onClick={() => setSlideIndex(prev => prev == 0 ? 1 : 0)}
          className="bg-secondary w-36 h-10 relative flex duration-300 rounded-full p-1 my-3">
            <motion.div
            animate={{
              left: slideIndex == 0 ? "3%" : "75%",
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className='absolute h-8 w-8 rounded-full bg-white'></motion.div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero