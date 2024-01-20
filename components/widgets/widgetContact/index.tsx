'use client'
import * as stylex from "@stylexjs/stylex"
import { spacing, text } from "../../../app/globalTokens.stylex"
import ClockSvg from "./assets/icons/ClockSvg"
import LocationSvg from "./assets/icons/LocationSvg"
import ContactSvg from "./assets/icons/ContactSvg"

export default function WidgetContact() {


  return (
    <section>
      <div {...stylex.props(s.container)}>
        <div>
          <div {...stylex.props(s.svg)}>
            <ClockSvg />
          </div>
          <p>Mon - Fri: 9 AM – 22 PM</p>
          <p>Saturday: 9 AM – 20 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div>
          <div {...stylex.props(s.svg)}>
            <LocationSvg />
          </div>
          <p>Germany, 4595 Berliner Str.</p>
        </div>

        <div>
          <div {...stylex.props(s.svg)}>
            <ContactSvg />
          </div>
          <p>+1 800 555 5555</p>
          <p>info@email.com</p>
        </div>

      </div>
    </section>
  )
}


const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.md,
    margin: {
      default: `${spacing.xxl} auto 0`,
      '@media (max-width: 900px)': `${spacing.xl} auto 0`
    },
    justifyItems: 'center',
    lineHeight: 1.6
  },
  svg: {
    textAlign: 'center',
    paddingBottom: spacing.sm
  },
  left: {

  },
  middle: {},
  right: {}
})
