'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import partner1 from './assets/partner1.webp'
import partner2 from './assets/partner2.webp'
import partner3 from './assets/partner3.webp'
import partner4 from './assets/partner4.webp'
import partner5 from './assets/partner5.webp'

import Image from "next/image"

export default function WidgetPartner() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <Image
          {...stylex.props(s.partner)}
          src={partner1}
          alt="alt"
          width={0}
          height={0}
        />
        <Image
          {...stylex.props(s.partner)}
          src={partner2}
          alt="alt"
          width={0}
          height={0}
        />
        <Image
          {...stylex.props(s.partner)}
          src={partner4}
          alt="alt"
          width={0}
          height={0}
        />
        <Image
          {...stylex.props(s.partner)}
          src={partner5}
          alt="alt"
          width={0}
          height={0}
        />
      </div>

      <div {...stylex.props(s.right)}>
        <p {...stylex.props(s.slogan)}>Our Partners</p>
      </div>

    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gap: spacing.xl,
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: colors.xBorderColor,
    gridTemplateColumns: {
      default: '3fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    margin: `${spacing.xxxl} auto`,
  },
  left: {
    marginTop: spacing.sm,
    textAlign: {
      default: null,
      '@media (max-width: 900px)': 'center'
    }
  },
  partner: {
    maxWidth: 160,
    height: 65,
    opacity: {
      default: .5,
      ':hover': 1
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: {
      default: null,
      '@media (max-width: 900px)': 'center'
    },
    paddingTop: {
      default: null,
      '@media (max-width: 900px)': spacing.xl
    },
    order: {
      default: null,
      '@media (max-width: 900px)': -1
    }
  },
  slogan: {
    fontSize: text.h2,
    fontWeight: 'bold',
  },
})
