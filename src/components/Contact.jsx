import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT_CONTENT } from '../constants'
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'

const textVariants = {
    hidden: {opacity: 0, y:20},
    visible: (delay = 0 ) => ({
        opacity: 1, y: 0, transition:{
            duration: 0.8, ease:"easeOut", delay,
        }
    })
  }
  const iconVariants = {
    hidden: {opacity: 0, scale: 0},
    visible: (delay = 0) => ({
      opacity: 1, scale: 1, transition:{
        duration: 0.5, ease: "easeOut", delay,
      }
    })
  }

const Contact = () => {
  return (
    <section className='px-6 py-10 min-h-screen' id='contact'>
    <h1 className='text-4xl md:text-6xl font-semibold tracking-tight mb-10 text-center'>Get in touch</h1>
    <motion.h3 className='text-4xl md:text-8xl leading-none mt-20' initial="hidden" whileInView="visible" custom={0.4}
    variants={textVariants}>
      {CONTACT_CONTENT.headline}
    </motion.h3>
    <motion.p className='text-lg md:text-2xl mt-6 max-w-3xl' initial="hidden" whileInView="visible" custom={0.6}
    variants={textVariants}>
      {CONTACT_CONTENT.description}
    </motion.p>
    <hr className='pt-6'/>
    <motion.a className=' text-xl md:text-3xl lg:text-xl' href={`mailto:${CONTACT_CONTENT.email}`} initial="hidden"
    whileInView="visible" custom={0.8} variants={textVariants}>
      {CONTACT_CONTENT.email}
    </motion.a>
    <div className='flex space-x-6 mt-8'>
      {CONTACT_CONTENT.socialLinks.map((link, index) => {
        const Icon = link.icon === "RiGithubFill" ? RiGithubFill : RiLinkedinFill;
        return (
          <motion.a key={link.platform} href={link.url} target='_blank' rel='noopener noreferrer' aria-label={link.ariaLabel}
          initial="hidden" whileInView="visible" custom={1.0 + index + 0.2} variants={iconVariants}>
            <Icon size={36} />
          </motion.a>
        )
      })}
    </div>
    </section>
  )
}

export default Contact
