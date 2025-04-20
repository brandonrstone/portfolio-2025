'use client'

import React from 'react'
import clsx from 'clsx'

export function SquareDecorationBackground() {
  const squares = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {squares.map(i => <Square key={i} filled={Math.random() < 0.5} />)}
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
  'border-teal-400',
]

const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10', 'w-12 h-12', 'w-14 h-14', 'w-16 h-16', 'w-18 h-18', 'w-20 h-20']

function Square({ filled }: { filled: boolean }) {
  const color = colors[Math.floor(Math.random() * colors.length)]
  const size = sizes[Math.floor(Math.random() * sizes.length)]
  const top = Math.random() * 100
  const left = Math.random() * 104
  const rotate = Math.random() * 45 - 22.5

  return <div className={clsx('absolute rounded-sm', size, filled ? color : `border ${color}`, filled ? '' : 'bg-transparent')} style={{ top: `${top}%`, left: `${left}%`, transform: `rotate(${rotate}deg)`, opacity: 0.2, zIndex: 0 }} />
}
