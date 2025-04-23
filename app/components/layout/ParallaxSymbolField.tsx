'use client'

import { ParallaxContainer } from './ParallaxContainer'
import { Symbol } from '../ui/Symbol'

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

const generateRandomAnimation = () => {
  const movementX = getRandom(-5, 5)  // Random horizontal movement
  const movementY = getRandom(-5, 5)  // Random vertical movement
  const duration = getRandom(2, 6)    // Random animation duration between 2 and 6 seconds
  const delay = getRandom(0, 2)       // Random delay before animation starts
  const timingFunction = Math.random() > 0.5 ? 'ease-in-out' : 'linear'  // Random timing function

  return {
    animation: `circleMovement ${duration}s ${timingFunction} ${delay}s infinite`,
    movementX,
    movementY
  }
}

export const ParallaxSymbolField = ({ symbolCount = 50 }) => {
  const colors = ['#6e5494', '#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#E85D75']
  const symbols = ['<p>', '<div>', '<span>', '<h1>', '<button>', '<form>']

  const symbolElements = Array.from({ length: symbolCount }).map((_, i) => {
    const size = getRandom(6, 20)
    const color = colors[Math.floor(Math.random() * colors.length)]
    const top = `${getRandom(0, 110)}%`
    const left = `${getRandom(0, 97)}%`
    const speed = getRandom(0.1, 0.5)

    // Generate random animation and movement values for each symbol
    const { animation, movementX, movementY } = generateRandomAnimation()

    const symbol = symbols[Math.floor(Math.random() * symbols.length)]  // Randomly choose a symbol

    return (
      <ParallaxContainer key={i} speed={speed}>
        <Symbol
          size={size}
          color={color}
          top={top}
          left={left}
          zIndex={10}
          randomAnimation={animation}
          movementX={movementX}
          movementY={movementY}
          symbol={symbol}
        />
      </ParallaxContainer>
    )
  })

  return (
    <div className="absolute inset-0 w-full h-[100%] top-[-10%] pointer-events-none z-0">
      {symbolElements}
    </div>
  )
}
