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
    @@ -42,29 +42,22 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
           "main": "#2F44CA",
           "light": "rgba(47, 68, 202, 0.5)",
           "dark": "rgba(47, 68, 202, 0.7)",
           "contrastText": "#fff"
         },
         "text": {
    -      "primary": "#FFFFFF",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 1
    ===================================================================
    --- 1	DataNavy (light)
    +++ 1	DocumentPink (light)
    @@ -44,12 +44,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "contrastText": "#fff"
    +      "main": "#F56AAA",
    +      "light": "rgba(245, 106, 170, 0.5)",
    +      "dark": "rgba(245, 106, 170, 0.7)",
    +      "contrastText": "#000"
         },
         "text": {
           "primary": "#FFFFFF",
           "secondary": "rgba(255, 255, 255, 0.7)",


    Index: 2
    ===================================================================
    --- 2	DataNavy (light)
    +++ 2	DocumentPink (dark)
    @@ -42,29 +42,22 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "contrastText": "#fff"
    +      "main": "#F56AAA",
    +      "light": "rgba(245, 106, 170, 0.5)",
    +      "dark": "rgba(245, 106, 170, 0.7)",
    +      "contrastText": "#000"
         },
         "text": {
    -      "primary": "#FFFFFF",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 3
    ===================================================================
    --- 3	DataNavy (light)
    +++ 3	GraphOrange (light)
    @@ -44,12 +44,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "contrastText": "#fff"
    +      "main": "#F2A64B",
    +      "light": "rgba(242, 166, 75, 0.5)",
    +      "dark": "rgba(242, 166, 75, 0.7)",
    +      "contrastText": "#000"
         },
         "text": {
           "primary": "#FFFFFF",
           "secondary": "rgba(255, 255, 255, 0.7)",


    Index: 4
    ===================================================================
    --- 4	DataNavy (light)
    +++ 4	GraphOrange (dark)
    @@ -42,29 +42,22 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "contrastText": "#fff"
    +      "main": "#F2A64B",
    +      "light": "rgba(242, 166, 75, 0.5)",
    +      "dark": "rgba(242, 166, 75, 0.7)",
    +      "contrastText": "#000"
         },
         "text": {
    -      "primary": "#FFFFFF",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 5
    ===================================================================
    --- 5	DataNavy (light)
    +++ 5	AdminBlue (light)
    @@ -44,12 +44,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "contrastText": "#fff"
    +      "main": "#20BCFA",
    +      "light": "rgba(32, 188, 250, 0.5)",
    +      "dark": "rgba(32, 188, 250, 0.7)",
    +      "contrastText": "#000"
         },
         "text": {
           "primary": "#FFFFFF",
           "secondary": "rgba(255, 255, 255, 0.7)",


    Index: 6
    ===================================================================
    --- 6	DataNavy (light)
    +++ 6	AdminBlue (dark)
    @@ -42,29 +42,22 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    -      "contrastText": "#fff"
    +      "main": "#20BCFA",
    +      "light": "rgba(32, 188, 250, 0.5)",
    +      "dark": "rgba(32, 188, 250, 0.7)",
    +      "contrastText": "#000"
         },
         "text": {
    -      "primary": "#FFFFFF",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    Index: 7
    ===================================================================
    --- 7	DataNavy (light)
    +++ 7	Blank (light)
    @@ -44,11 +44,11 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    +      "main": "#000000",
    +      "light": "rgba(0, 0, 0, 0.5)",
    +      "dark": "rgba(0, 0, 0, 0.7)",
           "contrastText": "#fff"
         },
         "text": {
           "primary": "#FFFFFF",


    Index: 8
    ===================================================================
    --- 8	DataNavy (light)
    +++ 8	Blank (dark)
    @@ -42,29 +42,22 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "rgba(47, 68, 202, 0.5)",
    -      "dark": "rgba(47, 68, 202, 0.7)",
    +      "main": "#000000",
    +      "light": "rgba(0, 0, 0, 0.5)",
    +      "dark": "rgba(0, 0, 0, 0.7)",
           "contrastText": "#fff"
         },
         "text": {
    -      "primary": "#FFFFFF",
    -      "secondary": "rgba(255, 255, 255, 0.7)",
    +      "primary": "#000000",
    +      "secondary": "#000000",
           "disabled": "#999999"
         },
         "background": {
    -      "default": "#1D1D1D",
    -      "paper": "#252525"
    -    },
    -    "secondary": {
    -      "main": "#8a8a8a",
    -      "light": "#A1A1A1",
    -      "dark": "#606060",
    -      "contrastText": "#FFFFFF"
    +      "default": "#e3e3e3"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",
    "
  `);
});
