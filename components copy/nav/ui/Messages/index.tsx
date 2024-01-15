import stylex from "@stylexjs/stylex"
import MessagesSvg from "../../../Assets/Icons/MessagesSvg";
import { spacing } from "../../../../app/globalTokens.stylex"

export default function Messages() {
  return (
    <div className={stylex(styles.container)} >

      <div className={stylex(styles.icon)}>
        <MessagesSvg />
      </div>

    </div>
  )
}

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: spacing.xxs,
    marginRight: spacing.xxs,
    position: "relative",
  },
  icon: {
    cursor: "pointer"
  },
})

