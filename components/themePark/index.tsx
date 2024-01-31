"use client"
import React from 'react'
import Image from 'next/image'
import ProjectedButton from '../button'
import BtnBackground from "@/public/btn-background.svg"
import { motion } from "framer-motion"

const ThemePark = () => {
  return (

    <div className=''>
        <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{delay: 1, duration: 1}}
            className='container mx-auto mt-32 flex flex-col item-center gap-12 mb-10 z-[99] relative'>

            <h2 className='uppercase text-primary-light text-7xl font-bold text-center'>
                web 3 theme park dao
            </h2>
            <div className="text-third text-center w-full lg:w-[1000px] border-secondary drop-shadow-primary bg-white border rounded-xl py-10 leading-7 self-center px-10">
                <p className='font-light'>
                    Our aim is to create a <span className='font-bold'>WEB3 Theme Park Dao</span> focusing on entertainement and DeFi.
                </p>
                <p className='font-light'>
                    At the heart of our endeavors is our flagship <span className='font-bold'>dApp &quot;ASTIAN&quot;</span>
                </p>
            </div>
        </motion.div>

        <div className='bg-linear-secondary relative'>

            <div className='absolute w-full h-[1000px] bg-gradient-to-b from-white to-transparent'></div>

            <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity: 1}} 
            transition={{delay: 1, duration: 1}}
            className="container mx-auto flex flex-col item-center gap-12 mb-10 z-[99] relative">
                <h2 className='uppercase text-primary-light text-7xl font-bold text-center'>
                    vision & goal
                </h2>

                <div className="text-primary w-full lg:w-[1000px] border-secondary drop-shadow-primary bg-white border rounded-xl py-10 self-center px-10 flex items-center gap-10">
                    <h4 className='font-bold text-6xl uppercase text-right'>
                        &quot;<br />new<br />daily
                    </h4>
                    <div className='text-third flex flex-col gap-4 font-light'>
                        <p>
                            <span className='font-bold'>Dismantling the bariers</span> associate with the crypto and blockchain realm, both physically and psychologically
                        </p>
                        <p>
                            Our objective is to infuse the WEB 3 era with <span className='font-bold'>enjoyment and accessibility</span>, seamlessly integrating these concepts into people&apos;s <span className='font-bold'>daily life</span>.
                        </p>
                        <p>
                            We aspire to serve as the prmier gateway into the world of the WEB 3 and the blockchain ecosystem.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{delay: 1, duration: 1}}
            className='container mx-auto grid grid-rows-2 overflow-visible'>
                
                <div>
                    
                    <div className='bg-phone bg-center bg-no-repeat bg-cover w-auto h-[200px] aspect-[3.77] flex items-center pl-4 gap-4 overflow-visible'>
                        
                        {/* <Image src={BtnBackground} fill sizes='100vw' quality={100} height={0} width={0} alt='btn background'/> */}
                        {/* <div className=' bg-phone bg-center bg-no-repeat bg-cover w-full h-full'></div> */}
                        <div className='flex items-center gap-4 mt-[-30px] ml-10'>
                            <ProjectedButton imageSize='' addClass='mt-[-15px]' image='/ios.svg' color='ios'/>
                            <ProjectedButton imageSize='' addClass='mt-[-15px]' image='/android.svg' color='ios'/>
                        </div>
                    </div>

                    <div className='bg-nft-image bg-center bg-no-repeat bg-cover w-auto h-[280px] aspect-[2.76] flex items-center justify-start gap-4 overflow-visible'>
                        <div className='flex flex-col items-start gap-6 mt-[-30px] ml-12'>
                            <ProjectedButton imageSize='w-48' addClass='mt-[-20px]' image='/opensea.svg' color='nft'/>
                            <div className='flex items-center gap-3'>
                                <ProjectedButton imageSize='w-56' addClass='mt-[-20px]' image='/oneplanet.svg' color='nft'/>
                                <ProjectedButton imageSize='h-40 w-40' addClass='mt-[-20px]' image='/nerdimoodi.svg' color='nft' />
                            </div>
                        </div>
                    </div>

                </div>

                <div></div>


            </motion.div>

            <div>
                <Image src="/CLOUD.svg" height={1080} width={1920} alt='clouds' quality={100} className='w-auto h-auto'/>
            </div>
        </div>

    </div>

  )
}
export default ThemePark