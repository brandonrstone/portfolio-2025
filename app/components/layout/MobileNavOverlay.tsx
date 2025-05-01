import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { BookOpenCheck, ChartNoAxesGantt, CircleUserRound, CodeXml, Home, X } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'

type MobileNavOverlayProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileNavOverlay = ({ isOpen, setIsOpen }: MobileNavOverlayProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, setIsOpen])

  return (
    <div className={`fixed inset-0 transition-transform duration-300 ease-in-out transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} id='mobile-menu' ref={menuRef} role='dialog' aria-modal='true'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={() => setIsOpen(false)} aria-hidden='true' />

      {/* Sidebar */}
      <div className='relative w-3/4 max-w-sm h-full p-6 bg-foreground dark:bg-background text:background dark:text-foreground shadow-xl transition-colors duration-700 ease-in-out'>
        <button className='absolute top-4 right-4 text-background dark:text-foreground hover:text-background/70 dark:hover:text-foreground/70 transition-colors duration-700 ease-in-out' onClick={() => setIsOpen(false)} aria-label='Close menu' >
          <X className='w-6 h-6 cursor-pointer' />
        </button>

        <nav className='mt-10 space-y-6 text-lg font-medium'>
          <NavItem href='/' onClick={() => setIsOpen(false)} icon={Home} label='Home' />
          <NavItemDivider />
          <NavItem href='/about' onClick={() => setIsOpen(false)} icon={CircleUserRound} label='About' />
          <NavItemDivider />
          <NavItem href='/experience' onClick={() => setIsOpen(false)} icon={ChartNoAxesGantt} label='Experience' />
          <NavItemDivider />
          <NavItem href='/portfolio' onClick={() => setIsOpen(false)} icon={CodeXml} label='Portfolio' />
          <NavItemDivider />
          <NavItem href='/contact' onClick={() => setIsOpen(false)} icon={BookOpenCheck} label='Contact' />
          <NavItemDivider />
          <ThemeToggle className='sm:hidden' button />
        </nav>
      </div>
    </div>
  )
}

type NavItemProps = {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  onClick?: () => void
}

const NavItem = ({ href, icon: Icon, label, onClick }: NavItemProps) => (
  <Link href={href} className='flex items-center gap-3 text-background dark:text-foreground hover:text-background/70 dark:hover:text-foreground/70 transition-colors duration-700 ease-in-out' onClick={onClick} aria-label={label}>
    <Icon className='w-5 h-5' />
    {label}
  </Link>
)

const NavItemDivider = () => <hr className='border-t border-background dark:border-foreground transition-colors duration-700 ease-in-out' />