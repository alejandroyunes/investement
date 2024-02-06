'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import realEstate from '../../Assets/images/service1.webp'
import construction from '../../Assets/images/construction.webp'
import management from '../../Assets/images/management.webp'


import Image from "next/image"
import ButtonTheme from "../../button/ButtonTheme"
import Link from "next/link"

export default function WidgetServices() {

  const handleClick = () => {
    console.log("click")
  }


  return (
    <section>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.left)}>
          <Image
            {...stylex.props(s.image)}
            src={realEstate}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Real Estate</p>
            <h3>Real estate with tailored solutions for your property.</h3>
          </div>
        </div>

        <div {...stylex.props(s.center)}>
          <Image
            {...stylex.props(s.image)}
            src={management}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Management</p>
            <h3>Effortless property management.</h3>
          </div>
        </div>

        <div {...stylex.props(s.right)}>
          <Image
            {...stylex.props(s.image)}
            src={construction}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Construction</p>
            <h3>Supporting construction projects with expertise.</h3>
          </div>
        </div>

      </div>

      <div {...stylex.props(s.button)}>
        <Link href='/services'>
          <ButtonTheme variant="primary">Services</ButtonTheme>
        </Link>
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
    padding: {
      default: `${spacing.sm} ${spacing.sm} ${spacing.xl}`,
      '@media (max-width: 900px)': `${spacing.sm} ${spacing.sm} ${spacing.xl}`
    },
    fontSize: text.h4,
    position: 'relative'
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
  left: {},
  center: {},
  right: {},
})
