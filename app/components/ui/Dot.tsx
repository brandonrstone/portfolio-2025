import React from 'react'

type DotProps = {
  size: number
  color: string
  top: string
  left: string
  zIndex?: number
  randomAnimation: string  // Random animation style prop
  movementX: number        // Horizontal movement for animation
  movementY: number        // Vertical movement for animation
}

// Extending CSSProperties to support custom properties (CSS variables)
declare module 'react' {
  interface CSSProperties {
    '--moveX'?: string
    '--moveY'?: string
  }
}

export const Dot: React.FC<DotProps> = ({ size, color, top, left, zIndex = 10, randomAnimation, movementX, movementY }) => {
  // Define the style object, allowing custom properties for CSS variables
  const style: React.CSSProperties = {
    width: size,
    height: size,
    backgroundColor: color,
    top,
    left,
    zIndex,
    opacity: 0.8,
    animation: randomAnimation,
    '--moveX': `${movementX}px`,  // Custom property for horizontal movement
    '--moveY': `${movementY}px`   // Custom property for vertical movement
  }

  return <div className="absolute rounded-full" style={style} />
}
