'use client'
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import invest from './assets/invest.jpg'
import ButtonTheme from "../button/ButtonTheme"



export default function Billboard() {

  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>

      <div  {...stylex.props(s.left)}>
        <div {...stylex.props(s.slogan)}>
          <p>Optimize your investment growth</p>
        </div>
        <div {...stylex.props(s.headingP)}>
          <p>Professional</p>
        </div>
        <div {...stylex.props(s.headingTitle)}>
          <p>Investment</p>
        </div>

        <div {...stylex.props(s.button)}>
          <ButtonTheme onClick={handleClick}>Entrar</ButtonTheme>

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
      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin: "0 auto",
    maxWidth: $.maxWidth,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'flex-start',
    height: 'calc(100vh - 110px)',
    margin: `0 ${spacing.md}`,
    paddingBottom: spacing.xs,
    paddingLeft: spacing.sm,
    paddingTop: spacing.xxxxl,
  },
  right: {

  },
  image: {
    objectFit: 'cover'
  },
  slogan: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: text.p,
    color: colors.inverted,
    paddingBottom: spacing.sm
  },
  headingP: {
    fontSize: text.h1,
    color: colors.primary,
    lineHeight: spacing.xxl,
  },
  headingTitle: {
    fontSize: text.h1,
    color: colors.primary
  },
  button: {
    paddingTop: spacing.sm
  }
})


