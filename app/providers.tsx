"use client"


import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'

type Props = {
  children?: ReactNode
}

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: Props) => {

  const isLocalStorageSupported = typeof window !== 'undefined' && window.localStorage

  const storeTheme = isLocalStorageSupported ? localStorage.getItem('theme') as Theme | null : null;
  const [theme, setTheme] = useState<Theme>(storeTheme || 'dark')

  const contextValue: ThemeContextType = { theme, setTheme }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme, isLocalStorageSupported])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}