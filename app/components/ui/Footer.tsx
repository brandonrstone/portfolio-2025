'use client'

import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export function Footer() {
  const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({})

  const socialLinks = [
    { id: 'github', url: 'https://github.com/brandonrstone', hoverColor: '#6e5494', style: { height: 40, width: 40 } },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/brandon-stone-8a319b163/', network: 'linkedin', hoverColor: '#0072b1', style: { height: 42, width: 42 } },
    { id: 'telegram', url: 'https://t.me/brandonrstone', network: 'telegram', hoverColor: '#229ED9', style: { height: 37.5, width: 37.5 } },
    { id: 'email', url: '/contact', network: 'email', hoverColor: '#D44638', style: { height: 42, width: 42 } },
    { id: 'instagram', url: 'https://instagram.com/brandonrstone', network: 'instagram', hoverColor: '#d62976 ', style: { height: 40, width: 40 } },
    { id: 'x', url: 'https://x.com/@Bstone58585', network: 'x', hoverColor: '#ffffff ', style: { height: 40, width: 40 } },
    { id: 'discord', url: 'https://discord.com/users/brandonrstone', network: 'discord', hoverColor: '#5865F2', style: { height: 40, width: 40 } }
  ]

  const ariaLabels: Record<string, string> = {
    github: 'Visit my GitHub profile',
    linkedin: 'Visit my LinkedIn profile',
    instagram: 'Follow me on Instagram',
    discord: 'Join my Discord server',
    telegram: 'Message me on Telegram',
    email: 'Send me an email',
    x: 'Send me a tweet'
  }

  return (
    <footer className='w-full border-t-[0.5px] py-6 text-background dark:text-foreground bg-foreground dark:bg-background transition-colors duration-700 ease-in-out'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h2 className='text-background dark:text-foreground text-lg font-semibold'>Brandon Stone.dev</h2>
          <p className='text-xs text-muted-foreground'>Engineer / Web Developer</p>
        </div>

        {/* Social Icons */}
        <nav aria-label='Social links'>
          <ul className='flex gap-2'>
            {socialLinks.map(({ id, url, network, hoverColor, style }) => (
              <li key={id}>
                <SocialIcon
                  url={url}
                  network={network}
                  target={id !== 'email' ? '_blank' : ''}
                  rel='noopener noreferrer'
                  aria-label={ariaLabels[id]}
                  fgColor={hoverStates[id] ? hoverColor : 'grey'}
                  bgColor='transparent'
                  onMouseEnter={() => setHoverStates(prev => ({ ...prev, [id]: true }))}
                  onMouseLeave={() => setHoverStates(prev => ({ ...prev, [id]: false }))}
                  style={{ ...style, transition: 'all 0.7s ease-in-out' }}
                />
              </li>
            ))}
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
