import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { injectedThemeStatus } from './components/ThemeToggle'

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
  title: 'Brandon Stone Dev',
  description: 'Software Engineer / Web Developer',
  openGraph: {
    title: 'Brandon Stone Dev',
    description: 'Software Engineer / Web Developer',
    url: 'https://brandonstone-dev.vercel.app/',
    siteName: 'Lavender Wings Tattoo',
    images: [
      // Can include multiple images with different sizes for formatting/fallbacks
      {
        url: 'https://brandonstone-dev.vercel.app/images/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Brandon Stone Dev'
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Stone Dev',
    description: 'Software Engineer / Web Developer',
    images: ['https://brandonstone-dev.vercel.app/images/Logo.png']
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <script dangerouslySetInnerHTML={{ __html: injectedThemeStatus }} />
      </head>
      <body className={`${montserrat.className} antialiased text-background dark:text-foreground bg-foreground dark:bg-background`}>
        <Header />
        <div className='max-w-6xl mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}