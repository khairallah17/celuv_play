"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAnimate } from 'framer-motion'
import useGlobalContext from "@/hooks/GlobalContextHooks"
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {

    const { activeNav } = useGlobalContext()

    const menu = [{text: "about us", link: "/"}, {text: "our product", link: "/product"}]
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [mobileMenu, animateMobileMenu] = useAnimate()

    return (
        <div className='border-opacity-50 relative lg:px-0 px-5'>
            <nav className='container mx-auto flex w-full justify-between items-center py-6 border-bottom border-primary'>
                <Link href="/">
                    <Image src="celuv_logo.svg" width={0} height={0} quality={100} alt='celuv logo' className='w-auto h-auto'/>
                </Link>
                <ul className='list-none hidden lg:flex-row flex-col items-center gap-6 lg:flex'>
                    {
                        menu.map((item,index) => (
                            <li key={index}>
                                <Link className={`text-primary uppercase tracking-widest ${item.text == activeNav ? "drop-shadow-primary-sh font-bold" : "font-light"} hover:drop-shadow-primary-sh hover:font-bold duration-200`} href={`${item.link}`}>
                                    {item.text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <HiBars2 onClick={() => setShowMenu(!showMenu)} height={60} width={60} className='text-primary-dark flex lg:hidden opacity-50 h-8 w-8 border-[1px] border-primary-dark px-1 rounded-md'/>
                <Link href="/whitepaper" className='uppercase lg:flex hidden tracking-wider hover:shadow-secondary duration-200 text-secondary border-[1px] border-secondary font-light px-4 py-2 rounded-xl'>
                    whitepaper
                </Link>
                    <motion.ul
                        layout
                        className={`${showMenu ? "h-screen" : "h-0"} lg:hidden flex-col fixed bg-white top-[61px] left-0 w-full z-[1000]`}>
                            <motion.li
                                animate={{ opacity: showMenu ? 1 : 0 }}
                                transition={{ delay: 1/3 }}
                                className={`w-full px-4 py-4 ${showMenu ? "flex" : "hidden"} border-b-[1px] border-secondary opacity-0`}>
                                <Link href="/whitepaper" className='text-secondary uppercase tracking-widest hover:shadow-secondary hover:font-bold duration-200 font-light'>
                                    <p className='container mx-auto text-right'>
                                        whitepaper
                                    </p>
                                </Link>
                            </motion.li>
                        {
                            menu.map((item, index) => (
                                <motion.li 
                                    animate={{ opacity: showMenu ? 1 : 0 }}
                                    transition={{ delay: (Number(index) + 2)/3 }}
                                    key={index}
                                    className={`w-full px-4 py-4 ${showMenu ? "flex" : "hidden"} border-b-[1px] border-primary opacity-0`}>
                                    <Link className='text-primary uppercase tracking-widest hover:drop-shadow-primary hover:font-bold duration-200 font-light' href={`${item.link}`}>
                                        <p className='container mx-auto text-right'>
                                            {item.text}
                                        </p>
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
            </nav>
        </div>
    )
}

export default Navbar