'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import service from './assets/service3.webp'
import service2 from './assets/service2.webp'
import service1 from './assets/service1.webp'
import Image from "next/image"
import ButtonTheme from "../../button/ButtonTheme"

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
            src={service1}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
          </div>

          <div {...stylex.props(s.textContainer)}>
            <p>Mondern Lucury in City</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>

        <div {...stylex.props(s.position)}>
          <Image
            {...stylex.props(s.image)}
            src={service2}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.bg)}>
          </div>
          <div {...stylex.props(s.text)}>
          </div>

          <div {...stylex.props(s.textContainer)}>
            <p>Increasing Efficiency</p>
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
          </div>

          <div {...stylex.props(s.textContainer)}>
            <p>Increasing Efficiency</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>


      </div>
      <div {...stylex.props(s.button)}>
        <ButtonTheme variant="primary" onClick={handleClick}>More About Us</ButtonTheme>
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
      ':hover': colors.primary,
    },
    opacity: {
      default: 0,
      ':hover': .3
    },
    zIndex: 100
  },
  text: {
    position: 'absolute',
    top: '62%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    color: colors.white,
    backgroundColor: colors.white,
    backdropFilter: 'blur(10px)',
    opacity: '.4',
    width: '100%',
    height: 58
  },
  textContainer: {
    position: 'absolute',
    top: '62%',
    left: '50%',
    transform: 'translate(-30%, 0)',
    color: colors.white,
    fontSize: text.h5,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${spacing.xl} auto ${spacing.xxl}`,
  }
})
