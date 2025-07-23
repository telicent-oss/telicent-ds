import { render, fireEvent, screen } from "@testing-library/react";

describe("Presentational", () => {
  const {
    LayerSelectorPresentationalButton,
  } = require("./LayerSelectorPresentational");
  const mockData = [
    { image: "url1", label: "Label1" },
    { image: "url2", label: "Label2" },
  ];

  test("renders correctly with given props", () => {
    const mockElement = document.createElement("div");
    render(
      <LayerSelectorPresentationalButton
        data={mockData}
        selectedIndex={1}
        anchorEl={mockElement}
        onClickDropdown={jest.fn()}
        onCloseDropdown={jest.fn()}
        onListItemClick={jest.fn()}
      />
    );
    const image = screen.getByRole("img", { name: "Label2" });
    expect(image).toHaveAttribute("src", "url2");
    expect(screen.getByTitle("Label2")).toBeInTheDocument();
  });

  test("clicking the dropdown button invokes onClickDropdown", () => {
    const mockOnClickDropdown = jest.fn();
    render(
      <LayerSelectorPresentationalButton
        data={mockData}
        selectedIndex={1}
        anchorEl={null}
        onClickDropdown={mockOnClickDropdown}
        onCloseDropdown={jest.fn()}
        onListItemClick={jest.fn()}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClickDropdown).toHaveBeenCalled();
  });
});
