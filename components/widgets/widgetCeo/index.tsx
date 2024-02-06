'use client'
import * as stylex from "@stylexjs/stylex"
import { spacing } from "../../../app/globalTokens.stylex"
import ceo from './assets/widget-ceo1.webp'
import Image from "next/image"

export default function WidgetCeo() {

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <p>
          Meticulously designed to offer everything for a comfortable long or short term stay, from essential modern amenities to unexpected luxuries like a pool, private gym, or a breathtaking rooftop terrace.</p>
        <div {...stylex.props(s.leftBottom)}>
          <div>
            <Image
              {...stylex.props(s.image)}
              src={ceo}
              alt="alt"
              width={0}
              height={0}
            />
          </div>
          <div>
            <p {...stylex.props(s.name)}>Matthias Nadler</p>
            <p>Ceo</p>
          </div>
        </div>
      </div>

      <div>
        <span {...stylex.props(s.span)}>L</span>
        <p>uxurious short-term and monthly stays, personalized service, exclusive homes, ideal for extended visits, renovations, or work relocations. </p>
        <br />
      </div>

      <div>
        <p>Tailored, safe, and fully furnished luxury vacation rentals with exceptional amenities, reflecting the vision of our CEO for unparalleled hospitality.</p><br />
      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1.7fr 1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.xs,
    margin: `${spacing.xxxl} auto`,
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  leftBottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.sm
  },
  image: {
    borderRadius: "50%",
    width: 78,
    height: 78,
  },
  name: {
    fontWeight: 'bold'
  },
  span: {
    fontSize: 42,
    float: 'left',
    lineHeight: 1,
    paddingRight: spacing.sm
  }
})
