'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import realEstate from '../../Assets/images/service1.webp'
import construction from '../../Assets/images/construction.webp'
import management from '../../Assets/images/management.webp'

import Image from "next/image"


export default function WidgetServicesItem() {

  const handleClick = () => {
    console.log("click")
  }


  return (
    <section>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.main)}>
          <Image
            {...stylex.props(s.image)}
            src={realEstate}
            alt="alt"
            width={0}
            height={0}
          />
        </div>
        <div>
          <h3 {...stylex.props(s.blogSlogan)}>Real Estate</h3>
          <p {...stylex.props(s.description)}>Experience top-notch real estate solutions through our tailored services. We showcase your property to a global audience, attracting quality travelers for short-term stays or long-term leases. From seamless booking to checkout, we ensure a hassle-free experience. Choose flexible options for rentals that suit your needs. Our personalized approach customizes services to your property and goals.</p>
        </div>
      </div>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.mainMiddle)}>
          <Image
            {...stylex.props(s.image)}
            src={management}
            alt="alt"
            width={0}
            height={0}
          />
        </div>
        <div>
          <h3 {...stylex.props(s.blogSlogan)}>Management</h3>
          <p {...stylex.props(s.description)}> Entrust your vacation home to our expert care and enjoy the benefits while we handle all property needs. As Your Trusted Partner in Real Estate, Property Management we ensure your property is always guest-ready. Our dedicated team manages cleaning, maintenance, and repairs with a second-to-none approach, turning your property into a welcoming haven.</p>
        </div>
      </div>

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.main)}>
          <Image
            {...stylex.props(s.image)}
            src={construction}
            alt="alt"
            width={0}
            height={0}
          />
        </div>
        <div>
          <h3 {...stylex.props(s.blogSlogan)}>Construction</h3>
          <p {...stylex.props(s.description)}>Receive expert construction support from planning to completion. Our commitment to quality craftsmanship ensures your project meets high standards, delivered on time and within budget. Leveraging local expertise, we provide informed recommendations and navigate challenges. For dreamers of construction projects, our third branch offers steadfast support, turning visions into reality with comprehensive assistance. Trust us for a seamless, successful construction journey.</p>
        </div>
      </div>


    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    marginTop: spacing.xl,
    gap: spacing.lg,
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 756px)': 'repeat(1, 1fr)'
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainMiddle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    order: {
      default: 1,
      '@media (max-width: 756px)': 0
    }
  },
  image: {
    maxWidth: "100%",
    height: 'auto',
    width: 400
  },
  description: {
    padding: {
      default: `${spacing.sm} 0 ${spacing.xl}`,
      '@media (max-width: 900px)': `${spacing.sm} ${spacing.sm} ${spacing.xl}`
    },
    fontSize: text.p,
    position: 'relative'
  },
  blogSlogan: {
    fontWeight: 'bold',
    paddingBottom: spacing.xxxs,
    fontSize: text.h5,
  },
})
