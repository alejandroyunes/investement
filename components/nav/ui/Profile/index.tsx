"use client"

import stylex from "@stylexjs/stylex"
import ProfileSvg from "../../../Assets/Icons/ProfileSvg"
import { globalTokens as $, spacing, text, colors } from "../../../../app/globalTokens.stylex"
import { useRef, useState } from "react"
import MessageSvg from "../../../Assets/Icons/MessagesSvg"
import AdsSvg from "../../../Assets/Icons/AdsSvg"
import HeartSvg from "../../../Assets/Icons/HeartSvg"
import HelpSvg from "../../../Assets/Icons/HelpSvg"
import LogoutSvg from "../../../Assets/Icons/LogoutSvg"
import { signOut, } from "next-auth/react"
import useClickOutsideListener from "../../hooks/useClickOutside"


export default function Profile() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutsideListener({ ref: dropdownRef, callback: () => setOpen(false) })

  return (
    <div className={stylex(styles.container)} onClick={() => setOpen(!open)} ref={dropdownRef}>

      <div className={stylex(styles.icon)}>
        <ProfileSvg />
      </div>
      {open &&
        <div className={stylex(styles.dropdown)}>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><ProfileSvg /></span>
            Perfil
          </a>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><AdsSvg /></span>
            Publicaciones
          </a>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><MessageSvg /></span>
            Mensajes
          </a>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><HeartSvg /></span>
            Favoritos
          </a>
          <a href="#" className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><HelpSvg /></span>
            Centro de ayuda
          </a>
          <span onClick={() => signOut()} className={stylex(styles.a)}><span className={stylex(styles.iconDropdown)}><LogoutSvg /></span>
            Salir
          </span>
        </div>}
    </div>
  )
}


const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xxs,
    marginRight: spacing.xs,
    position: "relative",
    zIndex: 1,
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
    backgroundColor: colors.bg
  },
  a: {
    color: colors.inverted,
    fontSize: text.p,
    padding: "5px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
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
  }
})
