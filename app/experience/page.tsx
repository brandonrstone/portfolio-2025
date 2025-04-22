import React from 'react'

import { experienceData } from '../data/experience'
import { ExperienceCard } from '../components/ui/ExperienceCard'

export const dynamic = 'force-static'

export default function ExperiencePage() {

  return (
    <div className='relative'>
      {/* Full-page fixed background with gradient */}
      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <div className='h-full w-full bg-gradient-to-b from-purple-100 via-transparent to-purple-200 dark:from-black dark:to-zinc-900 bg-fixed bg-center bg-cover' />
      </div>

      {/* Content that scrolls over the background */}
      <div className='relative z-10'>
        {experienceData.map((experience, i) => <ExperienceCard key={i} index={i} experience={experience} />)}
      </div>
    </div>
  )
}
