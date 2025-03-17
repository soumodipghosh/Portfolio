import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const Technologies = () => {
  return (
    <section className='px-6 py-10'>
      <h1 className='text-4xl md:text-6xl font-semibold tracking-tight mb-10 text-center'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4 animate-wiggle'>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <RiReactjsLine className='text-5xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <RiNextjsFill className='text-5xl text-slate-400'/>
        </div>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <SiTailwindcss  className='text-5xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <IoLogoNodejs className='text-5xl text-green-600'/>
        </div>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <FaJs  className='text-5xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <FaGithub  className='text-5xl'/>
        </div>
        <div className='rounded-2xl p-4 border-4 border-neutral-400'>
            <FaPython  className='text-5xl text-[#ffde57]'/>
        </div>
      </div>
    </section>
  )
}

export default Technologies
