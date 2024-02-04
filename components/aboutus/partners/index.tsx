import React from 'react'
import ProjectedLogo from '../../projectedLogo'
import { motion } from "framer-motion"

const logos = [
  "/prestoLabs.svg",
  "",
  "",
  "",
  "",
  "",
  "/credit_scend.svg",
  "",
  "",
  "/polygon_studios.svg",
  "",
  "",
  "/gsr.svg",
  "",
  "",
  "",
]

const Partners = () => {
  return (
    <div className='container mx-auto relative z-50'>

      <div className='relative w-full h-full flex flex-wrap items-center lg:justify-between justify-center gap-4'>

        {
          logos.map((item, index) => (
            <ProjectedLogo projected={Boolean(Math.floor(Math.random() * 2))} logo={item} key={index} delay={Math.floor(Math.random() * 10)} />
          ))
        }
        
      </div>

      <motion.h2
        initial={{y:100, opacity: 0}}
        whileInView={{y:0, opacity: 1}} 
        transition={{delay: .5, duration: 1}}
      className='text-primary font-bold text-6xl uppercase text-center py-20'>our partners</motion.h2>

    </div>
  )
}

export default Partners