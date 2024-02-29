import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const DangerButtons: Story = {
  render: () => (
    <div className="grid grid-rows-1 grid-cols-4 gap-4">
      <TeliButton variant="primary" color="danger">
        Danger Primary
      </TeliButton>
      <TeliButton variant="primary" color="danger" disabled>
        Danger Primary
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Danger buttons should be used for potentially destructive actions such as delete.
        `,
      },
      source: {
        code: `
<TeliButton variant="primary" color="danger">
  Danger Primary
</TeliButton>
<TeliButton variant="primary" color="danger" disabled>
  Danger Primary
</TeliButton>
      `,
      },
    },
  },
};

export default DangerButtons;
