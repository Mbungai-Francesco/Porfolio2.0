import { useEffect, useState } from 'react'
import { cn } from './utils/cn'
import Home from './pages/Home'

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
      <div className={cn(`font-poppins`)}>
        <Home />
      </div>
    </>
  )
}

export default App
