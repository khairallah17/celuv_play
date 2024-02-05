import React from 'react'
import ProjectedGameWBtn from '../ProjectedGameWBtn'
import Image from 'next/image'

const Games = () => {
  return (
    <div className="relative py-20">
        <Image fill src="/games_bg.png" quality={100} className='bg-cover bg-center left-0 top-0 -z-10' alt=''/>
        <div className="container mx-auto flex items-center justify-center flex-wrap w-full gap-6 gap-y-16 my-10 mb-20  px-52 z-[999] realtive">
          <div className="absolute bg-gradient-to-b from-[#DEEFFF] to-transparent h-1/2 bg-opacity-50 w-full -top-10 -z-10"></div>
            <ProjectedGameWBtn title='nft_game' subtitle='collection / mining staking / mounting' image='nft_game_img' btnClass='hover:bg-nft-light duration-200 bg-secondary border border-nft w-fit relative px-10 rounded-btn py-3 z-40 h-20 flex items-center justify-center' btnClass2='absolute bg-nft-light border border-nft h-full w-full left-0 rounded-btn top-5' cta='nft_btn' />
            <ProjectedGameWBtn title='play_game' subtitle='p2e / minigame' image='play_game_img' btnClass='hover:bg-play-light duration-200 bg-play border border-play w-fit relative px-10 rounded-btn py-3 z-40 h-20 flex items-center justify-center' btnClass2='absolute bg-play-light border border-play h-full w-full left-0 rounded-btn top-5' cta='play_btn' />
            <ProjectedGameWBtn title='ipuniverse_game' subtitle='nerdi moodi detective lydia joe' image='ipuniverse_img' btnClass='hover:bg-astian-lighter duration-200 bg-white border border-astian w-fit relative px-10 rounded-btn py-3 z-40 h-20 flex items-center justify-center' btnClass2='absolute bg-astian-light border border-astian h-full w-full left-0 rounded-btn top-5' cta='coming_soon' />
            <ProjectedGameWBtn title='sociallife_game' subtitle='tarot fortune' image='sociallife_img' btnClass='hover:bg-astian-lighter duration-200 bg-white border border-astian w-fit relative px-10 rounded-btn py-3 z-40 h-20 flex items-center justify-center' btnClass2='absolute bg-astian-light border border-astian h-full w-full left-0 rounded-btn top-5' cta='coming_soon' />
        </div>
    </div>
  )
}

export default Games