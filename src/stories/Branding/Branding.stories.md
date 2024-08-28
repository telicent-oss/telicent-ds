import { Meta, Source } from "@storybook/blocks";

import Favicons from "./Favicons";
import SpaceGrotesk from "./SpaceGrotesk";
import Figtree from "./Figtree";

<Meta title="Design System/Branding" />

# Telicent Branding

#### Contents

- [Fonts](#fonts)
  - [Space Grotesk](#space-grotesk)
  - [Figtree](#figtree)
- [Favicons](#favicons)
- [Application Colours](#application-colours)
  - [How to override the default application
    colour](#how-to-override-the-default-application-colour)
  - [Admin applications](#admin-applications)
  - [Document applications](#document-applications)
  - [Graph applications](#graph-applications)
  - [Geographical applications](#geographical-applications)

## Fonts

We use [Space
Grotesk](https://fonts.google.com/specimen/Space+Grotesk?query=space+grotesk)
and [Figtree](https://fonts.google.com/specimen/Figtree?query=figtree) as our
main fonts. Samples of these fonts can be found below. If you wish to use these
fonts on your machine, use the links below to download and install the fonts.

### Space Grotesk

This font should be used sparingly to represent the telicent name and it's
applications. For example this font is currently being used in the header
component in the standard layout.

<SpaceGrotesk />

### Figtree

This font should be used as the main font for all telicent applications. The
base font is set to 14px. All icons and headings should be sized according to
this base font to create a good visual hierarchy. Unlike the brand font (Space
Grotesk), there isn't a defined font weight for this font. Feel free to choose an
appropriate font weight which fits your needs.

<Figtree />

## Favicons

Each application suite will have it's own favicon as shown below. Refer to the
[Application Colours](#application-colours) section below to identify which favicon you should
be using.

<Favicons />

To use the favicon in a telicent application, follow the steps below

1\. Delete the favicon file in the public directory.

2\. Download the appropriate favicon.

3\. Drag and drop the downloaded svg into the public directory.

4\. Rename file to `favicon.svg`.

5\. Open the index.html file.

6\. Within the head tags, find the link tags ... it should look like this

```
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

7\. Replace `favicon.ico` with `favicon.svg`, as shown below

```
<link rel="icon" href="%PUBLIC_URL%/favicon.svg" />
```

## Application Colours

All telicent applications are grouped accordingly by theme. Each group is
assigned a set color as shown below.

### How to override the default application colour

The Design System has a purple color set as the default application colour. This
colour can be overriden by specifying a `--app-color` css variable in
`index.css`. Each application colour has code you can use to override the
default colour and shades. If a shade is not provided it will fallback to the
default colour.

The colour variables are defined using the rgba() colour channel, therefore
should be comma separated instead of space separated.

> NOTE: You don't need to provide the opacity value. This can be controlled with
> tailwind.

### Admin applications

These applications can only be used by admin users.

- Access
- Flow
- Live
- Ontology

<img src="/src/assets/storybook/admin-app-colours.png" />
<Source
  dark
  code={`

--app-color: 32, 188, 250;
--app-color-50: 233, 248, 255;
--app-color-100: 200, 235, 252;
--app-color-200: 182, 228, 254;
--app-color-300: 147, 214, 252;
--app-color-400: 72, 194, 251;
--app-color-500: 32, 188, 250;
--app-color-600: 25, 167, 227;
--app-color-700: 17, 146, 205;
--app-color-800: 11, 77, 115;
--app-color-900: 7, 45, 65;
--app-color-950: 3, 15, 26;`}
/>

### Document applications

These applications are heavily document based.

- Search
- Forms

<img src="/src/assets/storybook/document-app-colours.png" alt="document-application-colours" />
<Source
  dark
  code={`

--app-color: 245, 106, 170;
--app-color-50: 254, 240, 247;
--app-color-100: 228, 249, 205;
--app-color-200: 252, 197, 220;
--app-color-300: 250, 169, 203;
--app-color-400: 247, 133, 185;
--app-color-500: 245, 106, 170;
--app-color-600: 221, 84, 149;
--app-color-700: 198, 54, 130;
--app-color-800: 133, 38, 78;
--app-color-900: 73, 22, 48;
--app-color-950: 24, 8, 17;
`}
/>

### Graph applications

These applications are used to visualise RDF data

- Graph

<img src="/src/assets/storybook/graph-app-colours.png" alt="graph application colours" />
<Source
  dark
  code={`

--app-color: 255, 162, 47;
--app-color-50: 255, 238, 221;
--app-color-100: 255, 217, 185;
--app-color-200: 255, 199, 151;
--app-color-300: 254, 182, 116;
--app-color-400: 255, 173, 78;
--app-color-500: 255, 162, 47;
--app-color-600: 231, 135, 34;
--app-color-700: 208, 107, 22;
--app-color-800: 136, 73, 8;
--app-color-900: 83, 43, 5;
--app-color-950: 38, 19, 3;
`}
/>

### Geographical applications

These applications are heavily map based

- Geo
- Paralog

<img src="/src/assets/storybook/geo-app-colours.png"
alt="geo-application-colours" />
<Source
  dark
  code={`

--app-color: 157, 221, 49;
--app-color-50: 245, 252, 234;
--app-color-100: 214, 241, 186;
--app-color-200: 214, 241, 186;
--app-color-300: 196, 234, 153;
--app-color-400: 175, 227, 86;
--app-color-500: 157, 221, 49;
--app-color-600: 134, 199, 38;
--app-color-700: 111, 177, 26;
--app-color-800: 56, 102, 22;
--app-color-900: 33, 59, 11;
--app-color-950: 6, 22, 5;
`}
/>
