"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { start } from 'repl'

type BtnProps = {
  image: string,
  color: string,
  addClass: string,
  imageSize: string,
  className?: string,
  buttonClass?: string
}

const ProjectedButton = (props: BtnProps) => {

  const [btnAnimation ,setBtnAnimation] = useState<boolean>(false)
  const startAnimate = () => setBtnAnimation(true)
  const stopAnimate = () => setBtnAnimation(false)

  return (
    <div className='h-[80px]'>
      <div className={`relative w-fit duration-200 ${btnAnimation && props.addClass}`}>
        <button  className={props.buttonClass + " active:translate-y-[20px]"}>
            <Image src={props.image} height={0} width={0} alt='ios logo' className={`${props.imageSize ? props.imageSize : 'w-auto h-auto'}`} quality={100} />
        </button>
        <motion.div
          initial={{ y:0 }}
          // animate={btnAnimation ? { y:-20 } : {y: 0}}
          transition={{ ease: "easeOut" }}
          className={props.className}>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectedButton