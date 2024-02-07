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
        <div className='flip-card w-[120px] h-[131px] lg:h-80 lg:w-auto aspect-square bg-primary-lighter border border-primary rounded-3xl drop-shadow-primary-sh duration-200 hover:-translate-y-2' onClick={handleFlip}>
            <motion.div
                initial={false}
                animate={{
                    rotateX: isFliped ? 180: 360
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                }}
                onAnimationComplete={() => setIsAnimating(false)}
                className='bg-primary w-full h-[90%] rounded-3xl flip-card-inner'>
                    <div className="flip-card-back w-full h-full rounded-3xl bg-white">
                    <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: isFliped ? 1 : 0}}
                            transition={{delay: isFliped ? .2 : 0}}
                            className='h-full flex flex-col items-center justify-around -rotate-180'
                        >
                            <div>
                                <h3 className='text-center rotate-180 text-rotation text-white font-normal uppercase text-lg'>{props.name}</h3>
                                <h2 className='text-white rotate-180 text-rotation font-semibold uppercase text-xl text-center'>{props.position}</h2>
                            </div>
                            <div className='text-white rotate-180 text-rotation font-light text-center uppercase'>
                                <p>{props.slogon?.split(' ')[0]}</p>
                                <p>{props.slogon?.split(' ')[1]}</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flip-card-front bg-cover bg-center w-full h-full p-10 rounded-3xl bg-primary">
                        <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: !isFliped ? 1 : 0}}
                            transition={{delay: !isFliped ? 0.4 : 0}}
                        >
                            <Image fill src="/team.svg" alt='' quality={100} className='bg-cover bg-center rounded-3xl ' />
                        </motion.div>
                    </div>
            </motion.div>
        </div>
    )
}

export default ProjectedTeam