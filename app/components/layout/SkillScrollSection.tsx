'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skills = ['My favorites:', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Node.js']

export function SkillScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleSkills, setVisibleSkills] = useState(0)
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if the section has fully entered the viewport (from top to bottom)
      if (rect.top >= windowHeight || rect.bottom <= 0) {
        setVisibleSkills(0) // Reset visibility if not in view
        setHasScrolledPast(false)
        return
      }

      // Start revealing skills once the section is fully in the viewport
      if (rect.top < windowHeight && !hasScrolledPast) {
        setHasScrolledPast(true)
      }

      if (hasScrolledPast) {
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        const progress = visibleHeight / windowHeight

        // Calculate visible skills based on progress
        const newVisibleSkills = Math.floor(progress * skills.length)
        setVisibleSkills(newVisibleSkills)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolledPast])

  return (
    <section className='relative h-[300vh] bg-foreground dark:bg-background text-center flex justify-center items-start transition-colors duration-700 ease-in-out' ref={sectionRef}>
      <div className='sticky top-0 h-screen flex flex-col justify-center items-center w-full z-10'>
        {skills.map((skill, i) => {
          const delay = (i * 0.1).toFixed(1) // Ensuring delay is a valid number as string with one decimal place
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: i < visibleSkills ? 1 : 0,
                transition: {
                  delay: parseFloat(delay), // parse back to float
                  duration: 0.7,
                  ease: 'easeOut'
                }
              }}
              className={`${i === 0 ? 'text-4xl' : 'text-3xl'} font-bold text-background dark:text-foreground mb-4`}
            >
              {skill}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
