import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const SecondaryButtons: Story = {
  render: () => (
    <div className="grid grid-rows-1 grid-cols-4 gap-4">
      <TeliButton variant="secondary">Secondary</TeliButton>
      <TeliButton variant="secondary" disabled>
        Disabled secondary
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Seconday buttons should be used for medium-emphasis. They contain actions that
are important but aren't the primary action in the application.
They can also be used for lower emphasis when used together with a primary
buttons, or a higher emphasis when used with the tertiary buttons.
        `,
      },
      source: {
        code: `
<TeliButton variant="secondary">Secondary</TeliButton>
<TeliButton variant="secondary" disabled>
  Disabled secondary
</TeliButton>
      `,
      },
    },
  },
};

export default SecondaryButtons;
