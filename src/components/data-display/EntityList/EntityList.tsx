import { ReactNode, useMemo, useState, useId } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import FlexBox from "../../layout/FlexBox";
import { Text } from "../Text/Text";
import { List, ListItem, ListItemButton } from "../List/List";
import Button from "../../buttons/Button/Button";
import IconButton from "../../buttons/Button/IconButton";
import Select from "../../inputs/Select/Select";
import type { SelectChangeEvent } from "../../inputs/Select/Select";
import { Skeleton } from "../../feedback/Skeleton/Skeleton";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
} from "../Icons";

export type SortDirection = "asc" | "desc";

export type SortValue = string | number | Date | null | undefined;

export type EntityListColumn<T> = {
  key: string;
  header: string;
  render: (item: T) => ReactNode;
  // Sortable iff getSortValue is provided. Otherwise header renders as a
  // plain, non-interactive label.
  getSortValue?: (item: T) => SortValue;
  flex?: number;
  width?: number | string;
  align?: "left" | "right";
};

// One of ariaLabel or ariaLabelledBy must be provided so the <section>
// landmark is never unnamed. Prefer ariaLabelledBy when a visible heading
// exists.
type LabellingProps =
  | { ariaLabel: string; ariaLabelledBy?: string }
  | { ariaLabel?: string; ariaLabelledBy: string };

type EntityListBaseProps<T> = {
  items: T[];
  columns: EntityListColumn<T>[];
  getItemKey: (item: T) => string | number;
  // Omit to render a display-only list (no row links, no chevron, no hover
  // tint, no focus-visible outline). Use when the caller doesn't have (or
  // doesn't want) a navigation destination for each row — e.g. permission-
  // gated views where the user can see rows but not act on them.
  getItemHref?: (item: T) => string;
  // Required when getItemHref is set — screen readers announce this instead
  // of the row's visual contents (e.g. "View user Jane"). Ignored in
  // display-only mode.
  getItemLabel?: (item: T) => string;
  // Called on a plain left-click of a row (modifier keys and non-primary
  // button clicks are preserved for browser defaults — cmd/ctrl-click opens
  // in a new tab, middle-click opens in background, right-click shows the
  // context menu). If omitted, clicks fall through to native anchor
  // navigation (full page reload). The href from getItemHref is passed as
  // the second argument so callers can simply forward it to their router.
  onItemClick?: (item: T, href: string) => void;
  initialSort?: { key: string; direction: SortDirection };
  isLoading?: boolean;
  // Initial page size. The user then controls it via the dropdown; later
  // changes to this prop are ignored by design.
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  renderEmpty?: () => ReactNode;
};

export type EntityListProps<T> = EntityListBaseProps<T> & LabellingProps;

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

const compareValues = (a: SortValue, b: SortValue): number => {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b));
};

const nextDirection = (current: SortDirection | null): SortDirection =>
  current === "asc" ? "desc" : "asc";

export const EntityList = <T,>({
  items,
  columns,
  getItemKey,
  getItemHref,
  getItemLabel,
  onItemClick,
  ariaLabelledBy,
  ariaLabel,
  initialSort,
  isLoading,
  defaultPageSize = DEFAULT_PAGE_SIZE,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  renderEmpty,
}: EntityListProps<T>) => {
  const pageSizeSelectId = useId();
  const pageSizeLabelId = useId();
  const { palette } = useTheme();
  const borderColor = palette.divider;

  const [sort, setSort] = useState<{ key: string; direction: SortDirection } | null>(
    initialSort ?? null,
  );
  const [page, setPage] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize);

  const sortedItems = useMemo(() => {
    if (!sort) return items;
    const column = columns.find((c) => c.key === sort.key);
    if (!column?.getSortValue) return items;
    const getSortValue = column.getSortValue;
    const copy = [...items];
    copy.sort((a, b) => {
      const result = compareValues(getSortValue(a), getSortValue(b));
      return sort.direction === "asc" ? result : -result;
    });
    return copy;
  }, [items, sort, columns]);

  const pageCount = Math.max(1, Math.ceil(sortedItems.length / currentPageSize));
  const safePage = Math.min(page, pageCount - 1);
  const pageStart = safePage * currentPageSize;
  const pageItems = sortedItems.slice(pageStart, pageStart + currentPageSize);

  const handleSort = (key: string) => {
    setSort((current) => {
      if (current?.key === key) {
        return { key, direction: nextDirection(current.direction) };
      }
      return { key, direction: "asc" };
    });
    setPage(0);
  };

  const columnFlexBasis = (column: EntityListColumn<T>): string => {
    if (column.width != null) {
      return typeof column.width === "number" ? `${column.width}px` : column.width;
    }
    return "0";
  };

  const columnFlexGrow = (column: EntityListColumn<T>): number => {
    if (column.width != null) return 0;
    return column.flex ?? 1;
  };

  const sectionProps = ariaLabelledBy
    ? { "aria-labelledby": ariaLabelledBy }
    : { "aria-label": ariaLabel as string };

  const showEmpty = !isLoading && sortedItems.length === 0;

  const pageSizeOptionsForSelect = useMemo(
    () => pageSizeOptions.map((n) => ({ value: n, label: String(n) })),
    [pageSizeOptions],
  );

  return (
    <Box
      component="section"
      {...sectionProps}
      sx={{ width: "100%" }}
    >
      <FlexBox
        direction="row"
        role="presentation"
        sx={{
          px: 2,
          py: 1,
          borderBottom: `1px solid ${borderColor}`,
          gap: 2,
        }}
      >
        {columns.map((column) => {
          const active = sort?.key === column.key;
          const direction = active ? sort.direction : "asc";
          const sortable = column.getSortValue != null;
          const alignStyle = column.align === "right" ? { justifyContent: "flex-end", textAlign: "right" as const } : undefined;
          const sharedStyle = {
            flexGrow: columnFlexGrow(column),
            flexShrink: 1,
            flexBasis: columnFlexBasis(column),
            minWidth: 0,
            fontWeight: 600,
            ...alignStyle,
          };

          if (!sortable) {
            return (
              <Box key={column.key} sx={sharedStyle}>
                {column.header}
              </Box>
            );
          }

          return (
            <Button
              key={column.key}
              variant="base"
              disableRipple
              onClick={() => handleSort(column.key)}
              sx={{
                ...sharedStyle,
                justifyContent: column.align === "right" ? "flex-end" : "flex-start",
                gap: 0.5,
                padding: 0,
                color: "inherit",
                font: "inherit",
                // ButtonBase sets outline: 0 and relies on the theme to style
                // keyboard focus. Draw a primary-coloured ring on focus-visible
                // so Tab-through stays legible.
                "&:focus-visible": {
                  outline: `2px solid ${palette.primary.main}`,
                  outlineOffset: "2px",
                },
                // Hover-reveal matches MUI DataGrid: inactive header shows a
                // faint asc indicator on hover to telegraph what the click
                // will do. Default opacity lives in CSS (not inline style)
                // so the hover rule can actually win on specificity.
                "& .entity-list-sort-hint": { opacity: 0, transition: "opacity 120ms ease" },
                "&:hover .entity-list-sort-hint": { opacity: 0.5 },
              }}
            >
              <span>{column.header}</span>
              {active && (
                // Visually-hidden text puts the sort direction into the
                // button's accessible name, so screen readers announce
                // "Name, sorted ascending, button". ARIA 1.2 limits
                // aria-sort to columnheader/rowheader roles, and EntityList
                // is a list — not a grid — so we convey the state through
                // the name instead.
                <Box component="span" sx={visuallyHidden}>
                  , sorted {direction === "asc" ? "ascending" : "descending"}
                </Box>
              )}
              {active ? (
                direction === "asc" ? (
                  <ExpandLessIcon
                    aria-hidden="true"
                    sx={{ fontSize: "1em", color: palette.primary.main }}
                  />
                ) : (
                  <ExpandMoreIcon
                    aria-hidden="true"
                    sx={{ fontSize: "1em", color: palette.primary.main }}
                  />
                )
              ) : (
                <ExpandLessIcon
                  className="entity-list-sort-hint"
                  aria-hidden="true"
                  sx={{ fontSize: "1em" }}
                />
              )}
            </Button>
          );
        })}
      </FlexBox>

      {isLoading && (
        <>
          {/* Screen readers get the state change; the skeleton list below
              is aria-hidden so SR users don't hear a stream of empty rows. */}
          <Box role="status" aria-live="polite" sx={visuallyHidden}>
            Loading
          </Box>
          <List disablePadding aria-hidden="true">
            {Array.from({ length: currentPageSize }).map((_, i) => (
              <ListItem key={i} disablePadding>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 2,
                    py: 1.5,
                    borderBottom: `1px solid ${borderColor}`,
                    width: "100%",
                  }}
                >
                  {columns.map((column) => (
                    <Box
                      key={column.key}
                      sx={{
                        flexGrow: columnFlexGrow(column),
                        flexShrink: 1,
                        flexBasis: columnFlexBasis(column),
                        minWidth: 0,
                      }}
                    >
                      <Skeleton variant="text" />
                    </Box>
                  ))}
                  {getItemHref && (
                    <Skeleton variant="text" sx={{ width: 16 }} />
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </>
      )}

      {showEmpty && (
        <Box sx={{ px: 2, py: 4 }}>
          {renderEmpty ? renderEmpty() : <Text>No items</Text>}
        </Box>
      )}

      {!isLoading && !showEmpty && (
        <List disablePadding>
          {pageItems.map((item) => {
            const href = getItemHref?.(item);
            const label = getItemLabel?.(item);
            const interactive = typeof href === "string";
            const rowContentStyle = {
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: 2,
              py: 1.5,
              borderBottom: `1px solid ${borderColor}`,
            };
            const cells = columns.map((column) => (
              <Box
                key={column.key}
                sx={{
                  flexGrow: columnFlexGrow(column),
                  flexShrink: 1,
                  flexBasis: columnFlexBasis(column),
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textAlign: column.align === "right" ? "right" : "left",
                }}
              >
                {column.render(item)}
              </Box>
            ));
            return (
              <ListItem key={getItemKey(item)} disablePadding>
                {interactive ? (
                  <ListItemButton
                    component="a"
                    href={href}
                    aria-label={label}
                    onClick={(e) => {
                      if (!onItemClick) return;
                      // Respect modifier keys and non-primary buttons so
                      // cmd/ctrl-click opens in a new tab, middle-click opens
                      // in background, etc. — anything other than a plain
                      // left-click falls through to the browser's default
                      // anchor behavior.
                      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                      if (e.button !== 0) return;
                      e.preventDefault();
                      onItemClick(item, href);
                    }}
                    disableRipple
                    sx={{
                      ...rowContentStyle,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {cells}
                    <ChevronRightIcon aria-hidden="true" sx={{ fontSize: "1em" }} />
                  </ListItemButton>
                ) : (
                  <Box sx={{ ...rowContentStyle, width: "100%" }}>{cells}</Box>
                )}
              </ListItem>
            );
          })}
        </List>
      )}

      {!isLoading && !showEmpty && (
        <FlexBox
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
          sx={{ px: 2, py: 1 }}
        >
          <Box component="label" htmlFor={pageSizeSelectId} id={pageSizeLabelId}>
            <Text component="span">Rows per page:</Text>
          </Box>
          <Select
            id={pageSizeSelectId}
            value={currentPageSize}
            options={pageSizeOptionsForSelect}
            // The visible <label htmlFor> above is the HTML-native association,
            // but MUI's SelectInput overwrites aria-labelledby on the
            // role=combobox trigger with the trigger's own id — so we also
            // point SelectDisplayProps at the label id to carry the
            // accessible name.
            SelectDisplayProps={{ "aria-labelledby": pageSizeLabelId }}
            onChange={(e: SelectChangeEvent<unknown>) => {
              setCurrentPageSize(Number(e.target.value));
              setPage(0);
            }}
          />
          <Text>
            {sortedItems.length === 0
              ? "0 of 0"
              : `${pageStart + 1}–${Math.min(pageStart + currentPageSize, sortedItems.length)} of ${sortedItems.length}`}
          </Text>
          <IconButton
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={safePage === 0}
            aria-label="Previous page"
            size="small"
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={safePage >= pageCount - 1}
            aria-label="Next page"
            size="small"
          >
            <ChevronRightIcon />
          </IconButton>
        </FlexBox>
      )}
    </Box>
  );
};

export default EntityList;
