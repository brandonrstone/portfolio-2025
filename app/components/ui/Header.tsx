'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { ThemeToggle } from './ThemeToggle'
import { MobileNavOverlay } from '../layout/MobileNavOverlay'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [textStyleChanges, setTextStyleChanges] = useState('text-background')
  const [backgroundStyleChanges, setBackgroundStyleChanges] = useState('bg-transparent')
  const [hamburgerStyleChanges, setHamburgerStyleChanges] = useState('')
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Change or reset header styles on route navigation
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0

      if (pathname === '/') {
        setTextStyleChanges(isScrolled ? 'text-background dark:text-foreground' : 'text-background dark:text-foreground')
        setBackgroundStyleChanges(isScrolled ? 'bg-foreground/30 dark:bg-background/70 backdrop-blur-[10px]' : 'bg-transparent')
        setHamburgerStyleChanges(isScrolled ? 'bg-background dark:bg-foreground' : 'bg-background dark:bg-foreground')
      } else if (pathname === '/portfolio') {
        setTextStyleChanges('text-background dark:text-foreground')
        setBackgroundStyleChanges(isScrolled ? 'bg-foreground/30 dark:bg-background/70 backdrop-blur-[10px]' : 'bg-transparent')
        setHamburgerStyleChanges('bg-background dark:bg-foreground')
      } else if (pathname === '/experience') {
        setTextStyleChanges('text-background dark:text-foreground')
        setBackgroundStyleChanges(isScrolled ? 'bg-foreground/30 dark:bg-background/70 backdrop-blur-[10px]' : 'bg-transparent')
        setHamburgerStyleChanges('bg-background dark:bg-foreground')
      } else {
        setTextStyleChanges('text-background dark:text-foreground')
        setBackgroundStyleChanges('bg-foreground dark:bg-background shadow-md')
        setHamburgerStyleChanges('bg-background dark:bg-foreground')
      }
    }

    handleScroll()  // Run on initial load

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Handles propagation on hamburger, works for now
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleToggle(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    setIsOpen(prev => !prev)
  }

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 w-full p-2 z-50 ${textStyleChanges}`}>
      <div className={`absolute inset-0 z-[-1] transition-colors duration-700 ease-in-out ${backgroundStyleChanges}`} />
      <div className='max-w-6xl mx-auto flex justify-between items-center p-4 py-5 sm:py-4'>
        <Link href='/' className='text-sm sm:text-lg md:text-lg font-bold transition-colors duration-700 ease-in-out' aria-label='Lavender Wings Tattoo Home'>Brandon Stone.dev</Link>
        <nav className='hidden sm:flex items-center space-x-4 md:space-x-6 text-sm' aria-label='Main navigation' >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href

            return (
              <Link key={href} href={href}
                className={`relative inline-block pb-1 transition-colors duration-700 ease-in-out ${isActive ? 'text-background dark:text-foreground' : 'text-background dark:text-foreground hover:text-background/70 dark:hover:text-foreground/70'}`}>
                <span className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:rounded-full after:bg-background dark:after:bg-foreground after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}>
                  {label}
                </span>
              </Link>
            )
          })}

          <ThemeToggle />
        </nav>

        <div className='sm:hidden relative flex items-center' ref={menuRef}>
          <Hamburger isOpen={isOpen} hamburgerStyleChanges={hamburgerStyleChanges} toggle={handleToggle} />
          <MobileNavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  )
}

type HamburgerProps = {
  isOpen: boolean
  hamburgerStyleChanges: string
  toggle: (e: React.MouseEvent) => void
}

const Hamburger = ({ isOpen, hamburgerStyleChanges, toggle }: HamburgerProps) => (
  <button className='flex flex-col justify-evenly items-center w-6 h-4 cursor-pointer' type='button' onClick={toggle} aria-label='Toggle navigation menu' aria-controls='mobile-menu' aria-expanded={isOpen}>
    <div className={`w-full h-0.5 rounded-md transition-all duration-150 ease-in-out select-none ${hamburgerStyleChanges} ${isOpen ? 'rotate-45 translate-y-[0.20rem]' : ''}`} />
    <div className={`w-full h-0.5 rounded-md transition-all duration-150 ease-in-out select-none ${hamburgerStyleChanges} ${isOpen ? '-rotate-45 -translate-y-[0.20rem]' : ''}`} />
  </button>
)