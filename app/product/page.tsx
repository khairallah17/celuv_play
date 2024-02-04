import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/product/hero'
import Games from '@/components/product/games'
import "./styles.css"

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Games/>
      <Footer/>
    </div>
  )
}

export default index