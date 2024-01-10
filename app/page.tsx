import * as stylex from "@stylexjs/stylex"
import { DesktopNav } from "../components/nav/DesktopNav"
import { MobileNav } from "../components/nav/Mobile"
import Categories from "../components/categories"
import Ads from "../components/Ads"
import Billboard from "@/components/billboard"

export default function Home() {
  return (
    <>
      <div {...stylex.props(s.desktopNav)}>
        <DesktopNav />
      </div>
      <div {...stylex.props(s.mobileNav)}>
        <MobileNav />
      </div>

      <Billboard />

    </>
  )
}

const s = stylex.create({
  desktopNav: {
    display: {
      default: "block",
      ["@media (max-width: 900px)"]: "none"
    },
  },
  mobileNav: {
    display: {
      default: "none",
      "@media (max-width: 900px)": "block"
    },
  }
})
