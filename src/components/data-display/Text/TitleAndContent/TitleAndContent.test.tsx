import React from "react";
import { render, screen } from "@testing-library/react";

import TitleAndContent from "./TitleAndContent";

describe("TitleAndContent Component", () => {
  it("renders content correctly", () => {
    render(<TitleAndContent title={"Example Title"} content="Example content" />);
    expect(screen.getByText("Example Title")).toBeInTheDocument();
    expect(screen.getByText("Example content")).toBeInTheDocument();
  });
});
