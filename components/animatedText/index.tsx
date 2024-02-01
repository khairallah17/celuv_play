"use client"
import React from 'react'
import { motion } from "framer-motion"

type AnimatedTextProps = {
    text: string,
    className?: string,
    el?: keyof JSX.IntrinsicElements
}

const defaultAnimation = {
    visible: {
        opacity: 1,
        x: 0
    },
    hidden: {
        opacity: 0,
        x: -10
    }
}

const AnimatedText = ({
    text,
    className,
    el: Wrapper = "p"
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
        <motion.span
            initial="hidden"
            animate="visible"
            transition={{
                staggerChildren: 0.1
            }}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    className='inline-block'
                    variants={defaultAnimation}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    </Wrapper>
  )
}

export default AnimatedText