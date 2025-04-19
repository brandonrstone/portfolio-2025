// components/ParallaxDotField.tsx
'use client'

import { ParallaxContainer } from './ParallaxContainer'
import { Dot } from '../ui/Dot'

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

export const ParallaxDotField = ({ dotCount = 50 }) => {
  const colors = ['#fff', '#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#E85D75']

  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const size = getRandom(6, 20)
    const color = colors[Math.floor(Math.random() * colors.length)]
    const top = `${getRandom(0, 110)}%` // since container is taller now

    const left = `${getRandom(0, 97)}%`
    const speed = getRandom(0.1, 0.5)

    return (
      <ParallaxContainer key={i} speed={speed}>
        <Dot size={size} color={color} top={top} left={left} zIndex={10} />
      </ParallaxContainer>
    )
  })

  // 👇 Wrap all dots in a single relative, full-size container
  return <div className="absolute inset-0 w-full h-[100%] top-[-10%] pointer-events-none z-0"> {dots}</div>
}
