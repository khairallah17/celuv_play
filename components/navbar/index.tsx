"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAnimate } from 'framer-motion'

const Navbar = () => {

    const menu = ["about us", "our product"]
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [mobileMenu, animateMobileMenu] = useAnimate()

    return (
        <div className='border-b-[1px] border-primary border-opacity-50 relative'>
            <nav className='container mx-auto flex w-full justify-between items-center py-6 border-bottom border-primary'>
                <Image src="celuv_logo.svg" width={0} height={0} quality={100} alt='celuv logo' className='w-auto h-auto'/>
                <ul className='list-none hidden lg:flex-row flex-col items-center gap-6 lg:flex'>
                    {
                        menu.map((item) => (
                            <li key={item}>
                                <Link className='text-primary uppercase tracking-widest hover:drop-shadow-primary hover:font-bold duration-200 font-light' href="/product">
                                    {item}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Link href="/whitepaper" className='uppercase lg:flex hidden tracking-wider hover:shadow-secondary duration-200 text-secondary border-[1px] border-secondary font-light px-4 py-2 rounded-md'>
                    whitepaper
                </Link>
                    <motion.ul
                        layout
                        className='flex lg:hidden flex-col absolute bg-white top-[101%] left-0 w-full z-50'>
                            <motion.li
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1/3 }}
                                className='w-full px-4 py-4 border-b-[1px] border-secondary opacity-0'>
                                <Link href="/whitepaper" className='text-secondary uppercase tracking-widest hover:shadow-secondary hover:font-bold duration-200 font-light'>
                                    <p className='container mx-auto'>
                                        whitepaper
                                    </p>
                                </Link>
                            </motion.li>
                        {
                            menu.map((item, index) => (
                                <motion.li 
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: (Number(index) + 2)/3 }}
                                    key={item}
                                    className='w-full px-4 py-4 border-b-[1px] border-primary opacity-0'>
                                    <Link className='text-primary uppercase tracking-widest hover:drop-shadow-primary hover:font-bold duration-200 font-light' href="/product">
                                        <p className='container mx-auto'>
                                            {item}
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