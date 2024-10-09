import TeliToolbar from "../TeliToolbar";
import { ToolbarStory } from "../TeliToolbar.stories";

const PositionedToolbars: ToolbarStory = {
  render: () => (
    <>
      <TeliToolbar position="top-start" />
      <TeliToolbar position="top-end" />
      <TeliToolbar position="bottom-start" />
      <TeliToolbar position="bottom-end" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `
You can position the toolbar by using the <code>position</code> prop
        `,
      },
      source: {
        code: `
<TeliToolbar position="top-start" />
<TeliToolbar position="top-end" />
<TeliToolbar position="bottom-start" />
<TeliToolbar position="bottom-end" />
      `,
      },
    },
  },
};

export default PositionedToolbars;
