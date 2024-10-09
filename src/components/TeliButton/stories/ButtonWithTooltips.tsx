import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const tooltip = "Tooltip content goes here";
const ButtonsWithTooltips: Story = {
  render: () => (
    <div className="grid w-1/2 h-1/2 mx-auto my-16">
      <div className="grid place-content-center">
        <div className="flex gap-x-4">
          <TeliButton
            variant="primary"
            tooltip={tooltip}
            tooltipPlacement="top-start"
          >
            Top start
          </TeliButton>
          <TeliButton
            variant="primary"
            tooltip={tooltip}
            tooltipPlacement="top"
          >
            Top
          </TeliButton>
          <TeliButton
            variant="primary"
            tooltip={tooltip}
            tooltipPlacement="top-end"
          >
            Top end
          </TeliButton>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-2 my-6">
        <div className="flex flex-col items-start gap-y-4">
          <TeliButton tooltip={tooltip} tooltipPlacement="left-start">
            Left start
          </TeliButton>
          <TeliButton tooltip={tooltip} tooltipPlacement="left">
            Left
          </TeliButton>
          <TeliButton tooltip={tooltip} tooltipPlacement="left-end">
            Left end
          </TeliButton>
        </div>

        <div className="flex flex-col items-end gap-y-4">
          <TeliButton tooltip={tooltip} tooltipPlacement="right-start">
            Right start
          </TeliButton>
          <TeliButton tooltip={tooltip} tooltipPlacement="right">
            Right
          </TeliButton>
          <TeliButton tooltip={tooltip} tooltipPlacement="right-end">
            Right end
          </TeliButton>
        </div>
      </div>
      <div className="grid place-content-center">
        <div className="flex gap-x-4">
          <TeliButton
            variant="secondary"
            tooltip={tooltip}
            tooltipPlacement="bottom-start"
          >
            Bottom start
          </TeliButton>
          <TeliButton
            variant="secondary"
            tooltip={tooltip}
            tooltipPlacement="bottom"
          >
            Bottom
          </TeliButton>
          <TeliButton
            variant="secondary"
            tooltip={tooltip}
            tooltipPlacement="bottom-end"
          >
            Bottom end
          </TeliButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Tooltips display informative text when users hover over, focus on, or tap an element.
When activated, Tooltips display a text label identifying an element, such as a 
description of its function.
Tooltips should not be used for information that is vital to task completion.
        `,
      },
      source: {
        code: `
<TeliButton
  variant="primary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="top-start"
>
  Top start
</TeliButton>
<TeliButton
  variant="primary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="top"
>
  Top
</TeliButton>
<TeliButton
  variant="primary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="top-end"
>
  Top end
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="left-start">
  Left start
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="left">
  Left
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="left-end">
  Left end
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="right-start">
  Right start
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="right">
  Right
</TeliButton>
<TeliButton tooltip="Tooltip content goes here" tooltipPlacement="right-end">
  Right end
</TeliButton>
<TeliButton
  variant="secondary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="bottom-start"
>
  Bottom start
</TeliButton>
<TeliButton
  variant="secondary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="bottom"
>
  Bottom
</TeliButton>
<TeliButton
  variant="secondary"
  tooltip="Tooltip content goes here"
  tooltipPlacement="bottom-end"
>
  Bottom end
</TeliButton>
      `,
      },
    },
  },
};

export default ButtonsWithTooltips;
