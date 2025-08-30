"use client"

import Image from "next/image"


function Techskill() {

  return (
    <div className="mt-15 px-4 min-h-screen">
      <p className="font-medium max-w-3xl text-center text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
        I have a solid foundation in Full-stack web development using the MERN stack, Next.js, and TypeScript.
        I enjoy building scalable & user-friendly applications.
      </p>

      <div className="flex max-w-3xl border border-[#DDFE9C] rounded-md px-5 py-2.5 gap-4 mb-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb-icon lucide-lightbulb text-yellow-300"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
        <div><span className="font-bold">Suggestion:</span> Hover over any skill to see my proficiency level.</div>
      </div>

      <div className="space-y-15 mb-40">
      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Programming Languages</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/javascript.svg" alt="JavaScript" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">JavaScript</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/typescript.svg" alt="TypeScript" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Typescript</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/java.svg" alt="Java" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Java</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Development</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/html-1.svg" alt="html5" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">HTML 5</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/css-3.svg" alt="css3" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">CSS 3</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/nodejs-icon.svg" alt="nodejs" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Node.js</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Databases</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
            <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/mongodb-icon-1.svg" alt="mongodb" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">MongoDB</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/postgresql.svg" alt="postgesql" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Frameworks</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/next-js.svg" alt="nextjs" className="w-14 h-14 object-contain bg-white" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Next.js</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/expressjs.svg" alt="expressjs" className="w-14 h-14 object-contain bg-white" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Express.js</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/tailwind-css-2.svg" alt="Tailwindcss" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Tailwind CSS</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/ejs-svgrepo-com.svg" alt="Ejs" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">EJS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Libraries</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/react.svg" alt="react" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">React.js</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/socket-io.svg" alt="socket.iO" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Socket.Io</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Tools</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/git-icon.svg" alt="git" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Git</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/github-icon-1.svg" alt="github" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">GitHub</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/postman.svg" alt="postman" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">Postman</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/visual-studio-code-1.svg" alt="vscode" className="w-14 h-14 object-contain" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">VS Code</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border border-gray-500 rounded-xl p-8 pt-10">
        <span className="absolute -top-4 left-6 bg-black px-3 text-lg font-semibold text-gray-200">Protocols</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-40 justify-center">
          <div className="relative flex items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer w-32 h-32 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/websocket.svg" alt="Websocket" className="w-14 h-14 object-contain bg-white" width={10} height={10}></Image>
              <p className="text-white text-sm font-semibold mt-2">WebSocket</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Techskill