"use-client"

import stylex from "@stylexjs/stylex"
import { InputHTMLAttributes, useState } from "react"
import { globalTokens as $, colors, spacing, text } from "./../../../../app/globalTokens.stylex"
import ArrowRightSvg from "../../../Assets/Icons/ArrowRightSvg"
import SearchSvg from "@/components/Assets/Icons/SearchSvg"

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export default function CustomInput(props: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted', inputValue)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div {...stylex.props(s.main)}>
      <div {...stylex.props(s.icon)}>
        <SearchSvg />
      </div>
      <form onSubmit={handleSubmit} {...stylex.props(s.form)}>
        <input {...stylex.props(s.input)} type="text" placeholder="Buscar" onChange={handleChange} value={inputValue} {...props} />
      </form>
      <div {...stylex.props(s.arrow)} onClick={handleSubmit}>
        <ArrowRightSvg />
      </div>
    </div>
  )
}

const s = stylex.create({
  main: {
    display: "flex",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: 8,
    transform: "translateY(-50%)",
  },
  form: {
    width: "100%",
  },
  input: {
    borderStyle: "solid",
    borderColor: {
      default: colors.xBorderColor,
      ':focus': colors.primary
    },
    borderWidth: {
      default: "2px",
    },
    borderRadius: spacing.xs,
    fontSize: text.p,
    padding: `${spacing.xxs} ${spacing.xs}`,
    boxSizing: "border-box",
    paddingLeft: spacing.xl,
    width: "100%",
    backgroundColor: colors.inputBg,
    color: colors.inverted,
    outline: {
      default: 'none',
      ':focus': 'none',
    },
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right: 8,
    transform: "translateY(-50%)",
  },
})