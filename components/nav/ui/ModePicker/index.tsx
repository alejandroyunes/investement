"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, spacing, text, colors } from "../../../../app/globalTokens.stylex"
import { useRef, useState } from "react"
import LightModeSvg from "./icons/LightModeSvg"
import DarkModeSvg from "./icons/DarkMode"
import ModeSvg from "../../../Assets/Icons/ModeSvg"
import useClickOutsideListener from "../../hooks/useClickOutside"

import { useTheme } from "@/app/providers"

export default function ModePicker() {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutsideListener({ ref: dropdownRef, callback: () => setOpen(false) })
  const { setTheme } = useTheme()

  return (
    <div {...stylex.props(s.container)} onClick={() => setOpen(!open)} ref={dropdownRef}>
      <div {...stylex.props(s.icon)}>
        <ModeSvg />
      </div>
      {open &&
        <div {...stylex.props(s.dropdown)}>
          <p {...stylex.props(s.text)} onClick={() => setTheme('light')}>
            <span {...stylex.props(s.iconDropdown)}><LightModeSvg /></span>
            Modo Claro
          </p>
          <p {...stylex.props(s.text)} onClick={() => setTheme('dark')}>
            <span {...stylex.props(s.iconDropdown)}><DarkModeSvg /></span>
            Modo Oscuro
          </p>
        </div>}
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
    cursor: "pointer"
  },
  dropdown: {
    position: "absolute",
    top: 20,
    right: 0,
    transform: 'translateY(16px)',
    borderStyle: "solid",
    borderColor: colors.xBorderColor,
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    margin: "15px",
    backgroundColor: colors.inputBg,
    zIndex: 101
  },
  text: {
    color: colors.inverted,
    fontSize: text.p,
    padding: "5px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    backgroundColor: {
      default: null,
      ':hover': {
        default: colors.xBorderColor
      },
    },
    borderTopLeftRadius: {
      default: null,
      ':first-child:hover': spacing.xs
    },
    borderTopRightRadius: {
      default: null,
      ':first-child:hover': spacing.xs
    },
    borderBottomLeftRadius: {
      default: null,
      ':last-child:hover': spacing.xs
    },
    borderBottomRightRadius: {
      default: null,
      ':last-child:hover': spacing.xs
    },
  },
  iconDropdown: {
    display: "flex",
    marginRight: spacing.xs,
    color: colors.inverted
  }
})

