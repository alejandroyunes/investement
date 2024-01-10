'use-client'

import stylex from '@stylexjs/stylex'
import { useState } from 'react'
import { globalTokens as $, colors, spacing, text } from './../../../../app/globalTokens.stylex'

export default function Menu() {
  const [inputValue, setInputValue] = useState('');


  return (
    <div {...stylex.props(s.main)}>
      <ul {...stylex.props(s.list)}>
        <li {...stylex.props(s.item)}>
          <span {...stylex.props(s.span)}>Home</span>
        </li>
        <li {...stylex.props(s.item)}>
          <span {...stylex.props(s.span)}>Our Services</span>
        </li>
        <li {...stylex.props(s.item)}>
          <span {...stylex.props(s.span)}>News</span></li>
        <li {...stylex.props(s.item)}>
          <span {...stylex.props(s.span)}>Blog</span>
        </li>
        <li {...stylex.props(s.item)}>
          <span {...stylex.props(s.span)}>Contact</span>
        </li>
      </ul>
    </div>
  )
}

const slideClose = stylex.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(0%)' },
})


const s = stylex.create({
  main: {
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none'
  },
  item: {
    position: 'relative',
    padding: `0 ${spacing.xs}`,
  },
  span: {
    zIndex: 200,
    cursor: 'pointer',
    forSize: text.p,
    color: colors.inverted,
    backgroundImage: colors.navUnderline,
    paddingBottom: spacing.xxxs,
    backgroundPosition: {
      default: '0 100%',
      ':hover': '100% 100%',
    },
    backgroundSize: {
      default: '0% 2px',
      ':hover': '100% 2px',
    },
    backgroundRepeat: 'no-repeat',
    // transition: 'background-size 0.3s, background-position 0s 0.3s'
  },
})
