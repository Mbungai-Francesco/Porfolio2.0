import { cn } from './utils/cn'
import { Home, About, Projects, Experiences } from './pages'
import { ArrowUp } from 'lucide-react'
import { motion } from 'motion/react'
import { useAppContext } from './hooks/useAppContext'
import { useEffect } from 'react'
import Contact from './pages/Contact'

const Layout = () => {
  const { theme } = useAppContext()

  useEffect(() => {
    console.log(theme);
    
  }, [theme])

  return (
    <div
      className={cn(
        `font-poppins relative z- scroll-smooth h-fit bg-white `,
        // theme,
      )}
    >
      <title>Mr. FORCHE</title>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experiences />
      </div>
      <motion.div
        id="projects"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 10,
          delay: 0.6,
        }}
      >
        <Projects />
      </motion.div>
      <div id="contact">
        <Contact />
      </div>
      <a
        className={cn(
          `p-2 animate-bounce shadow-lg bg-black/70 aspect-square w-fit rounded-full fixed z-10 right-4 bottom-4 cursor-pointer`,
        )}
        href="#home"
      >
        <ArrowUp className={cn(`text-white`)} />
      </a>
    </div>
  )
}

export default Layout
