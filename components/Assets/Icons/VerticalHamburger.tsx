import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"

export default function VerticalHamburger() {
  return (
    <svg width="30px" height="30px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1">
      <line fill="none" id="XMLID_73_" {...stylex.props(s.svgStroke)} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="16" y1="7" y2="25" />
      <line fill="none" id="XMLID_56_" {...stylex.props(s.svgStroke)} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" x2="7" y1="7" y2="25" />
      <line fill="none" id="XMLID_74_" {...stylex.props(s.svgStroke)} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="25" x2="25" y1="7" y2="25" />
    </svg>
  )
}