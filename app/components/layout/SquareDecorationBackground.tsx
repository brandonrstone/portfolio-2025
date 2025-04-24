'use client'

import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

type SquareData = {
  id: number
  filled: boolean
  color: string
  size: string
  top: number
  left: number
  rotate: number
  sensitivity: number
}

type MouseOffset = {
  x: number
  y: number
}

export function SquareDecorationBackground() {
  const [squares, setSquares] = useState<SquareData[]>([])
  const [mouseOffset, setMouseOffset] = useState<MouseOffset>({ x: 0, y: 0 })

  useEffect(() => {
    let id = 0
    const interval = setInterval(() => {
      if (id >= 50) {
        clearInterval(interval)
        return
      }

      const newSquare: SquareData = {
        id,
        filled: Math.random() < 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        top: Math.random() * 100,
        left: Math.random() * 104,
        rotate: Math.random() * 45 - 22.5,
        sensitivity: Math.random() * 1 + 0.5
      }

      setSquares(prev => [...prev, newSquare])
      id++
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMouseOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden z-0'>
      {squares.map(square => <Square key={square.id} {...square} mouseOffset={mouseOffset} />)}
    </div>
  )
}

const colors = [
  'bg-pink-400',
  'bg-red-500',
  'bg-purple-500',
  'bg-yellow-400',
  'bg-teal-400',
  'border-pink-400',
  'border-red-500',
  'border-purple-500',
  'border-yellow-400',
  'border-teal-400'
]

const sizes = [
  'w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-6 h-6', 'w-8 h-8',
  'w-10 h-10', 'w-12 h-12', 'w-14 h-14', 'w-16 h-16',
  'w-[4.5rem] h-[4.5rem]', 'w-20 h-20'
]

type SquareProps = SquareData & {
  mouseOffset: MouseOffset
}

function Square({ filled, color, size, top, left, rotate, mouseOffset, sensitivity }: SquareProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10)

    return () => clearTimeout(timeout)
  }, [])

  const squareCenterX = left / 100
  const squareCenterY = top / 100
  const normX = squareCenterX * 2 - 1
  const normY = squareCenterY * 2 - 1

  const dx = mouseOffset.x - normX
  const dy = mouseOffset.y - normY
  const dist = Math.sqrt(dx * dx + dy * dy)

  const radius = 0.35 // try adjusting this!
  const insideRadius = dist < radius

  const distanceFactor = insideRadius ? 1 - dist / radius : 0
  const offsetStrength = 64
  const offsetX = mouseOffset.x * offsetStrength * sensitivity * distanceFactor
  const offsetY = mouseOffset.y * offsetStrength * sensitivity * distanceFactor

  return (
    <div
      className={clsx(
        'absolute rounded-sm transition-all duration-700 ease-out',
        size,
        filled ? color : `border ${color}`,
        filled ? '' : 'bg-transparent'
      )}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        opacity: visible ? 0.2 : 0,
        transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg) scale(${visible ? 1 : 0.9})`,
        transition: 'transform 0.4s ease-out, opacity 0.7s ease',
        zIndex: 0,
      }}
    />
  )
}
