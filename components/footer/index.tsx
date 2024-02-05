"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import "./styles.css"

const socials = [   {icon: "twitter", text: "@CeluvPlay"},
                    {icon: "discord", text: "@CeluvPlay"},
                    {icon: "circles", text: "@CeluvPlay"}]

const Footer = () => {

    const [activeBtn, setActiveBtn] = useState<boolean>(false)

  return (
    <div className='border border-t-primary-lighter'>
        <div className='container mx-auto py-10 flex flex-col gap-4'>

            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-6'>
                    <Image height={0} width={0} className='h-auto w-auto' alt='logo' src="/celuv_logo.svg"/>
                    <p className='text-primary font-normal tracking-widest'>&copy; 2024 All rights reserverd to CeluvPlay</p>
                </div>

                <div className='flex items-center gap-4'>
                    <Link target='_blank' className='text-primary hover:font-bold duration-200 font-semibold text-lg uppercase tracking-wider' href="/">
                        about us
                    </Link>
                    <Link target='_blank' className='text-primary hover:font-bold duration-200 font-semibold text-lg uppercase tracking-wider' href="/product">
                        our product
                    </Link>
                </div>

            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    {
                        socials.map((item, index) => (
                            <Link href={`https://${item.icon}.com`} key={index} className='whitepaper-btn flex items-center gap-4 border-2 duration-200 border-primary-lighter rounded-lg px-4 py-3 h-14 w-fit'>
                                <Image src={`/${item.icon}.svg`} height={0} width={0} alt={item.icon} className='h-auto w-auto' />
                                <p className='text-primary w-0 opacity-0 hidden duration-200'>{item.text}</p>
                            </Link>
                        ))
                    }
                </div>
                <button className='bg-secondary bg-opacity-15 hover:bg-transparent text-secondary rounded-lg uppercase font-normal hover:border-2 hover:border-secondary border-2 border-transparent duration-200 px-6 py-2'>
                    whitepaper
                </button>
            </div>

        </div>
    </div>
  )
}

export default Footer