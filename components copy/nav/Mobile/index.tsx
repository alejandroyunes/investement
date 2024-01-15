"use client"

import * as stylex from "@stylexjs/stylex"

import Image from "next/image"
import ModePicker from "../ui/ModePicker"
import logo from '../../Assets/images/logo.webp'
import { spacing } from "../../../app/globalTokens.stylex"
import MenuHamburger from "../ui/MenuHamburger"

export function MobileNav() {

  const onClick = () => {
    console.log("click")
  }

  return (
    <nav {...stylex.props(styles.container)}>
      <div  {...stylex.props(styles.row)}>
        <div {...stylex.props(styles.left)}>
          <MenuHamburger />
          <Image
            {...stylex.props(styles.logo)}
            src={logo}
            alt="alt"
            width={130}
            height={30}
          />
        </div>
        <div {...stylex.props(styles.right)}>
          <ModePicker />
        </div>
      </div>
    </nav >
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: `0 auto`,
  },
  logo: {
    marginRight: spacing.md,
    marginLeft: spacing.xs,
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