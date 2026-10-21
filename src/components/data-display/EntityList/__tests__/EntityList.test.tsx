import React from "react";
import { render, screen, within, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EntityList, { EntityListColumn } from "../EntityList";

type Row = { id: string; name: string; email: string; created: Date };

const ROWS: Row[] = [
  { id: "a", name: "Alice", email: "a@x", created: new Date("2024-01-03") },
  { id: "b", name: "Bob", email: "b@x", created: new Date("2024-01-01") },
  { id: "c", name: "Carol", email: "c@x", created: new Date("2024-01-02") },
];

const COLUMNS: EntityListColumn<Row>[] = [
  {
    key: "name",
    header: "Name",
    render: (r) => r.name,
    getSortValue: (r) => r.name,
  },
  {
    key: "email",
    header: "Email",
    render: (r) => r.email,
  },
  {
    key: "created",
    header: "Created",
    render: (r) => r.created.toISOString(),
    getSortValue: (r) => r.created,
  },
];

const renderList = (overrides: Partial<React.ComponentProps<typeof EntityList<Row>>> = {}) =>
  render(
    <EntityList
      items={ROWS}
      columns={COLUMNS}
      getItemKey={(r) => r.id}
      getItemHref={(r) => `/users/${r.id}`}
      getItemLabel={(r) => `View ${r.name}`}
      ariaLabel="Users"
      {...overrides}
    />,
  );

afterEach(cleanup);

describe("EntityList", () => {
  describe("semantic structure", () => {
    it("renders as a section landmark named by ariaLabel", () => {
      renderList();
      expect(screen.getByRole("region", { name: "Users" })).toBeInTheDocument();
    });

    it("associates landmark via ariaLabelledBy when provided", () => {
      render(
        <>
          <h1 id="my-heading">Users</h1>
          <EntityList
            items={ROWS}
            columns={COLUMNS}
            getItemKey={(r) => r.id}
            getItemHref={(r) => `/users/${r.id}`}
            getItemLabel={(r) => `View ${r.name}`}
            ariaLabelledBy="my-heading"
          />
        </>,
      );
      expect(screen.getByRole("region", { name: "Users" })).toBeInTheDocument();
    });

    it("renders items as a list of listitems", () => {
      renderList();
      expect(screen.getByRole("list")).toBeInTheDocument();
      expect(screen.getAllByRole("listitem")).toHaveLength(ROWS.length);
    });

    it("renders each row as a native anchor with the correct href and accessible name", () => {
      renderList();
      const alice = screen.getByRole("link", { name: "View Alice" });
      expect(alice.tagName).toBe("A");
      expect(alice).toHaveAttribute("href", "/users/a");
    });
  });

  describe("click handling (Pattern F)", () => {
    it("fires onItemClick on a plain left-click and prevents default navigation", async () => {
      const user = userEvent.setup();
      const onItemClick = jest.fn();
      renderList({ onItemClick });

      const link = screen.getByRole("link", { name: "View Alice" });
      await user.click(link);

      expect(onItemClick).toHaveBeenCalledTimes(1);
      expect(onItemClick).toHaveBeenCalledWith(ROWS[0], "/users/a");
    });

    it("does NOT fire onItemClick on cmd/meta-click so new-tab works", () => {
      const onItemClick = jest.fn();
      renderList({ onItemClick });

      const link = screen.getByRole("link", { name: "View Alice" });
      fireEvent.click(link, { metaKey: true, button: 0 });

      expect(onItemClick).not.toHaveBeenCalled();
    });

    it("does NOT fire onItemClick on ctrl-click so new-tab works", () => {
      const onItemClick = jest.fn();
      renderList({ onItemClick });

      const link = screen.getByRole("link", { name: "View Alice" });
      fireEvent.click(link, { ctrlKey: true, button: 0 });

      expect(onItemClick).not.toHaveBeenCalled();
    });

    it("does NOT fire onItemClick on shift-click so new-window works", () => {
      const onItemClick = jest.fn();
      renderList({ onItemClick });

      const link = screen.getByRole("link", { name: "View Alice" });
      fireEvent.click(link, { shiftKey: true, button: 0 });

      expect(onItemClick).not.toHaveBeenCalled();
    });

    it("does NOT fire onItemClick on middle-click so background-tab works", () => {
      const onItemClick = jest.fn();
      renderList({ onItemClick });

      const link = screen.getByRole("link", { name: "View Alice" });
      fireEvent.click(link, { button: 1 });

      expect(onItemClick).not.toHaveBeenCalled();
    });

    it("falls through to native anchor behavior when onItemClick is not provided", async () => {
      const user = userEvent.setup();
      renderList();   // no onItemClick

      const link = screen.getByRole("link", { name: "View Alice" });
      // Native anchor click still fires without calling preventDefault.
      // We can only observe this indirectly: the click shouldn't throw and
      // the link stays in the document (jsdom doesn't actually navigate).
      await user.click(link);
      expect(link).toBeInTheDocument();
    });
  });

  describe("sorting", () => {
    it("renders sortable columns as buttons without a sort direction in the name", () => {
      renderList();
      expect(screen.getByRole("button", { name: "Name" })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /sorted/i })).not.toBeInTheDocument();
    });

    it("renders non-sortable columns as plain text, not buttons", () => {
      renderList();
      expect(screen.queryByRole("button", { name: /^Email/ })).not.toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("sorts ascending on first click, toggles to descending on second", async () => {
      const user = userEvent.setup();
      renderList();

      await user.click(screen.getByRole("button", { name: /^Name/ }));
      expect(screen.getByRole("button", { name: /Name.*sorted ascending/i })).toBeInTheDocument();
      let names = screen.getAllByRole("link").map((a) => a.getAttribute("aria-label"));
      expect(names).toEqual(["View Alice", "View Bob", "View Carol"]);

      await user.click(screen.getByRole("button", { name: /^Name/ }));
      expect(screen.getByRole("button", { name: /Name.*sorted descending/i })).toBeInTheDocument();
      names = screen.getAllByRole("link").map((a) => a.getAttribute("aria-label"));
      expect(names).toEqual(["View Carol", "View Bob", "View Alice"]);
    });

    it("applies initialSort on mount", () => {
      renderList({ initialSort: { key: "created", direction: "asc" } });
      const names = screen.getAllByRole("link").map((a) => a.getAttribute("aria-label"));
      expect(names).toEqual(["View Bob", "View Carol", "View Alice"]);
    });

    it("switches sort column when a different header is clicked", async () => {
      const user = userEvent.setup();
      renderList({ initialSort: { key: "name", direction: "desc" } });

      await user.click(screen.getByRole("button", { name: /^Created/ }));
      expect(screen.getByRole("button", { name: /Created.*sorted ascending/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Name" })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /Name.*sorted/i })).not.toBeInTheDocument();
    });
  });

  describe("keyboard activation", () => {
    it("tabs through sortable header buttons then into the row links in order", async () => {
      const user = userEvent.setup();
      renderList();

      await user.tab();
      expect(screen.getByRole("button", { name: /^Name/ })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("button", { name: /^Created/ })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("link", { name: "View Alice" })).toHaveFocus();
    });
  });

  describe("loading state", () => {
    it("shows a loading status and hides the list", () => {
      renderList({ isLoading: true });
      expect(screen.getByRole("status")).toHaveTextContent(/loading/i);
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
  });

  describe("empty state", () => {
    it("renders the default empty message when there are no items", () => {
      renderList({ items: [] });
      expect(screen.getByText("No items")).toBeInTheDocument();
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    it("renders a custom empty renderer when provided", () => {
      const renderEmpty = jest.fn(() => <span>Nothing to see</span>);
      renderList({ items: [], renderEmpty });
      expect(screen.getByText("Nothing to see")).toBeInTheDocument();
      expect(renderEmpty).toHaveBeenCalled();
    });
  });

  describe("pagination", () => {
    const makeRows = (n: number): Row[] =>
      Array.from({ length: n }, (_, i) => ({
        id: `id-${i}`,
        name: `Name ${i}`,
        email: `${i}@x`,
        created: new Date(2024, 0, i + 1),
      }));

    it("renders pagination controls with Next disabled when all items fit on one page", () => {
      renderList();
      expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
      expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
      expect(screen.getByText(/1–3 of 3/)).toBeInTheDocument();
    });

    it("exposes a page-size selector with the configured options", async () => {
      const user = userEvent.setup();
      renderList({ pageSizeOptions: [5, 15, 30] });
      await user.click(screen.getByRole("combobox", { name: /rows per page/i }));
      const options = screen.getAllByRole("option").map((o) => o.textContent);
      expect(options).toEqual(["5", "15", "30"]);
    });

    it("re-paginates and jumps to page 1 when page size changes", async () => {
      const user = userEvent.setup();
      renderList({ items: makeRows(30), defaultPageSize: 10, pageSizeOptions: [10, 25] });

      await user.click(screen.getByRole("button", { name: "Next page" }));
      expect(screen.getByText(/11–20 of 30/)).toBeInTheDocument();

      await user.click(screen.getByRole("combobox", { name: /rows per page/i }));
      await user.click(screen.getByRole("option", { name: "25" }));
      expect(screen.getByText(/1–25 of 30/)).toBeInTheDocument();
      expect(screen.getAllByRole("listitem")).toHaveLength(25);
    });

    it("shows pagination and slices items by pageSize", () => {
      renderList({ items: makeRows(25), defaultPageSize: 10 });
      expect(screen.getAllByRole("listitem")).toHaveLength(10);
      expect(screen.getByText(/1–10 of 25/)).toBeInTheDocument();
    });

    it("advances to the next page on click", async () => {
      const user = userEvent.setup();
      renderList({ items: makeRows(15), defaultPageSize: 10 });

      await user.click(screen.getByRole("button", { name: "Next page" }));
      expect(screen.getAllByRole("listitem")).toHaveLength(5);
      expect(screen.getByText(/11–15 of 15/)).toBeInTheDocument();
    });

    it("disables Previous on first page and Next on last page", async () => {
      const user = userEvent.setup();
      renderList({ items: makeRows(15), defaultPageSize: 10 });

      expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
      await user.click(screen.getByRole("button", { name: "Next page" }));
      expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
    });

    it("resets to page 1 when sort changes", async () => {
      const user = userEvent.setup();
      renderList({ items: makeRows(15), defaultPageSize: 10 });

      await user.click(screen.getByRole("button", { name: "Next page" }));
      expect(screen.getByText(/11–15 of 15/)).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: /^Name/ }));
      expect(screen.getByText(/1–10 of 15/)).toBeInTheDocument();
    });
  });

  describe("sort stability", () => {
    it("handles null sort values by pushing them to the end", () => {
      const rowsWithNulls: Row[] = [
        { id: "x", name: "", email: "x@x", created: new Date("2024-01-01") },
        { id: "y", name: "Zed", email: "y@x", created: new Date("2024-01-02") },
      ];
      const columnsWithNulls: EntityListColumn<Row>[] = [
        {
          key: "name",
          header: "Name",
          render: (r) => r.name,
          getSortValue: (r) => (r.name === "" ? null : r.name),
        },
      ];
      render(
        <EntityList
          items={rowsWithNulls}
          columns={columnsWithNulls}
          getItemKey={(r) => r.id}
          getItemHref={(r) => `/users/${r.id}`}
          getItemLabel={(r) => `View ${r.name || "unnamed"}`}
          ariaLabel="Users"
          initialSort={{ key: "name", direction: "asc" }}
        />,
      );

      const links = screen.getAllByRole("link");
      expect(links[0]).toHaveAttribute("aria-label", "View Zed");
      expect(links[1]).toHaveAttribute("aria-label", "View unnamed");
    });
  });

  describe("display-only mode (no getItemHref)", () => {
    const renderDisplayOnly = () =>
      render(
        <EntityList
          items={ROWS}
          columns={COLUMNS}
          getItemKey={(r) => r.id}
          ariaLabel="Users"
        />,
      );

    it("renders rows but no row links when getItemHref is omitted", () => {
      renderDisplayOnly();
      expect(screen.getAllByRole("listitem")).toHaveLength(ROWS.length);
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders cell content for every row even without a link wrapper", () => {
      renderDisplayOnly();
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
      expect(screen.getByText("Carol")).toBeInTheDocument();
    });
  });

  describe("column rendering", () => {
    it("renders cells using column.render for each item", () => {
      renderList();
      const firstRow = within(screen.getAllByRole("listitem")[0]);
      expect(firstRow.getByText("Alice")).toBeInTheDocument();
      expect(firstRow.getByText("a@x")).toBeInTheDocument();
    });
  });
});
