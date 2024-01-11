'use client'
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import invest from './assets/invest.jpg'
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
            <h3>Optimize your investment growth</h3>
          </div>
          <div {...stylex.props(s.headingTitle)}>
            <h2>Professional</h2>
          </div>
          <div {...stylex.props(s.headingSubTitle)}>
            <h2>Investment</h2>
            <h2>Company</h2>
          </div>
          <div {...stylex.props(s.button)}>
            <ButtonTheme onClick={handleClick}>Explore</ButtonTheme>
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
          src={invest}
          alt="alt"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'calc(100vh - 110px)' }}
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
    width: "100%",
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    margin: "0 auto",
    maxWidth: $.maxWidth,
  },
  left: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    height: 'calc(100vh - 110px)',
    margin: `0 ${spacing.md}`,
    paddingLeft: spacing.sm,
  },
  topLeft: {
    margin: 'auto 0'
  },
  bottomLeft: {
    display: 'flex',
    alignContent: 'flex-end',
  },
  right: {
    width: '100%',
    position: 'relative'
  },
  rightBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundImage: colors.navUnderline,
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
    objectFit: 'cover',
    width: '100%',
  },
  slogan: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: text.sm,
    color: colors.inverted,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xl,
    animationName: slideIn,
    animationDuration: '1.2s',
    animationDelay: '.7s',
    animationFillMode: "backwards",
  },
  headingTitle: {
    fontSize: text.h1,
    color: colors.inverted,
    lineHeight: spacing.xxl,
    animationName: slideIn,
    animationDuration: "1s",
    animationFillMode: "backwards",
  },
  headingSubTitle: {
    fontSize: text.h1,
    color: colors.primary,
    lineHeight: spacing.xxl,
    animationName: slideIn,
    animationDuration: "1s",
    animationFillMode: "backwards",
  },
  button: {
    paddingTop: spacing.xl,
    color: colors.inverted,
    animationName: slideIn,
    animationDuration: "1s",
    animationDelay: '.5s',
    animationFillMode: "backwards",
  },
  arrowDown: {
    transform: 'rotate(-45deg)',
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
