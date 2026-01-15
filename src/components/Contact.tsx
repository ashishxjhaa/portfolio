'use client'

import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'sonner'


function Contact() {

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    const toastId = toast.loading('Sending...')

    emailjs.sendForm(
      'service_o9vwevq',
      'template_sz218zk',
      form.current!,
      'G2y6X9CPU5ZVKwofj'
    ).then(
      () => {
        toast.success('Message sent successfully', { id: toastId })
        form.current?.reset()
      },
      (error) => {
        toast.error('Failed to send' + error.text, { id: toastId })
      }
    )
  }

  return (
    <div className='mx-10 py-20'>

      <div className='w-fit mx-auto'>
        <div className='py-10'>
          <div className='text-2xl sm:text-4xl font-medium tracking-wide leading-normal bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text dark:text-transparent text-black'>
            How can i help:
          </div>
          <div className='font-sans text-sm dark:text-white text-black opacity-75'>{`Let's build something great together.`}</div>
        </div>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 mx-auto pb-10 sm:pb-20'>
          <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-2'>
            <div>
              <input type='text' name='firstName' placeholder='First name*' required className='dark:bg-[#262626] bg-gray-200 dark:placeholder:text-gray-300 placeholder:text-gray-600 dark:text-white text-black pl-5 pr-10 sm:pr-25 py-2 rounded-xs focus:outline-none focus:ring-0' />
            </div>
            <div>
              <input type="text" name="lastName" placeholder="Last name*" required className='dark:bg-[#262626] bg-gray-200 dark:placeholder:text-gray-300 placeholder:text-gray-600 dark:text-white text-black pl-5 pr-10 sm:pr-25 py-2 rounded-xs focus:outline-none focus:ring-0' />
            </div>
          </div>
          <input type='email' name='email' placeholder='your@gmail.com*' required className='dark:bg-[#262626] bg-gray-200 dark:placeholder:text-gray-300 placeholder:text-gray-600 dark:text-white text-black px-4 py-2 rounded-xs focus:outline-none focus:ring-0' />
          <input type='text' name="subject" placeholder='What is this about?' required className='dark:bg-[#262626] bg-gray-200 dark:placeholder:text-gray-300 placeholder:text-gray-600 dark:text-white text-black px-4 py-2 rounded-xs focus:outline-none focus:ring-0' />
          <textarea name='message' placeholder='Type your message here' required className='dark:bg-[#262626] bg-slate-200 dark:placeholder:text-gray-300 placeholder:text-gray-600 dark:text-white text-black px-4 py-2 min-h-25 max-h-25 rounded-xs focus:outline-none focus:ring-0' />
          <button onClick={() => new Audio('/switchtab.mp3').play()} type='submit' className='w-full rounded-xs bg-[#F5E901] hover:bg-[#F5E901]/90 text-black text-center font-bold font-sans text-sm py-2 cursor-pointer'>Send it</button>
        </form>
      </div>
    </div>
  )
}

export default Contact