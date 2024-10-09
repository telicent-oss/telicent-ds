import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const LinkButtons: Story = {
  render: () => (
    <div className="grid grid-rows-1 grid-cols-4 gap-4">
      <TeliButton variant="link">Link button</TeliButton>
      <TeliButton variant="link" href="#link">
        With href
      </TeliButton>
      <TeliButton variant="link" disabled>
        Disabled Link
      </TeliButton>
      <TeliButton variant="link" href="#link" disabled>
        Disabled with href
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Link buttons should be used for navigation. "Disable" link by removing the href 
property
        `,
      },
      source: {
        code: `
<TeliButton variant="link">Link button</TeliButton>
<TeliButton variant="link" href="#link">
  With href
</TeliButton>
<TeliButton variant="link" disabled>
  Disabled Link
</TeliButton>
<TeliButton variant="link" href="#link" disabled>
  Disabled with href
</TeliButton>
      `,
      },
    },
  },
};

export default LinkButtons;
