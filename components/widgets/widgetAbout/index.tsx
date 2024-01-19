'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import about from './assets/about7.webp'
import abouttwo from './assets/about4.webp'
import Image from "next/image"
import ButtonTheme from "../../button/ButtonTheme"

interface WidgetProps {
  inversedImage?: boolean,
}

export default function WidgetAbout({ inversedImage }: WidgetProps) {

  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        {/* <a href="https://www.freepik.com/free-photo/happy-male-entrepreneur-reading-email-laptop-while-working-office_26390438.htm#page=2&query=business%20and%20computer&position=1&from_view=search&track=ais&uuid=79941738-8308-42f4-a131-2cadc372de65">Image by Drazen Zigic</a> on Freepik */}
        <Image
          {...stylex.props(s.imageL)}
          src={about}
          alt="alt"
          width={0}
          height={0}
        />
        {/* Image by <a href="https://www.freepik.com/free-photo/smiling-businesspeople-working-with-laptop_962034.htm#page=2&query=business%20and%20computer&position=5&from_view=search&track=ais&uuid=79941738-8308-42f4-a131-2cadc372de65">Freepik</a> */}
        <Image
          {...stylex.props(s.imageR)}
          src={abouttwo}
          alt="alt"
          width={0}
          height={0}
        />
      </div>

      <div {...stylex.props(s.right, inversedImage && s.inverted)}>
        <p {...stylex.props(s.slogan)}>SAVING MONEY</p>
        <p {...stylex.props(s.title)}>Cut your costs by up to 50%</p>
        <p {...stylex.props(s.description)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae asperiores quod perferendis architecto animi.</p>
        <p {...stylex.props(s.dateTop)}>MON-FRI: 9 AM – 22 PM</p>
        <p {...stylex.props(s.dateBottom)}>SATURDAY: 9 AM – 20 PM</p>

        <div>
          <ButtonTheme variant="primary" onClick={handleClick}>Explore</ButtonTheme>
        </div>
      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.xl,
    margin: {
      default: `${spacing.xxxl} auto`,
      '@media (max-width: 900px)': `${spacing.xl} auto`
    },
  },
  left: {
    transform: 'scaleX(-1)'
  },
  imageL: {
    // transform: 'scaleX(-1)',
    maxWidth: {
      default: 300,
      '@media (max-width: 500px)': 260
    },
    height: {
      default: 400,
    },
    objectFit: 'cover',
    float: 'left',
  },
  imageR: {
    paddingTop: spacing.xxxl,
    objectFit: 'contain',
    float: 'right',
    maxWidth: {
      default: 399,
      '@media (max-width: 747px) and (min-width: 500px)': 319,
      '@media (max-width: 500px)': 280,
    },
    height: {
      default: 399,
    },
    marginTop: {
      default: -333,
      '@media (max-width: 900px) and (min-width: 667px)': -20,
      '@media (max-width: 667px) and (min-width: 500px)': -380,
      '@media (max-width: 500px)': -380,
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inverted: {
    order: -1
  },
  slogan: {
    fontSize: text.p,
    fontWeight: 'bold',
    color: colors.gray,
    paddingBottom: spacing.xxs
  },
  title: {
    fontSize: text.h3,
    fontWeight: 'bold',
    paddingBottom: spacing.md
  },
  description: {
    paddingBottom: spacing.xs
  },
  dateTop: {
    paddingBottom: spacing.xxs
  },
  dateBottom: {
    paddingBottom: spacing.md
  },
})
