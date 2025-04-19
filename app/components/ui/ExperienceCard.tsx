'use client'

import { motion } from 'framer-motion'
import { ExperienceData } from '@/app/data/experience'

type Props = {
  index: number
  experience: ExperienceData
}

export const ExperienceCard = ({ index, experience }: Props) => {
  const isEven = index % 2 === 0

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <motion.div className={`max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-6 py-8 rounded-2xl bg-white/80 dark:bg-black/50 shadow-xl transition-all ${isEven ? 'ml-auto text-left' : 'mr-auto text-right'}`} initial={{ opacity: 0, x: isEven ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
        <h2 className='text-2xl md:text-3xl font-bold mb-2 text-lavender'>{experience.title}</h2>
        <h3 className='text-lg font-semibold text-muted-foreground'>{experience.company}</h3>
        <p className='text-sm mb-4'>{experience.date}</p>
        <p className='text-base text-background dark:text-foreground mb-4'>{experience.description}</p>

        {experience.points?.length && (
          <div className={`relative ${isEven ? 'pl-6' : 'pr-6'}`}>
            {/* Vertical line on left or right */}
            <div className={`absolute top-2 md:top-4 lg:top-3 h-[85%] md:h-[88%] w-px bg-lavender ${isEven ? 'left-2' : 'right-2'}`} />

            <ul className='space-y-6'>
              {experience.points.map((point, i) => (
                <li key={i} className={`relative text-sm md:text-base text-background dark:text-foreground ${isEven ? '' : 'text-right'}`}>
                  {/* Dot on left or right */}
                  <span className={`absolute top-1.75 md:top-2.5 w-[7px] h-[7px] bg-lavender rounded-full ${isEven ? 'left-[-1.18rem]' : 'right-[-1.18rem]'}`} />
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
