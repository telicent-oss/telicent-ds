# Telicent Design System (DS)

A component library to help developers create frontend applications for Telicent platform apps. Visit the [Storybook](https://telicent-oss.github.io/ds/) to learn more.

## Install

This repository is published as an npm package at [@telicent-oss/ds](https://www.npmjs.com/package/@telicent-oss/ds) and is installable via:

```sh
npm install @telicent-oss/ds
```

## Usage

Before you start, import the required styles into your top-level file:
```tsx
import "@telicent-oss/ds/dist/style.css";
import "@telicent-oss/ds/dist/fontawesome.css";
```

Then search for a component in the Storybook. Navigate between stories by clicking on them in the sidebar or using the sidebar searchbox.

Once you have found the component, you can import it into your application:

```tsx
import { TeliStandardLayout } from '@telicent-oss/ds';
```

## Run storybook locally

```sh
git clone https://github.com/Telicent-oss/telicent-ds.git
cd telicent-ds
yarn storybook
```