// components/Footer.tsx
'use client'

import Link from 'next/link'
import { Instagram, Twitter, Youtube, Mail, MessageCircleMore, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className='w-full border-t py-10 text-muted-background dark:text-foreground bg-foreground dark:bg-background z-50'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Branding */}
        <div className='text-center md:text-left'>
          <h2 className='text-xl font-bold text-background dark:text-foreground'>Brandon Stone.dev</h2>
          <p className='text-sm'>Building beautiful, functional web experiences.</p>
        </div>

        {/* Social Icons */}
        <div className='flex gap-5 text-muted-foreground'>
          <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <Instagram className='hover:text-pink-500 transition-colors duration-300' />
          </Link>
          <Link href='https://x.com' target='_blank' rel='noopener noreferrer'>
            <Twitter className='hover:text-blue-500 transition-colors duration-300' />
          </Link>
          <Link href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <Youtube className='hover:text-red-500 transition-colors duration-300' />
          </Link>
          <Link href='https://discord.com' target='_blank' rel='noopener noreferrer'>
            <MessageCircleMore className='hover:text-indigo-500 transition-colors duration-300' />
          </Link>
          <Link href='https://t.me/yourchannel' target='_blank' rel='noopener noreferrer'>
            <Send className='hover:text-cyan-400 transition-colors duration-300' />
          </Link>
          <Link href='mailto:contact@lavenderwings.com' target='_blank' rel='noopener noreferrer'>
            <Mail className='hover:text-lavender transition-colors duration-300 ease-in-out' />
          </Link>
        </div>

        {/* Copyright */}
        <div className='text-sm text-center md:text-right'>
          &copy; {new Date().getFullYear()} Brandon Stone.dev.
        </div>
      </div>
    </footer>
  )
}
