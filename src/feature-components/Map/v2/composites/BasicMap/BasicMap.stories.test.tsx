jest.mock("@storybook/react-vite", () => ({}));

import { render, screen, waitFor } from "@testing-library/react";
import {
  MalformedFeatureReportedToOnError,
  LayerSetupFailureReportsToOnError,
} from "./BasicMap.stories";

type Renderable = { render?: (...args: never[]) => React.ReactElement };

const renderStory = (story: unknown) =>
  render((story as Renderable).render!());

describe("error behaviour stories render", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => undefined);
  });

  it("MalformedFeatureReportedToOnError lists the bad feature and keeps the map", async () => {
    renderStory(MalformedFeatureReportedToOnError);
    // Rendered by the DS ErrorFallbackText, not bespoke story markup.
    expect(screen.getByText(/BasicMapV2 failed to load/)).toBeTruthy();
    await waitFor(() =>
      expect(document.body.textContent).toContain(
        "MalformedFeatureError, featureId: bad-path"
      )
    );
    expect(document.body.textContent).toContain("onError calls: 1");
  });

  it("LayerSetupFailureReportsToOnError shows the onError call", async () => {
    renderStory(LayerSetupFailureReportsToOnError);
    await waitFor(() =>
      expect(document.body.textContent).toContain("onError: Unknown layer kind")
    );
  });
});
