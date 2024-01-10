"use client"
import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
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
  const [theme, setTheme] = useState<Theme>('dark')
  const contextValue: ThemeContextType = { theme, setTheme }

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

const fgColor = `rgba(${$.foregroundR}, ${$.foregroundG}, ${$.foregroundB}, 1)`

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
    color: fgColor,
    backgroundColor: colors.bg,
    fontFamily: $.fontSans,
  }
})
