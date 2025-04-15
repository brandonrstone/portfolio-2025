/*
  TODO:
    - Home page
    - Feedback on successful inquiry submission (toast?)
    - Try to implement a a better mobile nav menu
*/

import { AnimatedGradientBackground } from './components/AnimatedGradient'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen scrollbar-hidden'>
      <main className='flex-1 flex flex-col'>
        {/* Hero */}
        <AnimatedGradientBackground>
          {/* <Image src='/images/mountains.jpg' className='absolute inset-0 z-0' alt='Tattoo Hero Image' layout='fill' objectFit='cover' quality={100} /> */}
          <div className='flex justify-center items-center text-white z-20'>
            <div className='text-background dark:text-foreground text-center p-4'>
              <h1 className='text-2xl'>Brandon Stone</h1>
              <p>Front End Engineer</p>
            </div>
          </div>
        </AnimatedGradientBackground>

        {/* Second Section */}
        <section className='min-h-screen bg-foreground dark:bg-background flex items-center justify-center'>
          <div className='text-white'>Second Section Content</div>
        </section>
      </main>
    </div>
  );
}

