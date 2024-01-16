"use client"
import * as stylex from "@stylexjs/stylex"
import Image from "next/image"
import logo from '../../Assets/images/logo.webp'


import { colors, globalTokens, spacing, text } from "../../../app/globalTokens.stylex"
import ModePicker from "../ui/ModePicker"
import Menu from "../ui/Menu"
import Social from "../ui/SocialMenu"

export function DesktopNav() {

  return (
    <nav {...stylex.props(s.container)}>

      <div  {...stylex.props(s.left)}>
        {/* <Image
          {...stylex.props(styles.logo)}
          src={logo}
          alt="alt"
          width={130}
          height={30}
        /> */}
        <p {...stylex.props(s.capital)}>Capital<span {...stylex.props(s.invest)}>Invest</span></p>

        <Menu />
      </div>

      <div {...stylex.props(s.right)}>
        <ModePicker />
        <Social />
      </div>
    </nav>
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  capital: {
    fontSize: text.h3,
  },
  invest: {
    marginRight: spacing.md,
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold'
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
  }
})
