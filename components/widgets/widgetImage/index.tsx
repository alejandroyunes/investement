'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import Image from "next/image"
import service from './assets/contactServices.webp'


interface WidgetImageProps {
  title: string;
}

export default function WidgetImage({ title }: WidgetImageProps) {

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
            <p {...stylex.props(s.textContainer)}>{title}</p>
          </div>
        </div>

      </div>

    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
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
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: .3,
  },
  text: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    whiteSpace: 'nowrap',
    color: colors.white,
    fontWeight: 'bold',

  },
  textContainer: {
    fontSize: {
      default: text.h1,
      '@media (max-width: 700px)': text.p
    }
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: 400,
    objectFit: 'cover'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${spacing.xl} auto ${spacing.xxl}`,
  }
})
