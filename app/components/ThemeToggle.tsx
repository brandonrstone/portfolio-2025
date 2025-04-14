// components/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

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

export default function ThemeToggle() {
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

  return (
    <button className='p-2 rounded-full hover:bg-gray-200 hover:bg-gray-700 transition-colors cursor-pointer' onClick={toggleTheme}>
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
