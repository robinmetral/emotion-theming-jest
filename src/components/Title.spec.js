import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "emotion-theming"

import Title from "./Title"
import { theme } from "./Layout"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Title title="emotion-theming-jest" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
