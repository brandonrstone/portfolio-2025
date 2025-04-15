export type ExperienceData = {
  title: string
  company: string
  date: string
  description: string
  points?: string[]
}

export const experienceData: ExperienceData[] = [
  {
    title: 'Web3 Mobile Engineer',
    company: 'Boop Industries Inc',
    date: '2023 - 2024',
    description: 'Web3 mobile application focused on peer-to-peer remittances',
    points: [
      'Built core product focusing on international remittances with TypeScript, React Native, & Node.js',
      'Worked with founding engineer to build wallet custody and token swapping model using @solana/web3.js',
      'Owned the development process of KYC onboarding and user authentication',
      'Integrated vendor REST APIs for crypto/fiat on-ramp and oﬀ-ramp'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Moonwell.fi',
    date: '2023',
    description: 'Contracted for the migration and launch of the Moonwell.fi dApp',
    points: [
      'Shipped web pages and features to production with Next.js',
      'Rapidly constructed TypeScript component library for critical user journeys',
      'Queried and formatted JSON-RPC data with GraphQL',
      'Enhanced site with static and server rendering while upholding SEO standards'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Fidelity Ivestments',
    date: '2020 - 2023',
    description: 'Collaborated in an enterprise environment to build infrastructure.',
    points: [
      'Performed TypeScript module migrations for production investment infrastructure',
      'Integrated AWS services including EC2, DynamoDB, S3, API Gateway, and Lambda',
      'Docker, Kubernetes, Jenkins and GitHub versioning control within core DevOps pipeline',
      'Set up Jest unit testing suites for Node.js modules'
    ]
  },
  {
    title: 'Intern Developer',
    company: 'Buildify',
    date: '2018 - 2019',
    description: 'Supported the team in prototyping components and building dashboards.',
  }
]