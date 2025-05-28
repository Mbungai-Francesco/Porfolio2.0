import { Github, Linkedin } from 'lucide-react'
import Header from '../components/Header'
import { cn } from '../utils/cn'
import myPic from '../assets/images/myPic.jpg'

const Home = () => {
  return (
    <div className={cn`py-20 px-60 h-screen flex flex-col`}>
      <Header />
      <main className="w-full grow flex justify-center items-center gap-14">
        <img
          src={myPic}
          alt="My Image"
          className="w-90 rounded-full aspect-square"
        />
        <div className={cn(`text-center flex flex-col gap-4`)}>
          <p className={cn(`font-medium opacity-70`)}>Hello World! I'm</p>
          <p className={cn(`text-4xl font-semibold`)}>FORCHE Francesco</p>
          <p className={cn(`text-2xl opacity-70 font-medium`)}>
            Fullstack Developer
          </p>
          <div className={cn(`flex gap-4 justify-center`)}>
            <button className="py-4 px-5 border rounded-full cursor-pointer">
              Download CV
            </button>
            <a href="Contact" className='py-4 px-5 text-white bg-black/70 rounded-full cursor-pointer'>
              <button className='cursor-pointer'>Contact Info</button>
            </a>
          </div>
          <div className={cn(`flex justify-center gap-4`)}>
            <a href="https://www.linkedin.com/in/forche-mbungai-francesco-asongwe-4806a5293/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVUrg0jJDSXWDEH5A%2BpacMg%3D%3D" target='_blank'><Linkedin className="cursor-pointer" /></a>
            <a href="https://github.com/Mbungai-Francesco" target='_blank'><Github className="cursor-pointer" /></a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
