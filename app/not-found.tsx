import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-static'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center p-6'>
      <Image src='/images/Not-Found.png' alt='Confused developer... how did you get here?' width={300} height={300} />
      <h1 className='flex flex-col sm:flex-row mb-4 text-4xl font-bold'>
        <div className='font-extrabold'>404</div>
        <div className='hidden sm:block px-2'>-</div>
        <div>Page Not Found</div>
      </h1>
      <p className='mb-6 text-gray-500'>{`What you are looking for is not here, or perhaps it has been moved.`}</p>
      <Link href='/' className='max-w-3xl py-3 px-4 rounded-lg bg-gradient-to-r from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600 text-foreground font-semibold focus:ring-2 focus:ring-pink-300 cursor-pointer transition-all duration-700 ease-in-out' aria-label='Navigate back to home page'>
        Take me home!
      </Link>
    </div>
  )
}
