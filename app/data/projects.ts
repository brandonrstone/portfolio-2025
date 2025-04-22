export type Project = {
  id: string
  title: string
  description: string
  image: string
  video?: string
  year: number
  projectLink: string
  codeLink?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Messenger App',
    description: 'My take on a chat app; built with Vite & Firebase.',
    year: 2025,
    image: '/images/Chat.png',
    projectLink: 'https://chatroom-app-peach.vercel.app/',
    codeLink: 'https://github.com/brandonrstone/Chat-App'
  },
  {
    id: '2',
    title: 'Diablo II Stat Checker',
    description: 'App used for checking item stats in the game Diablo II.',
    image: '/images/DiabloIIStatChecker.webm',
    video: '/images/DiabloIIStatChecker.webm',
    year: 2022,
    projectLink: 'https://diablo2rolledstatchecker.vercel.app/',
    codeLink: 'https://github.com/brandonrstone/diablo2-rolled-stat-checker'
  },
  {
    id: '3',
    title: 'NFTMarketplace',
    description: 'A portfolio website built to showcase projects and technical skills using React and Next.js.',
    image: '/images/NFTMarketplace.webm',
    video: '/images/NFTMarketplace.webm',
    year: 2022,
    projectLink: '',
    codeLink: ''
  }
]