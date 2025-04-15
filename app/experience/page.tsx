import React from 'react'

import { ExperienceSection } from '../components/ExperienceSection'
import { experienceData } from '../data/experience'

export default function ExperiencePage() {
  return (
    <div className='relative z-10'>
      <div className='absolute top-0 left-0 w-full h-[200vh] -z-10'>
        <div className='sticky top-0 h-screen w-full bg-gradient-to-b from-purple-100 via-transparent to-purple-200 dark:from-black dark:to-zinc-900' style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }} />
      </div>

      {experienceData.map((experience, i) => (
        <ExperienceSection key={i} index={i}>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-lavender'>{experience.title}</h2>
          <h3 className='text-lg font-semibold text-muted-foreground'>{experience.company}</h3>
          <p className='text-sm italic mb-4'>{experience.date}</p>
          <p className='text-base text-background dark:text-foreground'>{experience.description}</p>
        </ExperienceSection>
      ))}
    </div>
  )
}

