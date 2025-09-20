'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { ExperienceData } from '@/app/data/experience'

type ExperienceCardProps = {
  index: number
  experience: ExperienceData
}

export const ExperienceCard = ({ index, experience }: ExperienceCardProps) => {
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 })
  const firstDotRef = useRef<HTMLSpanElement | null>(null)
  const lastDotRef = useRef<HTMLSpanElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isEven = index % 2 !== 0

  const calculateLine = () => {
    if (!containerRef.current || !firstDotRef.current || !lastDotRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const firstRect = firstDotRef.current.getBoundingClientRect()
    const lastRect = lastDotRef.current.getBoundingClientRect()
    const top = firstRect.top + firstRect.height / 2 - containerRect.top
    const bottom = lastRect.top + lastRect.height / 2 - containerRect.top

    setLineStyle({ top, height: bottom - top, })
  }

  useEffect(() => {
    calculateLine()

    window.addEventListener('resize', calculateLine)
    const resizeObserver = new ResizeObserver(() => calculateLine())

    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => {
      window.removeEventListener('resize', calculateLine)
      resizeObserver.disconnect()
    }
  }, [experience.points])

  return (
    <section className='relative min-h-screen flex justify-center items-center overflow-hidden'>
      <motion.div
        className={`relative max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-6 py-8 rounded-2xl bg-foreground/80 dark:bg-black/50 shadow-xl overflow-hidden transition-all ${isEven ? 'ml-auto text-left' : 'mr-auto text-right'} transition-colors duration-700 ease-in-out`}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
        <h2 className='text-2xl md:text-3xl font-bold mb-2 text-lavender'>{experience.title}</h2>
        <h3 className='text-lg font-semibold text-muted-foreground'>{experience.company}</h3>

        {/* Debossed Card Image */}
        {experience.image && (
          <div className={`absolute -top-4 ${experience.imageStyles} z-10`}>
            <Image
              className={`object-contain grayscale filter drop-shadow opacity-15 ${experience.imageStyles}`}
              src={experience.image}
              alt={`${experience.company}`}
              width={160}
              height={160}
            />
          </div>
        )}

        <p className='mb-4 text-sm transition-colors duration-700 ease-in-out'>{experience.date}</p>
        <p className=' mb-4 text-base text-background dark:text-foreground transition-colors duration-700 ease-in-out'>{experience.description}</p>

        {experience.points?.length && (
          <div ref={containerRef} className={`relative ${isEven ? 'pl-6' : 'pr-6'}`}>
            {/* Vertical Line */}
            <div className={`absolute w-px bg-lavender ${isEven ? 'left-2' : 'right-2'}`} style={{ top: lineStyle.top, height: lineStyle.height }} />
            <ul className='space-y-6'>
              {experience.points.map((point, i) => (
                <li key={i} className={`relative text-sm md:text-base text-background dark:text-foreground transition-colors duration-700 ease-in-out ${isEven ? '' : 'text-right'}`} >
                  <span className={`absolute top-1.75 md:top-2.5 w-[7px] h-[7px] bg-lavender rounded-full transition-colors duration-700 ease-in-out ${isEven ? 'left-[-1.18rem]' : 'right-[-1.18rem]'}`} ref={i === 0 ? firstDotRef : i === (experience?.points && experience.points.length - 1) ? lastDotRef : null} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  )
}