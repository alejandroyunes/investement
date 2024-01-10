"use client"

import stylex from "@stylexjs/stylex"
import BellSvg from "../../../Assets/Icons/BellSvg"
import { globalTokens as $, colors, spacing, text } from "../../../../app/globalTokens.stylex"
import { useRef, useState } from "react"
import ExitSvg from "../../../Assets/Icons/ExitSvg"
import BellSlashSvg from "../../../Assets/Icons/BellSlashSvg"
import SocialMenu from "@/components/Assets/Icons/SocialMenu"
import VerticalHamburger from "@/components/Assets/Icons/VerticalHamburger"

export default function Social() {
  const [open, setOpen] = useState<boolean>()

  return (
    <>
      <div {...stylex.props(styles.icon)} onClick={() => setOpen(!open)}>
        <VerticalHamburger />
      </div>

      <div {...stylex.props(styles.sliderContainer, open && styles.slideIn, open === false && styles.slideOut)} >
        <div {...stylex.props(styles.animationContainer)}>

          <div {...stylex.props(styles.animationBell)}>
            <SocialMenu />
          </div>

          <div {...stylex.props(styles.notifications)}>
            <p>
              No hay notificaciones
            </p>
          </div>

        </div>

        <div {...stylex.props(styles.animationExit)} onClick={() => setOpen(false)}>
          <ExitSvg />
        </div>
      </div>

      {open && <div {...stylex.props(styles.bg)} onClick={() => setOpen(false)} />}
    </>
  )
}

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
})

const slideOut = stylex.keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0%)' },
})

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const styles = stylex.create({
  icon: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xxs,
    marginRight: spacing.xxs,
    zIndex: 4,
  },
  sliderContainer: {
    position: "fixed",
    top: 0,
    right: {
      default: "-30vw",
      "@media (max-width: 900px)": "-80vw"
    },
    width: {
      default: "30vw",
      "@media (max-width: 900px)": "80vw"
    },
    height: "100vh",
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: colors.xBorderColor,
    willChange: 'transform',
    backgroundColor: colors.bg
  },
  slideIn: {
    animationName: slideIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  slideOut: {
    animationName: slideOut,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  animationContainer: {
    display: "flex",
    position: 'relative',
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24,
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 10,
    right: 16,
    cursor: "pointer"
  },
  animationBell: {
    backgroundColor: colors.inverted,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    marginBottom: 16
  },
  notifications: {
    fontSize: text.p,
    color: colors.inverted
  },
  bg: {
    position: "fixed",
    width: '100vw',
    left: 0,
    top: 0,
    height: "100vh",
    backgroundColor: "rgba(20, 22, 27, 0.5)",
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 100
  }
})
