import { useEffect, useState } from 'react'
import { cn } from './utils/cn'
import { Home, About, Projects, Experiences } from './pages'
import { ArrowUp } from 'lucide-react'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // console.log(theme)
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
    console.log(localStorage.getItem('theme'))
  }, [theme])

  return (
    <>
      <div className={cn(`font-poppins relative z- scroll-smooth h-fit`)} >
        <title>Porfolio</title>
        <div id='home'><Home/></div>
        <div><About /></div>
        <div><Experiences /></div>
        <div><Projects /></div>
        <a className={cn(`p-2 animate-bounce shadow-lg bg-black/70 aspect-square w-fit rounded-full fixed z-10 right-4 bottom-4 cursor-pointer`)} href='#home'>
          <ArrowUp className={cn(`text-white`)}/>
        </a>
      </div>
    </>
  )
}

export default App
