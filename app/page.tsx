import Image from 'next/image'
import { Banner } from './components/Banner'

/*
  TODO:
    - Home page
    - Feedback on successful inquiry submission (toast?)
    - Try to implement a a better mobile nav menu
*/

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen scrollbar-hidden'>
      <main className='flex-1 flex flex-col'>
        {/* Hero */}
        <section className='relative min-h-screen flex justify-center items-center '>
          {/* <Image src='/images/mountains.jpg' className='absolute inset-0 z-0' alt='Tattoo Hero Image' layout='fill' objectFit='cover' quality={100} /> */}
          <div className='flex justify-center items-center text-white z-20'>
            <div className='text-white text-3xl text-center p-4'>
              <h1>Welcome to Lavender Wings Tattoo</h1>
              <p>Your journey begins here.</p>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className='min-h-screen bg-gray-700 flex items-center justify-center'>
          <div className='text-white'>Second Section Content</div>
        </section>
      </main>
    </div>
  );
}

