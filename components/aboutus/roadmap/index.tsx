"use client"
import React, { useRef } from 'react'
import { motion, useAnimationFrame } from "framer-motion"
import Image from 'next/image'

const qs = ["1Q","2Q","3Q","4Q"]

const RoadMap = () => {

    const ref1 = useRef<null | HTMLDivElement>(null)
    const ref2 = useRef<null | HTMLDivElement>(null)
    const ref3 = useRef<null | HTMLDivElement>(null)
    const ref4 = useRef<null | HTMLDivElement>(null)

    useAnimationFrame((time, delta) => {
        if (ref1.current !== null  && ref2.current !== null && ref3.current !== null && ref4.current !== null) {
            const y = (1 + Math.sin(time / 500)) * -10;
            const y2 = (1 + Math.sin(time / 500)) * 10;
            ref1.current.style.transform = `translateY(${y}px)`
            ref2.current.style.transform = `translateY(${y2}px)`
            ref3.current.style.transform = `translateY(${y2}px)`
            ref4.current.style.transform = `translateY(${y}px)`
        }
    })

    return (
        <motion.div
        initial={{y:100, opacity: 0}}
        whileInView={{y:0, opacity: 1}} 
        transition={{delay: .1, duration: 1}}
        viewport={{once: true}}
        className='py-52 pb-96 relative w-full overflow-hidden'>

            <div className='bg-cover bg-center opacity-50 bg-roadmap w-full z-[-1] h-full absolute top-56 '>

            </div>

            <div className='container mx-auto flex flex-col items-center justify-center'>
                {/* <h2 className='font-bold text-primary text-center text-4xl lg:text-6xl uppercase'>roadmap</h2> */}

                <Image src="/ROADMAP.png" className='self-center' height={28} width={210} alt='' />

                <div
                className="flex items-center justify-center flex-wrap gap-y-10 mt-20 px-10">
                    <div ref={ref1} className='inline-block'>
                        <Image src="/1Q.svg" height={461.6} width={529.22} className='grow-0 drop-shadow-card-sh' alt='q1' />
                    </div>
                    <div ref={ref2} className='inline-block'>
                        <Image src="/2Q.svg" height={461.6} width={529.22} className='grow-0 drop-shadow-card-sh' alt='q2' />
                    </div>
                    <div ref={ref3} className='inline-block'>
                        <Image src="/3Q.svg" height={461.6} width={529.22} className='grow-0 drop-shadow-card-sh' alt='q3' />
                    </div>
                    <div ref={ref4} className='inline-block'>
                        <Image src="/4Q.svg" height={461.6} width={529.22} className='grow-0 drop-shadow-card-sh' alt='q4' />
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default RoadMap