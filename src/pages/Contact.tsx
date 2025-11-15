import { cn } from '@/lib/utils'
import { Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className={cn(`pb-14 px-30 h-[80vh] flex flex-col justify-between items-center`)}>
      <div className={cn(`space-y-8`)}>
        <div className={cn(`w-fit mx-auto text-center flex flex-col `)}>
          <p className={cn(`text-black/70 text-base`)}>Get in Touch</p>
          <h2 className={cn(`text-5xl font-semibold`)}>Contact Me</h2>
        </div>
        <div
          className={cn(`border flex flex-col sm:flex-row w-fit mx-auto p-4 rounded-3xl space-x-4 gap-4 sm:gap-0`)}
        >
          <div className={cn(`flex items-center space-x-2`)}>
            <Mail />
            <a href="mailto:mbungaifrancesco2@gmail.com" className={cn(`cursor-pointer`)}>mbungaifrancesco2@gmail.com</a>
          </div>
          <div className={cn(`flex items-center space-x-2`)}>
            <Linkedin />
            <a href='https://www.linkedin.com/in/forche-mbungai-francesco-asongwe-4806a5293/' target='_blank' className={cn(`cursor-pointer`)}>Forche Mbungai</a>
          </div>
        </div>
      </div>
      <div className={cn(`flex flex-col space-y-5`)}>
        <ul className="flex space-x-8 w-full justify-center">
          <li>
            <a href="#about" className="links contact">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="links contact">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="links contact">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="links contact">
              Contact
            </a>
          </li>
          {/* <li>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <Label htmlFor="airplane-mode">
              {theme == 'dark' ? <Moon /> : <SunMedium />}
            </Label>
          </div>
        </li> */}
        </ul>
        <p className={cn(`text-center text-sm text-black/60`)}>
          Copyright&#64; 2025 FORCHE Mbungai. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Contact
