import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import UseWindowSize from '@/hooks/UseWindowSize'

type Props = {
    logo: string,
    projected?: boolean,
    delay: number
}

const ProjectedLogo = (props: Props) => {

    const size = UseWindowSize()

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
                ease: "easeInOut",
                delay: props.delay/10
            }}
            className=''
        >
            <motion.div
            whileInView={{paddingBottom: props.projected ? (size.width < 1024 ? 10 : 20) : 2}}
            viewport={{once: true}}
            transition={{
                delay: props.delay/5
            }}
            className={`bg-[#029CBE] w-full h-fit rounded-[10px] lg:rounded-3xl p-[2px] drop-shadow-primary-sh`}>
                <div className="bg-[#83CEDF] w-full lg:h-[120px] h-[52.09px] py-3 lg:rounded-[22px] rounded-[8px] flex items-center justify-center p-4">
                    <Image src={`${props.logo}`} height={0} width={0} className='h-auto w-auto' alt='' />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectedLogo