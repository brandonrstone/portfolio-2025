import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className='w-full border-t  text-foreground py-10'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h2 className='text-xl font-semibold'>Lavender Wings Tattoo</h2>
          <p className='text-sm text-muted-foreground'>431 Main St, Machester, CT 06040</p>
          <p className='text-sm text-muted-foreground'>Bringing your vision to life — one needle at a time.</p>
        </div>
        <div className='flex gap-6 text-muted-foreground'>
          <Link href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <Facebook className='hover:text-lavender transition-colors duration-300 ease-in-out' />
          </Link>
          <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <Instagram className='hover:text-lavender transition-colors duration-300 ease-in-out' />
          </Link>
          <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <Twitter className='hover:text-lavender transition-colors duration-300 ease-in-out' />
          </Link>
          <Link href='mailto:contact@lavenderwings.com' target='_blank' rel='noopener noreferrer'>
            <Mail className='hover:text-lavender transition-colors duration-300 ease-in-out' />
          </Link>
        </div>
        <div className='text-sm text-muted-foreground text-center md:text-right'>
          &copy; {new Date().getFullYear()} Lavender Wings Tattoo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}