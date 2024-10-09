import React from "react";

import { screen, within } from "@testing-library/react";
import { setup } from "../../test-utils";
import DependenciesTable from "./DependenciesTable";

const dependencies = {
  classnames: "^2.3.1",
};

describe("Dependencies table component", () => {
  test("renders dependencies", () => {
    setup(<DependenciesTable dependencies={dependencies} />);

    expect(screen.getByRole("table")).toBeInTheDocument();

    const rows = screen.getAllByRole("row");
    expect(
      within(rows[0]).getByRole("columnheader", { name: "Dependency" })
    ).toBeInTheDocument();
    expect(
      within(rows[0]).getByRole("columnheader", { name: "Version" })
    ).toBeInTheDocument();

    expect(
      within(rows[1]).getByRole("cell", { name: "classnames" })
    ).toBeInTheDocument();
    expect(
      within(rows[1]).getByRole("cell", { name: "2.3.1" })
    ).toBeInTheDocument();
  });

  test("renders messages when dependencies are empty", () => {
    setup(<DependenciesTable dependencies={{}} />);
    expect(screen.getByText("Dependencies not found")).toBeInTheDocument();
  });
});
