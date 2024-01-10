import { s } from "@/components/Assets/Icons/SearchSvg"
import stylex from "@stylexjs/stylex"

export default function Arrow() {
  return (
    <svg {...stylex.props(s.svgFill)} width="180px" height="180px" viewBox="0 0 32 32">
      <path d="M 15 4 L 15 24.0625 L 10.71875 19.78125 L 9.28125 21.1875 L 16 27.90625 L 22.71875 21.1875 L 21.28125 19.78125 L 17 24.0625 L 17 4 Z" />
    </svg >
  )
}