'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import Arrow from "@/components/Assets/Icons/Arrow"
import ArrowDownSvg from "@/components/Assets/Icons/ArrowDownSvg";

interface WidgetTitleProps {
  title: string;
}

export default function WidgetTitle({ title }: WidgetTitleProps) {

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.top)}>
          <p>{title}</p>
        </div>

        <div {...stylex.props(s.arrow)}>
          <ArrowDownSvg />
        </div>

      </div>

    </section>
  )
}

const pointingDown = stylex.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(15px)' },
  '100%': { transform: 'translateY(0px)' },
})

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateRows: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.md,
    margin: {
      default: `${spacing.xxxl} auto 0`,
      '@media (max-width: 900px)': `${spacing.xl} auto 0`
    },
    justifyContent: 'center'
  },
  top: {
    fontSize: text.h2
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    animationName: pointingDown,
    animationDuration: "2s",
    animationFillMode: 'both',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  }
})
