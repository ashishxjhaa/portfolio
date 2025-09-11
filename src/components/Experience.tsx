

function Experience() {

  return (
    <div className="mx-auto py-20">
      <div className="text-5xl max-sm:text-3xl max-md:text-4xl font-bold tracking-tight leading-normal text-center bg-gradient-to-b from-[#DDFE9C]/90 to-[#DDFE9C] bg-clip-text dark:text-transparent text-black">
        Experience
      </div>
      <div onMouseEnter={() => new Audio('/shock.mp3').play()} className="relative mt-10 w-fit mx-8 sm:mx-auto px-4 border-1 border-gray-700 dark:hover:border-[#DDFE9C]/80 hover:border-red-500 rounded-xl cursor-pointer hover:scale-105 transition-all duration-500 delay-75">
        <span className="absolute -top-4 left-6 dark:bg-black bg-gray-200 px-3 text-lg font-semibold dark:text-gray-200 text-neutral-700">Experience</span>
        <div className="py-10 text-center">
        <div className="font-bold font-mono dark:text-white text-black">Currently no experience not even any freelance work.</div>
        </div>
      </div>
    </div>
  )
}

export default Experience