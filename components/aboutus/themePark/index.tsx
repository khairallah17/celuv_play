"use client"
import React from 'react'
import Image from 'next/image'
import ProjectedButton from '../../button'
import { motion } from "framer-motion"
import AnimatedText from '../../animatedText'
import Partners from '../partners'

const ThemePark = () => {
  return (

    <div className='relative z-[10]'>
        <motion.div
            initial={{y:100, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{delay: .01, duration: 1}}
            viewport={{once: true}}
            className='container mx-auto mt-10 lg:mt-32 flex flex-col item-center gap-12 mb-10 z-[99] relative'>

            {/* <h2 className='uppercase text-primary-light text-5xl lg:text-7xl font-bold text-center'>
                web 3 theme park dao
            </h2> */}
            {/* <Image src="/WEB 3 THEME PARK DAO.png" height={37} width={567} className='self-center' alt='' quality={100} /> */}
            <div className=' lg:bg-web3-park-dao bg-web3-park-dao-mobile lg:h-[37px] lg:w-[567px] h-[59.08px] w-[270.57px] bg-cover bg-center self-center'>

            </div>
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
                {/* <h2 className='uppercase text-primary-light text-5xl font-bold text-center mt-10'>
                    vision & goal
                </h2> */}

                <Image src="/VISION & GOAL.png" className='self-center' height={28} width={296} alt='' quality={100} />

                <div className="text-primary w-[90%] lg:w-[1000px] lg:flex-row flex-col border-secondary drop-shadow-primary bg-white border rounded-xl py-10 self-center px-10 flex items-center gap-6 lg:gap-10">
                    {/* <h4 className='font-bold text-4xl lg:text-6xl uppercase text-start lg:text-right'>
                        &quot; new daily
                    </h4> */}
                    {/* <Image className='self-center' src="/NEW DAILY.png" height={159} width={175} alt='' quality={100} /> */}
                    <div className='lg:bg-new_daily bg-new_daily_mobile h-[21px] w-[202px] self-start'></div>
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
            className='container mx-auto flex w-full items-center overflow-hidden justify-center lg:flex-row flex-col gap-4 my-20 lg:my-56 z-50 relative'>
                
                <div className='flex items-center justify-center gap-5 flex-col'>
                    
                    <div className='lg:bg-phone bg-astian_dapp_mobile lg:items-start lg:justify-start bg-center self-center bg-no-repeat bg-cover lg:w-auto lg:h-[200px] h-[227.01px] w-[249px] lg:aspect-[3.77] justify-center flex items-center lg:pl-4 p-2 px-4 gap-4 overflow-visible'>
                        
                        {/* <Image src={BtnBackground} fill sizes='100vw' quality={100} height={0} width={0} alt='btn background'/> */}
                        {/* <div className=' bg-phone bg-center bg-no-repeat bg-cover w-full h-full'></div> */}
                        <div className='lg:flex-row flex-col flex mt-4 items-center gap-4 lg:ml-10 lg:self-start lg:mt-5 self-center'>
                            <ProjectedButton buttonClass="hover:bg-ios-light duration-200 bg-white border border-ios w-full relative px-5 lg:px-10 rounded-3xl lg:py-3 z-40 h-[66.01px] w-[214.83px] lg:h-24 flex items-center justify-center" className='absolute bg-ios-light border border-ios h-full w-full left-0 rounded-3xl top-3 lg:top-5 ' imageSize='lg:w-[127px] lg:h-[49px] h-[38.86px] w-[200.4px]' addClass='w-full' image='/ios.svg' color='ios'/>
                            <ProjectedButton buttonClass="hover:bg-ios-light duration-200 bg-white border border-ios w-full relative px-5 lg:px-10 rounded-3xl lg:py-3 z-40 h-[66.01px] w-[214.83px] lg:h-24 flex items-center justify-center" className='absolute bg-ios-light border border-ios h-full w-full left-0 rounded-3xl top-3 lg:top-5' imageSize='lg:w-[196px] lg:h-[33px] h-[26.46px] w-[154.21px]' addClass='w-full' image='/android.svg' color='ios'/>
                        </div>
                    </div>

                    <div className='lg:mt-20 lg:px-0 px-5 lg:hidden block'>
                        <div className='bg-play-image-mobile lg:bg-play-image bg-cover flex items-center justify-center bg-center lg:w-auto lg:h-[310.1px] w-[249px] h-[168.09px] lg:aspect-[1.126] relative'>
                            <div className="absolute  hidden lg:flex flex-col items-end right-[33%] top-[82%]">
                                <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='mini-games'/>
                                <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='rewards'/>
                                <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='events'/>
                            </div>
                            <div className='self-center flex items-start lg:h-full lg:w-full lg:pb-6 lg:p-3 p-2 justify-center lg:mt-2 mt-3'>
                                <ProjectedButton buttonClass="hover:bg-play-light px-6 py-4 lg:h-[50%] h-[45%] duration-200 bg-white border border-play lg:w-full relative lg:px-10 lg:rounded-[40px] rounded-3xl g:py-3 z-40 w-[214.44px] h-[94.68px] flex items-center justify-center" className='absolute bg-play-light border border-play h-[105%] lg:h-[50%] w-full left-0 lg:rounded-[40px] rounded-3xl top-3 lg:top-5' imageSize='h-[59.19px] w-[153.71px] lg:w-[195px] lg:h-[75px]' addClass='w-full' image='/play_now.svg' color='play'/>
                            </div>
                        </div>
                    </div>

                    <div className='bg-nft-world-mobile lg:bg-nft-image bg-center bg-no-repeat bg-cover lg:w-auto lg:h-[280px] h-[333.05px] w-[249px] lg:aspect-[2.76] flex items-center justify-center lg:pt-0 pt-8 lg:justify-start gap-4 overflow-visible relative'>
                        <div className='absolute hidden left-[85%] top-[40%] lg:flex flex-col gap-1'>
                            <AnimatedText className='uppercase font-light text-white' text='automining'/>
                            <AnimatedText className='uppercase font-light text-white' text='stacking'/>
                            <AnimatedText className='uppercase font-light text-white' text='mounting'/>
                            <AnimatedText className='uppercase font-light text-white' text='collection'/>
                        </div>
                        <div className="absolute lg:flex hidden top-[93%] left-[16.5%]">
                            <AnimatedText className='uppercase font-light text-white' text='marketplace'/>
                        </div>
                        <div className='flex lg:flex-col flex-col-reverse lg:justify-center items-center lg:items-start gap-5 lg:gap-6 lg:p-0 p-5 lg:mb-11 lg:mt-5 lg:ml-12 w-full lg:w-auto'>
                            <ProjectedButton buttonClass="hover:bg-nft-light duration-200 bg-white border relative w-full border-nft relative lg:px-5 px-3 rounded-3xl lg:py-3 z-40 h-[65.98px] lg:h-20 flex items-center justify-center" className='absolute bg-nft-light border border-nft h-full w-full left-0 rounded-3xl top-3 lg:top-5' imageSize='h-[33.57px] w-[180.91px] lg:w-[242px] lg:h-[42px]' addClass='w-full lg:w-[50%]' image='/opensea.svg' color='nft'/>
                            <div className='flex items-center justify-between lg:flex-row flex-col-reverse w-full h-full lg:gap-3 gap-5 -mt-3 lg:-mt-5'>
                                <ProjectedButton buttonClass="hover:bg-nft-light duration-200 bg-white border border-nft w-full relative lg:px-5 px-3 rounded-3xl lg:py-3 z-40 lg:h-20 h-[65.98px] w-[214.44px] flex items-center justify-center" className='absolute bg-nft-light border border-nft w-full h-full left-0 rounded-3xl top-3 lg:top-5' imageSize='w-[180.09px] h-[35.72px] lg:w-[258px] lg:h-[52px]' addClass='w-full' image='/oneplanet.svg' color='nft'/>
                                <ProjectedButton buttonClass="hover:bg-nft-light duration-200 bg-white border border-nft relative lg:px-7 px-3 py-4 rounded-3xl lg:py-3 z-40 lg:h-28 lg:mb-6 mb-0 h-[85.93px] w-full flex items-center justify-center" className='absolute bg-nft-light border border-nft h-full w-full left-0 rounded-3xl top-3 lg:top-5' imageSize='lg:w-[193px] lg:h-[61px] w-[154.72px] h-[47.97px] lg:h-40 lg:aspect-auto aspect-square' addClass='w-full' image='/nerdimoodi.svg' color='nft' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='lg:mt-20 lg:px-0 px-5 order-2 lg:block hidden'>
                    <div className='bg-play-image-mobile lg:bg-play-image bg-cover flex items-center justify-center bg-center lg:w-auto lg:h-[310.1px] w-[249px] h-[168.09px] lg:aspect-[1.126] relative'>
                        <div className="absolute  hidden lg:flex flex-col items-end right-[33%] top-[82%]">
                            <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='mini-games'/>
                            <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='rewards'/>
                            <AnimatedText className='uppercase text-xs lg:text-lg font-thin lg:font-light text-white' text='events'/>
                        </div>
                        <div className='self-center flex items-start lg:h-full lg:w-full lg:pb-6 lg:p-3 p-2 justify-center lg:mt-2 mt-3'>
                            <ProjectedButton buttonClass="hover:bg-play-light px-6 py-4 lg:h-[50%] h-[45%] duration-200 bg-white border border-play lg:w-full relative lg:px-10 lg:rounded-[40px] rounded-3xl g:py-3 z-40 w-[214.44px] h-[94.68px] flex items-center justify-center" className='absolute bg-play-light border border-play h-[105%] lg:h-[50%] w-full left-0 lg:rounded-[40px] rounded-3xl top-3 lg:top-5' imageSize='h-[59.19px] w-[153.71px] lg:w-[195px] lg:h-[75px]' addClass='w-full' image='/play_now.svg' color='play'/>
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