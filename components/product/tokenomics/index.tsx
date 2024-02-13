import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/animatedText'

const TokenOmic = () => {
  return (
    <div className='mt-32 bg-gradient-to-b from-transparent to-secondary-light h-ful w-ful relative overflow-hidden'>
        <Image fill src="/CLOUD.svg" alt='' className='bg-center bg-cover !top-[800px] opacity-55' />
        <div className='absolute top-32 left-0 w-full h-full bg-gradient-to-b from-white to-transparent -z-10'></div>
        <div className='container mx-auto flex items-center justify-center flex-col gap-4 pb-52'>
            <Image src="/tokenomics_logo.svg" height={0} width={0} alt='' className='w-auto h-auto' />
            <h2 className='text-secondary font-bold text-4xl lg:text-7xl uppercase'>tokenomics</h2>
            <ul className='text-third text-opacity-70 text-center flex flex-col gap-1 text-sm lg:px-0 px-4 lg:text-lg font-normal'>
                <li>CELA, CELB are digital assets built on the Polygon-Network,</li>
                <li>circulating our ecosystem.</li>
                <li>They can be obtained thorough contributions</li>
                <li>to the ecosystem as a reward.</li>
            </ul>

            <h2 className='text-secondary text-2xl uppercase font-light tracking-wider mt-10'>
                <span className='font-bold'>cela </span>
                governance 
            </h2>

            <div className='relative h-full flex items-center justify-center flex-col gap-4 w-fit mb-10'>
                {/* <Image fill src="/ecosystem_68.svg" height={0} width={0} alt='' className='w-auto h-auto' /> */}
                <div className='bg-ecosystem-68-mobile lg:bg-ecosystem-68 bg-cover bg-center h-[210.13px] w-[315px] lg:h-[359.68px] lg:w-[708.43px]'></div>

                {/* DESKTOP ECOSYSTEM 68 TEXT */}
                <div className='lg:flex hidden'>
                    <AnimatedText className='text-secondary absolute -left-32 top-16' el='p' text='NFT Marketplace' />
                    <ul className='text-secondary absolute -left-28 top-32'>
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Mining' />
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Staking' />
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Mouting' />
                    </ul>
                </div>
                <div className='lg:flex hidden'>
                    <ul className='absolute top-60 gap-[2px] left-12 flex flex-col items-start text-start'>
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='swap pool LP incentive 10.2' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='operation and partners 9.2' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='ecosysetm expansion & reserve 6.1' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='content & community 6.1' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='first pool 0.02' />
                    </ul>
                </div>
                <div className='lg:flex hidden'>
                    <ul className='absolute top-6 gap-[55px] -right-40 flex flex-col items-start text-start'>
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='DeFi DAO Governance' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='DApp Currency' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='Crypto Swap' />
                    </ul>
                </div>

                {/* MOBILE ECOSYSTEM 68 TEXT */}
                <div className='lg:hidden flex'>
                    <ul className='absolute top-[133px] text-[11px] left-2 flex flex-col items-start text-start'>
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='swap pool LP incentive 10.2' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='operation and partners 9.2' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='ecosysetm expansion & reserve 6.1' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='content & community 6.1' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='first pool 0.02' />
                    </ul>
                </div>
                <div className='lg:hidden flex gap-4'>
                    <ul>
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Marketplace' />
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Mining' />
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Staking' />
                        <AnimatedText className='text-secondary font-light' el='li' text='NFT Mouting' />
                    </ul>
                    <ul>
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='DeFi DAO Governance' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='DApp Currency' />
                        <AnimatedText className='text-secondary font-light capitalize text-start' el='li' text='Crypto Swap' />
                    </ul>
                </div>

            </div>

            <h2 className='text-secondary text-2xl uppercase font-light tracking-wider'>
                <span className='font-bold'>celb </span>
                utility / infrastructure
            </h2>

            <div className='relative h-full flex items-center justify-center w-fit mb-10'>
                {/* <Image src="/ecosystem_50.svg" height={0} width={0} alt='' className='w-auto h-auto' /> */}
                <div className='bg-ecosystem-50-mobile lg:bg-ecosystem-50 bg-cover bg-center h-[258.93px] w-[315px] lg:h-[413.56px] lg:w-[673.1px]'></div>
                <div className='lg:flex hidden'>
                    <ul className='text-secondary absolute -left-40 gap-12 flex flex-col items-start top-2'>
                        <AnimatedText className='text-secondary font-light' el='li' text='DApp Currency' />
                        <AnimatedText className='text-secondary font-light' el='li' text='Partner Platform Currency' />
                        <AnimatedText className='text-secondary font-light' el='li' text='Crypto Swap' />
                    </ul>
                </div>
                <div className='lg:flex hidden'>
                    <ul className='absolute w-full top-0 left-0'>
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[215px] gap-1 left-20' el='li' text='Private Sale 15' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[243px] gap-1 left-20' el='li' text='Marketing 9' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[270px] gap-1 left-20' el='li' text='Team 8' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[295px] gap-1 left-20' el='li' text='Strategic pertmers 6' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[320px] gap-1 left-20' el='li' text='Operation 4' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[347px] gap-1 left-20' el='li' text='Advisor & Partners 4' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[373px] gap-1 left-20' el='li' text='Reserve 3' />
                        <AnimatedText className='absolute text-secondary font-light capitalize text-start top-[400px] gap-1 left-20' el='li' text='IDO & Public 1' />
                    </ul>
                </div>
                <div className='lg:flex hidden'>
                    <ul className='absolute top-0 left-0 w-full'>
                        <AnimatedText className='text-secondary font-light capitalize text-start absolute left-[102%] top-10 w-full' el='li' text='CEX Listing' />
                        <AnimatedText className='text-secondary font-light capitalize text-start absolute left-[102%] top-32 w-full' el='li' text='Exclusive AirDrop' />
                    </ul>
                </div>
            </div>

            <p className='text-secondary text-xl font-light uppercase'>*celb is scheduled to be listed on ces 1q</p>
        </div>

    </div>
  )
}

export default TokenOmic