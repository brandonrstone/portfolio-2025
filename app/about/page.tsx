import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className='text-center py-20'>
      <h2 className='text-3xl font-bold text-gray-900'>Hello, I&apos;m [Your Name]!</h2>
      <p className='max-w-2xl mx-auto mt-4 text-lg text-gray-600'>
        I&apos;m a passionate developer who loves building dynamic web applications.
        With a background in [your field/technology], I&apos;m always looking to improve
        and expand my skills. I&apos;m committed to creating meaningful and impactful digital
        experiences that are both user-friendly and technically solid.
      </p>
      <div className='mt-8'>
        <Image src='/profile.jpg' className='rounded-full mx-auto' alt='Profile picture' width={200} height={200} />
      </div>
    </section>
  )
}
