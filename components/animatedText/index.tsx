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
            whileInView="visible"
            transition={{
                staggerChildren: 0.1,
                delay: 2,
                duration: 10
            }}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className='inline-block font-semibold'
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