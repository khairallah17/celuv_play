import React from 'react'
import Image from 'next/image'
import ProjectedButton from '../button'

const ThemePark = () => {
  return (

    <div className=''>
        <div className='container mx-auto mt-32 flex flex-col item-center gap-12 mb-10 z-[99] relative'>

            <h2 className='uppercase text-primary-light text-7xl font-bold text-center'>
                web 3 theme park dao
            </h2>
            <div className="text-third text-center w-full lg:w-[1000px] border-secondary drop-shadow-primary bg-white border rounded-xl py-10 leading-7 self-center px-10">
                <p className='font-light'>
                    Our aim is to create a <span className='font-bold'>WEB3 Theme Park Dao</span> focusing on entertainement and DeFi.
                </p>
                <p className='font-light'>
                    At the heart of our endeavors is our flagship <span className='font-bold'>dApp "ASTIAN"</span>
                </p>
            </div>
        </div>

        <div className='bg-linear-secondary relative'>

            <div className='absolute w-full h-[1000px] bg-gradient-to-b from-white to-transparent'></div>

            <div className="container mx-auto flex flex-col item-center gap-12 mb-10 z-[99] relative">
                <h2 className='uppercase text-primary-light text-7xl font-bold text-center'>
                    vision & goal
                </h2>

                <div className="text-primary w-full lg:w-[1000px] border-secondary drop-shadow-primary bg-white border rounded-xl py-10 self-center px-10 flex items-center gap-10">
                    <h4 className='font-bold text-6xl uppercase text-right'>
                        "<br />new<br />daily
                    </h4>
                    <div className='text-third flex flex-col gap-4 font-light'>
                        <p>
                            <span className='font-bold'>Dismantling the bariers</span> associate with the crypto and blockchain realm, both physically and psychologically
                        </p>
                        <p>
                            Our objective is to infuse the WEB 3 era with <span className='font-bold'>enjoyment and accessibility</span>, seamlessly integrating these concepts into people's <span className='font-bold'>daily life</span>.
                        </p>
                        <p>
                            We aspire to serve as the prmier gateway into the world of the WEB 3 and the blockchain ecosystem.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <ProjectedButton/>
            </div>

            <div>
                <Image src="/CLOUD.svg" height={1080} width={1920} alt='clouds' quality={100} className='w-auto h-auto'/>
            </div>
        </div>

    </div>

  )
}
export default ThemePark