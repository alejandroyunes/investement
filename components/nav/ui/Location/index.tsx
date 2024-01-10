"use client"
import stylex from "@stylexjs/stylex"
import LocationSvg from "@/components/Assets/Icons/LocationSvg"
import { colors, spacing, text } from "../../../../app/globalTokens.stylex"
import { useState } from "react"
import ExitSvg from "../../../Assets/Icons/ExitSvg"
import ArrowRightSvg from "@/components/Assets/Icons/ArrowRightSvg"

interface LocationProps {
  latitude: number
  longitude: number
}

interface cityProps {
  city: string
  latitude: number
  longitude: number
}

export default function Location() {

  const [open, setOpen] = useState<boolean>()
  const [inputValue, setInputValue] = useState('')
  const [city, setCity] = useState<string>()
  const [errorCity, setErrorCity] = useState(false)
  const [cityBlocked, setCityBlocked] = useState(false)
  const [cityArray, setCityArray] = useState<cityProps[]>()
  const colombiaCoordinates = [
    { city: 'Bogotá', latitude: 4.6097, longitude: -74.0817 },
    { city: 'Medellín', latitude: 6.1924, longitude: -75.5963 },
    { city: 'Cali', latitude: 3.4516, longitude: -76.5320 },
    { city: 'Barranquilla', latitude: 10.9639, longitude: -74.7967 },
    { city: 'Cartagena', latitude: 10.3910, longitude: -75.4794 },
    { city: 'Santa Marta', latitude: 11.2404, longitude: -74.1990 },
    { city: 'Manizales', latitude: 5.0702, longitude: -75.5136 },
    { city: 'Pereira', latitude: 4.8136, longitude: -75.6961 },
    { city: 'Cúcuta', latitude: 7.8938, longitude: -72.5078 },
    { city: 'Ibagué', latitude: 4.4389, longitude: -75.2322 },
    { city: 'Neiva', latitude: 2.9273, longitude: -75.2819 },
    { city: 'Villavicencio', latitude: 4.1420, longitude: -73.6266 },
    { city: 'Bucaramanga', latitude: 7.1198, longitude: -73.1227 },
    { city: 'Pasto', latitude: 1.2136, longitude: -77.2811 },
    { city: 'Popayán', latitude: 2.4386, longitude: -76.6132 },
    { city: 'Armenia', latitude: 4.5341, longitude: -75.6751 },
    { city: 'Montería', latitude: 8.7555, longitude: -75.8885 },
    { city: 'Sincelejo', latitude: 9.2960, longitude: -75.3978 },
    { city: 'Valledupar', latitude: 10.4633, longitude: -73.2532 },
    { city: 'Tunja', latitude: 5.5352, longitude: -73.3670 },
    { city: 'Riohacha', latitude: 11.5444, longitude: -72.9060 },
    { city: 'Quibdó', latitude: 5.6947, longitude: -76.6619 },
    { city: 'Florencia', latitude: 1.6144, longitude: -75.6062 },
    { city: 'Yopal', latitude: 5.3375, longitude: -72.3956 },
    { city: 'Mocoa', latitude: 1.1518, longitude: -76.6464 },
    { city: 'Puerto Carreño', latitude: 6.1891, longitude: -67.4850 },
    { city: 'San José del Guaviare', latitude: 2.5730, longitude: -72.6459 },
    { city: 'Inírida', latitude: 3.8652, longitude: -67.9239 },
    { city: 'Mitú', latitude: 1.1986, longitude: -70.1733 },
    { city: 'Leticia', latitude: -4.2032, longitude: -69.9350 },
  ]


  const searchCity = () => {
    const searchTerm = inputValue.toLocaleLowerCase()

    const filteredCities = colombiaCoordinates.filter(city => {
      const cityLowerCase = city.city.toLocaleLowerCase()
      return cityLowerCase.includes(searchTerm)
    })

    setCityArray(filteredCities)

    return filteredCities
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    if (inputValue.length >= 1) {
      searchCity()
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    searchCity()
  }

  const handleSetCity = (city: string) => {
    setCity(city)
    setOpen(false)
  }

  const getLocationCity = ({ latitude, longitude }: LocationProps) => {
    const closestCity = colombiaCoordinates.reduce((closest, current) => {
      const distanceToCurrent = Math.sqrt(
        Math.pow(latitude - current.latitude, 2) +
        Math.pow(longitude - current.longitude, 2)
      )

      if (distanceToCurrent < closest.distance) {
        return { city: current.city, distance: distanceToCurrent }
      }

      return closest
    }, { city: '', distance: Number.MAX_VALUE })

    return closestCity.city
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const locationObject = { latitude, longitude }
          const city = getLocationCity(locationObject)
          setOpen(false)
          setCity(city)
        },
        () => {
          setCityBlocked(true)
        }
      )
    } else {
      setErrorCity(true)
    }
  }

  return (
    <>
      <div {...stylex.props(s.container)} onClick={() => setOpen(true)}>
        <div  {...stylex.props(s.icon, city !== undefined && s.popIn)}>
          <LocationSvg />
        </div>
        <div {...stylex.props(s.text)}>
          <p {...stylex.props(s.textP)}>
            {city ? city : 'Ciudad'}
          </p>
        </div>
      </div >

      <div {...stylex.props(s.sliderContainer, open && s.slideIn, open === false && s.slideClose)}>
        <div {...stylex.props(s.animationContainer)}>

          <div {...stylex.props(s.location)}>
            <p {...stylex.props(s.textP)}>
              ¿Dónde quieres buscar?
            </p>
          </div>

          <div {...stylex.props(s.searchInput)}>

            <form onSubmit={handleSubmit} {...stylex.props(s.form)}>
              <input {...stylex.props(s.input)} type="text" placeholder="Buscar" onChange={handleChange} value={inputValue} />
            </form>

            <div {...stylex.props(s.arrow)} onClick={handleSubmit}>
              <ArrowRightSvg />
            </div>
          </div>

          <div {...stylex.props(s.currentContainer)}>
            <LocationSvg />
            <div {...stylex.props(s.currentLocation)} onClick={handleGetLocation}>
              <p>
                Usar la ubicación actual
              </p>
              {errorCity &&
                <p {...stylex.props(s.errorLocation)}>
                  Hubo un error en la ubicación
                </p>
              }
              {cityBlocked &&
                <p {...stylex.props(s.errorLocation)}>
                  Ubicación bloqueada. Verifique la configuración del navegador/teléfono
                </p>
              }
            </div>
          </div>
        </div>

        <div {...stylex.props(s.resultContainer)}>
          {cityArray &&
            <ul {...stylex.props(s.resultUnorder)}>
              {cityArray.map((city, index) => (
                <li key={index} {...stylex.props(s.resultList)} onClick={() => handleSetCity(city.city)}>
                  {city.city}
                </li>
              ))}
            </ul>}
        </div>

        <div {...stylex.props(s.animationExit)} onClick={() => setOpen(false)}>
          <ExitSvg />
        </div>
      </div>

      {open && <div {...stylex.props(s.bg)} onClick={() => setOpen(false)} />}
    </>
  )
}

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
})

const slideClose = stylex.keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0%)' },
})

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const popIn = stylex.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-10px)' },
  '100%': { transform: 'translateY(0px)' },
})

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: {
      default: null,
      "@media (max-width: 900px)": "row-reverse",
    },
    marginLeft: {
      default: spacing.sm,
      "@media (max-width: 900px)": spacing.xxs,
    },
  },
  icon: {
    marginRight: {
      default: spacing.xs,
      "@media (max-width: 900px)": spacing.xxs,
    }
  },
  text: {
    marginRight: {
      default: null,
      "@media (max-width: 900px)": spacing.xxs,
    },
  },
  textP: {
    fontSize: text.p,
    color: colors.inverted,
  },
  sliderContainer: {
    position: "fixed",
    top: 0,
    right: {
      default: "-30vw",
      "@media (max-width: 900px)": "-80vw"
    },
    width: {
      default: "30vw",
      "@media (max-width: 900px)": "80vw"
    },
    height: "100vh",
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: colors.xBorderColor,
    willChange: 'transform',
    backgroundColor: colors.bg
  },
  slideIn: {
    animationName: slideIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  slideClose: {
    animationName: slideClose,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  popIn: {
    animationName: popIn,
    animationDuration: "1s",
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(.2, .85, .4, 1)',
    animationIterationCount: 2,
  },
  animationContainer: {
    display: "flex",
    position: 'relative',
    flexDirection: "column",
    margin: `${spacing.md} ${spacing.md} 0 `
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 10,
    right: 16,
    cursor: "pointer"
  },
  location: {
    paddingBottom: spacing.xs
  },
  searchInput: {
    position: "relative"
  },
  form: {
    width: "100%",
  },
  input: {
    borderStyle: "solid",
    borderColor: colors.xBorderColor,
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    fontSize: text.sm,
    padding: `${spacing.xxs} ${spacing.xs}`,
    boxSizing: "border-box",
    paddingLeft: spacing.xs,
    width: "100%",
    backgroundColor: colors.inputBg,
    color: colors.inverted
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: 8,
    transform: "translateY(-50%)",
  },
  currentContainer: {
    display: "flex",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: colors.xBorderColor,
    borderWidth: {
      default: "2px",
    },
    alignItems: "center",
    marginTop: spacing.xs,
    padding: `0 ${spacing.xxs}`,
  },
  currentLocation: {
    width: "100%",
    padding: `${spacing.xxs} ${spacing.xs}`,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    fontSize: text.sm,
    color: colors.inverted,
  },
  errorLocation: {
    padding: `${spacing.xxs} 0`,
  },
  resultContainer: {
    margin: `0 ${spacing.md}`,
  },
  resultUnorder: {
    listStyleType: "none",
    cursor: "pointer",
    borderLeftStyle: "solid",
    borderLeftColor: colors.xBorderColor,
    borderLeftWidth: {
      default: "2px",
    },
    borderRightStyle: "solid",
    borderRightColor: colors.xBorderColor,
    borderRightWidth: {
      default: "2px",
    },
    borderBottomStyle: "solid",
    borderBottomColor: colors.xBorderColor,
    borderBottomWidth: {
      default: "2px",
    },
  },
  resultList: {
    padding: `${spacing.xxs}`,
    fontSize: text.sm,
    color: colors.inverted,
  },
  bg: {
    position: "fixed",
    width: '100vw',
    left: 0,
    top: 0,
    height: "100vh",
    backgroundColor: "rgba(20, 22, 27, 0.5)",
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 100
  }
})
