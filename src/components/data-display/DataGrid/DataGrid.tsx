import React, { useMemo, type FC, type ComponentProps } from "react";
import {
  DataGrid as MuiDataGrid,
  type GridSortModel,
} from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { ThemeProvider } from "@mui/material";
import { createTheme, useTheme, type Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";

/**
 * Component overrides applied on top of the outer DS theme so cells inside
 * the grid inherit DS's palette, typography, and component defaults. Built
 * as a function of the outer theme so palette tokens resolve against
 * whichever light/dark mode is active.
 */
const buildDataGridTheme = (theme: Theme) => ({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: theme.palette.background.default,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          width: "100%",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          border: "none",

          "& .MuiDataGrid-filler, \
             & .MuiDataGrid-scrollbarFiller, \
             & .MuiDataGrid-columnHeader--scrollbarFiller, \
             & .MuiDataGrid-scrollArea, \
             & .MuiDataGrid-scrollArea--right": {
            backgroundColor: `${theme.palette.background.default} !important`,
          },

          "& .MuiDataGrid-overlay": {
            backgroundColor: theme.palette.background.default,
          },

          "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderBottom: "none",
          },
          "--DataGrid-rowBorderColor": "transparent",
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600,
            color: theme.palette.text.primary,
          },
          "& .MuiDataGrid-columnHeaders": {
            border: "none",
            borderBottom: `1px solid ${theme.palette.divider}`,
            boxShadow: "none",
          },

          "& .MuiDataGrid-columnSeparator, & .MuiDataGrid-iconSeparator": {
            display: "none !important",
          },

          "& .MuiDataGrid-sortIcon": {
            color: theme.palette.text.primary,
            "& .MuiSvgIcon-root": {
              fill: "currentColor",
            },
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-columnHeader .MuiButtonBase-root": {
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-columnHeader .MuiButtonBase-root:hover": {
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-columnHeader .MuiButtonBase-root:focus": {
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-columnHeader:hover .MuiDataGrid-sortIcon": {
            color: theme.palette.primary.main,
          },
          "& .MuiDataGrid-columnHeader--sorted .MuiDataGrid-sortIcon": {
            color: `${theme.palette.primary.main} !important`,
          },

          "& .MuiDataGrid-cell": {
            border: "none",
            borderBottom: `1px solid ${theme.palette.divider}`,
          },

          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.default,
            borderTop: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary,
          },

          "& .MuiDataGrid-row:hover": { backgroundColor: "inherit" },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "inherit !important",
          },

          "--DataGrid-cellFocusOutline": "none",
          "--DataGrid-headerFocusOutline": "none",
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            { outline: "none", boxShadow: "none" },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
        },
        selectIcon: {
          color: theme.palette.text.primary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.MuiTablePagination-menuItem": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            "&.Mui-selected": {
              backgroundColor: `${theme.palette.action.selected} !important`,
            },
            "&.Mui-selected:hover": {
              backgroundColor: `${theme.palette.action.selected} !important`,
            },
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          "&.Mui-disabled": {
            color: theme.palette.action.disabled,
          },
        },
      },
    },
  },
});

export type DataGridProps = {
  initialSort?: GridSortModel;
} & ComponentProps<typeof MuiDataGrid>;

/**
 * Telicent-themed `DataGrid` — a MUI `x-data-grid` wrapped in a nested
 * `ThemeProvider` that extends the outer DS theme with Telicent's grid
 * styling. Palette-token-driven, so light/dark theme switching Just Works.
 *
 * Telicent defaults baked in: `autoHeight`, `disableColumnResize`,
 * `disableRowSelectionOnClick`, `disableColumnMenu`, `pagination: true`,
 * `pageSizeOptions: [10, 25, 50]`, initial page size 10.
 *
 * When `onRowClick` is set, DS opts row hover (`palette.action.hover`) and
 * the pointer cursor back in — the baked theme suppresses row hover by
 * default so non-interactive grids don't flicker, so interactive grids need
 * the opt-in. Callsite `sx` wins (spread last) if a consumer wants a
 * different hover colour or no hover.
 *
 * Uses `useTheme()` rather than the function form `theme={(outer) => ...}`
 * so the component tolerates being rendered without an outer `ThemeProvider`
 * — `useTheme()` falls back to MUI's `defaultTheme`, which has a full
 * palette. The function form would receive `{}` and crash on
 * `palette.background.default`.
 */
export const DataGrid: FC<DataGridProps> = ({
  initialSort,
  onRowClick,
  sx,
  ...rest
}) => {
  const outerTheme = useTheme();
  const scopedTheme = useMemo(
    () => createTheme(outerTheme, buildDataGridTheme(outerTheme)),
    [outerTheme],
  );
  return (
    <ThemeProvider theme={scopedTheme}>
      <Box sx={{ width: "100%" }}>
        <MuiDataGrid
          autoHeight
          disableColumnResize
          disableRowSelectionOnClick
          disableColumnMenu
          pagination
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
            sorting: initialSort ? { sortModel: initialSort } : undefined,
          }}
          onRowClick={onRowClick}
          {...rest}
          sx={[
            (theme) => ({
              "& .MuiDataGrid-overlay": { inset: 0 },
              ...(onRowClick
                ? {
                    "& .MuiDataGrid-row": {
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    },
                  }
                : {}),
            }),
            ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
          ]}
        />
      </Box>
    </ThemeProvider>
  );
};

export type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
} from "@mui/x-data-grid";

export default DataGrid;
