"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

type BtnProps = {
  image: string,
  color: string,
  addClass: string,
  imageSize: string,
  className?: string
}

const ProjectedButton = (props: BtnProps) => {

  const [btnAnimation ,setBtnAnimation] = useState<boolean>(false)
  const startAnimate = () => setBtnAnimation(true)
  const stopAnimate = () => setBtnAnimation(false)

  return (
    <div className='h-[80px]'>
      <div className={`relative w-fit duration-200 ${btnAnimation && props.addClass}`}>
        <button onMouseEnter={startAnimate} onMouseLeave={stopAnimate} className={`bg-white border border-${props.color} w-fit relative px-10 rounded-3xl py-3 z-40 h-20 flex items-center justify-center`}>
            <Image src={props.image} height={0} width={0} alt='ios logo' className={`${props.imageSize ? props.imageSize : 'w-auto h-auto'}`} quality={100} />
        </button>
        <motion.div
          initial={{ y:-20 }}
          animate={btnAnimation ? { y:0 } : {y: -20}}
          transition={{ ease: "easeOut" }}
          className={props.className}>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectedButton