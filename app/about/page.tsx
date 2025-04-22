import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className='min-h-screen flex items-center justify-center px-6 py-24 bg-foreground dark:bg-background transition-colors duration-700 ease-in-out'>
      <div className='max-w-6xl w-full grid md:grid-cols-[auto_1fr] gap-10 items-start'>
        {/* Profile Image */}
        <div className='flex-shrink-0'>
          <Image className='rounded-xl object-cover shadow-lg' src='/images/portfoliopic.png' alt='Profile picture' width={240} height={240} />
        </div>

        {/* Text Content */}
        <div>
          <h1 className='flex items-center text-3xl md:text-4xl font-bold text-background dark:text-foreground mb-4'>
            Well <div className='flex items-center justify-center ml-2 bg-foreground dark:bg-background overflow-hidden transition-colors duration-700 ease-in-out'><span className=' text-3xl md:text-4xl font-extrabold fancy-text' style={{ backgroundImage: "url('/images/Paint.jpg')", }}>Hello</span></div>, I&apos;m Brandon
          </h1>


          <p className='text-lg text-background dark:text-foreground mb-4'>
            I&apos;m a Software Engineer & Web Developer who has become passionate about building dynamic, performant, and intuitive user experiences. It might sound a <span className='italic'>little</span> cliché, but I really love seeing the web as a canvas — and I enjoy shaping clean, maintainable code into the best interfaces I can.
          </p>

          <p className='text-lg text-background dark:text-foreground mb-4'>
            My experience as of late lies with modern TypeScript ecosystems like React, Next.js. I get hyped on working with designers to bring beautiful components to life in order to fit a brand&apos;s style, ensuring fluidity across web and mobile media sizes, and getting a website neurotically wired to maximize SEO.
          </p>

          <p className='text-lg text-background dark:text-foreground mb-4'>
            Though I feel I have proper dominion over my realm of the frontend, I strive to ensure things are taken care of on the other side of things. I&apos;ve set up many backends that are secure, scalable, and efficient and these days I have particular interest in the integration of modern ORMs.
          </p>

          <p className='text-lg text-background dark:text-foreground'>
            When I&apos;m not trying tirelessly to keep my skills sharp with the ever-evolving world of the web I&apos;m usually cooking, writing songs on guitar, or practicing dance moves... where no one can see me of course.
          </p>
        </div>
      </div>
    </section>
  )
}
