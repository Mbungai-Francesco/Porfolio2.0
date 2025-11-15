import { createContext, useEffect, useState, type ReactNode } from 'react'

interface AppContextProps {
  theme: string | null
  setTheme: React.Dispatch<React.SetStateAction<string | null>>
}

export const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const isBrowser = typeof window !== 'undefined'
  const storedTheme = isBrowser ? localStorage.getItem('theme') : null

  const [theme, setTheme] = useState<string | null>(storedTheme)

  useEffect(() => {
    // console.log(theme)
    if (theme == null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        setTheme('light')
        localStorage.setItem('theme', 'light')
      }
      console.log(localStorage.getItem('theme'))
    }
  })

  return (
    <AppContext.Provider value={{theme, setTheme}}>
      {children}
    </AppContext.Provider>
  )
}
