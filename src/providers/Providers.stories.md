import { Meta } from "@storybook/addon-docs";

<Meta title="Design System/Providers" />

# Providers

## Theme provider

The ThemeProvider component is responsible for providing the theme to all it's children.
This component should be imported in index.jsx|tsx, if the standard layout component is not being used.
At the moment the provider is set to use the dark theme by default.

## Styled engine provider

The styled engine provider is a mui component used to inject tailwindcss first because we are using tailwindcss to style our components.
This allows us to override the mui styling with tailwindcss.
More information about this can be found [here](https://mui.com/material-ui/guides/interoperability/#css-injection-order-3)
