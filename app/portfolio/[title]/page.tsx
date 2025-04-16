import Link from 'next/link'
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

        <h1 className='text-3xl font-bold text-background dark:text-foreground'>{project.title}</h1>
        <p className='mt-4 text-background dark:text-foreground'>{project.description}</p>

        <div className='mt-6'>
          <p className='font-medium text-background dark:text-foreground'>Year of Completion: {project.year}</p>
        </div>

        <div className='mt-4'>
          <Link href={project.projectLink} className='text-blue-500 hover:underline'>
            View Project
          </Link>
        </div>

        {project.codeLink && (
          <div className='mt-4'>
            <Link href={project.codeLink} className='text-blue-500 hover:underline'>
              View Code
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}