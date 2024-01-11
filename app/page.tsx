import * as stylex from "@stylexjs/stylex"
import { DesktopNav } from "../components/nav/DesktopNav"
import { MobileNav } from "../components/nav/Mobile"
import Billboard from "@/components/billboard"

export default function Home() {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.desktopNav)}>
        <DesktopNav />
      </div>
      <div {...stylex.props(s.mobileNav)}>
        <MobileNav />
      </div>
      {/* <Billboard /> */}
    </div>
  )
}

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const s = stylex.create({
  container: {
    animationName: fadeIn,
    animationDuration: '2.5s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out'
  },
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
