'use client'

import Image from 'next/image'
import { AnimatedGradientBackground } from './components/layout/AnimatedGradient'
import { ParallaxContainer } from './components/layout/ParallaxContainer'
import { ParallaxDotField } from './components/layout/ParallaxDotField'
import { SkillScrollSection } from './components/layout/SkillScrollSection'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen scrollbar-hidden'>
      <main className='flex flex-col flex-1'>
        {/* Hero */}
        <AnimatedGradientBackground>
          <section className='flex justify-center items-center text-background dark:text-foreground z-20'>
            <div className='text-background dark:text-foreground text-center p-4'>
              <h1 className='text-2xl'>Brandon Stone</h1>
              <p>Full-Stack Engineer / Web Developer</p>
            </div>
          </section>
        </AnimatedGradientBackground>

        <div className='relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] z-10'>
          <section className='min-h-[125vh] flex justify-center items-center overflow-hidden bg-foreground dark:bg-background transition-colors duration-700 ease-in-out'>
            <div className='absolute inset-0 overflow-hidden z-0'>
              <ParallaxDotField dotCount={75} />
            </div>

            <ParallaxContainer speed={0.3}>
              <div className='px-4 text-background dark:text-foreground text-4xl text-center transition-transform -translate-y-40 z-10'>
                Second Section Content
              </div>
            </ParallaxContainer>
          </section>
        </div>

        <SkillScrollSection />

        <section className='w-screen min-h-screen relative left-1/2 right-1/2 -mx-[50vw] flex items-center justify-center flex-col text-background dark:text-foreground bg-blue-400 dark:bg-foreground transition-colors duration-700 ease-in-out z-20'>
          <Image src='/images/Under-Construction.png' alt='Under construction image' width={300} height={300} />
          <h1 className='text-foreground dark:text-background'>Coming soon...</h1>
        </section>
      </main>
    </div>
  )
}
