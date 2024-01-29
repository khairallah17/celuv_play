import React from 'react'
import Image from 'next/image'

const ProjectedButton = () => {
  return (
    <div className='bg-white border border-ios relative w-[200px] rounded-xl py-3'>
        <div className='bg-ios-light border-ios border absolute left-0 right-auto w-full h-full rounded-xl top-3 z-[-1]'></div>
        <Image src="/ios.png" height={50} width={50} alt='ios logo' className='w-auto h-auto' quality={100} />
    </div>
  )
}

export default ProjectedButton