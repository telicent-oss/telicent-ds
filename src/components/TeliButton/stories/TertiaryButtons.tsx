import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

export const TertiaryButtons: Story = {
  render: () => (
    <div className="grid grid-rows-1 grid-cols-4 gap-4">
      <TeliButton variant="tertiary">Tertiary</TeliButton>
      <TeliButton variant="tertiary" disabled>
        Disabled Tertiary
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Tertiary buttons should be used for less prominent actions, including those
located in dialogs and cards. In cards, text buttons help maintain an
emphasis on card content.
        `,
      },
      source: {
        code: `
<TeliButton variant="tertiary">Tertiary</TeliButton>
<TeliButton variant="tertiary" disabled>
  Disabled Tertiary
</TeliButton>
      `,
      },
    },
  },
};

export default TertiaryButtons;
