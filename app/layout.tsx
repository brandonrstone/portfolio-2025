import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from './components/ui/Header'
import { Footer } from './components/ui/Footer'
import { injectedThemeStatus } from './components/ui/ThemeToggle'

// const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] })
// const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
// const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })
// const fira_sans = Fira_Sans({ subsets: ['latin'], weight: ['400', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })
// const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })
// const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })
// const space_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] })
// const varela_round = Varela_Round({ subsets: ['latin'], weight: ['400'] })
// const flow_circular = Flow_Circular({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Brandon Stone.dev',
  description: 'Full-Stack Engineer / Web Developer',
  openGraph: {
    title: 'Brandon Stone.dev',
    description: 'Full-Stack Engineer / Web Developer',
    url: 'https://brandonstonedev.vercel.app/',
    siteName: 'Brandon Stone.dev',
    images: [
      // Can include multiple images with different sizes for formatting/fallbacks
      {
        url: 'https://brandonstonedev.vercel.app/images/OpenGraphImage.png',
        width: 1200,
        height: 630,
        alt: 'Brandon Stone.dev'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Stone.dev',
    description: 'Full-Stack Engineer / Web Developer',
    images: ['https://brandonstonedev.vercel.app/images/OpenGraphImage.png']
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <script dangerouslySetInnerHTML={{ __html: injectedThemeStatus }} />
      </head>
      <body className={`${montserrat.className} antialiased text-background dark:text-foreground bg-foreground dark:bg-background transition-colors duration-700 ease-in-out`}>
        <Header />
        <div className='max-w-6xl mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}