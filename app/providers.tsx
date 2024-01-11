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
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors } from "./globalTokens.stylex"

import { darkTheme, lightTheme } from './themes'

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

  const isLocalStorageSupported = typeof window !== 'undefined' && window.localStorage;

  const storeTheme = isLocalStorageSupported ? localStorage.getItem('theme') as Theme | null : null;
  const [theme, setTheme] = useState<Theme>(storeTheme || 'dark')

  const contextValue: ThemeContextType = { theme, setTheme }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme, isLocalStorageSupported])

  return (
    <ThemeContext.Provider value={contextValue}>
      <html {...stylex.props(s.html, s.reset)} lang="es">
        <body {...stylex.props(s.reset, s.body, theme === 'dark' ? darkTheme : lightTheme)}>
          {children}
        </body>
      </html>
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

const s = stylex.create({
  html: {
    colorScheme: "light dark"
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    color: colors.inverted,
    backgroundColor: colors.bg,
    fontFamily: $.fontSans,
  }
})
