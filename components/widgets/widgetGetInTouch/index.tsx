'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"

import MobileSvg from "../../Assets/Icons/MobileSvg"
import LocationSvg from "../../Assets/Icons/LocationSvg"

export default function WidgetGetInTouch() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <p {...stylex.props(s.slogan)}>Contact Us</p>
        <p {...stylex.props(s.title)}>Get in touch</p>
        <p>Feel free to reach out to us for any inquiries or assistance. We are here to help you find the perfect accommodation for your needs. Contact us via email or give us a call. Our dedicated team looks forward to assisting you with any questions or reservations.</p>
      </div>

      <div {...stylex.props(s.right)}>

        <div {...stylex.props(s.rightRow)}>
          <div {...stylex.props(s.locationBg)}>
            <LocationSvg />
          </div>
          <div {...stylex.props(s.locationText)}>
            <p {...stylex.props(s.address)}>Address</p>
            <p {...stylex.props(s.addressText)}>Grützenstrasse 18807 FreienbachSchweiz</p>
          </div>
        </div>

        <div {...stylex.props(s.rightRow)}>
          <div {...stylex.props(s.locationBg)}>
            <MobileSvg />
          </div>
          <div {...stylex.props(s.locationText)}>
            <p {...stylex.props(s.address)}>Contact</p>
            <p {...stylex.props(s.addressText)}>
              <a href="tel:+41787746337">+41 78 774 63 37</a>
            </p>
            <p {...stylex.props(s.addressText)}>
              <a href="mailto:matthias.schulz@estrella-immobilien.ch">matthias.schulz@estrella-immobilien.ch</a>
            </p>
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
