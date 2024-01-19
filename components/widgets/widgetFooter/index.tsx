'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import Image from "next/image"
import logo from '../../components/Assets/images/logo.webp'
import map from './assets/mapsGermanyjpb.jpg'
import Link from "next/link"
export default function WidgetFooter() {
  const handleClick = () => {
    console.log("click")
  }

  const year = new Date().getFullYear()

  return (
    <section>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.left)}>
          {/* <Image
            src={logo}
            alt="alt"
            width={120}
            height={30}
          /> */}
          <p {...stylex.props(s.capital)}>Capita<span {...stylex.props(s.invest)}>||nvest</span></p>


        </div>

        <div {...stylex.props(s.middleL)}>
          <Image
            {...stylex.props(s.imageL)}
            src={map}
            alt="alt"
            width={0}
            height={0}
          />
        </div>
        <div {...stylex.props(s.middleR)}>
          <p {...stylex.props(s.title)}>Office</p>
          <p {...stylex.props(s.text)}>Germany, 4595 Berliner Str.</p>
          <p {...stylex.props(s.text)}>
            <a {...stylex.props(s.text)} href="tel:+1-555-555-5555">+1 800 555 5555</a>
          </p>

          <p {...stylex.props(s.text)}>
            <a {...stylex.props(s.text)} href="mailto:tinfo@email.com">info@email.com</a>
          </p>
        </div>

        <div {...stylex.props(s.right)}>
          <p {...stylex.props(s.title)}>Links</p>
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
            <Link href="/news" {...stylex.props(s.link)}>
              <li {...stylex.props(s.item)}>
                <span {...stylex.props(s.span)}>News</span>
              </li>
            </Link>
            <Link href="/blog" {...stylex.props(s.link)}>
              <li {...stylex.props(s.item)}>
                <span {...stylex.props(s.span)}>Blog</span>
              </li>
            </Link>
            <Link href="/contact" {...stylex.props(s.link)}>
              <li {...stylex.props(s.item)}>
                <span {...stylex.props(s.span)}>Contact</span>
              </li>
            </Link>
          </ul>
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
      default: '.4fr 1fr .3fr .7fr',
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
  link: {
    textDecoration: 'none'
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
  capital: {
    fontSize: text.h3,
  },
  invest: {
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold'
  },
  left: {},
  middleL: {},
  text: {
    paddingBottom: spacing.xs
  },
  imageL: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
  middleR: {
    maxWidth: 300
  },
  right: {
    textAlign: {
      default: 'center',
      '@media (max-width: 900px)': 'left'
    }
  },

})
