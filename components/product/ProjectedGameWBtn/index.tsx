import React from 'react'
import Image from 'next/image'
import ProjectedButton from '@/components/button'

type Game = {
    title: string,
    subtitle: string,
    image: string,
    cta: string,
    btnClass: string,
    btnClass2: string
}

const ProjectedGameWBtn = (props:Game) => {
    return (
        <div className='bg-astian-lighter rounded-x-btn flex flex-col items-center p-5 justify-center border border-astian gap-6 pb-10 drop-shadow-game-bx relative z-auto w-[365px] h-[588px]'>
            <div className="absolute bg-astian-normal h-full w-[100.3%] top-10 border border-astian left-[-1px] z-[-1] rounded-[40px]"></div>
            <Image src={`/${props.title}.svg`} alt='' height={0} width={0} className="w-auto h-auto" />
            <p className='w-[60%] text-center font-medium text-astian text-md uppercase'>
                {props.subtitle}
            </p>
            <div className='bg-astian-dark rounded-[40px] w-3/4 h-auto aspect-square'>
                <div className="h-[90%] relative w-full">
                    <Image fill src={`/${props.image}.svg`} alt='' className='h-full w-full rounded-[40px] object-cover bg-center' />
                </div>
            </div>
            <ProjectedButton image={`/${props.cta}.svg`} buttonClass={props.btnClass} className={props.btnClass2} imageSize='' color='' addClass='' />
        </div>
    )
}

export default ProjectedGameWBtn