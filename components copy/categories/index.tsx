import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import cars from './assets/carros.webp'
import smartphones from './assets/smartphones.webp'
import inmobiliario from './assets/inmobilario.webp'
import vestido from './assets/vestido.webp'
import home from './assets/home.webp'
import futbol from './assets/futbol.webp'
import pets from './assets/pets.webp'
import guitar from './assets/guitar.webp'
import services from './assets/services.webp'
import art from './assets/art.webp'
import homeappliances from './assets/homeappliances.webp'
import laptop from './assets/laptop.webp'
import tools from './assets/tools.webp'
import other from './assets/other.webp'

export default function Categories() {
  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.categories)}>
        <div {...stylex.props(s.categoriesTitle)}>
          <h2>Categorías</h2>
        </div>
        <div>
          <Link href="#" {...stylex.props(s.categoriesUrl)}>
            <span>Ver todos</span>
          </Link>
        </div>
      </div>
      <div {...stylex.props(s.categoryItems)}>
        <ul {...stylex.props(s.unorderedList)}>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={cars}
                  alt="compra y venta de carros y motos"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Carros y Motos</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={inmobiliario}
                  alt="Propiedades y Alquileres"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Propiedades y Alquileres</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={smartphones}
                  alt="compra y venta de teléfonos inteligentes"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Teléfonos Inteligentes</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={homeappliances}
                  alt="Electrodomésticos"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Electrodomésticos</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={home}
                  alt="Artículos del Hogar"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Artículos del Hogar</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={laptop}
                  alt="Portátiles"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Portátiles</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={futbol}
                  alt="Deportes"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Deportes</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={pets}
                  alt="Mascotas"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Mascotas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={guitar}
                  alt="Instrumentos"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Instrumentos</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={services}
                  alt="Servicios"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Servicios</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={art}
                  alt="Arte"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Arte</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={vestido}
                  alt="compra y venta de vestidos"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Moda y Belleza</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={tools}
                  alt="Herramientas"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Herramientas</label>
            </Link>
          </li>
          <li {...stylex.props(s.liList)}>
            <Link href="#" {...stylex.props(s.itemLink)}>
              <div  {...stylex.props(s.liImage)}>
                <Image
                  {...stylex.props(s.categoriesImage)}
                  src={other}
                  alt="Otros"
                  width={80}
                  height={80}
                />
              </div>
              <label {...stylex.props(s.liLabel)}>Otros</label>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: $.maxWidth
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: `${spacing.xs} ${spacing.md}`,
    paddingBottom: `${spacing.xs}`,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.xBorderColor
  },
  categoriesTitle: {
    fontSize: text.sm,
    fontWeight: "bold",
    color: colors.inverted
  },
  categoriesUrl: {
    fontSize: text.sm,
    textDecoration: "none",
    color: {
      default: colors.inverted,
      ':hover': {
        default: null,
      },
    },
  },
  categoryItems: {
    margin: `${spacing.xs} ${spacing.md}`,
    paddingBottom: `${spacing.xs}`,
    width: "auto",
    maxWidth: "100%",
    overflowX: "scroll",
    // eslint-disable-next-line @stylexjs/valid-styles
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px"
    },
    // eslint-disable-next-line @stylexjs/valid-styles
    "::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: colors.xBorderColor
    },
  },
  unorderedList: {
    display: "inline-grid",
    gridAutoFlow: "column",
    gridGap: `${spacing.xs}`,
    listStyle: "none",
  },
  liList: {
    width: 100,
    cursor: "pointer",
  },
  itemLink: {
    fontSize: text.sm,
    color: colors.inverted,
    textDecoration: "none",
  },
  liImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesImage: {
    width: "80px",
    height: "80px",
    borderRadius: '50%',
  },
  liLabel: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  }
})
