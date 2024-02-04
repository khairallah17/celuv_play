"use client"
import React from 'react'
import { motion } from "framer-motion"
import ProjectedTeam from '../../projectedTeam'

const team1 = [ { name: "justin ha", pos: "ceo", slog: "wemade wemademax" },
                { name: "young choi", pos: "cto", slog: "wemade blockchain" },
                { name: "jake ahn", pos: "coo", slog: "wemade blockchain" },
                { name: "mothy an", pos: "cso", slog: "wemade blockchain" }]

const team2 = [ { name: "liam kim", pos: "art director" },
                { name: "john ryu", pos: "advisor" },
                { name: "yulia jo", pos: "sw engineer" }]

const team3 = [ { name: "jane kim", pos: "marketing manager" },
                { name: "susu kim", pos: "operations manager" },
                { name: "helen joe", pos: "screen writer" }]

const Team = () => {
    return (
        <motion.div
        initial={{y:100, opacity: 0}}
        whileInView={{y:0, opacity: 1}} 
        transition={{delay: .01, duration: 1}}
        className='container mx-auto my-20'>
            <h2 className='text-6xl font-bold text-center uppercase text-primary'>our team</h2>

            <div className=' mt-20 flex items-center justify-between flex-wrap gap-y-10'>
                <div className='flex items-center justify-around w-full h-full flex-wrap gap-4'>
                    {
                        team1.map((item, index) => (
                            <ProjectedTeam key={index} name={item.name} position={item.pos} slogon={item.slog} />
                        ))
                    }
                </div>
                <div className='flex items-center justify-around w-full h-full flex-wrap gap-4'>
                    {
                        team2.map((item, index) => (
                            <ProjectedTeam key={index} name={item.name} position={item.pos}/>
                        ))
                    }
                </div>
                <div className='flex items-center justify-around w-full h-full flex-wrap gap-4'>
                    {
                        team3.map((item, index) => (
                            <ProjectedTeam key={index} name={item.name} position={item.pos}/>
                        ))
                    }
                </div>
            </div>

        </motion.div>
    )
}

export default Team