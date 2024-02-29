import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const PrimaryButtons: Story = {
  render: () => (
    <div className="grid grid-rows-1 grid-cols-4 gap-4">
      <TeliButton variant="primary">Primary</TeliButton>
      <TeliButton variant="primary" disabled>
        Disabled Primary
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Primary button should be used for primary actions in applications. They are
designed to have distinguished by the use of the filled background.
        `,
      },
      source: {
        code: `
<TeliButton variant="primary">Primary</TeliButton>
<TeliButton variant="primary" disabled>
  Disabled Primary
</TeliButton>
      `,
      },
    },
  },
};

export default PrimaryButtons;
