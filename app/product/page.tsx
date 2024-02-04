import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/product/hero'
import "./styles.css"

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default index