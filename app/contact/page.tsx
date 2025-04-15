'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ContactForm, contactSchema } from '../data/schemas'

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (data: ContactForm) => {
    setStatus('sending')

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
    <section className='min-h-screen flex items-center justify-center px-6 py-24 bg-foreground dark:bg-background transition-colors duration-300 ease-in-out'>
      <div className='max-w-2xl w-full'>
        <h1 className='text-3xl md:text-4xl font-bold text-background dark:text-foreground mb-6 text-center'>Let’s Get in Touch</h1>

        <form className='space-y-3 bg-foreground/80 dark:bg-background/50 p-8 rounded-2xl shadow-xl dark:shadow-black backdrop-blur' onSubmit={handleSubmit(onSubmit)} aria-labelledby='contact-form-title' noValidate>
          <div>
            <label htmlFor='name' className='block mb-1 text-sm font-medium text-background dark:text-foreground'>
              Name
            </label>
            <input
              id='name'
              type='text'
              {...register('name')}
              aria-invalid={!!errors.name}
              aria-describedby='name-error'
              className='w-full px-4 py-2 rounded-lg bg-foreground dark:bg-background/70 border border-zinc-200 dark:border-zinc-700 text-background dark:text-foreground focus:outline-none focus:ring-2 focus:ring-background dark:focus:ring-foreground'
            />
            <div className='h-4 mt-1' id='name-error'>
              {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block mb-1 text-sm font-medium text-background dark:text-foreground'>
              Email
            </label>
            <input
              id='email'
              type='email'
              {...register('email')}
              aria-invalid={!!errors.email}
              aria-describedby='email-error'
              className='w-full px-4 py-2 rounded-lg bg-foreground dark:bg-background/70 border border-zinc-200 dark:border-zinc-700 text-background dark:text-foreground focus:outline-none focus:ring-2 focus:ring-background dark:focus:ring-foreground'
            />
            <div className='h-4 mt-1' id='email-error'>
              {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor='message' className='block mb-1 text-sm font-medium text-background dark:text-foreground'>
              Message
            </label>
            <textarea
              id='message'
              rows={6}
              {...register('message')}
              aria-invalid={!!errors.message}
              aria-describedby='message-error'
              className='w-full px-4 py-2 rounded-lg bg-foreground dark:bg-background/70 border border-zinc-200 dark:border-zinc-700 text-background dark:text-foreground focus:outline-none focus:ring-2 focus:ring-background dark:focus:ring-foreground resize-none'
            />
            <div className='h-4 mt-1' id='message-error'>
              {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>
          </div>

          <button
            className='w-full py-2 px-4 rounded-lg bg-green-500/70 dark:bg-green-600/70 hover:bg-green-500/60 dark:hover:bg-green-500/50 text-white font-semibold dark:focus:ring-foreground/90 transition duration-300 cursor-pointer'
            type='submit'
            disabled={status === 'sending'}
            aria-busy={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className='text-green-600 text-sm text-center' role='status'>
              Your message has been sent!
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-600 text-sm text-center' role='alert'>
              Something went wrong. Try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
