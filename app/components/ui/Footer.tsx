'use client'

import Link from 'next/link'
import { Instagram, Twitter, Youtube, Mail, MessageCircleMore, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className='w-full border-t-[0.5px] py-6 text-background dark:text-foreground bg-foreground dark:bg-background transition-colors duration-700 ease-in-out'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h2 className='text-background dark:text-foreground text-lg font-semibold'>Brandon Stone.dev</h2>
          <p className='text-xs text-muted-foreground'>Engineer / Web Developer</p>
        </div>

        {/* Social Icons */}
        <nav aria-label='Social links'>
          <ul className='flex gap-6 text-background dark:text-foreground'>
            <li>
              <Link href='https://instagram.com/brandonrstone' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <Instagram className='hover:text-pink-500 transition-colors duration-700 ease-in-out' />
              </Link>
            </li>
            <li>
              <Link href='https://x.com/BStone8585' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
                <Twitter className='hover:text-blue-500 transition-colors duration-700 ease-in-out' />
              </Link>
            </li>
            <li>
              <Link href='https://youtube.com' target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
                <Youtube className='hover:text-red-500 transition-colors duration-700 ease-in-out' />
              </Link>
            </li>
            <li>
              <Link href='https://discord.com/brandonrstone' target='_blank' rel='noopener noreferrer' aria-label='Discord'>
                <MessageCircleMore className='hover:text-indigo-500 transition-colors duration-700 ease-in-out' />
              </Link>
            </li>
            <li>
              <Link href='https://t.me/brandonrstone' target='_blank' rel='noopener noreferrer' aria-label='Telegram'>
                <Send className='hover:text-cyan-400 transition-colors duration-700 ease-in-out' />
              </Link>
            </li>
            <li>
              <Link href='/contact' aria-label='Contact page'>
                <Mail className='hover:text-lavender transition-colors duration-700 ease-in-out' />
              </Link>
            </li>
          </ul>
        </nav>

        <div className='text-xs text-center md:text-right text-muted-foreground'>
          <div>&copy; {new Date().getFullYear()} Brandon Stone.dev</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
