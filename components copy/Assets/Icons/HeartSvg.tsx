import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"

export default function HeartSvg() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" {...stylex.props(s.svgStroke)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}