// app/portfolio/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioPage() {
  // Sample projects, replace with your actual project details
  const projects = [
    {
      id: 1,
      title: 'Boop',
      image: '/images/BoopLogo.png',  // Replace with actual image path
      description: 'A web app built using React and Next.js. It allows users to manage tasks and projects.',
    },
    {
      id: 2,
      title: 'Messenger App',
      image: '/project2.gif',  // Replace with actual image path
      description: 'An interactive dashboard built with D3.js to visualize real-time data from various sources.',
    },
    {
      id: 3,
      title: 'Diablo II Stat Checker',
      image: '/images/diablo2statchecker.gif',  // Replace with actual image path
      description: 'App used for checking item stats in the game Diablo II.',
    },
    {
      id: 4,
      title: 'Project Four',
      image: '/project4.gif',  // Replace with actual image path
      description: 'A portfolio website built to showcase projects and technical skills using React and Next.js.',
    }
  ]

  return (
    <section id='portfolio' className='min-h-screen px-6 py-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(project => <ProjectCard key={project.id} {...project} />)}
      </div>
    </section>
  )
}

type Project = {
  id: number
  title: string
  image: string
  description: string
}

const ProjectCard = (project: Project) => (
  <Link key={project.id} className='group  bg-foreground dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition' href={`/portfolio/${project.title}`}>
    <div className='relative h-52 w-full'>
      <Image src={project.image} alt={`${project.title} image`} fill className='object-cover' quality={100} />
    </div>
    <div className='px-4 py-2 bg-foreground/30 dark:bg-background/70 backdrop-blur-md shadow-inner'>
      <h3 className='text-xl font-semibold text-background dark:text-foreground'>{project.title}</h3>
    </div>
    <div className='p-4 pt-0'>
      <p className='mt-4 text-background dark:text-foreground'>{project.description}</p>
    </div>
  </Link>
)