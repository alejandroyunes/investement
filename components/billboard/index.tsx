'use client'
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import billboardImg from './assets/billboard-3.webp'
import ButtonTheme from "../button/ButtonTheme"
import Arrow from "../Assets/Icons/Arrow"

export default function Billboard() {

  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>

      <div  {...stylex.props(s.left)}>
        <div {...stylex.props(s.topLeft)}>
          <div {...stylex.props(s.slogan)}>
            <h3>Seamless booking and guest management</h3>
          </div>
          <div {...stylex.props(s.headingTitle)}>
            <h1>Luxury Stays</h1>
          </div>
          <div {...stylex.props(s.headingSubTitle)}>
            <h1>Short - Long Terms</h1>
            <h1>Rentals</h1>
          </div>
          <div {...stylex.props(s.button)}>
            <ButtonTheme variant="primary" onClick={handleClick}>Explore</ButtonTheme>
          </div>
        </div>

        <div {...stylex.props(s.bottomLeft)}>
          <div {...stylex.props(s.arrowDown)}>
            <div {...stylex.props(s.arrow)}>
              <Arrow />
            </div>
          </div>
        </div>
      </div>

      <div {...stylex.props(s.right)}>
        <Image
          {...stylex.props(s.image)}
          src={billboardImg}
          alt="alt"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }}
        />
        <div {...stylex.props(s.rightBg)} />
      </div>

    </section >
  )
}

const pointingDown = stylex.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(20px)' },
  '100%': { transform: 'translateY(0px)' },
})

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateX(60px)', visibility: 'hidden', opacity: 0 },
  '25%': { transform: 'translateX(50px)', visibility: 'hidden', opacity: .5 },
  '100%': { transform: 'translateX(0px)' },
})

const imageDarkSlideIn = stylex.keyframes({
  '0%': { backgroundSize: '100% 100%' },
  '100%': { backgroundSize: '0% 100%' },
})

const s = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    margin: "0 auto",
    height: '100%'
  },
  left: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: {
      default: `0 ${spacing.md}`,
      '@media (max-width: 500px)': `0 ${spacing.xs} 0 0`
    },
    height: {
      default: 'calc(90vh)',
      '@media (max-width: 500px)': 'calc(80vh)',
    },
  },
  right: {
    position: 'relative',
    height: {
      default: 'calc(90vh)',
      '@media (max-width: 500px)': 'calc(80vh)',
    },
  },
  topLeft: {
    margin: 'auto 0',
  },
  bottomLeft: {
    paddingBottom: spacing.xl
  },
  rightBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundImage: colors.animationDarkBg,
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    animationName: imageDarkSlideIn,
    animationDuration: '1s',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 1,
    animationFillMode: 'forwards'
  },
  image: {
    objectFit: {
      default: 'cover',
      '@media (max-width: 500px)': 'none',
    },
    height: {
      default: 'calc(90vh)',
      '@media (max-width: 500px)': 'calc(80vh)',
    }
  },
  slogan: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: {
      default: text.sm,
      '@media (max-width: 500px)': 14
    },
    color: colors.inverted,
    paddingBottom: {
      default: spacing.sm,
      '@media (max-width: 500px)': spacing.md
    },
    paddingTop: spacing.xl,
    animationName: slideIn,
    animationDuration: '1.2s',
    animationDelay: '.6s',
    animationFillMode: "backwards",
  },
  headingTitle: {
    fontSize: {
      default: text.h1,
      '@media (max-width: 500px)': 24
    },
    color: colors.inverted,
    lineHeight: {
      default: spacing.xxl,
      '@media (max-width: 500px)': spacing.lg
    },
    animationName: slideIn,
    animationDuration: "1s",
    animationFillMode: "backwards",
  },
  headingSubTitle: {
    fontSize: {
      default: text.h1,
      '@media (max-width: 500px)': 24
    },
    color: colors.primary,
    lineHeight: {
      default: spacing.xxl,
      '@media (max-width: 500px)': spacing.lg
    },
    animationName: slideIn,
    animationDuration: "1s",
    animationFillMode: "backwards",
  },
  button: {
    paddingTop: spacing.xxxl,
    animationName: slideIn,
    animationDuration: "1s",
    animationDelay: '.5s',
    animationFillMode: "backwards",
  },
  arrowDown: {
    transform: 'rotate(-45deg)',
    width: 80
  },
  arrow: {
    animationName: pointingDown,
    animationDuration: "2s",
    animationFillMode: 'both',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationDelay: '3.5s',
  }
})
