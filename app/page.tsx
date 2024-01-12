'use client'


import { DesktopNav } from "../components/nav/DesktopNav"
import { MobileNav } from "../components/nav/Mobile"
import Billboard from "@/components/billboard"
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing } from "./globalTokens.stylex"
import { darkTheme, lightTheme } from './themes'
import { ThemeProvider, useTheme } from "./providers"

export default function Home() {

  const { setTheme, theme } = useTheme()
  return (
    <html {...stylex.props(s.html, s.reset)} lang="es">
      <body {...stylex.props(s.reset, s.body, theme === 'dark' ? darkTheme : lightTheme)}>

        <div {...stylex.props(s.container)}>
          <div {...stylex.props(s.desktopNav)}>
            <DesktopNav />
          </div>
          <div {...stylex.props(s.mobileNav)}>
            <MobileNav />
          </div>
          <Billboard />
        </div>
      </body>
    </html>
  )
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
  },
  container: {
    animationName: fadeIn,
    animationDuration: '2.5s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out'
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
    padding: `0 ${spacing.sm}`,
  }
})
