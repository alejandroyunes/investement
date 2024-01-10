import * as stylex from "@stylexjs/stylex"
import type { StyleXStyles, Theme } from "@stylexjs/stylex/lib/StyleXTypes"
import { text } from '../../app/globalTokens.stylex'
import "./ButtonTokens.stylex"
import { buttonTokens } from "./ButtonTokens.stylex"

type Props = Readonly<{
  onClick: () => void
  children: React.ReactNode
  // for Overrides
  theme?: Theme<typeof buttonTokens>
  style?: StyleXStyles
  variant?: "primary" | "danger"
  em?: boolean
}>

export default function ButtonTheme({ onClick, children, style, theme, variant, em = false }: Props) {
  return (
    <button
      {...stylex.props(
        theme,
        styles.base,
        em && styles.emphasise,
        variant && variantStyles[variant],
        style
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const styles = stylex.create({
  base: {
    appearance: "none",
    borderWidth: 0,
    borderStyle: "none",
    backgroundColor: buttonTokens.bgColor,
    color: buttonTokens.textColor,
    borderRadius: buttonTokens.cornerRadius,
    paddingBlock: buttonTokens.paddingBlock,
    paddingInline: buttonTokens.paddingInline,
    cursor: "pointer",
    fontSize: text.p
  },
  emphasise: {
    transform: "scale(1.1)",
  },
})

const variantStyles = stylex.create({
  danger: {
    backgroundColor: "red",
    color: "white",
  },
  primary: {
    fontWeight: "bold",
  },
})
