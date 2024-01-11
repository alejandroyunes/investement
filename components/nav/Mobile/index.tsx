"use client"

import * as stylex from "@stylexjs/stylex"

import CustomInput from "../ui/CustomInput"
import Image from "next/image"
import Location from "../ui/Location"
import ModePicker from "../ui/ModePicker"
import Notifications from "../ui/Notifications"
import Profile from "../ui/Profile"
import HamburgerSvg from "../../Assets/Icons/HamburgerSvg"
import ButtonTheme from "../../button/ButtonTheme"
import logo from '../../Assets/images/logo.webp'
import { spacing } from "../../../app/globalTokens.stylex"
import Social from "../ui/SocialMenu"

export function MobileNav() {

  const onClick = () => {
    console.log("click")
  }

  return (
    <nav {...stylex.props(styles.container)}>

      <div  {...stylex.props(styles.up)}>
        <div>
          <HamburgerSvg />
          <Image
            {...stylex.props(styles.logo)}
            src={logo}
            alt="alt"
            width={130}
            height={30}
          />
        </div>
        <div {...stylex.props(styles.upItems)}>
          <ModePicker />

          <Social />
        </div>
      </div>

      <div {...stylex.props(styles.down)}>
        <div {...stylex.props(styles.input)} >
          <CustomInput />
        </div>

        <div {...stylex.props(styles.downItems)}>
          <Profile />
        </div>

      </div>
    </nav >
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    padding: `0 ${spacing.md}`,
    width: "100%",
    margin: `${spacing.md} auto`,
  },
  logo: {
    marginRight: spacing.md
  },
  up: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  down: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  downItems: {
    display: "flex"
  },
  upItems: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    paddingLeft: spacing.xs
  },
  input: {
    width: "100%",
  }
})
