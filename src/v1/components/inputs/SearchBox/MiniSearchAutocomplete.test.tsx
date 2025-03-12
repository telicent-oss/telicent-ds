import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MiniSearchAutocomplete, { MiniSearchAutocompleteProps } from "./MiniSearchAutocomplete";
import { setup } from "../../../../test-utils";

const options = [
  { label: "Apple", isRecentSearch: false },
  { label: "Banana", isRecentSearch: true },
  { label: "Cherry", isRecentSearch: false },
];

const renderComponent = (props?: Partial<MiniSearchAutocompleteProps>) => {
  return setup(
    <MiniSearchAutocomplete
      options={options}
      placeholder="Search for a fruit"
      {...props}
    />
  );
};

describe("MiniSearchAutocomplete", () => {
  test("renders input with placeholder", () => {
    renderComponent();
    expect(screen.getByPlaceholderText("Search for a fruit")).toBeInTheDocument();
  });

  test("calls onSearch when search button is clicked", async () => {
    const onSearch = jest.fn();
    const { user } = renderComponent({ onSearch });

    const searchButton = screen.getByRole("button", { name: "search" });
    await user.click(searchButton);

    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  test("displays loading indicator when loading is true", () => {
    renderComponent({ loading: true });

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  test("shows autocomplete options when typing", async () => {
    const { user } = renderComponent();

    const input = screen.getByRole("combobox");
    await user.type(input, "A");

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
  });

  test("calls renderOption if provided", async () => {
    const customRenderOption = jest.fn((props, option) => (
      <li {...props}>{option.label} (custom)</li>
    ));

    const { user } = renderComponent({ renderOption: customRenderOption });

    const input = screen.getByRole("combobox");
    await user.type(input, "B");

    await waitFor(() => {
      expect(screen.getByText("Banana (custom)")).toBeInTheDocument();
    });

    expect(customRenderOption).toHaveBeenCalled();
  });

  test("triggers search when clicking a recently searched item", async () => {
    const onSearch = jest.fn();
    const { user } = renderComponent({ onSearch });

    // Type something to show the options
    const input = screen.getByRole("combobox");
    await user.type(input, "B");

    // Wait for the options to appear
    const recentItem = await screen.findByText("Banana"); // Recently searched item
    await user.click(recentItem);

    // Verify onSearch is triggered
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  test("typing, clicking off, clicking back, and searching", async () => {
    const onSearch = jest.fn();
    const { user } = renderComponent({ onSearch });

    const input = screen.getByRole("combobox");

    // Step 1: Type a search query
    await user.type(input, "A");
    expect(screen.getByText("Apple")).toBeInTheDocument();

    // Step 2: Click outside to close the dropdown
    await user.click(document.body);
    await waitFor(() => {
      expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    });

    // Step 3: Click back inside the input
    await user.click(input);

    // Step 4: Click the search button
    const searchButton = screen.getByRole("button", { name: "search" });
    await user.click(searchButton);

    // Step 5: Ensure onSearch is triggered
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  test("typing, searching clicking off, clicking back, and searching", async () => {
    const onSearch = jest.fn();
    const { user } = renderComponent({ onSearch });

    const input = screen.getByRole("combobox");
    const searchButton = screen.getByRole("button", { name: "search" });

    // Step 1: Type a search query
    await user.type(input, "A");
    expect(screen.getByText("Apple")).toBeInTheDocument();

    // Step 2: Search
    await user.click(searchButton);

    // Step 2: Click outside to close the dropdown
    await user.click(document.body);
    await waitFor(() => {
      expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    });

    // Step 3: Click back inside the input
    await user.click(input);

    // Step 4: Click the search button
    await user.click(searchButton);

    // Step 5: Ensure onSearch is triggered
    expect(onSearch).toHaveBeenCalledTimes(2);
  });

});
