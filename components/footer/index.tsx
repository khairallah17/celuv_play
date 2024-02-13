"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PanInfo, motion } from "framer-motion"
import "./styles.css"

const socials = [   {icon: "twitter", text: "@CeluvPlay"},
                    {icon: "discord", text: "@CeluvPlay"},
                    {icon: "circles", text: "@CeluvPlay"}]

const Footer = () => {

    const [activeBtn, setActiveBtn] = useState<boolean>(false)

    const handleButtonHover = (event: MouseEvent) => {
        console.log(event.target)
    }

    const variant = {
        hidden: {opacity: 0, x: -10, display: 'none'},
        visible: {opacity: 1, x: 0, display: 'block'}
    }

  return (
    <div className='border border-t-primary-lighter'>
        <div className='container mx-auto py-10 flex flex-col gap-4'>

            <div className='flex flex-col w-full items-center justify-between flex-wrap gap-4'>

                <div className='flex w-full justify-between'>
                    <div className='lg:flex hidden items-center gap-6'>
                        <Image height={0} width={0} className='h-auto w-auto' alt='logo' src="/celuv_logo.svg"/>
                        <p className='text-primary font-normal tracking-widest'>&copy; 2024 All rights reserverd to CeluvPlay</p>
                    </div>

                    <div className='flex items-center gap-4 flex-wrap lg:w-auto w-full'>
                        <Link target='_blank' className='text-primary hover:font-bold duration-200 font-semibold text-lg lg:w-auto w-full lg:text-left text-center uppercase tracking-wider' href="/">
                            about us
                        </Link>
                        <Link target='_blank' className='text-primary hover:font-bold duration-200 font-semibold text-lg lg:w-auto w-full lg:text-left text-center uppercase tracking-wider' href="/product">
                            our product
                        </Link>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col-reverse gap-y-24 items-center w-full justify-center lg:justify-between flex-wrap'>
                    <div className='flex items-center gap-4 flex-wrap'>
                        {
                            socials.map((item, index) => (
                                <motion.a
                                whileHover={{
                                    width: "100px"
                                }}
                                transition={{
                                    duration: .2
                                }}
                                href={`https://${item.icon}.com`} key={index} className='whitepaper-btn flex items-center justify-center gap-4 border-[1px] duration-200 border-primary-dark opacity-50 lg:py-2 lg:px-4 aspect-square rounded-lg h-12'>
                                    <Image src={`/${item.icon}.svg`} height={32} width={32} alt={item.icon} className='' />
                                    <motion.p
                                    variants={variant}
                                    transition={{
                                        duration: .2
                                    }}
                                    className='text-primary-dark self-center h-fit hidden'>{item.text}</motion.p>
                                </motion.a>
                            ))
                        }
                    </div>
                    <button className='bg-secondary bg-opacity-15 hover:bg-transparent text-secondary rounded-lg uppercase font-normal hover:border-2 hover:border-secondary border-2 border-transparent duration-200 px-6 py-2'>
                        whitepaper
                    </button>
                </div>

                <div className='flex lg:hidden flex-wrap flex-col items-center gap-6 mt-20'>
                    <Image height={0} width={0} className='h-auto w-auto' alt='logo' src="/mobile-logo.svg"/>
                    <p className='text-primary font-normal tracking-widest'>&copy; 2024 All rights reserverd to CeluvPlay</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer