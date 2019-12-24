import React from "react"
import renderer from "react-test-renderer"
import Title from "./Title"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Title title="emotion-theming-jest" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
