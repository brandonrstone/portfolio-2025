import { ReactNode } from 'react'

export function FullWidthSection({ children, className = '' }: { children: ReactNode, className: string }) {
  return (
    <div className={`relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen ${className}`}>
      {children}
    </div>
  )
}