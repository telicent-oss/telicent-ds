jest.mock("@storybook/react-vite", () => ({}));

import { render, screen, waitFor } from "@testing-library/react";
import {
  MalformedFeatureThrows,
  LayerSetupFailureReportsToOnError,
} from "./BasicMap.stories";

type Renderable = { render?: (...args: never[]) => React.ReactElement };

const renderStory = (story: unknown) =>
  render((story as Renderable).render!());

describe("error behaviour stories render", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => undefined);
  });

  it("MalformedFeatureThrows shows the boundary fallback", () => {
    renderStory(MalformedFeatureThrows);
    expect(screen.getByText(/Error boundary caught the map/)).toBeTruthy();
    expect(document.body.textContent).toContain(
      "instanceof MalformedFeatureError: true"
    );
    expect(document.body.textContent).toContain("featureId: bad-path");
  });

  it("LayerSetupFailureReportsToOnError shows the onError call", async () => {
    renderStory(LayerSetupFailureReportsToOnError);
    await waitFor(() =>
      expect(document.body.textContent).toContain("Unknown layer kind")
    );
  });
});
