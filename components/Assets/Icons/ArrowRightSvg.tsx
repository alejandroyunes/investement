import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"

export default function ArrowRightSvg() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" {...stylex.props(s.svgStroke)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}