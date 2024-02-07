import React from 'react'
import ProjectedGameWBtn from '../ProjectedGameWBtn'
import Image from 'next/image'

const Games = () => {
  return (
    <div className="relative py-20">
        {/* <Image fill src="/games_bg_left.png" quality={100} className='bg-cover bg-center left-0 top-0 -z-10' alt=''/>
        <Image fill src="/games_bg_right.png" quality={100} className='bg-cover bg-center left-full top-0 -z-10' alt=''/> */}
        <div className="absolute bg-gradient-to-b from-[#DEEFFF] to-transparent w-full h-14 top-0"></div>
        <div className='bg-games_left bg-cover bg-center absolute left-0 top-0 w-[597px] h-[1120px] -z-[10]'></div>
        <div className='bg-games_right bg-cover bg-center absolute right-0 top-0 w-[597px] h-[1120px] -z-[10]'></div>
        <div className="container mx-auto flex items-center justify-center flex-wrap w-full gap-6 gap-y-16 my-10 mb-20 px-10  lg:px-52 z-[999] realtive">
            <ProjectedGameWBtn title='nft_game' subtitle='collection / mining staking / mounting' image='nft_game_img' btnClass='hover:bg-nft-light duration-200 bg-secondary border border-nft w-fit relative px-10 rounded-full lg:rounded-btn py-3 z-40 h-20 flex w-full items-center justify-center' btnClass2='absolute bg-nft-light border border-nft w-full left-0 rounded-full lg:rounded-btn top-5 h-[73%] lg:h-[77%]' cta='nft_btn' imageSIze='h-[41.6px] w-[231.15px]' />
            <ProjectedGameWBtn title='play_game' subtitle='p2e / minigame' image='play_game_img' btnClass='hover:bg-play-light duration-200 bg-play border border-play w-fit relative px-10 rounded-full lg:rounded-btn py-3 z-40 h-20 w-full flex items-center justify-center' btnClass2='absolute bg-play-light border border-play w-full left-0 rounded-full lg:rounded-btn top-5 h-[73%] lg:h-[77%]' cta='play_btn' imageSIze='h-[42.09px] w-[165.62px]' />
            <ProjectedGameWBtn title='ipuniverse_game' subtitle='nerdi moodi detective lydia joe' image='ipuniverse_img' btnClass='hover:bg-astian-lighter duration-200 bg-white border border-astian w-fit relative px-10 rounded-full lg:rounded-btn py-3 z-40 h-20 flex items-center justify-center' btnClass2='absolute bg-astian-light border border-astian w-full left-0 rounded-full lg:rounded-btn top-5 h-[73%] lg:h-[77%]' cta='coming_soon' imageSIze='h-[34.95px] w-[288.14px]' />
            <ProjectedGameWBtn title='sociallife_game' subtitle='tarot fortune' image='sociallife_img' btnClass='hover:bg-astian-lighter duration-200 bg-white border border-astian w-fit relative px-10 rounded-full lg:rounded-btn py-3 z-40 h-20 flex items-center justify-center' btnClass2='absolute bg-astian-light border border-astian w-full left-0 rounded-full lg:rounded-btn top-5 h-[75%] lg:h-[70%]' cta='coming_soon' imageSIze='w-[286.71px] h-[34.83px]' />
        </div>
    </div>
  )
}

export default Games