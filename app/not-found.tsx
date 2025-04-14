import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center p-6'>
      <h1 className='text-4xl font-bold mb-4'>Oops! Page Not Found</h1>
      <p className='mb-6 text-gray-500'>{`The page you're looking for doesn't exist or has been moved.`}</p>
      <Link href='/' className='px-4 py-2 bg-lavender text-background rounded hover:bg-lavender/80 transition'>Take Me Home!</Link>
    </div>
  )
}
