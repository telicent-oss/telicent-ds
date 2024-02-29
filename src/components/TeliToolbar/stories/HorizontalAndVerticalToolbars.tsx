import TeliToolbar from "../TeliToolbar";
import { ToolbarStory } from "../TeliToolbar.stories";

const HorizontalAndVerticalToolbars: ToolbarStory = {
  render: () => (
    <>
      <TeliToolbar />
      <TeliToolbar vertical position="bottom-end" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `
By default toolbar items are arranged horizontally, to arrange the items vertically 
use the <code>vertical</code> prop.
        `,
      },
      source: {
        code: `
<TeliToolbar />
<TeliToolbar vertical position="bottom-end" />
      `,
      },
    },
  },
};

export default HorizontalAndVerticalToolbars;
