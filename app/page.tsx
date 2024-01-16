'use client'

import { globalTokens as $ } from '../app/globalTokens.stylex'
import * as stylex from "@stylexjs/stylex"
import { spacing } from "./globalTokens.stylex"
import { DesktopNav } from "../components/nav/DesktopNav"
import { MobileNav } from "../components/nav/Mobile"
import Billboard from "@/components/billboard"
import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetService from "@/components/widgets/widgetService"
import WidgetAbout from '@/components/widgets/widgetAbout'
import WidgetPartner from '@/components/widgets/widgetPartners'
import WidgetBlog from '@/components/widgets/widgetBlog'
import WidgetGetInTouch from '@/components/widgets/widgetGetInTouch'
import WidgetFooter from '@/components/widgets/widgetFooter'

export default function Home() {

  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.desktopNav)}>
        <DesktopNav />
      </div>
      <div {...stylex.props(s.mobileNav)}>
        <MobileNav />
      </div>
      <Billboard />
      <WidgetAbout />
      <WidgetCeo />
      <WidgetService />
      <WidgetPartner />
      <WidgetBlog />
      <WidgetGetInTouch />
      <WidgetFooter />
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
    animationTimingFunction: 'ease-in-out',
    maxWidth: $.maxWidth,
    padding: `0 ${spacing.md}`,
    margin: `0 auto`
  },
  desktopNav: {
    display: {
      default: "block",
      "@media (max-width: 900px)": "none"
    },
  },
  mobileNav: {
    display: {
      default: "none",
      "@media (max-width: 900px)": "block"
    },
  }
})
