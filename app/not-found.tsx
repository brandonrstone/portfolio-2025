import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center p-6'>
      <Image src='/images/Not-Found.png' alt='Confused developer... how did you get here?' width={300} height={300} />
      <h1 className='text-4xl font-bold mb-4'><span className='font-extrabold'>404</span> - Page Not Found</h1>
      <p className='mb-6 text-gray-500'>{`What you are looking for is not here, or perhaps it has been moved.`}</p>
      <Link href='/' className='max-w-3xl py-3 px-4 rounded-lg bg-gradient-to-r from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600 text-foreground font-semibold focus:ring-2 focus:ring-pink-300 cursor-pointer transition-all duration-700 ease-in-out' aria-label='Navigate back to home page'>
        Take me home!
      </Link>
    </div>
  )
}
