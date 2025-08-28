import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

// #F5E901
// #DAED6D
// #FAF114

function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 pt-4">
      <Navbar />
      <div className="pl-6">
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Home