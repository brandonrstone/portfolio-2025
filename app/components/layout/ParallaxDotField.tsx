'use client'

import { ParallaxContainer } from './ParallaxContainer'
import { Dot } from '../ui/Dot'

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

const generateRandomAnimation = () => {
  const movementX = getRandom(-5, 5)  // Random horizontal movement
  const movementY = getRandom(-5, 5)  // Random vertical movement
  const duration = getRandom(2, 6)    // Random animation duration between 2 and 6 seconds
  const delay = getRandom(0, 2)       // Random delay before animation starts
  const timingFunction = Math.random() > 0.5 ? 'ease-in-out' : 'linear'  // Random timing function

  // Generate the animation style with CSS variables for movement
  return {
    animation: `circleMovement ${duration}s ${timingFunction} ${delay}s infinite`,
    movementX,
    movementY
  }
}

export const ParallaxDotField = ({ dotCount = 50 }) => {
  const colors = ['#fff', '#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#E85D75']

  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const size = getRandom(6, 20)
    const color = colors[Math.floor(Math.random() * colors.length)]
    const top = `${getRandom(0, 110)}%`
    const left = `${getRandom(0, 97)}%`
    const speed = getRandom(0.1, 0.5)

    // Generate random animation and movement values for each dot
    const { animation, movementX, movementY } = generateRandomAnimation()

    return (
      <ParallaxContainer key={i} speed={speed}>
        <Dot size={size} color={color} top={top} left={left} zIndex={10} randomAnimation={animation} movementX={movementX} movementY={movementY} />
      </ParallaxContainer>
    )
  })

  return (
    <div className="absolute inset-0 w-full h-[100%] top-[-10%] pointer-events-none z-0">
      {dots}
    </div>
  )
}