'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ContactForm, contactSchema } from '../utils/schemas'

import { SquareDecorationBackground } from '../components/layout/SquareDecorationBackground'

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (data: ContactForm) => {
    setStatus('sending')

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (result.success) {
      setStatus('sent')
      reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <section className='min-h-screen flex items-center justify-center px-6 py-24 text-background dark:text-foreground'>
      <SquareDecorationBackground />
      <div className='max-w-xl w-full'>
        <div className='mt-2 mb-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-center text-background dark:text-foreground transition-colors duration-700 ease-in-out'>Let’s Get in Touch</h1>
          <h2 className='text-background/80 dark:text-foreground/80 text-lg md:text-2xl text-center font-bold transition-colors duration-700 ease-in-out'>
            {'<Great projects are co-written '}
            <span className='text-blue-400 dark:text-amber-200 transition-colors duration-700 ease-in-out'>/</span>
            {'>'}</h2>
        </div>

        <form className='space-y-6 p-8 rounded-xl backdrop-blur-sm bg-background/30 dark:bg-foreground/5 transition-colors duration-700 ease-in-out' onSubmit={handleSubmit(onSubmit)} aria-labelledby='contact-form-title' noValidate>
          <div>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>Name</label>
            <input className='w-full px-4 py-3 text-background dark:text-foreground rounded-lg bg-transparent border border-background/30 dark:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-700 ease-in-out' id='name' type='text'   {...register('name')} aria-invalid={!!errors.name} aria-describedby='name-error' />
            <div className='h-4 mt-1' id='name-error'>
              {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email</label>
            <input className='w-full px-4 py-3 text-background dark:text-foreground rounded-lg bg-transparent border border-background/30 dark:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-700 ease-in-out' id='email' type='email' {...register('email')} aria-invalid={!!errors.email} aria-describedby='email-error' />
            <div className='h-4 mt-1' id='email-error'>
              {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor='message' className='block mb-2 text-sm font-medium'>Message</label>
            <textarea id='message' rows={6} {...register('message')} aria-invalid={!!errors.message} aria-describedby='message-error' className='w-full px-4 py-3 text-background dark:text-foreground rounded-lg bg-transparent border border-background/30 dark:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none transition-colors duration-700 ease-in-out' />
            <div className='h-4 mt-1' id='message-error'>
              {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>
          </div>

          <button className='w-full py-3 px-4 rounded-lg bg-gradient-to-r from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600 text-foreground font-semibold focus:ring-2 focus:ring-pink-300 cursor-pointer transition-all duration-700 ease-in-out' type='submit' disabled={status === 'sending'} aria-busy={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && <p className='text-green-500 text-sm text-center' role='status'>Your message has been sent!</p>}
          {status === 'error' && <p className='text-red-600 text-sm text-center' role='alert'>Something went wrong. Try again later.</p>}
        </form>
      </div>
    </section>
  )
}
