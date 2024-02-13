"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import "./style.css"

type Team = {
    image1: string,
    image2: string,
    nameSize?: string,
    paddingImg? :string
}
const ProjectedGame = (props: Team) => {
    const [isFliped, setIsFliped] = useState<boolean>(false)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    
    const handleFlip = () => {
        if (!isAnimating) {
            setIsFliped(!isFliped)
            setIsAnimating(true)
        }
    }

    return (
        <div className='flip-card h-[155.82px] lg:h-[202.31px] w-auto aspect-square lg:aspect-[1.06] p-[1px] bg-astian border border-astian rounded-3xl drop-shadow-astian-sh duration-200 hover:-translate-y-2' onClick={handleFlip}>
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
                className='bg-astian-lighter w-full h-[90%] rounded-[22px] flip-card-inner'>
                    <div className="flip-card-back w-full h-full rounded-[22px]">
                    <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: isFliped ? 1 : 0}}
                            transition={{delay: isFliped ? .2 : 0}}
                            className='h-full flex flex-col items-center justify-around rotate-180 rounded-[22px] w-full'
                        >
                            <Image height={0} width={0} src={`/${props.image1}.svg`} alt='' quality={100} className='h-full object-cover w-full rounded-[22px]' />
                        </motion.div>
                    </div>
                    <div className={`"flip-card-front bg-cover bg-center flex items-center justify-center w-full h-full lg:p-10 ${props.paddingImg ? props.paddingImg : "p-5"} rounded-[22px] bg-astian-lighter"`}>
                        <motion.div
                            initial={{opacity: 1}}
                            animate={{opacity: !isFliped ? 1 : 0}}
                            transition={{delay: !isFliped ? 0.4 : 0}}
                        >
                            <Image height={0} width={0} src={`/${props.image2}.svg`} alt='' quality={100} className={`${props.nameSize}`} />
                        </motion.div>
                    </div>
            </motion.div>
        </div>
    )
}

export default ProjectedGame