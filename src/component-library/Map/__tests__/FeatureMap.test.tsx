import { render, screen } from "@testing-library/react"
import FeatureMap from "../FeatureMap"
import { ClassIcon } from "../utils/schema"
import { ARGA_ATTACK, BOULAY_ATTACK, MADE_UP_MARKER } from "../sampleData/markers"
import { AUSTRIA, MOLDOVA } from "../sampleData"

const findByClassUriMock = (maybeUri: string): ClassIcon => {
  if (maybeUri === ARGA_ATTACK.type) {
    return ({
      faIcon: "bob",
      backgroundColor: "rgb(36, 36, 0)",
      color: "rgb(255,253,4)",
      classUri: maybeUri,
      iconFallbackText: "Arg",
      alt: "test alt text"
    })
  }
  return ({
    backgroundColor: "rgb(18, 18, 18)",
    color: "rgb(221, 221, 221)",
    classUri: MADE_UP_MARKER.type,
    iconFallbackText: "mb",
    alt: "test alt text"
  })
}

describe("FeatureMap", () => {
  it("should render", () => {
    const { container } = render(<FeatureMap theme="DocumentPink" markers={[BOULAY_ATTACK, ARGA_ATTACK]} geoPolygons={{ type: "FeatureCollection", features: [AUSTRIA, MOLDOVA] }} findByClassUri={findByClassUriMock} selected={[]} mapStyleOptions={{}} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
