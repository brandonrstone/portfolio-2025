import Image from 'next/image'

import { projects } from '@/app/data/projects'

export default async function ProjectPage(props: { params: Promise<{ title: string }> }) {
  const params = await props.params
  const projectTitle = decodeURIComponent(params.title)
  console.log('Title: ', projectTitle)
  const project = projects.find(({ title }) => title === projectTitle)

  if (!project) {
    return (
      <section className='min-h-screen flex items-center justify-center'>
        <p>Project not found</p>
      </section>
    )
  }

  return (
    <section className='min-h-screen px-6 py-20'>
      <div className='max-w-4xl mx-auto'>
        <div className='mb-8'>
          {project.video ? (
            <video className='w-full h-auto object-cover' autoPlay loop muted playsInline>
              <source src={project.video} type='video/webm' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className='relative h-64 w-full'>
              <Image src={project.image} className='object-cover' alt={`${project.title} image`} layout='fill' quality={100} />
            </div>
          )}
        </div>

        <h1 className='text-3xl font-bold text-background dark:text-foreground transition-colors duration-700 ease-in-out'>{project.title}</h1>
        <p className='mt-4 text-background dark:text-foreground transition-colors duration-700 ease-in-out'>{project.description}</p>

        <hr className='mt-6 transition-colors duration-700 ease-in-out' />
        <div className='flex flex-col items-end justify-end space-y-2 mt-8'>
          <a href={project.projectLink} target='_blank' rel='noopener noreferrer' className='w-30 p-2 hover:text-foreground dark:hover:text-background border border-background hover:border-foreground dark:border-foreground dark:hover:border-background hover:bg-background dark:hover:bg-foreground rounded-md transition-colors duration-700 ease-in-out'>
            View Project
          </a>
          {project.codeLink && (
            <a href={project.codeLink} target='_blank' rel='noopener noreferrer' className='flex justify-center w-30 p-2 hover:text-foreground dark:hover:text-background border border-background hover:border-foreground dark:border-foreground dark:hover:border-background hover:bg-background dark:hover:bg-foreground rounded-md transition-colors duration-700 ease-in-out'>
              View Code
            </a>
          )}
        </div>
      </div>
    </section>
  )
}