'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import clsx from 'clsx'

export const injectedThemeStatus = `
  (function () {
    try {
      const theme = localStorage.getItem('theme');
      if (
        theme === 'dark' || 
        (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`

type ThemeToggleProps = {
  className?: string
  button?: boolean
}

export default function ThemeToggle({ className, button = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    setIsDark(root.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setIsDark(isDark)
  }

  return button ? (
    <button className={clsx('relative flex items-center w-14 h-8 rounded-full px-1 cursor-pointer transition-colors duration-300 focus:outline-none', isDark ? 'bg-gray-800' : 'bg-green-300', className)} onClick={toggleTheme} aria-label='Toggle theme'>
      {/* Sun Icon (left) */}
      <Sun className='text-yellow-400 w-4 h-4' />

      {/* Sliding dot */}
      <div className={clsx('absolute left-[0px] w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300', isDark ? 'translate-x-6' : 'translate-x-0')} />

      {/* Moon Icon (right) */}
      <Moon className='text-background w-4 h-4 ml-auto' />
    </button>
  ) : (
    <button className={`rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${isDark ? 'hover:text-yellow-100' : 'hover:text-blue-800/70'}`} onClick={toggleTheme}>
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
