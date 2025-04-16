import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className='min-h-screen flex items-center justify-center px-6 py-24 bg-foreground dark:bg-background transition-colors duration-300 ease-in-out'>
      <div className='max-w-6xl w-full grid md:grid-cols-[auto_1fr] gap-10 items-start'>
        {/* Profile Image */}
        <div className='flex-shrink-0'>
          <Image className='rounded-xl object-cover shadow-lg' src='/images/portfoliopic.png' alt='Profile picture' width={240} height={240} />
        </div>

        {/* Text Content */}
        <div>
          <h1 className='text-3xl md:text-4xl font-bold text-background dark:text-foreground mb-4'>
            Well hello! I&apos;m Brandon
          </h1>

          <p className='text-lg text-background dark:text-foreground mb-4'>
            I&apos;m a passionate software engineer & web developer focused on building dynamic, performant, and intuitive user experiences. To me, the web is a canvas — and I enjoy shaping clean, maintainable code into meaningful interfaces.
          </p>

          <p className='text-lg text-background dark:text-foreground mb-4'>
            I specialize in modern JavaScript ecosystems like React, Next.js, and TypeScript. Whether I&apos;m crafting a responsive layout, optimizing performance, or designing a reusable component system, I care deeply about getting the details right.
          </p>

          <p className='text-lg text-background dark:text-foreground mb-4'>
            I&apos;m also curious about the full stack: from REST APIs and datalgs to deployment pipelines and infrastructure. That curiosity fuels my drive to understand how everything fits together, and how to make apps that scale with both users and teams.
          </p>

          <p className='text-lg text-background dark:text-foreground'>
            When I&apos;m not trying tirelessly to keep my skills sharp with the ever-evolving world of the web I&apos;m usually cooking, writing songs on guitar, or practicing dance moves... where no one can see me of course.
          </p>
        </div>
      </div>
    </section>
  )
}
