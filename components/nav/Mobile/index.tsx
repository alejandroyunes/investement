"use client"

import * as stylex from "@stylexjs/stylex"

import Image from "next/image"
import ModePicker from "../ui/ModePicker"
import logo from '../../Assets/images/logo.webp'
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import MenuHamburger from "../ui/MenuHamburger"

export function MobileNav() {

  const onClick = () => {
    console.log("click")
  }

  return (
    <nav {...stylex.props(s.container)}>
      <div  {...stylex.props(s.row)}>
        <div {...stylex.props(s.left)}>
          <MenuHamburger />
          {/* <Image
            {...stylex.props(s.logo)}
            src={logo}
            alt="alt"
            width={130}
            height={30}
          /> */}
          <p {...stylex.props(s.capital)}>Capita<span {...stylex.props(s.invest)}>||nvest</span></p>

        </div>
        <div {...stylex.props(s.right)}>
          <ModePicker />
        </div>
      </div>
    </nav >
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: `0 auto`,
  },
  logo: {
    marginRight: spacing.md,
    marginLeft: spacing.xs,
  },
  capital: {
    fontSize: text.h3,
  },
  invest: {
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold'
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
})
