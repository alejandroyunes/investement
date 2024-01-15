import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import carro from './assets/carro.jpg'
import casa from './assets/casa.jpg'
import estufa from './assets/estufa.jpg'
import laptop from './assets/laptop.jpg'
import HeartSvg from "../Assets/Icons/HeartSvg"
import HeartSvgFill from "../Assets/Icons/HeartSvgFill"
import LikeHeart from "../LikeHeart"
import LocationSvg from "../Assets/Icons/LocationSvg"

export default function Ads() {
  return (
    <section {...stylex.props(s.container)}>
      <div  {...stylex.props(s.adsTitle)}>
        <div {...stylex.props(s.title)}>
          <h2>Anuncios recientes</h2>
        </div>
      </div>

      <div {...stylex.props(s.grid)}>

        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
        <div {...stylex.props(s.gridItem)}>

          <Link href="#" {...stylex.props(s.link)}>
            <div {...stylex.props(s.gridImage)}>
              <Image
                {...stylex.props(s.adImage)}
                src={carro}
                alt="alt"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <Link href="#" {...stylex.props(s.link)}>
                <h3 {...stylex.props(s.description)}>
                  name of the product Lorem, ipsum dolor.
                </h3>
              </Link>
              <div {...stylex.props(s.likeHeartSvg)}>
                <LikeHeart />
              </div>
            </div>
            <Link href="#" {...stylex.props(s.link)}>
              <div>
                <p {...stylex.props(s.detailsPrice)}>$ 250,000</p>
              </div>
              <div {...stylex.props(s.location)}>
                <div {...stylex.props(s.locationSvg)}>
                  <LocationSvg />
                </div>
                <p>Medellín, Colombia</p>
              </div>
              <div>
                <p>
                  30 de diciembre
                </p>
              </div>
            </Link>
          </div>

        </div>
      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: $.maxWidth,
  },
  adsTitle: {
    display: "flex",
    flexDirection: "row",
    margin: `${spacing.xs} ${spacing.md}`,
    paddingBottom: `${spacing.xs}`,
  },
  title: {
    fontSize: text.sm,
    fontWeight: "bold",
    color: colors.inverted
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px) and (min-width: 900px)": "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 900px) and (min-width: 700px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
    margin: `${spacing.xs} ${spacing.md}`,
    gap: 16,
  },
  link: {
    cursor: "pointer",
    color: colors.inverted,
    textDecoration: "none"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.inputBg,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    position: "relative",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.xBorderColor,
    boxShadow: colors.invertedShadows,
  },
  gridImage: {
    margin: `0 0 ${spacing.xxs} 0`,
  },
  adImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    padding: `0 ${spacing.xxs}`,
    margin: `0 0 ${spacing.xs} 0`,
  },
  gridDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeHeartSvg: {
    cursor: "pointer"
  },
  description: {
    fontSize: text.p,
    fontWeight: 500,
    lineHeight: "22px"
  },
  detailsPrice: {
    fontSize: text.p,
    fontWeight: "bold",
    paddingRight: `${spacing.xxs}`,
    paddingTop: `${spacing.xxs}`
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: `${spacing.xxs}`
  },
  locationSvg: {
    paddingRight: `${spacing.xxs}`,
  },
})


