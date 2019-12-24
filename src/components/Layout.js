import React from "react"
import { ThemeProvider } from "emotion-theming"

import Title from "./Title"

export const theme = {
  colors: {
    primary: "rebeccapurple",
  },
}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Title title="emotion-theming-jest" />
    {children}
  </ThemeProvider>
)

export default Layout
