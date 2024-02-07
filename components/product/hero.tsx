"use client"
import React from 'react'
import Image from 'next/image'
import ProjectedGame from './ProjectedGame'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='flex w-full h-full justify-center relative flex-col bg-[#DEEFFF] py-20'>
        <Image fill src="/astian_clouds.svg" alt='couds' className='bg-cover bg-center h-full w-full z-10' />
        
        <div className='container mx-auto flex flex-col justify-center relative z-50 gap-10'>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: .01, duration: .3}}
                viewport={{once: true}}
                className='flex w-full justify-center'
            >
                <Image src="/astian_logo.svg" height={0} width={0} className='h-1/3 w-auto' alt='asitan' />
            </motion.div>
            <motion.h3
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 30}}
            viewport={{once: true}}
            transition={{delay: .02, duration: .3}}
            className='uppercase font-bold text-7xl bg-gradient-to-r from-astian-light to-astian bg-clip-text text-transparent text-center'>astian dapp</motion.h3>
            <motion.p
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 30}}
            viewport={{once: true}}
            transition={{delay: .03, duration: .3}}
            className='text-third font-normal text-center text-lg'>
                Our super dApp <span className='font-bold'>&quot;ASTIAN&quot;</span> serves as the cornerstone of our platform <br />
                offering a range of products and services.
            </motion.p>

            <motion.div
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 30}}
            viewport={{once: true}}
            transition={{delay: .04, duration: .3}}
            className='flex items-center gap-4 justify-center'>
                <button className='border border-astian hover:bg-astian hover:text-white duration-200 drop-shadow-astian-sh bg-white px-8 py-2 text-astian uppercase rounded-lg'>
                    ios
                </button>
                <button className='border border-astian hover:bg-astian hover:text-white duration-200 drop-shadow-astian-sh bg-white px-8 py-2 text-astian uppercase rounded-lg'>
                    android
                </button>
            </motion.div>

            <motion.div
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 30}}
            viewport={{once: true}}
            transition={{delay: .05, duration: .3}}
            className='grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-1 grid-rows-1 gap-2 lg:gap-6 mt-16 flex-wrap lg:px-0 px-5'>
                <ProjectedGame image1='nft_product' image2='nft_name' nameSize="h-[52px] w-[155px]" />
                <ProjectedGame image1='game_product' image2='game_name' nameSize="h-[43px] w-[174px]" />
                <ProjectedGame image1='ipuniverse_product' image2='ipuniverse_name' nameSize="h-[63px] w-[181px]" />
                <ProjectedGame image1='social_life_product' image2='social_life_name' nameSize="h-[78px] w-[178px]" />
            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.06, duration: .3}}
            className='lg:flex hidden items-center justify-center gap-10'>
                <p className='uppercase text-xl text-astian'>all in one platform</p>
                <p className='uppercase text-xl text-astian'>simple and easy interface</p>
                <p className='uppercase text-xl text-astian'>dashboard</p>
            </motion.div>
    
        </div>

    </div>
  )
}

export default Hero