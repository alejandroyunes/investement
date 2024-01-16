'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import Image from "next/image"
import logo from '../../components/Assets/images/logo.webp'
import map from './assets/mapsGermanyjpb.jpg'
export default function WidgetFooter() {
  const handleClick = () => {
    console.log("click")
  }

  const year = new Date().getFullYear()

  return (
    <section>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.left)}>
          <Image
            src={logo}
            alt="alt"
            width={120}
            height={30}
          />
        </div>
        <div {...stylex.props(s.middle)}>
          <p {...stylex.props(s.title)}>Office</p>
          <p>Germany, consectetur adipisicing elit  strasse</p>
        </div>
        <div {...stylex.props(s.middleR)}>
          <p {...stylex.props(s.title)}>Links</p>
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

        <div {...stylex.props(s.right)}>

          <Image
            {...stylex.props(s.imageR)}
            src={map}
            alt="alt"
            width={300}
            height={0}
          />
        </div>
      </div>

      <div {...stylex.props(s.footer)}>
        <p>&copy; {year} All Rights Reserved.</p>
      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gap: spacing.md,
    gridTemplateColumns: {
      default: '.5fr .7fr .7fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)',
    },
    margin: `${spacing.xxxl} auto`,
  },
  title: {
    fontSize: text.h4,
    paddingBottom: spacing.sm
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none'
  },
  item: {
    padding: `${spacing.xxs} 0`,
  },
  span: {
    zIndex: 200,
    cursor: 'pointer',
    fontSize: text.p,
    color: colors.inverted,
    backgroundImage: colors.navUnderline,
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
  footer: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: colors.xBorderColor,
    padding: `${spacing.lg} 0`
  },
  left: {},
  middle: {
    maxWidth: 300
  },
  imageR: {
    maxWidth: "100%",
    height: 'auto',
  },
  middleR: {},
  right: {},

})
