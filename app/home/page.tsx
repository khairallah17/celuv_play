import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'

const index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-primary'>Hello world</h1>
    </div>
  )
}

export default index