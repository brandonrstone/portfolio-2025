'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  index: number
  children: ReactNode
}

export const ExperienceSection = ({ index, children }: Props) => {
  const isEven = index % 2 === 0

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <motion.div
        className={`max-w-md sm:max-w-lg md:max-w-4xl mx-auto px-6 py-12 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-xl transition-all ${isEven ? 'ml-auto text-left' : 'mr-auto text-right'}`}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  )
}