'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import Image from "next/image"
import musicP from './assets/solar.webp'
// import ArrowDouble from "../Assets/Icons/ArrowDouble"

export default function AboutComponent() {

  return (
    <>
      <div  {...stylex.props(s.container)}>
        <div {...stylex.props(s.title)}>
          <h1>About Us</h1>
        </div>
      </div>
      <Image
        {...stylex.props(s.image)}
        src={musicP}
        alt="alt"
        width={0}
        height={0}
        style={{ width: '100%' }}
      />
      <div {...stylex.props(s.aboutUsTitle)}>
        <h3>Our Core Values</h3>
      </div>
      <div {...stylex.props(s.aboutUs)}>
        <div>
          <h3>Our Mission</h3>
          <p>We are committed to showcasing properties on premier platforms, offering flexible rental options, and delivering unparalleled services that cater to the unique needs and goals of property owners, ensuring maximum returns on investments.</p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>At the core of our vision is the assurance of a hassle-free experience for property owners and their guests. From initial inquiries to the check-out process, we take care of all aspects of booking and guest management, ensuring a smooth and enjoyable stay.</p>
        </div>
      </div>
      <div {...stylex.props(s.aboutUs)}>
        <div>
          <h3>Our Values</h3>
          <p> Our Client-Centric Approach places our clients at the heart of our endeavors, prioritizing their needs with personalized, attentive service to ensure utmost satisfaction. Upholding Integrity and Transparency, we navigate our dealings with the highest ethical standards, fostering trust through clear communication.</p>
        </div>
        <div>
          <h3>Our Resources</h3>
          <p>Our dedicated team, with extensive industry expertise, forms the backbone of our capabilities, ensuring excellence in every transaction. Cutting-edge technology and innovative tools enhance our efficiency and client experience. </p>
        </div>
      </div>
    </>
  )
}


const s = stylex.create({
  container: {
    margin: "24px auto",
  },
  image: {
    position: 'relative',
    objectFit: 'cover',
    zIndex: -1,
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    fontSize: text.h5,
    textTransform: 'uppercase',
    color: colors.white
  },
  aboutUsTitle: {
    display: 'flex',
    justifyContent: 'center',
    margin: '24px 0',
    fontSize: text.h4
  },
  aboutUs: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': '1fr'
    },
    margin: '24px 0',
    gap: spacing.sm
  },
})