import { Meta, StoryObj } from '@storybook/react';
/**
 * Grid gallery that renders every named export from this folder's `index.ts`.
 * Each export is assumed to be a React component (custom SVG or MUI icon).
 * Shown with its export name for quick visual QA & discoverability.
 */
declare const IconsGallery: () => import("@emotion/react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof IconsGallery>;
export default meta;
type Story = StoryObj<typeof IconsGallery>;
export declare const AllIcons: Story;
