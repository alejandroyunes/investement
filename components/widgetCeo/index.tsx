'use client'
import * as stylex from "@stylexjs/stylex"
import { spacing } from "../../app/globalTokens.stylex"
import ceo from './assets/widget-ceo1.webp'
import Image from "next/image"

export default function WidgetCeo() {

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div {...stylex.props(s.leftBottom)}>
          <div>
            <Image
              {...stylex.props(s.image)}
              src={ceo}
              alt="alt"
              width={0}
              height={0}
            />
          </div>
          <div>
            <p {...stylex.props(s.name)}>Roger Waters</p>
            <p>Ceo</p>
          </div>
        </div>
      </div>

      <div>
        <span {...stylex.props(s.span)}>L</span>
        <p>orem elit, sed do eiusm onsectetur adipiscing elit, eiusm od adipiscing elit conse  provident quod quas tenetur no. adipisicing elit. Quam dicta repellat.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas tempora ratione fugit doloremque voluptate optio minus.</p>
      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1.7fr 1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.xs,
    margin: {
      default: `${spacing.xxxl} auto`,
      '@media (max-width: 900px)': `${spacing.xl} auto`
    },
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  leftBottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.sm
  },
  image: {
    borderRadius: "50%",
    width: 78,
    height: 78,
  },
  name: {
    fontWeight: 'bold'
  },
  span: {
    fontSize: 42,
    float: 'left',
    lineHeight: 1,
    paddingRight: spacing.sm
  }
})
