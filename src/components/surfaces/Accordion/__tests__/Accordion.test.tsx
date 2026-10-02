import React from "react";
import { screen } from "@testing-library/dom";
import { setup } from "../../../../test-utils";
import UIThemeProvider from "../../../../theme/UIThemeProvider";
import { Accordion } from "../Accordion";
import { AccordionSummary } from "../AccordionSummary";
import { AccordionDetails } from "../AccordionDetails";

const renderInTheme = (ui: React.ReactElement) =>
  setup(<UIThemeProvider theme="DataNavy">{ui}</UIThemeProvider>);

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
