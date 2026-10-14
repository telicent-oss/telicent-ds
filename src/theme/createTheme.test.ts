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
    --- 0	DocumentPink (light)
    +++ 0	DocumentPink (dark)
    @@ -117,53 +117,38 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    -      "contrastText": "#000"
    +      "main": "#B70071",
    +      "dark": "#92005A",
    +      "light": "#C5338D",
    +      "contrastText": "#FFFFFF"
         },
         "contrastThreshold": 4.5,
         "tertiary": {
    -      "main": "#A0A0A0",
    -      "dark": "#808080",
    -      "light": "#BFBFBF",
    -      "contrastText": "#1A1A1A"
    +      "main": "#5A6172",
    +      "dark": "#454B59",
    +      "light": "#767E90",
    +      "contrastText": "#FFFFFF"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#1A1D21",
    +      "secondary": "#5A6172",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    +      "default": "#F9F9F9",
    +      "paper": "#FFFFFF"
         },
    -    "success": {
    -      "main": "#2e7d32"
    -    },
         "error": {
    -      "main": "#ff5252",
    -      "dark": "#c62828"
    +      "main": "#d32f2f",
    +      "dark": "#b71c1c"
         },
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
    +    "divider": "rgba(26, 29, 33, 0.12)",
    +    "action": {
    +      "hover": "rgba(26, 29, 33, 0.04)"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 1
    ===================================================================
    --- 1	DocumentPink (light)
    +++ 1	GraphOrange (light)
    @@ -119,11 +119,11 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    +      "main": "#F2A64B",
    +      "dark": "#C1843C",
    +      "light": "#F4B76F",
           "contrastText": "#000"
         },
         "contrastThreshold": 4.5,
         "tertiary": {


    Index: 2
    ===================================================================
    --- 2	DocumentPink (light)
    +++ 2	GraphOrange (dark)
    @@ -117,53 +117,38 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    -      "contrastText": "#000"
    +      "main": "#C24D00",
    +      "dark": "#9B3D00",
    +      "light": "#CE7033",
    +      "contrastText": "#FFFFFF"
         },
         "contrastThreshold": 4.5,
         "tertiary": {
    -      "main": "#A0A0A0",
    -      "dark": "#808080",
    -      "light": "#BFBFBF",
    -      "contrastText": "#1A1A1A"
    +      "main": "#5A6172",
    +      "dark": "#454B59",
    +      "light": "#767E90",
    +      "contrastText": "#FFFFFF"
         },
         "text": {
    -      "primary": "#ececec",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#1A1D21",
    +      "secondary": "#5A6172",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    +      "default": "#F0F2F5",
    +      "paper": "#FFFFFF"
         },
    -    "success": {
    -      "main": "#2e7d32"
    -    },
         "error": {
    -      "main": "#ff5252",
    -      "dark": "#c62828"
    +      "main": "#d32f2f",
    +      "dark": "#b71c1c"
         },
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
    +    "divider": "rgba(26, 29, 33, 0.12)",
    +    "action": {
    +      "hover": "rgba(26, 29, 33, 0.04)"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 3
    ===================================================================
    --- 3	DocumentPink (light)
    +++ 3	AdminBlue (light)
    @@ -119,11 +119,11 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    +      "main": "#20BCFA",
    +      "dark": "#1F8CB8",
    +      "light": "#1F6D8C",
           "contrastText": "#000"
         },
         "contrastThreshold": 4.5,
         "tertiary": {


    Index: 4
    ===================================================================
    --- 4	DocumentPink (light)
    +++ 4	AdminBlue (dark)
    @@ -117,53 +117,33 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    -      "contrastText": "#000"
    +      "main": "#2F44CA",
    +      "dark": "#6C7AD8",
    +      "light": "#949FE2",
    +      "contrastText": "#FFFFFF"
         },
         "contrastThreshold": 4.5,
         "tertiary": {
    -      "main": "#A0A0A0",
    -      "dark": "#808080",
    -      "light": "#BFBFBF",
    -      "contrastText": "#1A1A1A"
    +      "main": "#5A6172",
    +      "dark": "#454B59",
    +      "light": "#767E90",
    +      "contrastText": "#FFFFFF"
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
    +      "default": "#F9F9F9"
         },
    -    "success": {
    -      "main": "#2e7d32"
    -    },
         "error": {
    -      "main": "#ff5252",
    -      "dark": "#c62828"
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
    +      "main": "#d32f2f",
    +      "dark": "#b71c1c"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 5
    ===================================================================
    --- 5	DocumentPink (light)
    +++ 5	GeoGreen (light)
    @@ -119,11 +119,11 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    +      "main": "#9DDD31",
    +      "dark": "rgba(157, 221, 49, 0.7)",
    +      "light": "rgba(157, 221, 49, 0.5)",
           "contrastText": "#000"
         },
         "contrastThreshold": 4.5,
         "tertiary": {
    @@ -137,9 +137,9 @@
           "secondary": "rgba(255, 255, 255, 0.7)",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    +      "default": "#080808",
           "paper": "#252525"
         },
         "success": {
           "main": "#2e7d32"


    Index: 6
    ===================================================================
    --- 6	DocumentPink (light)
    +++ 6	GeoGreen (dark)
    @@ -117,53 +117,33 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    +      "main": "#9DDD31",
    +      "dark": "rgba(157, 221, 49, 0.7)",
    +      "light": "rgba(157, 221, 49, 0.5)",
           "contrastText": "#000"
         },
         "contrastThreshold": 4.5,
         "tertiary": {
    -      "main": "#A0A0A0",
    -      "dark": "#808080",
    -      "light": "#BFBFBF",
    -      "contrastText": "#1A1A1A"
    +      "main": "#5A6172",
    +      "dark": "#454B59",
    +      "light": "#767E90",
    +      "contrastText": "#FFFFFF"
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
    +      "default": "#080808"
         },
    -    "success": {
    -      "main": "#2e7d32"
    -    },
         "error": {
    -      "main": "#ff5252",
    -      "dark": "#c62828"
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
    +      "main": "#d32f2f",
    +      "dark": "#b71c1c"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 7
    ===================================================================
    --- 7	DocumentPink (light)
    +++ 7	Blank (light)
    @@ -119,11 +119,11 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    +      "main": "#FFFFFF",
    +      "dark": "rgba(255, 255, 255, 0.7)",
    +      "light": "rgba(255, 255, 255, 0.5)",
           "contrastText": "#000"
         },
         "contrastThreshold": 4.5,
         "tertiary": {


    Index: 8
    ===================================================================
    --- 8	DocumentPink (light)
    +++ 8	Blank (dark)
    @@ -117,53 +117,33 @@
         },
         "MuiCssBaseline": {}
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#F56AAA",
    -      "dark": "#C45488",
    -      "light": "#F787BB",
    -      "contrastText": "#000"
    +      "main": "#000000",
    +      "dark": "rgba(0, 0, 0, 0.7)",
    +      "light": "rgba(0, 0, 0, 0.5)",
    +      "contrastText": "#fff"
         },
         "contrastThreshold": 4.5,
         "tertiary": {
    -      "main": "#A0A0A0",
    -      "dark": "#808080",
    -      "light": "#BFBFBF",
    -      "contrastText": "#1A1A1A"
    +      "main": "#5A6172",
    +      "dark": "#454B59",
    +      "light": "#767E90",
    +      "contrastText": "#FFFFFF"
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
    +      "default": "#F9F9F9"
         },
    -    "success": {
    -      "main": "#2e7d32"
    -    },
         "error": {
    -      "main": "#ff5252",
    -      "dark": "#c62828"
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
    +      "main": "#d32f2f",
    +      "dark": "#b71c1c"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",
    "
  `);
});
