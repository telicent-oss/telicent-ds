import React from "react";
import { screen } from "@testing-library/react";
import { setup } from "../../test-utils";
import License from "./License";

describe("License component", () => {
  test("renders application name with version number", () => {
    setup(<License appName="test" appVersion="1.0.0" licenseCopy="License" />);
    expect(
      screen.getByRole("heading", { name: "telicent test" })
    ).toBeInTheDocument();
    expect(screen.getByText("Version 1.0.0")).toBeInTheDocument();
  });

  test("renders application expiry date when it's provided", () => {
    setup(
      <License
        appName="test"
        appVersion="1.0.0"
        licenseCopy="License"
        expiryDate={new Date("3000/01/01")}
      />
    );
    expect(screen.getByText("Expires on 01/01/3000")).toBeInTheDocument();
  });

  test("does NOT render expiry date when it's not provided", () => {
    setup(<License appName="test" appVersion="1.0.0" licenseCopy="License" />);
    expect(screen.queryByText(/Expires on/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/License has expired/i)).not.toBeInTheDocument();
  });

  test("render license copy element", () => {
    setup(
      <License appName="test" appVersion="1.0.0" licenseCopy="MIT License" />
    );
    expect(screen.getByTestId("license-copy")).toHaveTextContent("MIT License");
  });

  test("informs user license has expired", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    setup(
      <License
        appName="test"
        appVersion="1.0.0"
        licenseCopy="MIT License"
        expiryDate={yesterday}
      />
    );
    expect(screen.getByText("License has expired!")).toBeInTheDocument();
  });

  test("calls onAcknowledge when acknowledge button is clicked", async () => {
    const mockOnAcknowledge = jest.fn();
    const { user } = setup(
      <License
        appName="test"
        appVersion="1.0.0"
        licenseCopy="License"
        onAcknowledge={mockOnAcknowledge}
      />
    );
    await user.click(screen.getByRole("button", { name: "Acknowledge" }));
    expect(mockOnAcknowledge).toHaveBeenCalled();
  });
});
