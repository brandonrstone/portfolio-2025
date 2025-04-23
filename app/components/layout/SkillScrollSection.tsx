'use client'

import { useRef, useEffect, useState } from 'react'

const skills = ['TypeScript', 'React', 'Next.js', 'HTML', 'CSS', '... or something new!']

export function SkillScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight


      const totalScrollable = rect.height - windowHeight
      const amountScrolled = windowHeight - rect.top
      const scrollProgress = Math.min(Math.max(amountScrolled / totalScrollable, 0), 1)

      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className='relative h-[300vh] bg-foreground dark:bg-background text-center flex justify-center items-start transition-colors duration-700 ease-in-out' ref={sectionRef}>
      <div className='sticky top-0 h-screen flex flex-col justify-center items-center w-full z-10'>
        <h1 className='mb-4 text-4xl font-bold'>I work with:</h1>
        {skills.map((skill, i) => {
          const step = 1 / (skills.length + 4)
          const start = (i + 4) * step

          const itemProgress = (progress - start) / step
          const clampedOpacity = Math.min(Math.max(itemProgress, 0), 1)

          return <div key={i} className='text-3xl text-background dark:text-foreground mb-4 transition-all duration-300 ease-out' style={{ opacity: clampedOpacity, transform: `translateY(${(1 - clampedOpacity) * 20}px)` }}>{skill}</div>
        })}
      </div>
    </section>
  )
}
