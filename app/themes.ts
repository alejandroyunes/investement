import * as stylex from '@stylexjs/stylex'
import { colors } from './globalTokens.stylex'

const DARK = '@media (prefers-color-scheme: dark)'

export const lightTheme = stylex.createTheme(colors, {
  bg: {
    default: "#fff",
    [DARK]: "#fff",
  },
  inputBg: {
    default: "#f2ebeb",
    [DARK]: "#f2ebeb",
  },
  inverted: {
    default: "#1a1919",
    [DARK]: "#1a1919",
  },
  navUnderline: {
    default: 'linear-gradient(#1a1919 0 0)',
    [DARK]: 'linear-gradient(#1a1919 0 0)'
  },
  animationDarkBg: {
    default: 'linear-gradient(#1a1919 0 0)',
    [DARK]: 'linear-gradient(#1a1919 0 0)',
  },
  invertedShadows: {
    default: "0 3px 10px rgba(0, 0, 0, 0.2)",
    [DARK]: "0 3px 10px rgba(0, 0, 0, 0.2)",
  }
})

export const darkTheme = stylex.createTheme(colors, {
  bg: {
    default: "#1a1919",
    [DARK]: "#1a1919",
  },
  inputBg: {
    default: "#3b3737",
    [DARK]: "#3b3737",
  },
  inverted: {
    default: "#fff",
    [DARK]: "#fff",
  },
  navUnderline: {
    default: 'linear-gradient(#fff 0 0)',
    [DARK]: 'linear-gradient(#fff 0 0)',
  },
  animationDarkBg: {
    default: 'linear-gradient(#1a1919 0 0)',
    [DARK]: 'linear-gradient(#1a1919 0 0)',
  },
  invertedShadows: {
    default: "0 3px 10px rgba(142, 109, 109, 0.2)",
    [DARK]: "0 3px 10px rgba(142, 109, 109, 0.2)",
  }
})

