import { screen } from "@testing-library/react";
import React from "react";
import Drawer from "../Drawer";
import { UIThemeProvider } from "../../../../export";
import { setup } from "../../../../test-utils";

const paper = () => screen.getByText("Body").parentElement as HTMLElement;

describe("Drawer", () => {
  test("renders nothing while closed", () => {
    setup(
      <Drawer open={false} onClose={jest.fn()}>
        <div>Body</div>
      </Drawer>
    );
    expect(screen.queryByText("Body")).not.toBeInTheDocument();
  });

  test("applies width to the paper", () => {
    setup(
      <Drawer open onClose={jest.fn()} width={420}>
        <div>Body</div>
      </Drawer>
    );
    expect(paper()).toHaveStyle({ width: "420px" });
  });

  test("keeps the paper's own id and sx alongside width", () => {
    setup(
      <Drawer
        open
        onClose={jest.fn()}
        width={420}
        PaperProps={{ id: "filter-drawer", sx: { padding: "8px" } }}
      >
        <div>Body</div>
      </Drawer>
    );
    expect(paper()).toHaveAttribute("id", "filter-drawer");
    expect(paper()).toHaveStyle({ width: "420px", padding: "8px" });
  });

  test("calls onClose on Escape", async () => {
    const onClose = jest.fn();
    const { user } = setup(
      <Drawer open onClose={onClose}>
        <button type="button">Inside</button>
        <div>Body</div>
      </Drawer>
    );
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("caps a temporary drawer at the viewport, under the DS theme", () => {
    setup(
      <UIThemeProvider theme="DocumentPink" dark>
        <Drawer open onClose={jest.fn()} width={1600}>
          <div>Body</div>
        </Drawer>
      </UIThemeProvider>
    );
    expect(paper()).toHaveStyle({ maxWidth: "100vw" });
  });

  test("leaves a persistent drawer uncapped", () => {
    setup(
      <UIThemeProvider theme="DocumentPink" dark>
        <Drawer open variant="persistent" width={1600}>
          <div>Body</div>
        </Drawer>
      </UIThemeProvider>
    );
    expect(paper()).not.toHaveStyle({ maxWidth: "100vw" });
  });
});
