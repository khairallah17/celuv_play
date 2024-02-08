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
        viewport={{once: true}}
        transition={{
            ease: "easeInOut",
            delay: props.delay/10
        }}
        >
            <motion.div
            initial={{paddingBottom: 4}}
            whileInView={{paddingBottom: props.projected ? 10 : 2}}
            viewport={{once: true}}
            transition={{
                delay: props.delay/5
            }}
            className={`bg-[#029CBE] w-full h-fit rounded-[10px] lg:rounded-3xl pb-[1px] p-[2px]`}>
                <div className="bg-[#83CEDF] w-full lg:h-[120px] h-[34px] lg:rounded-[20px] rounded-[5px] flex items-center justify-center p-4">
                    <Image src={`${props.logo}`} height={0} width={0} className='h-auto w-auto' alt='' />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectedLogo