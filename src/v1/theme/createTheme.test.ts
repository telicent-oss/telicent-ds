jest.mock("@mui/material/styles", () => ({
  ...jest.requireActual("@mui/material/styles"),
  createTheme: jest.fn((options: any) => options),
}));
import { createTheme as mockCreateMuiTheme } from "@mui/material/styles";
import createTheme from "./createTheme";
import { createPatch } from "diff";
import { UIThemeSchema } from "./colors/theme-colors";

const asMock = (val: unknown) => val as jest.Mock;

test("tmp theme diffs via unified patches", () => {
  const themeNames = UIThemeSchema.options;
  const isDarkSet = [true, false] as const;
  const pairs = themeNames.flatMap((name) =>
    isDarkSet.map((isDark) => {
      asMock(mockCreateMuiTheme).mockClear();
      createTheme(name, isDark, true);
      return [
        `${name} (${isDark ? "light" : "dark"})`,
        asMock(mockCreateMuiTheme).mock.calls[0][0],
      ];
    })
  );

  const baseName = pairs[0][0];
  const baseOptsStr = JSON.stringify(pairs[0][1], null, 2);
  const report = pairs
    .slice(1)
    .map(([name, opts], idx) => {
      const patch = createPatch(
        `${idx}`,
        baseOptsStr,
        JSON.stringify(opts, null, 2),
        baseName,
        name
      );
      return patch;
    })
    .join("\n\n");

  expect(report).toMatchInlineSnapshot(`
    "Index: 0
    ===================================================================
    --- 0	DataNavy (light)
    +++ 0	DataNavy (dark)
    @@ -82,45 +82,25 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
           "main": "#2F44CA",
           "dark": "rgba(47, 68, 202, 0.7)",
           "light": "rgba(47, 68, 202, 0.5)",
           "contrastText": "#FFFFFF"
         },
         "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F9F9F9"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "grey": {
    -      "50": "#fafafa",
    -      "100": "#f5f5f5",
    -      "200": "#eeeeee",
    -      "300": "#e0e0e0",
    -      "400": "#bdbdbd",
    -      "500": "#9e9e9e",
    -      "600": "#757575",
    -      "700": "#616161",
    -      "800": "#424242",
    -      "900": "#212121",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 1
    ===================================================================
    --- 1	DataNavy (light)
    +++ 1	DocumentPink (light)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(245, 106, 170, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -84,12 +84,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F56AAA",
    +      "dark": "rgba(245, 106, 170, 0.7)",
    +      "light": "rgba(245, 106, 170, 0.5)",
    +      "contrastText": "#000"
         },
         "secondary": {
           "main": "#8a8a8a",
           "light": "#A1A1A1",


    Index: 2
    ===================================================================
    --- 2	DataNavy (light)
    +++ 2	DocumentPink (dark)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(245, 106, 170, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -82,45 +82,25 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F56AAA",
    +      "dark": "rgba(245, 106, 170, 0.7)",
    +      "light": "rgba(245, 106, 170, 0.5)",
    +      "contrastText": "#000"
         },
         "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F9F9F9"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "grey": {
    -      "50": "#fafafa",
    -      "100": "#f5f5f5",
    -      "200": "#eeeeee",
    -      "300": "#e0e0e0",
    -      "400": "#bdbdbd",
    -      "500": "#9e9e9e",
    -      "600": "#757575",
    -      "700": "#616161",
    -      "800": "#424242",
    -      "900": "#212121",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 3
    ===================================================================
    --- 3	DataNavy (light)
    +++ 3	GraphOrange (light)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(242, 166, 75, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -84,12 +84,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F2A64B",
    +      "dark": "rgba(242, 166, 75, 0.7)",
    +      "light": "rgba(242, 166, 75, 0.5)",
    +      "contrastText": "#000"
         },
         "secondary": {
           "main": "#8a8a8a",
           "light": "#A1A1A1",


    Index: 4
    ===================================================================
    --- 4	DataNavy (light)
    +++ 4	GraphOrange (dark)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(242, 166, 75, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -82,45 +82,25 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F2A64B",
    +      "dark": "rgba(242, 166, 75, 0.7)",
    +      "light": "rgba(242, 166, 75, 0.5)",
    +      "contrastText": "#000"
         },
         "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F9F9F9"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "grey": {
    -      "50": "#fafafa",
    -      "100": "#f5f5f5",
    -      "200": "#eeeeee",
    -      "300": "#e0e0e0",
    -      "400": "#bdbdbd",
    -      "500": "#9e9e9e",
    -      "600": "#757575",
    -      "700": "#616161",
    -      "800": "#424242",
    -      "900": "#212121",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 5
    ===================================================================
    --- 5	DataNavy (light)
    +++ 5	AdminBlue (light)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(32, 188, 250, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -84,12 +84,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#20BCFA",
    +      "dark": "rgba(32, 188, 250, 0.7)",
    +      "light": "rgba(32, 188, 250, 0.5)",
    +      "contrastText": "#000"
         },
         "secondary": {
           "main": "#8a8a8a",
           "light": "#A1A1A1",


    Index: 6
    ===================================================================
    --- 6	DataNavy (light)
    +++ 6	AdminBlue (dark)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(32, 188, 250, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -82,45 +82,25 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#20BCFA",
    +      "dark": "rgba(32, 188, 250, 0.7)",
    +      "light": "rgba(32, 188, 250, 0.5)",
    +      "contrastText": "#000"
         },
         "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F9F9F9"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "grey": {
    -      "50": "#fafafa",
    -      "100": "#f5f5f5",
    -      "200": "#eeeeee",
    -      "300": "#e0e0e0",
    -      "400": "#bdbdbd",
    -      "500": "#9e9e9e",
    -      "600": "#757575",
    -      "700": "#616161",
    -      "800": "#424242",
    -      "900": "#212121",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 7
    ===================================================================
    --- 7	DataNavy (light)
    +++ 7	Blank (light)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(0, 0, 0, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -84,12 +84,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#000000",
    +      "dark": "rgba(0, 0, 0, 0.7)",
    +      "light": "rgba(0, 0, 0, 0.5)",
    +      "contrastText": "#fff"
         },
         "secondary": {
           "main": "#8a8a8a",
           "light": "#A1A1A1",


    Index: 8
    ===================================================================
    --- 8	DataNavy (light)
    +++ 8	Blank (dark)
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(47, 68, 202, 0.4)"
    +            "borderColor": "rgba(0, 0, 0, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -82,45 +82,25 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "contrastText": "#FFFFFF"
    +      "main": "#000000",
    +      "dark": "rgba(0, 0, 0, 0.7)",
    +      "light": "rgba(0, 0, 0, 0.5)",
    +      "contrastText": "#fff"
         },
         "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "main": "#F9F9F9"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "grey": {
    -      "50": "#fafafa",
    -      "100": "#f5f5f5",
    -      "200": "#eeeeee",
    -      "300": "#e0e0e0",
    -      "400": "#bdbdbd",
    -      "500": "#9e9e9e",
    -      "600": "#757575",
    -      "700": "#616161",
    -      "800": "#424242",
    -      "900": "#212121",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",
    "
  `);
});
