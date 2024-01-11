"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text, colors } from "../../../../app/globalTokens.stylex"
import { useState } from "react"
import LightModeSvg from "./icons/LightModeSvg"
import DarkModeSvg from "./icons/DarkMode"

import { useTheme } from "@/app/providers"

export default function ModePicker() {
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()

  return (
    <div {...stylex.props(s.container)} onClick={() => setOpen(!open)} >
      <div {...stylex.props(s.icon)}>
        {open ?
          <span {...stylex.props(s.icon)} onClick={() => setTheme('light')}><LightModeSvg /></span>
          :
          <span {...stylex.props(s.icon)} onClick={() => setTheme('dark')}><DarkModeSvg /></span>
        }
      </div>

    </div>
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: spacing.xxs,
    marginRight: spacing.xxs,
  },
  icon: {
    display: "flex",
    cursor: "pointer",
    color: colors.inverted
  }
})

