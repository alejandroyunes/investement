'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import blog from './assets/blog.jpg'


import Image from "next/image"
import ButtonTheme from "../button/ButtonTheme"

export default function WidgetBlog() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section>

      <div {...stylex.props(s.titleContainer)}>
        <p {...stylex.props(s.slogan)}>Tips for Clients</p>
        <p {...stylex.props(s.title)}>Details about our work</p>
      </div>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.left)}>
          <Image
            {...stylex.props(s.image)}
            src={blog}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Business</p>
            <h3>Lorem ipsum dolor, sit amet consectetur.</h3>
            <div {...stylex.props(s.bg)}>
              <p {...stylex.props(s.day)}>13</p>
              <p>Apr</p>
            </div>
          </div>

        </div>


        <div {...stylex.props(s.center)}>
          <Image
            {...stylex.props(s.image)}
            src={blog}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Business</p>
            <h3>Lorem ipsum dolor, sit amet consectetur.</h3>
            <div {...stylex.props(s.bg)}>
              <p {...stylex.props(s.day)}>13</p>
              <p>Apr</p>
            </div>
          </div>

        </div>

        <div {...stylex.props(s.right)}>
          <Image
            {...stylex.props(s.image)}
            src={blog}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Business</p>
            <h3>Lorem ipsum dolor, sit amet consectetur.</h3>
            <div {...stylex.props(s.bg)}>
              <p {...stylex.props(s.day)}>13</p>
              <p>Apr</p>
            </div>
          </div>

        </div>

      </div>

      <div {...stylex.props(s.button)}>
        <ButtonTheme variant="primary" onClick={handleClick}>View More Posts</ButtonTheme>
      </div>
    </section>
  )
}

const s = stylex.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  slogan: {
    fontSize: text.h5,
    fontWeight: 'bold',
    color: colors.gray,
    paddingBottom: spacing.xxs,
    textTransform: 'capitalize'
  },
  title: {
    fontSize: text.h2,
    fontWeight: 'bold',
    paddingBottom: spacing.md
  },
  container: {
    display: 'grid',
    gap: spacing.lg,
    gridTemplateColumns: {
      default: 'repeat(3, minmax(0, 1fr))',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
  },
  image: {
    maxWidth: "100%",
    height: 'auto',
  },
  description: {
    padding: `${spacing.sm} ${spacing.xl} ${spacing.xl}`,
    fontSize: text.h4,
    position: 'relative'
  },
  bg: {
    position: 'absolute',
    top: -106,
    left: -16,
    height: 90,
    width: 90,
    backgroundColor: colors.black,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    color: colors.white
  },
  day: {
    fontSize: text.h1
  },
  blogSlogan: {
    fontWeight: 'bold',
    paddingBottom: spacing.xxxs,
    fontSize: text.p,
    color: colors.gray
  },
  button: {
    margin: `0 auto ${spacing.xxl}`,
    textAlign: 'center',
  },
  left: { cursor: 'pointer' },
  center: { cursor: 'pointer' },
  right: { cursor: 'pointer' },
})
