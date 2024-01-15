import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"

export default function HorizontalHamburger() {
  return (
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7L4 7" {...stylex.props(s.svgStroke)} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 12L4 12" {...stylex.props(s.svgStroke)} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 17L4 17" {...stylex.props(s.svgStroke)} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}