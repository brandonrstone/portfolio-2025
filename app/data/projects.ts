export type Project = {
  id: string
  title: string
  about: string,
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
    title: 'Chat App',
    about: 'Simple messaging app',
    description: 'A messenger built with TypeScript, Vite & Firebase that is made to be an addition to a current project I am working on.',
    year: 2025,
    image: '/images/Chat.png',
    projectLink: 'https://chatroom-app-peach.vercel.app/',
    codeLink: 'https://github.com/brandonrstone/Chat-App'
  },
  {
    id: '2',
    title: 'Moonwell.fi',
    about: "Contributer to the protocol's UI",
    description: 'Moonwell is a decentralized finance (DeFi) protocol on the Moonbeam and Moonriver networks that allows users to leverage their funds to borrow, lend, and stake while earning rewards in a decentralized environment. I contributed by pushing web pages and features to production with Next.js and helped to rapidly build the TypeScript component library to facilitate critical user journeys. Check them out!',
    image: '/images/Moonwell-Logo-Blue.png',
    year: 2022,
    projectLink: 'https://moonwell.fi/',
    codeLink: ''
  },
  {
    id: '3',
    title: 'Diablo II Stat Checker',
    about: 'Search app for checking item stats in the game Diablo II',
    description: "I made this app for my freinds & Discord server. It takes inventory of the items in the game Diablo II and returns the possible stats an item can roll, allowing a quick look up when trying to maximize your character's stats inside the game. ⚔️⬆",
    image: '/images/DiabloIIStatChecker.webm',
    video: '/images/DiabloIIStatChecker.webm',
    year: 2022,
    projectLink: 'https://diablo2rolledstatchecker.vercel.app/',
    codeLink: 'https://github.com/brandonrstone/diablo2-rolled-stat-checker'
  },
  {
    id: '4',
    title: 'NFT Marketplace',
    about: 'An marketplace that allows for NFT trading between Ethereum addresses',
    description: 'Took an interest in the rise of Cryptocurrency & the web3 industry and wanted to get a better undertstanding how things work under the hood. This project is a JavScript application that used early ethers.js APIs to interact with smart contracts on the Ethereum blockchain. It called code from a Solidity smart contract I built and deployed to the Ethereum Goerli testnet.',
    image: '/images/NFTMarketplace.webm',
    video: '/images/NFTMarketplace.webm',
    year: 2022,
    projectLink: '',
    codeLink: ''
  },
]