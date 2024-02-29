import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TeliTypeahead from "./TeliTypeahead";
import { MultiSelect, FreeSolo } from "./stories";

const queryClient = new QueryClient();

const meta = {
  component: TeliTypeahead,
  parameters: {
    docs: {
      description: {
        component: `This component makes api calls to the desired api and 
        provides the user with the options specified. Use onTransform prop to 
        shape the options. This component uses react query and will require the 
        query client provider to be present.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div style={{ height: "10em" }}>
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof TeliTypeahead>;
export default meta;

export type TeliTypeaheadStory = StoryObj<typeof TeliTypeahead>;

export { MultiSelect, FreeSolo };
