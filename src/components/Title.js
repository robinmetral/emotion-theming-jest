import React from "react"
import { css } from "@emotion/core"

const Title = ({ title }) => (
  <h1
    css={theme =>
      css`
        color: ${theme.colors.primary};
      `
    }
  >
    {title}
  </h1>
)

export default Title
