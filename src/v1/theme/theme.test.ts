jest.mock("@mui/material/styles", () => ({
  ...jest.requireActual("@mui/material/styles"),
  createTheme: jest.fn((options: any) => options),
}));
import { createTheme as mockCreateMuiTheme } from "@mui/material/styles";
import createTheme, { EMPTY_THEME } from "./theme";
import { createPatch } from "diff";
import { UITheme, UIThemeSchema } from "./colors/theme-colors";

const asMock = (val: unknown) => val as jest.Mock;

test("tmp theme diffs via unified patches", () => {
  const themeNames = [
    "DataNavy",
    "DocumentPink",
    "GraphOrange",
    "AdminBlue",
  ] as const;
  const modes = [true, false] as const;
  const pairs = themeNames.flatMap((name) =>
    modes.map((dark) => {
      asMock(mockCreateMuiTheme).mockClear();
      createTheme(name, dark, true);
      return [
        `${name} (${dark ? "light" : "dark"})`,
        asMock(mockCreateMuiTheme).mock.calls[0][0],
      ];
    })
  );

  const baseOptsStr = JSON.stringify(pairs[0][1], null, 2);
  const report = pairs
    .slice(1)
    .map(([name, opts], idx) => {
      const patch = createPatch(
        `theme-${idx}`,
        baseOptsStr,
        JSON.stringify(opts, null, 2)
      );
      return `# ${name}\n${patch}`;
    })
    .join("\n\n");

  expect(report).toMatchInlineSnapshot(`
    "# DataNavy (dark)
    Index: theme-0
    ===================================================================
    --- theme-0
    +++ theme-0
    @@ -75,36 +75,20 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
           "main": "#2F44CA",
           "light": "#5969D5",
           "dark": "#2636A2",
           "contrastText": "#fff"
         },
         "secondary": {
    -      "main": "#222222"
    +      "main": "#F9F9F9"
         },
         "background": {
    -      "default": "#1D1D1D"
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
    -      "900": "#2E2E2E",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#F8F9F9"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    # DocumentPink (light)
    Index: theme-1
    ===================================================================
    --- theme-1
    +++ theme-1
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(141, 153, 226, 0.4)"
    +            "borderColor": "rgba(245, 106, 170, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -77,12 +77,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "#5969D5",
    -      "dark": "#2636A2",
    -      "contrastText": "#fff"
    +      "main": "#F56AAA",
    +      "light": "rgba(245, 106, 170, 0.5)",
    +      "dark": "rgba(245, 106, 170, 0.7)",
    +      "contrastText": "#000"
         },
         "secondary": {
           "main": "#222222"
         },


    # DocumentPink (dark)
    Index: theme-2
    ===================================================================
    --- theme-2
    +++ theme-2
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(141, 153, 226, 0.4)"
    +            "borderColor": "rgba(245, 106, 170, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -75,36 +75,20 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "#5969D5",
    -      "dark": "#2636A2",
    -      "contrastText": "#fff"
    +      "main": "#F56AAA",
    +      "light": "rgba(245, 106, 170, 0.5)",
    +      "dark": "rgba(245, 106, 170, 0.7)",
    +      "contrastText": "#000"
         },
         "secondary": {
    -      "main": "#222222"
    +      "main": "#F9F9F9"
         },
         "background": {
    -      "default": "#1D1D1D"
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
    -      "900": "#2E2E2E",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#F8F9F9"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    # GraphOrange (light)
    Index: theme-3
    ===================================================================
    --- theme-3
    +++ theme-3
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(141, 153, 226, 0.4)"
    +            "borderColor": "rgba(242, 166, 75, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -77,12 +77,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "#5969D5",
    -      "dark": "#2636A2",
    -      "contrastText": "#fff"
    +      "main": "#F2A64B",
    +      "light": "rgba(242, 166, 75, 0.5)",
    +      "dark": "rgba(242, 166, 75, 0.7)",
    +      "contrastText": "#000"
         },
         "secondary": {
           "main": "#222222"
         },


    # GraphOrange (dark)
    Index: theme-4
    ===================================================================
    --- theme-4
    +++ theme-4
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(141, 153, 226, 0.4)"
    +            "borderColor": "rgba(242, 166, 75, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -75,36 +75,20 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "#5969D5",
    -      "dark": "#2636A2",
    -      "contrastText": "#fff"
    +      "main": "#F2A64B",
    +      "light": "rgba(242, 166, 75, 0.5)",
    +      "dark": "rgba(242, 166, 75, 0.7)",
    +      "contrastText": "#000"
         },
         "secondary": {
    -      "main": "#222222"
    +      "main": "#F9F9F9"
         },
         "background": {
    -      "default": "#1D1D1D"
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
    -      "900": "#2E2E2E",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#F8F9F9"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",


    # AdminBlue (light)
    Index: theme-5
    ===================================================================
    --- theme-5
    +++ theme-5
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(141, 153, 226, 0.4)"
    +            "borderColor": "rgba(32, 188, 250, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -77,12 +77,12 @@
       },
       "palette": {
         "mode": "dark",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "#5969D5",
    -      "dark": "#2636A2",
    -      "contrastText": "#fff"
    +      "main": "#20BCFA",
    +      "light": "rgba(32, 188, 250, 0.5)",
    +      "dark": "rgba(32, 188, 250, 0.7)",
    +      "contrastText": "#000"
         },
         "secondary": {
           "main": "#222222"
         },


    # AdminBlue (dark)
    Index: theme-6
    ===================================================================
    --- theme-6
    +++ theme-6
    @@ -38,9 +38,9 @@
               },
               "style": {
                 "borderWidth": 1,
                 "borderStyle": "solid",
    -            "borderColor": "rgba(141, 153, 226, 0.4)"
    +            "borderColor": "rgba(32, 188, 250, 0.4)"
               }
             }
           ],
           "styleOverrides": {}
    @@ -75,36 +75,20 @@
           "styleOverrides": "\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Space Grotesk';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Space Grotesk'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 400;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 500;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n\\n    @font-face {\\n      font-family: 'Figtree';\\n      font-style: normal;\\n      font-variant: normal;\\n      font-weight: 700;\\n      src: local('Figtree'), url() format('woff2');\\n    }\\n    "
         }
       },
       "palette": {
    -    "mode": "dark",
    +    "mode": "light",
         "primary": {
    -      "main": "#2F44CA",
    -      "light": "#5969D5",
    -      "dark": "#2636A2",
    -      "contrastText": "#fff"
    +      "main": "#20BCFA",
    +      "light": "rgba(32, 188, 250, 0.5)",
    +      "dark": "rgba(32, 188, 250, 0.7)",
    +      "contrastText": "#000"
         },
         "secondary": {
    -      "main": "#222222"
    +      "main": "#F9F9F9"
         },
         "background": {
    -      "default": "#1D1D1D"
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
    -      "900": "#2E2E2E",
    -      "A100": "#f5f5f5",
    -      "A200": "#eeeeee",
    -      "A400": "#bdbdbd",
    -      "A700": "#616161"
    +      "default": "#F8F9F9"
         }
       },
       "typography": {
         "fontFamily": "Figtree, Helvetica, Arial, sans-serif",
    "
  `);
});

test("tmp 'light' vs 'Blank'", () => {
  console.log(UIThemeSchema.options);
  const uiTheme = UIThemeSchema.options.find(
    (el) => EMPTY_THEME === el
  ) as unknown as UITheme;

  console.log(uiTheme);
  asMock(mockCreateMuiTheme).mockClear();
  createTheme(uiTheme, false, true);
  expect(asMock(mockCreateMuiTheme).mock.calls[0][0]).toMatchInlineSnapshot(`
    {
      "components": {
        "MuiAppBar": {
          "styleOverrides": {
            "root": {
              "height": 64,
            },
          },
        },
        "MuiAvatar": {
          "variants": [
            {
              "props": {
                "variant": "circular-outlined",
              },
              "style": [Function],
            },
          ],
        },
        "MuiButton": {
          "styleOverrides": {
            "endIcon": {
              ">*:nth-last-of-type(1)": {
                "fontSize": "inherit",
              },
            },
            "outlinedInherit": [Function],
            "outlinedPrimary": [Function],
            "root": [Function],
            "startIcon": {
              ">*:nth-last-of-type(1)": {
                "fontSize": "inherit",
              },
            },
          },
        },
        "MuiCard": {
          "styleOverrides": {
            "root": [Function],
          },
          "variants": [
            {
              "props": {
                "variant": "outlined",
              },
              "style": {
                "borderColor": "inherit",
                "borderStyle": "solid",
                "borderWidth": 1,
              },
            },
          ],
        },
        "MuiCardActions": {
          "styleOverrides": {
            "root": {
              "flexDirection": "row-reverse",
              "padding": 0,
              "width": "100%",
            },
          },
        },
        "MuiCardContent": {
          "styleOverrides": {
            "root": [Function],
          },
        },
        "MuiCssBaseline": {
          "styleOverrides": "
        @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-variant: normal;
          font-weight: 400;
          src: local('Space Grotesk'), url() format('woff2');
        }

        @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-variant: normal;
          font-weight: 500;
          src: local('Space Grotesk'), url() format('woff2');
        }

        @font-face {
          font-family: 'Figtree';
          font-style: normal;
          font-variant: normal;
          font-weight: 400;
          src: local('Figtree'), url() format('woff2');
        }

        @font-face {
          font-family: 'Figtree';
          font-style: normal;
          font-variant: normal;
          font-weight: 500;
          src: local('Figtree'), url() format('woff2');
        }

        @font-face {
          font-family: 'Figtree';
          font-style: normal;
          font-variant: normal;
          font-weight: 700;
          src: local('Figtree'), url() format('woff2');
        }
        ",
        },
        "MuiIconButton": {
          "styleOverrides": {
            "root": {
              "borderRadius": 4,
            },
          },
        },
        "MuiPaper": {
          "styleOverrides": {
            "root": {
              "backgroundImage": "none",
            },
          },
        },
      },
      "palette": {
        "background": {
          "default": "#F8F9F9",
        },
        "info": undefined,
        "mode": "light",
        "primary": {
          "contrastText": "#000",
          "dark": "rgba(255, 255, 255, 0.9)",
          "light": "rgba(255, 255, 255, 0.5)",
          "main": "#fff",
        },
        "secondary": {
          "main": "#F9F9F9",
        },
        "success": undefined,
        "warning": undefined,
      },
      "typography": {
        "body1": {
          "fontWeight": 500,
        },
        "button": {
          "textTransform": "none",
        },
        "fontFamily": "Figtree, Helvetica, Arial, sans-serif",
        "h1": {
          "fontFamily": "Space Grotesk, Helvetica, Arial, sans-serif",
        },
        "h2": {
          "fontFamily": "Space Grotesk, Helvetica, Arial, sans-serif",
        },
        "h3": {
          "fontFamily": "Space Grotesk, Helvetica, Arial, sans-serif",
        },
        "h4": {
          "fontFamily": "Space Grotesk, Helvetica, Arial, sans-serif",
          "fontSize": "2rem",
          "fontWeight": 500,
        },
        "h5": {
          "fontFamily": "Space Grotesk, Helvetica, Arial, sans-serif",
        },
        "h6": {
          "fontFamily": "Space Grotesk, Helvetica, Arial, sans-serif",
        },
        "subtitle1": {
          "fontWeight": 700,
        },
      },
    }
  `);
});
