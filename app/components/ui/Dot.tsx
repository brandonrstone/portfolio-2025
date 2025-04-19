// components/Dot.tsx
import React from 'react'

type DotProps = {
  size: number
  color: string
  top: string
  left: string
  zIndex?: number
}

export const Dot: React.FC<DotProps> = ({ size, color, top, left, zIndex = 10 }) => {
  return <div className='absolute rounded-full' style={{ width: size, height: size, backgroundColor: color, top, left, zIndex, opacity: 0.8 }} />
}