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

export function ThemeToggle({ className, button = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  // Setup on mount only (client-side)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    const localTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const currentThemeIsDark = localTheme === 'dark' || (!localTheme && systemPrefersDark)

    root.classList.toggle('dark', currentThemeIsDark)
    setIsDark(currentThemeIsDark)
  }, [])

  // Guard against SSR
  if (isDark === null || typeof window === 'undefined') return null

  const toggleTheme = () => {
    const root = document.documentElement
    const nowDark = !isDark

    root.classList.toggle('dark', nowDark)
    localStorage.setItem('theme', nowDark ? 'dark' : 'light')
    setIsDark(nowDark)
  }

  return button ? (
    <button
      className={clsx(
        'relative flex items-center w-14 h-8 rounded-full px-1 cursor-pointer transition-colors duration-700 ease-in-out focus:outline-none',
        isDark ? 'bg-gray-800' : 'bg-green-300',
        className
      )}
      onClick={toggleTheme}
      aria-label='Toggle theme'
    >
      <Sun className='text-yellow-400 w-4 h-4' />
      <div
        className={clsx(
          'absolute left-[0px] w-8 h-8 bg-foreground rounded-full shadow-md transform transition-transform duration-300',
          isDark ? 'translate-x-6' : 'translate-x-0'
        )}
      />
      <Moon className='text-background w-4 h-4 ml-auto' />
    </button>
  ) : (
    <button
      className={clsx(
        'rounded-full cursor-pointer transition-colors duration-700 ease-in-out',
        isDark ? 'hover:text-yellow-100' : 'hover:text-blue-800/70',
        className
      )}
      onClick={toggleTheme}
      aria-label='Toggle theme'
    >
      {isDark ? (
        <Sun size={20} className='-translate-y-0.5' />
      ) : (
        <Moon size={20} className='-translate-y-0.5' />
      )}
    </button>
  )
}
