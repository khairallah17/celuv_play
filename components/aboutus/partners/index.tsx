import React from 'react'
import ProjectedLogo from '../../projectedLogo'
import { motion } from "framer-motion"
import Image from 'next/image'

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

      <div className='relative w-full h-full grid px-5 lg:grid-cols-5 grid-cols-3 gap-4'>

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
        viewport={{once: true}}
        className='text-primary font-bold text-4xl lg:text-6xl w-full flex items-center justify-center uppercase text-center py-20'>
        <Image className='self-center' quality={100} src="/OUR PARTNERS.png" height={29} width={317} alt='' />
      </motion.h2>

    </div>
  )
}

export default Partners