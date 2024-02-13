"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import './style.css'

type Team = {
    name: string,
    position: string,
    slogon?: string,
    image?: string
}

const ProjectedTeam = (props:Team) => {
    
    const [isFliped, setIsFliped] = useState<boolean>(false)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    
    const handleFlip = () => {
        if (!isAnimating) {
            setIsFliped(!isFliped)
            setIsAnimating(true)
        }
    }

    return (
        <motion.div 
        initial={false}
        animate={{
            rotateX: isFliped ? 180: 360,
            alignItems: isFliped ? "end" : "start"
        }}
        transition={{
            duration: 0.2,
            ease: "easeInOut"
        }}
        onAnimationComplete={() => setIsAnimating(false)}
        className='flip-card w-[120px] relative z-[99] h-[131px] lg:h-[230.82px] lg:w-[212.35px] aspect-square bg-primary-lighter border border-primary rounded-3xl drop-shadow-primary-sh duration-200 hover:-translate-y-2 flex' onClick={handleFlip}>
        <div className={`flip-card-front bg-cover bg-center w-full h-[90%] p-10 rounded-3xl ${!isFliped ? "bg-primary" : "transparent"} durantion-700`}>
            <motion.div
                initial={{opacity: 1}}
                animate={{opacity: !isFliped ? 1 : 0}}
                transition={{delay: !isFliped ? 0.4 : 0}}
            >
                <Image fill src="/team.svg" alt='' quality={100} className='bg-cover bg-center rounded-3xl ' />
            </motion.div>
        </div>
        <motion.div
                animate={{opacity: isFliped ? 1 : 0}}
                transition={{delay: isFliped ? .2 : 0}}
                initial={{opacity: 1}}
                className='h-[90%] w-full flip-card-back flex flex-col items-center justify-around -rotate-180  bg-primary rounded-3xl self-end'
            >
                <div>
                    <h3 className='text-center text-rotation text-white font-normal uppercase lg:text-lg text-[14px]'>{props.name}</h3>
                    <h2 className='text-white text-rotation font-semibold uppercase lg:text-xl text-center text-[14px]'>{props.position}</h2>
                </div>
                <div className='text-white text-rotation font-light text-center uppercase text-[14px] lg:block hidden'>
                    <p>{props.slogon?.split(' ')[0]}</p>
                    <p>{props.slogon?.split(' ')[1]}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectedTeam