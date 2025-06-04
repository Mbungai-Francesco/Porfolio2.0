import { useAppContext } from "../hooks/useAppContext"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/utils/cn"
import { Moon, SunMedium } from "lucide-react"

const Header = () => {

  const { theme, setTheme } = useAppContext()

  return (
   <div className={cn(``)}>
     <header className="bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-medium text-gray-600 cursor-pointer">F. Francesco </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="links">About</a></li>
            <li><a href="#experience" className="links">Experience</a></li>
            <li><a href="#projects" className="links">Projects</a></li>
            <li><a href="#contact" className="links">Contact</a></li>
            {/* <li>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                <Label htmlFor="airplane-mode">
                  {theme == 'dark' ? <Moon /> : <SunMedium />}
                </Label>
              </div>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
   </div>
  )
}

export default Header