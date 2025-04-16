'use client'

import Image from 'next/image'
import Link from 'next/link'
import { type Project, projects } from '../data/projects'

export default function PortfolioPage() {
  return (
    <section id='portfolio' className='min-h-screen px-6 py-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(project => <ProjectCard key={project.id} {...project} />)}
      </div>
    </section>
  )
}

const ProjectCard = (project: Project) => (
  <article className='group bg-foreground dark:bg-black/30 rounded-lg shadow-lg overflow-hidden hover:shadow-background/40 dark:hover:shadow-foreground/20 hover:shadow-lg transition duration-300 ease-in-out' aria-labelledby={`project-${project.id}-title`}>
    <Link key={project.id} href={`/portfolio/${project.title}`} className='group rounded-lg shadow-lg overflow-hidden transition'>
      {project.video ? (
        <video className='w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out' autoPlay loop muted playsInline role='img' aria-label={`${project.title} preview video`}>
          <source src={project.video} type='video/webm' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className='relative h-52 w-full'>
          <Image src={project.image} className='object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out' alt={`${project.title} image`} fill quality={100} sizes='lg' />
        </div>
      )}

      <div className='px-4 pt-4 backdrop-blur-md shadow-inner'>
        <h3 className='text-xl font-semibold text-background dark:text-foreground' id={`project-${project.id}-title`}>{project.title}</h3>
      </div>
      <div className='p-4 pt-0'>
        <p className='mt-4 text-background dark:text-foreground'>{project.description}</p>
      </div>
    </Link>
  </article>
)