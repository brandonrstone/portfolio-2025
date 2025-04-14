'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { MobileNavOverlay } from './MobileNavOverlay'
import ThemeToggle from './ThemeToggle'

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
        setTextStyleChanges(isScrolled ? 'text-white' : 'text-background')
        setBackgroundStyleChanges(isScrolled ? '' : 'bg-transparent')
        setHamburgerStyleChanges(isScrolled ? 'bg-white' : '')
      } else if (pathname === '/portfolio') {
        setTextStyleChanges('text-white')
        setBackgroundStyleChanges(isScrolled ? '/80 backdrop-blur-md' : '')
        setHamburgerStyleChanges('bg-white')
      } else {
        setTextStyleChanges('text-white')
        setBackgroundStyleChanges('')
        setHamburgerStyleChanges('bg-white')
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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out text-black ${textStyleChanges}`}>
      <div className={`absolute inset-0 z-[-1] transition-all duration-500 ease-in-out ${backgroundStyleChanges}`} />
      <div className='max-w-6xl mx-auto flex justify-between items-center p-4 py-5 sm:py-4'>
        <Link href='/' className='text-sm sm:text-lg md:text-lg font-bold' aria-label='Lavender Wings Tattoo Home'>Lavender Wings Tattoo</Link>
        <nav className='hidden sm:block space-x-4 md:space-x-6 text-sm font-semibold' aria-label='Main navigation'>
          <Link href='/about' className={`${pathname === '/about' ? 'text-lavender' : 'sm:hover:text-lavender hover:transition-colors hover:duration-300 ease-in-out'}`} >About</Link>
          <Link href='/portfolio' className={`${pathname === '/portfolio' ? 'text-lavender' : 'sm:hover:text-lavender hover:transition-colors hover:duration-300 ease-in-out'}`}> Portfolio</Link>
          <Link href='/contact' className={`${pathname === '/contact' ? 'text-lavender' : 'sm:hover:text-lavender hover:transition-colors hover:duration-300 ease-in-out'}`}> Contact</Link>
        </nav>

        <div className='sm:hidden relative flex items-center' ref={menuRef}>
          <ThemeToggle />
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
  <button className='flex flex-col justify-evenly items-center w-6 h-4 cursor-pointer' type='button' aria-label='Toggle navigation menu' aria-controls='mobile-menu' aria-expanded={isOpen} onClick={toggle}>
    <span className='sr-only select-none'>Toggle navigation menu</span>
    <div className={`w-full h-0.5 rounded-md transition-all duration-150 ease-in-out select-none ${hamburgerStyleChanges} ${isOpen ? 'rotate-45 translate-y-[0.20rem]' : ''}`} />
    <div className={`w-full h-0.5 rounded-md transition-all duration-150 ease-in-out select-none ${hamburgerStyleChanges} ${isOpen ? '-rotate-45 -translate-y-[0.20rem]' : ''}`} />
  </button>
)