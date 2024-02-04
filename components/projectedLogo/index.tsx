import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

type Props = {
    logo: string,
    projected?: boolean,
    delay: number
}

const ProjectedLogo = (props: Props) => {
    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
            ease: "easeInOut",
            delay: props.delay/10
        }}
        >
            <motion.div
            initial={{paddingBottom: 4}}
            whileInView={{paddingBottom: props.projected ? 40 : 4}}
            transition={{
                delay: props.delay/5
            }}
            className={`bg-primary ${props.projected ? "h-40 aspect-[2.32] w-auto" : "h-32 w-[371.2px]"}  rounded-3xl pt-1 px-1 pb-1`}>
                <div className="bg-primary-light  w-full h-full rounded-[20px] flex items-center justify-center">
                    <Image src={`${props.logo}`} height={0} width={0} className='h-auto w-auto' alt='' />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectedLogo