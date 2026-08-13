import { render, screen } from "@testing-library/react";
import AppInfoRow from "../AppInfoRow";

describe("AppInfoRow", () => {
  test("renders label and string value", () => {
    render(<AppInfoRow label="Build" value="a1b2c3d" />);

    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("a1b2c3d")).toBeInTheDocument();
  });

  test("renders ReactNode value", () => {
    render(
      <AppInfoRow
        label="Support"
        value={<a href="mailto:support@example.com">Contact</a>}
      />
    );

    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  test("applies id to the value element", () => {
    render(<AppInfoRow label="Build" value="a1b2c3d" id="build-value" />);

    expect(screen.getByText("a1b2c3d")).toHaveAttribute("id", "build-value");
  });
});
