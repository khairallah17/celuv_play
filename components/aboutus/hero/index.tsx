"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../navbar'
import { motion, useMotionValue } from "framer-motion"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// const Images = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous image
//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Framer Motion variants for animation
//   const variants = {
//     enter: (direction) => {
//       return {
//         x: direction > 0 ? 1000 : -1000,
//         opacity: 0,
//       };
//     },
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => {
//       return {
//         zIndex: 0,
//         x: direction < 0 ? 1000 : -1000,
//         opacity: 0,
//       };
//     },
//   };

//   return (
//     <div>
//       <AnimatePresence initial={false} custom={1}>
//         <motion.img
//           key={currentIndex}
//           src={images[currentIndex]}
//           custom={1}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: 'spring', stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//         />
//       </AnimatePresence>
//       <button onClick={prevImage}>Previous</button>
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// }

const Hero = () => {

  const [slideIndex, setSlideIndex] = useState<number>(0)

  return (
    <header className='overflow-hidden'>
      <Navbar />
      <div className='border-b-[0.5px] border-primary flex flex-col justify-end relative'>
        <motion.div
        layout
        className='container mx-auto relative z-50 flex items-center w-full h-full overflow-hidden'>

            <motion.div
            animate={{
              width: slideIndex == 0 ? "100%" : 0
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className='bg-slide1 bg-cover bg-center h-[700px] w-full shrink-0'></motion.div>
            <motion.div
            animate={{
              width: slideIndex == 1 ? "100%" : 0
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className='bg-slide2 bg-cover bg-center h-[700px] w-full shrink-0'></motion.div>
            
            <div className='h-full w-full absolute bg-black top-0 z-20 bg-opacity-20 flex p-10 justify-end flex-col'>
              <h3 className='uppercase text-3xl font-bold text-white'>
                dismatling the barier
              </h3>
              <p className='uppercase text-3xl text-white mb-10'>
                seamless integration to daily life
              </p>
              <h1 className='uppercase text-7xl font-bold text-white'>
                web 3 theme park <br /> defi infrastructure
              </h1>
            </div>

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