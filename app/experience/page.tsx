import React from 'react'

import { ExperienceSection } from '../components/ExperienceSection'


export const experienceData = [
  {
    title: 'Web3 Mobile Engineer',
    company: 'Boop Industries Inc',
    date: '2023 - 2024',
    description: 'Led the development of a cross-platform UI framework using React and Tailwind.',
  },
  {
    title: 'Web Developer',
    company: 'PixelCraft',
    date: '2019 - 2021',
    description: 'Created immersive websites and landing pages for startups and e-commerce brands.',
  },
  {
    title: 'Intern Developer',
    company: 'Buildify',
    date: '2018 - 2019',
    description: 'Supported the team in prototyping components and building dashboards.',
  },
]

export default function ExperiencePage() {
  return (
    <div className='relative z-10'>
      <div className='absolute top-0 left-0 w-full h-[200vh] -z-10'>
        <div
          className='sticky top-0 h-screen w-full bg-gradient-to-b from-purple-100 via-transparent to-purple-200 dark:from-black dark:to-zinc-900'
          style={{
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </div>

      {experienceData.map((exp, idx) => (
        <ExperienceSection key={idx} index={idx}>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-lavender'>{exp.title}</h2>
          <h3 className='text-lg font-semibold text-muted-foreground'>{exp.company}</h3>
          <p className='text-sm italic mb-4'>{exp.date}</p>
          <p className='text-base text-background dark:text-foreground'>{exp.description}</p>
        </ExperienceSection>
      ))}
    </div>
  )
}

