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
        <div className='bg-astian-lighter rounded-[40px] flex flex-col items-center p-5 justify-center gap-4'>
            <Image src={`/${props.title}.svg`} alt='' height={0} width={0} className="w-auto h-auto" />
            <p className='w-[60%] text-center font-medium text-astian text-xl uppercase'>
                {props.subtitle}
            </p>
            <div className='bg-astian-dark rounded-[40px] w-3/4 h-auto aspect-square'>
                <div className="h-[90%] relative w-full">
                    <Image fill src={`/${props.image}.svg`} alt='' className='h-full w-full rounded-[40px] object-cover bg-center' />
                </div>
            </div>
            <ProjectedButton image={`/${props.cta}.svg`} imageSize='' color='' addClass='' buttonClass='bg-secondary border border-secondary' className='bg-secondary-lighter border border-secondary' />
        </div>
    )
}

export default ProjectedGameWBtn