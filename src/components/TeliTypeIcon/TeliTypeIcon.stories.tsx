import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OntologyService } from "@telicent-oss/ontologyservice";

import TeliTypeIcon from "./TeliTypeIcon";
import { OntologyStylesProvider } from "../../contexts/OntologyStyles";

const ontologyService = new OntologyService(
  "http://localhost:3030/",
  "ontology"
);

const queryClient = new QueryClient();

const meta = {
  component: TeliTypeIcon,
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <OntologyStylesProvider service={ontologyService}>
          <div className="flex items-center gap-x-3">
            <Story />
          </div>
        </OntologyStylesProvider>
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof TeliTypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The type icon can be rendered by providing a <code>type</code> prop to the
 * component.
 */
export const Icons: Story = {
  render: () => (
    <>
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#LuminousIntensity" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#AssetState" />
    </>
  ),
};

/**
 * When a type is not provided, a blank class will be displayed.
 */
export const BlankClassIcon: Story = {};

/**
 * When a type is specified but the icon is not defined in the ontology,
 * fallback text will be rendered (Class initials).
 */
export const TypeInitials: Story = {
  render: () => (
    <>
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#Funeral" />
      <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#OpenStreetmapIdentifier" />
    </>
  ),
};

/**
 * The size of the icon can be controlled using the <code>size</code> prop.
 */
export const Size: Story = {
  args: {
    type: "http://ies.data.gov.uk/ontology/ies4#LuminousIntensity",
  },
  render: (args) => (
    <>
      <TeliTypeIcon {...args} size="sm" />
      <TeliTypeIcon {...args} />
      <TeliTypeIcon {...args} size="lg" />
    </>
  ),
};

/**
 * The component can be rendered in a disabled state by setting
 * <code>disabled</code> to true.
 */
export const DisabledState: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <>
      <TeliTypeIcon
        {...args}
        type="http://ies.data.gov.uk/ontology/ies4#GalaxySector"
      />
      <TeliTypeIcon
        {...args}
        type="http://ies.data.gov.uk/ontology/ies4#LuminousIntensity"
      />
      <TeliTypeIcon
        {...args}
        type="http://ies.data.gov.uk/ontology/ies4#AssetState"
      />
    </>
  ),
};
