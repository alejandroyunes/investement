"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text, colors } from "../../../../app/globalTokens.stylex"
import LightModeSvg from "./icons/LightModeSvg"
import DarkModeSvg from "./icons/DarkMode"

import { useTheme } from "@/app/providers"
import { useEffect } from "react"

export default function ModePicker() {
  const { setTheme, theme } = useTheme()

  console.log(theme)

  return (
    <div >
      <div {...stylex.props(s.icon)}>

        {/* {theme === 'dark' ?
          <span {...stylex.props(s.icon)} onClick={() => setTheme('light')}><LightModeSvg /></span>
          :
          <span {...stylex.props(s.icon)} onClick={() => setTheme('dark')}><DarkModeSvg /></span>
        } */}

        <span {...stylex.props(s.icon)} onClick={() => setTheme('light')}><LightModeSvg /></span>
        <span {...stylex.props(s.icon)} onClick={() => setTheme('dark')}><DarkModeSvg /></span>

      </div>

    </div >
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    cursor: "pointer",
    color: colors.inverted,
    paddingRight: {
      default: spacing.xxxs,
      '@media (max-width: 500px)': 0
    },
    paddingLeft: spacing.xxxs,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xs,
    outline: '1px solid red',
  }
})

