'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import service from './assets/service.jpg'
import Image from "next/image"
import ButtonTheme from "../button/ButtonTheme"

export default function WidgetService() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
            <p {...stylex.props(s.textContainer)}>Doing Business</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>

        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
            <p {...stylex.props(s.textContainer)}>Increasing Efficiency</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>

        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
            <p {...stylex.props(s.textContainer)}>Control</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
      <div {...stylex.props(s.button)}>
        <ButtonTheme variant="primary" onClick={handleClick}>More About Us</ButtonTheme>
      </div>
    </section>
  )
}

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: .3 },
})

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.md,
    margin: {
      default: `${spacing.xxxl} auto 0`,
      '@media (max-width: 900px)': `${spacing.xl} auto 0`
    },
  },
  position: {
    position: 'relative'
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    backgroundColor: {
      default: null,
      ':hover': colors.primary
    },
    animationName: {
      default: null,
      ':hover': fadeIn
    },
    animationDuration: '.2s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in-out',
  },
  text: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    color: colors.white
  },
  textContainer: {
    fontSize: text.h4,
    color: colors.white
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${spacing.xl} auto ${spacing.xxxl}`,
  }
})
