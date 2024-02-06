'use-client'

import stylex from '@stylexjs/stylex'
import { globalTokens as $, colors, spacing, text } from './../../../../app/globalTokens.stylex'
import Link from 'next/link'

export default function Menu() {

  return (
    <div {...stylex.props(s.main)}>
      <ul {...stylex.props(s.list)}>
        <Link href="/" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}>Home</span>
          </li>
        </Link>
        <Link href="/about" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}>About</span>
          </li>
        </Link>
        <Link href="/services" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}>Services</span>
          </li>
        </Link>
        <Link href="/contact" {...stylex.props(s.link)}>
          <li {...stylex.props(s.item)}>
            <span {...stylex.props(s.span)}>Contact</span>
          </li>
        </Link>

      </ul>
    </div >
  )
}


const s = stylex.create({
  main: {
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none'
  },
  link: {
    textDecoration: 'none'
  },
  item: {
    position: 'relative',
    padding: `0 ${spacing.xs}`,
  },
  span: {
    zIndex: 200,
    cursor: 'pointer',
    fontSize: text.p,
    color: colors.inverted,
    backgroundImage: colors.navUnderline,
    paddingBottom: spacing.xxxs,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      default: '0 100%',
      ':hover': '100% 100%',
    },
    backgroundSize: {
      default: '0% 2px',
      ':hover': '100% 2px',
    },
    // eslint-disable-next-line @stylexjs/valid-styles
    transition: 'background-size 0.3s, background-position 0s 0.3s',
  },
})
