"use client"

import * as stylex from "@stylexjs/stylex"
import ModePicker from "../ui/ModePicker"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import MenuHamburger from "../ui/MenuHamburger"
import Link from "next/link"

export function MobileNav() {

  return (
    <nav {...stylex.props(s.container)}>
      <div  {...stylex.props(s.row)}>
        <div {...stylex.props(s.left)}>
          <MenuHamburger />
          <Link href="/" {...stylex.props(s.link)}>
            <p {...stylex.props(s.capital)}>Estrella <span {...stylex.props(s.invest)}>Immobilien</span></p>
          </Link>
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
  link: {
    textDecoration: 'none',
    color: 'inherit'
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
