"use client"

import { useRef } from "react"
import emailjs from "emailjs-com"
import toast from "react-hot-toast"
import { motion } from "framer-motion";


function Contact() {

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    const toastId = toast.loading("Sending...")

    emailjs.sendForm(
      "service_o9vwevq",
      "template_sz218zk",
      form.current!,
      "G2y6X9CPU5ZVKwofj"
    ).then(
      () => {
        toast.success("Message sent successfully", { id: toastId })
        form.current?.reset()
      },
      (error) => {
        toast.error("Failed to send" + error.text, { id: toastId })
      }
    )
  }

  return (
    <div className="mx-10 py-20">
      <div className="text-center">
        <div className="inline-block border-b-4 border-[#DDFE9C] text-5xl max-sm:text-3xl max-md:text-4xl font-bold tracking-tight leading-normal bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text text-transparent">
          Get In Touch
        </div>
        <div className="py-10 font-sans">Have a question or a project in mind? I would love to hear from you.</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      
      <motion.div whileHover={{ y: -12, transition: { type: "spring", stiffness: 300 } }} className="group relative flex h-full w-full flex-col items-center justify-center p-6 bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg text-white cursor-pointer">
      <div className="absolute top-4 right-4 z-10">
        <button onClick={() => { navigator.clipboard.writeText("+91 8294430359"); toast.success("Copied!")}} aria-label="Copy Phone to clipboard" className="p-2 rounded-full text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
          <div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon w-5 h-5"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
          </div>
        </button>
      </div>
      <div className="text-blue-400 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone w-7 h-7"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
      </div>
      <h3 className="text-lg font-semibold mb-1">Phone</h3>
      <a href="tel:+918294430359" className="text-sm text-gray-300 hover:text-blue-300 transition-colors break-words">+91 8294430359</a>
      </motion.div>

      <motion.div whileHover={{ y: -12, transition: { type: "spring", stiffness: 300 } }} className="group relative flex h-full w-full flex-col items-center justify-center p-6 bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg text-white cursor-pointer">
      <div className="absolute top-4 right-4 z-10">
        <button onClick={() => { navigator.clipboard.writeText("ashishxyzjha@gmail.com"); toast.success("Copied!")}} aria-label="Copy Email to clipboard" className="p-2 rounded-full text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
          <div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon w-5 h-5"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
          </div>
        </button>
      </div>
      <div className="text-blue-400 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail w-7 h-7"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
      </div>
      <h3 className="text-lg font-semibold mb-1">Email</h3>
      <a href="mailto:ashishxyzjha@gmail.com" className="text-sm text-gray-300 hover:text-blue-300 transition-colors break-words">ashishxyzjha@gmail.com</a>
      </motion.div>

      <motion.div whileHover={{ y: -12, transition: { type: "spring", stiffness: 300 } }} className="group relative flex h-full w-full flex-col items-center justify-center p-6 bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg text-white cursor-pointer">
      <div className="absolute top-4 right-4 z-10">
        <button onClick={() => { navigator.clipboard.writeText("ashishxjha"); toast.success("Copied!")}} aria-label="Copy Twitter to clipboard" className="p-2 rounded-full text-gray-400 hover:bg-gray-700/80 transition-colors cursor-pointer">
          <div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon w-5 h-5"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
          </div>
        </button>
      </div>
      <div className="text-blue-400 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter w-7 h-7"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      </div>
      <h3 className="text-lg font-semibold mb-1">Twitter</h3>
      <a href="https://x.com/ashishxjha" target="_blank" className="text-sm text-gray-300 hover:text-blue-300 transition-colors break-words">ashishxjha</a>
      </motion.div>


      </div>

      <div className="w-fit mx-auto">
      <div className="py-10">
      <div className="text-5xl max-sm:text-3xl max-md:text-4xl font-medium tracking-wide leading-normal bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text text-transparent">
        How can i help:
      </div>
      <div className="font-sans text-sm">Reach out to me directly from here</div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 mx-auto pb-20">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-2">
          <div>
            <input type="text" name="firstName" placeholder="First name*" required className="bg-[#262626] pl-5 pr-25 py-2 rounded-xs focus:outline-none focus:ring-0" />
          </div>
          <div>
            <input type="text" name="lastName" placeholder="Last name*" required className="bg-[#262626] pl-5 pr-25 py-2 rounded-xs focus:outline-none focus:ring-0" />
          </div>
        </div>
        <input type="email" name="email" placeholder="your@gmail.com*" required className="bg-[#262626] px-4 py-2 rounded-xs focus:outline-none focus:ring-0" />
        <input type="text" name="subject" placeholder="What is this about?" required className="bg-[#262626] px-4 py-2 rounded-xs focus:outline-none focus:ring-0" />
        <textarea name="message" placeholder="Type your message here" required className="bg-[#262626] px-4 py-2 min-h-25 max-h-25 rounded-xs focus:outline-none focus:ring-0" />
        <button type="submit" className="w-full rounded-xs bg-[#F5E901] hover:bg-[#F5E901]/90 text-black text-center font-bold font-sans text-sm py-2 cursor-pointer">Send it</button>
      </form>

      </div>

    </div>
  )
}

export default Contact