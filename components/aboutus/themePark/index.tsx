"use client"
import React from 'react'
import Image from 'next/image'
import ProjectedButton from '../../button'
import { motion } from "framer-motion"
import AnimatedText from '../../animatedText'
import Partners from '../partners'

const ThemePark = () => {
  return (

    <div className=''>
        <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{delay: .01, duration: 1}}
            viewport={{once: true}}
            className='container mx-auto mt-32 flex flex-col item-center gap-12 mb-10 z-[99] relative'>

            <h2 className='uppercase text-primary-light text-5xl lg:text-7xl font-bold text-center'>
                web 3 theme park dao
            </h2>
            <div className="text-third text-left lg:text-center w-[90%] lg:w-[1000px] border-secondary drop-shadow-primary bg-white border rounded-xl py-10 leading-7 self-center px-10">
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
            transition={{delay: .01, duration: 1}}
            viewport={{once: true}}
            className="container mx-auto flex flex-col item-center gap-12 mb-10 z-[99] relative">
                <h2 className='uppercase text-primary-light text-5xl font-bold text-center mt-10'>
                    vision & goal
                </h2>

                <div className="text-primary w-[90%] lg:w-[1000px] lg:flex-row flex-col border-secondary drop-shadow-primary bg-white border rounded-xl py-10 self-center px-10 flex items-center gap-10">
                    <h4 className='font-bold text-4xl lg:text-6xl uppercase text-start lg:text-right'>
                        &quot; new daily
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
            transition={{delay: .01, duration: 1}}
            viewport={{once: true}}
            className='container mx-auto flex lg:items-center items-start justify-center lg:flex-row flex-col gap-4 overflow-visible my-20 lg:my-56 z-50 relative'>
                
                <div>
                    
                    <div className='bg-phone bg-center bg-no-repeat bg-cover w-auto lg:h-[200px] h-[96px] aspect-[3.77] flex items-center pl-4 gap-4 overflow-visible'>
                        
                        {/* <Image src={BtnBackground} fill sizes='100vw' quality={100} height={0} width={0} alt='btn background'/> */}
                        {/* <div className=' bg-phone bg-center bg-no-repeat bg-cover w-full h-full'></div> */}
                        <div className='flex items-center gap-4 lg:-mt-3 mt-3 ml-2 mb-11 lg:ml-10'>
                            <ProjectedButton buttonClass="hover:bg-ios-light duration-200 bg-white border border-ios w-full relative px-5 lg:px-10 rounded-xl lg:rounded-3xl lg:py-3 z-40 h-10 lg:h-24 flex items-center justify-center" className='absolute bg-ios-light border border-ios h-full w-full left-0 rounded-xl lg:rounded-3xl top-3 lg:top-5' imageSize='lg:w-[127px] lg:h-[49px] w-14' addClass='w-full' image='/ios.svg' color='ios'/>
                            <ProjectedButton buttonClass="hover:bg-ios-light duration-200 bg-white border border-ios w-full relative px-5 lg:px-10 rounded-xl lg:rounded-3xl lg:py-3 z-40 h-10 lg:h-24 flex items-center justify-center" className='absolute bg-ios-light border border-ios h-full w-full left-0 rounded-xl lg:rounded-3xl top-3 lg:top-5' imageSize='lg:w-[196px] lg:h-[33px] w-24' addClass='w-full' image='/android.svg' color='ios'/>
                        </div>
                    </div>

                    <div className='bg-nft-image bg-center bg-no-repeat bg-cover w-auto lg:h-[280px] h-[160px] aspect-[2.76] flex items-center justify-start gap-4 overflow-visible relative'>
                        <div className='absolute  hidden left-[85%] top-[40%] lg:flex flex-col gap-1'>
                            <AnimatedText className='uppercase font-light text-white' text='automining'/>
                            <AnimatedText className='uppercase font-light text-white' text='stacking'/>
                            <AnimatedText className='uppercase font-light text-white' text='mounting'/>
                            <AnimatedText className='uppercase font-light text-white' text='collection'/>
                        </div>
                        <div className="absolute lg:flex hidden top-[93%] left-[16.5%]">
                            <AnimatedText className='uppercase font-light text-white' text='marketplace'/>
                        </div>
                        <div className='flex flex-col lg:justify-center justify-start items-start gap-4 lg:gap-6 ml-6 mr-[88px] mb-6 lg:mb-11 lg:mt-5 lg:ml-12 w-full lg:w-auto'>
                            <ProjectedButton buttonClass="hover:bg-nft-light duration-200 bg-white border relative w-full border-nft relative lg:px-5 rounded-2xl px-3 lg:rounded-3xl lg:py-3 z-40 h-10 lg:h-20 flex items-center justify-center" className='absolute bg-nft-light border border-nft h-full w-full left-0 rounded-2xl lg:rounded-3xl top-3 lg:top-5' imageSize='w-40 lg:w-[242px] lg:h-[42px]' addClass='w-[50%]' image='/opensea.svg' color='nft'/>
                            <div className='flex items-center justify-between w-full h-full lg:gap-3 gap-2 -mt-3 lg:-mt-5'>
                                <ProjectedButton buttonClass="hover:bg-nft-light duration-200 bg-white border border-nft w-full relative lg:px-5 px-3 lg:rounded-3xl rounded-2xl lg:py-3 z-40 lg:h-20 h-12 flex items-center justify-center" className='absolute bg-nft-light border border-nft h-full w-full left-0 rounded-2xl lg:rounded-3xl top-3 lg:top-5' imageSize='w-[138px] h-[27px] lg:w-[258px] lg:h-[52px]' addClass='w-full' image='/oneplanet.svg' color='nft'/>
                                <ProjectedButton buttonClass="hover:bg-nft-light duration-200 bg-white border border-nft relative lg:px-7 px-3 lg:rounded-3xl rounded-2xl lg:py-3 z-40 lg:h-28 lg:mb-6 mb-0 h-16 w-full flex items-center justify-center" className='absolute bg-nft-light border border-nft h-full w-full left-0 rounded-2xl lg:rounded-3xl top-3 lg:top-5' imageSize='lg:w-[193px] lg:h-[61px] w-[104px] h-[32px] lg:h-40 lg:aspect-auto aspect-square' addClass='w-full' image='/nerdimoodi.svg' color='nft' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='lg:mt-20 lg:px-0 px-5'>
                    <div className=' bg-play-image bg-cover bg-center w-auto lg:h-[310.1px] h-[166.1px] aspect-[1.126] relative'>
                        <div className="absolute flex flex-col items-end right-[33%] top-[82%]">
                            <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='mini-games'/>
                            <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='rewards'/>
                            <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='events'/>
                        </div>
                        <div className='self-center h-full flex items-start lg:pb-6 lg:p-3 p-2 justify-center'>
                            <ProjectedButton buttonClass="hover:bg-play-light lg:h-[50%] h-[45%] duration-200 bg-white border border-play lg:w-full relative lg:px-10 lg:rounded-[40px] rounded-2xl lg:py-3 z-40 w-full flex items-center justify-center" className='absolute bg-play-light border border-play h-[45%] lg:h-[50%] w-full left-0 rounded-2xl lg:rounded-[40px] top-3 lg:top-5' imageSize='h-[40px] w-[105px] lg:w-[195px] lg:h-[75px]' addClass='w-full' image='/play_now.svg' color='play'/>
                        </div>
                    </div>
                </div>


            </motion.div>


            <Partners/>

            <div className='absolute bottom-0 w-full h-[400px] bg-gradient-to-b to-white from-transparent'></div>

            <div className='absolute z-10 lg:top-1/3 top-[20%] overflow-hidden'>
                <Image src="/CLOUD.svg" height={1080} width={1920} alt='clouds' quality={100} className='w-auto h-auto'/>
            </div>
        </div>

    </div>

  )
}
export default ThemePark