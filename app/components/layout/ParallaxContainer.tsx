'use client'

import { useEffect, useState } from 'react'

type ParallaxContainerProps = {
  children: React.ReactNode
  speed?: number
}

export function ParallaxContainer({ children, speed = 0.50 }: ParallaxContainerProps) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='transition-transform duration-75 ease-linear' style={{ transform: `translateY(${offsetY * speed}px)`, willChange: 'transform' }}>
      {children}
    </div>
  )
}