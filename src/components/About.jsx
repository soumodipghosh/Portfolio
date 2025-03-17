import React from 'react'
import { motion } from 'framer-motion'
import { section } from 'framer-motion/client'
import { ABOUT_CONTENT } from '../constants'

const About = () => {
    const textVariants = {
        hidden: {opacity: 0, y:50},
        visible: {opacity: 1, y:0, transition: {duration: 0.6, ease: "easeOut"}}
    }
  return (
    <section className='px-6 py-10' id='about'>
        <h1 className='text-4xl md:text-6xl font-semibold tracking-tight mb-10 text-center'>About</h1>
        <div className='max-w-4xl mx-auto'>
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <motion.p key={index} className='text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed font-semibold'
                initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} variants={textVariants}>
                    {paragraph}
                </motion.p>
            ))}
        </div>
    </section>
  )
}

export default About
