import { screen } from "@testing-library/dom";
import React from "react";

import { setup } from "../../../../test-utils";
import UIThemeProvider from "../../../../theme/UIThemeProvider";
import { Accordion } from "../Accordion";
import { AccordionDetails } from "../AccordionDetails";
import { AccordionSummary } from "../AccordionSummary";

const renderInTheme = (ui: React.ReactElement) =>
  setup(<UIThemeProvider theme="DocumentPink">{ui}</UIThemeProvider>);

describe("Accordion", () => {
  test("renders summary and details children", async () => {
    const { user } = renderInTheme(
      <Accordion>
        <AccordionSummary>Toggle</AccordionSummary>
        <AccordionDetails>Body</AccordionDetails>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: /Toggle/ });
    expect(trigger).toBeInTheDocument();
    await user.click(trigger);
    expect(screen.getByText("Body")).toBeVisible();
  });

  test("AccordionSummary supplies a default expandIcon", () => {
    renderInTheme(
      <Accordion>
        <AccordionSummary>Toggle</AccordionSummary>
        <AccordionDetails>Body</AccordionDetails>
      </Accordion>,
    );

    expect(
      document.querySelector(".MuiAccordionSummary-expandIconWrapper svg"),
    ).toBeInTheDocument();
  });

  test("callsite expandIcon overrides the default", () => {
    renderInTheme(
      <Accordion>
        <AccordionSummary expandIcon={<span id="custom-icon">+</span>}>
          Toggle
        </AccordionSummary>
        <AccordionDetails>Body</AccordionDetails>
      </Accordion>,
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(
      document.querySelectorAll(".MuiAccordionSummary-expandIconWrapper svg"),
    ).toHaveLength(0);
  });
});
