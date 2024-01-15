'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import partner1 from './assets/partner1.webp'
import partner2 from './assets/partner2.webp'
import partner3 from './assets/partner3.webp'
import partner4 from './assets/partner4.webp'
import partner5 from './assets/partner5.webp'

import Image from "next/image"
import LocationSvg from "@/components copy/Assets/Icons/LocationSvg"
import MobileSvg from "../Assets/Icons/MobileSvg"

export default function WidgetGetInTouch() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <p {...stylex.props(s.slogan)}>Contact Us</p>
        <p {...stylex.props(s.title)}>Get in touch</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate inventore sed facilis quis adipisci dolores error debitis laboriosam temporibus eveniet?</p>
      </div>

      <div {...stylex.props(s.right)}>

        <div {...stylex.props(s.rightRow)}>
          <div {...stylex.props(s.locationBg)}>
            <LocationSvg />
          </div>
          <div {...stylex.props(s.locationText)}>
            <p {...stylex.props(s.address)}>Address</p>
            <p {...stylex.props(s.addressText)}>Germany, consectetur adipisicing elit  strasse</p>
          </div>
        </div>

        <div {...stylex.props(s.rightRow)}>
          <div {...stylex.props(s.locationBg)}>
            <MobileSvg />
          </div>
          <div {...stylex.props(s.locationText)}>
            <p {...stylex.props(s.address)}>Contact</p>
            <p {...stylex.props(s.addressText)}>+1 800 555 44 88</p>
            <p {...stylex.props(s.addressText)}>info@email.com</p>
          </div>
        </div>

      </div>

    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gap: spacing.xl,
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)',
    },
    margin: `${spacing.xxxl} auto`,
  },
  left: {
  },
  slogan: {
    fontWeight: 'bold',
    fontSize: text.h5
  },
  title: {
    fontSize: text.h1,
    marginBottom: spacing.sm,
  },
  right: {
    display: 'flex',
    flexDirection: 'column'
  },
  rightRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  locationBg: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  locationText: {
    maxWidth: 200,
  },
  addressText: {
    fontSize: text.h5
  },
  address: {
    fontSize: text.h3,
    fontWeight: 'bold'
  }
})
