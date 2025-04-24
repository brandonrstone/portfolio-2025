import React from 'react'
import Image from 'next/image'

export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <section className='min-h-screen flex justify-center  items-center  px-6 py-24 bg-foreground dark:bg-background transition-colors duration-700 ease-in-out'>
      <div className='max-w-6xl w-full grid md:grid-cols-[auto_1fr] gap-10 items-start'>
        {/* Profile Image */}
        <div className='flex-shrink-0'>
          <Image className='rounded-xl object-cover shadow-lg' src='/images/portfoliopic.png' alt='Profile picture' width={240} height={240} />
        </div>

        {/* Text Content */}
        <div>
          <h1 className='flex flex-col sm:flex-row text-3xl md:text-4xl font-bold text-background dark:text-foreground mb-4'>
            <div className='flex bg-foreground dark:bg-background overflow-hidden transition-colors duration-700 ease-in-out'>Well<p className='ml-2 text-3xl md:text-4xl font-extrabold fancy-text' style={{ backgroundImage: "url('/images/Paint.jpg')" }}>Hello</p><p className='mr-2'>,</p></div>
            <div className='transition-colors duration-700 ease-in-out'>I&apos;m Brandon</div>
          </h1>

          <p className='text-lg text-background dark:text-foreground mb-4 transition-colors duration-700 ease-in-out'>
            I&apos;m a Software Engineer & Web Developer who has become passionate about building dynamic, performant, and intuitive user experiences. It might sound a <span className='italic'>little</span> cliché, but I really love seeing the web as a canvas — and I enjoy shipping clean, maintainable code to deliver the best interfaces I can.
          </p>

          <p className='text-lg text-background dark:text-foreground mb-4 transition-colors duration-700 ease-in-out'>
            My experience as of late lies with modern TypeScript ecosystems like React, React Native, Next.js and Vite. I get hyped on working with designers to bring beautiful components to life in order to elevate a brand stylistically, ensuring fluidity across web and mobile media sizes, and neurotically wiring a website to maximize SEO.
          </p>

          <p className='text-lg text-background dark:text-foreground mb-4 transition-colors duration-700 ease-in-out'>
            Though I feel like I have a pretty good grasp in the realm of the frontend, I strive to ensure data is taken care of on the other side of things. I&apos;ve set up many backends and strive to solidify their security, scalability, and seamlessness. These days I have taken a particular interest to the integration of modern JavaScript based ORMs.
          </p>

          <p className='text-lg text-background dark:text-foreground transition-colors duration-700 ease-in-out'>
            When I&apos;m not trying tirelessly to keep my skills sharp with the ever-evolving world of the web I&apos;m usually cooking, writing songs on guitar, or practicing dance moves... where no one can see me of course.
          </p>
        </div>
      </div>
    </section>
  )
}
