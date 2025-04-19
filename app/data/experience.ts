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
      'Implemented KYC onboarding and user authentication',
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
      'Fine-tuned rendering strategies for site on a per-page basis (SSG, SSR) while maximizing SEO',
      'Rapidly constructed TypeScript component library for critical user journeys',
      'Queried and formatted JSON-RPC data with GraphQL'
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
    title: 'Software Engineer Intern',
    company: 'Sensible United, LLC',
    date: '2018 - 2019',
    description: 'Apprenticed in a small fintech startup building geographical price tooling',
    points: [
      'Contributed to frontend geographic location tooling using React Native',
      'Maintained and fascilitated the retrieval of credit card-specific savings data from MongoDB ',
      'Set up backend API routes to handle payload data with Express'
    ]
  }
]