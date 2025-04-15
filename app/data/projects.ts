export type Project = {
  id: number
  title: string
  description: string
  image: string
  video?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Boop',
    description: 'A web app built using React and Next.js. It allows users to manage tasks and projects.',
    image: '/images/BoopLogo.png',
  },
  {
    id: 2,
    title: 'Messenger App',
    description: 'An interactive dashboard built with D3.js to visualize real-time data from various sources.',
    image: '/images/BoopLogo.png',
  },
  {
    id: 3,
    title: 'Diablo II Stat Checker',
    description: 'App used for checking item stats in the game Diablo II.',
    image: '/images/DiabloIIStatChecker.webm',
    video: '/images/DiabloIIStatChecker.webm'
  },
  {
    id: 4,
    title: 'NFTMarketplace',
    description: 'A portfolio website built to showcase projects and technical skills using React and Next.js.',
    image: '/images/NFTMarketplace.webm',
    video: '/images/NFTMarketplace.webm'
  }
]