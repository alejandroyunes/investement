"use client"
import * as stylex from "@stylexjs/stylex"
import { spacing } from "./globalTokens.stylex"
import { globalTokens as $, colors } from "./globalTokens.stylex"

import { darkTheme, lightTheme } from './themes'
import { DesktopNav } from "../components/nav/DesktopNav"
import { MobileNav } from "../components/nav/Mobile"


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
      <html {...stylex.props(s.html, s.reset)} lang="es">
        <body {...stylex.props(s.reset, s.body, theme === 'dark' ? darkTheme : lightTheme)}>

          <div {...stylex.props(s.container)}>
            <div {...stylex.props(s.desktopNav)}>
              <DesktopNav />
            </div>
            <div {...stylex.props(s.mobileNav)}>
              <MobileNav />
            </div>
            {children}
          </div>
        </body>
      </html >
    </ThemeContext.Provider >
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

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
    animationName: fadeIn,
    animationDuration: '2.8s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out',
  },
  container: {
    maxWidth: $.maxWidth,
    padding: `0 ${spacing.md}`,
    margin: `0 auto`
  },
  desktopNav: {
    display: {
      default: "block",
      "@media (max-width: 900px)": "none"
    },
  },
  mobileNav: {
    display: {
      default: "none",
      "@media (max-width: 900px)": "block"
    },
  }
})