// import { useAppContext } from "../hooks/useAppContext"
import { cn } from "@/utils/cn"
import { Menu} from "lucide-react"
import { useState } from "react"
import { motion } from 'motion/react'

const Header = () => {

  // const { theme, setTheme } = useAppContext()
  const [ open, setOpen] = useState(false)

  return (
   <div className={cn(``)}>
     <header className="bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-medium text-gray-600 cursor-pointer">F. Francesco </h1>
        <nav className="relative z-10">
          <Menu className="block lg:hidden cursor-pointer" onClick={() => setOpen(!open)} size={30}/>
          <ul className="hidden lg:flex space-x-8">
            <li><a href="#about" className="links">About</a></li>
            <li><a href="#experience" className="links">Experience</a></li>
            <li><a href="#projects" className="links">Projects</a></li>
            <li><a href="#contact" className="links">Contact</a></li>
          </ul>
          <motion.ul className={cn(`absolute text-center right-0 top-10`
, open ? 'block' : 'hidden', `lg:hidden`
          )}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          exit={{ opacity: 0, y: -50 }}
          >
            <li><a href="#about" className="links">About</a></li>
            <li><a href="#experience" className="links">Experience</a></li>
            <li><a href="#projects" className="links">Projects</a></li>
            <li><a href="#contact" className="links">Contact</a></li>
          </motion.ul>
        </nav>
      </div>
    </header>
   </div>
  )
}

export default Header