"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../../../app/globalTokens.stylex"
import { useState } from "react"
import ExitSvg from "../../../Assets/Icons/ExitSvg"
import VerticalHamburger from "@/components/Assets/Icons/VerticalHamburger"
import Image from "next/image"
import logo from '../../../Assets/images/logo.webp'
import Facebook from "@/components/Assets/Icons/Facebook"
import Twitter from "@/components/Assets/Icons/Twitter"
import Instagram from "@/components/Assets/Icons/Instagram"
import Youtube from "@/components/Assets/Icons/Youtube"

export default function Social() {
  const [open, setOpen] = useState<boolean>()

  return (
    <>
      <div {...stylex.props(styles.hamburgerMenu)} onClick={() => setOpen(!open)}>
        <VerticalHamburger />
      </div>

      <div {...stylex.props(styles.container, open && styles.slideIn, open === false && styles.slideOut)}>

        <div   {...stylex.props(styles.header)}>
          <Image
            {...stylex.props(styles.logo)}
            src={logo}
            alt="alt"
            width={130}
            height={30}
          />
          <div {...stylex.props(styles.animationExit)} onClick={() => setOpen(false)}>
            <ExitSvg />
          </div>
        </div>

        <div {...stylex.props(styles.content)}>

          <ul {...stylex.props(styles.body)}>
            <li {...stylex.props(styles.items)}>
              <span {...stylex.props(styles.svg)}>
                <Facebook />
              </span>
              <p {...stylex.props(styles.paragrah)}>
                Facebook
              </p>
            </li>
            <li {...stylex.props(styles.items)}>
              <span {...stylex.props(styles.svg)}>
                <Instagram />
              </span>
              <p {...stylex.props(styles.paragrah)}>
                Instagram
              </p>
            </li>
            <li {...stylex.props(styles.items)}>
              <span {...stylex.props(styles.svg)}>
                <Twitter />
              </span>
              <p {...stylex.props(styles.paragrah)}>
                Twitter
              </p>
            </li>
            <li {...stylex.props(styles.items)}>
              <span {...stylex.props(styles.svg)}>
                <Youtube />
              </span>
              <p {...stylex.props(styles.paragrah)}>
                Youtube
              </p>
            </li>
          </ul>

          <div {...stylex.props(styles.contact)}>
            <p {...stylex.props(styles.contactTel)}>+1 800 555 44 88</p>
            <p {...stylex.props(styles.contactEmail)}>info@email.com</p>
          </div>

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
  hamburgerMenu: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xxs,
    marginRight: spacing.xxs,
    zIndex: 4,
  },
  container: {
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
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: colors.xBorderColor,
    willChange: 'transform',
    backgroundColor: colors.bg,
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
  header: {
    display: 'flex',
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.xl,
    },
  },
  logo: {
    marginTop: spacing.lg
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 24,
    right: 24,
    cursor: "pointer",
    backgroundColor: colors.gray,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginBottom: 16
  },
  content: {
    display: "grid",
    alignItems: 'center',
    height: "100%",
  },
  body: {
    fontSize: text.p,
    color: colors.inverted,
    listStyleType: 'none',
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.xl,
    }
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing.xxs,
  },
  svg: {
    backgroundColor: {
      default: null,
      ':hover': colors.primary,
    },
    width: 50,
    height: 50,
    cursor: 'pointer',
  },
  paragrah: {
    fontSize: text.h5,
    marginLeft: spacing.xs,
  },
  contact: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: colors.xBorderColor,
    width: '100%',
    display: 'grid',
    paddingBottom: spacing.sm,
    paddingTop: spacing.sm,
  },
  contactTel: {
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.xl,
    },
    fontSize: text.h4,
    color: colors.inverted,
    fontWeight: 'bold',
    paddingTop: spacing.sm
  },
  contactEmail: {
    paddingLeft: {
      default: spacing.xxl,
      '@media (max-width: 1024px)': spacing.xl,
    },
    fontSize: text.h5,
    color: colors.gray,
    paddingTop: spacing.xxs
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
