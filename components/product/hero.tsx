import React from 'react'
import Image from 'next/image'
import ProjectedGame from './ProjectedGame'
import ProjectedGameWBtn from './ProjectedGameWBtn'

const Hero = () => {
  return (
    <div className='flex w-full h-full justify-center relative flex-col bg-[#DEEFFF] py-20'>
        <Image fill src="/astian_clouds.svg" alt='couds' className='bg-cover bg-center h-full w-full z-10' />
        
        <div className='container mx-auto flex flex-col justify-center relative z-50 gap-10'>

            <Image src="/astian_logo.svg" height={0} width={0} className='h-1/3 w-auto' alt='asitan' />
            <h3 className='uppercase font-bold text-7xl bg-gradient-to-r from-astian-light to-astian bg-clip-text text-transparent text-center'>astian dapp</h3>
            <p className='text-third font-normal text-center text-lg'>
                Our super dApp <span className='font-bold'>&quot;ASTIAN&quot;</span> serves as the cornerstone of our platform <br />
                offering a range of products and services.
            </p>

            <div className='flex items-center gap-4 justify-center'>
                <button className='border border-astian hover:bg-astian hover:text-white duration-200 drop-shadow-astian-sh bg-white px-8 py-2 text-astian uppercase rounded-lg'>
                    ios
                </button>
                <button className='border border-astian hover:bg-astian hover:text-white duration-200 drop-shadow-astian-sh bg-white px-8 py-2 text-astian uppercase rounded-lg'>
                    android
                </button>
            </div>

            <div className='flex items-center justify-center gap-6 mt-16'>
                <ProjectedGame image1='nft_product' image2='nft_name' />
                <ProjectedGame image1='game_product' image2='game_name' />
                <ProjectedGame image1='ipuniverse_product' image2='ipuniverse_name' />
                <ProjectedGame image1='social_life_product' image2='social_life_name' />
            </div>

            <div className='flex items-cente justify-center gap-10'>
                <p className='uppercase text-xl text-astian'>all in one platform</p>
                <p className='uppercase text-xl text-astian'>simple and easy interface</p>
                <p className='uppercase text-xl text-astian'>dashboard</p>
            </div>

            <div className="flex items-center justify-center">
                <ProjectedGameWBtn title='nft_game' subtitle='collection / mining staking / mounting' image='nft_game_img' btnClass='' btnClass2='' cta='nft_btn' />
            </div>
    
        </div>

    </div>
  )
}

export default Hero