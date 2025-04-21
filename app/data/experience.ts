export type ExperienceData = {
  title: string
  company: string
  image: string
  imageStyles: string
  date: string
  description: string
  points?: string[]
}

export const experienceData: ExperienceData[] = [
  {
    title: 'Web3 Mobile Engineer',
    company: 'Boop Industries Inc',
    image: '/images/Boop-Hand.png',
    imageStyles: '-top-12 -right-6 md:-top-8 md:-right-1  opacity-45',
    date: '2023 - 2024',
    description: 'Native web3 mobile startup centered on global peer-to-peer remittances',
    points: [
      'Built core front end architecture with TypeScript, React Native, & Google Firebase',
      'Worked with founding engineer to design wallet custody and token swapping models using @solana/web3.js',
      'Implemented KYC onboarding and user authentication',
      'Integrated vendor REST APIs for USD/USDC-SOL on-ramp and oﬀ-ramp'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Moonwell.fi',
    image: '/images/Moonwell-Logo.png',
    imageStyles: '-top-4 left-0 md:-top-4 md:left-2 rounded-full transform scale-110',
    date: '2023',
    description: 'Contracted for the migration and launch of the Moonwell.fi dApp',
    points: [
      'Shipped web pages and features to production with Next.js',
      'Fine-tuned rendering strategies on a per-page basis (SSG, SSR) while maximizing SEO',
      'Rapidly constructed TypeScript component library for critical user journeys',
      'Queried and formatted JSON-RPC data with GraphQL'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Fidelity Investments',
    image: '/images/Fidelity-Logo.png',
    imageStyles: '-right-8 md:-right-3',
    date: '2020 - 2023',
    description: 'Delivered financial software within enterprise DevOps',
    points: [
      'Performed TypeScript module migrations for production investment infrastructure',
      'Integrated AWS services including EC2, DynamoDB, S3, API Gateway, and Lambda',
      'Oversaw Jenkins automations to meet deadlines',
      'Maintained Jest unit & integration testing coverage'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Sensible United, LLC',
    image: '',
    imageStyles: '',
    date: '2018 - 2019',
    description: 'Apprenticed contributing to location-based credit card rewards startup',
    points: [
      'Shipped frontend React Native code',
      'Entered, maintained and fascilitated the retrieval of card-specific savings data from MongoDB ',
      'Set up backend API routes to handle payload data with Express'
    ]
  }
]