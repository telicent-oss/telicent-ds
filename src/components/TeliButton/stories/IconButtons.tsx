import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const IconButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <TeliButton aria-label="delete" variant="primary">
        <FontAwesomeIcon icon={faTrash} />
      </TeliButton>
      <TeliButton aria-label="delete" variant="secondary">
        <FontAwesomeIcon icon={faTrash} />
      </TeliButton>
      <TeliButton aria-label="delete" variant="tertiary">
        <FontAwesomeIcon icon={faTrash} />
      </TeliButton>
      <TeliButton aria-label="send" variant="basic">
        <FontAwesomeIcon icon={faPaperPlane} />
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Icon buttons are commonly found in app bars and toolbars. Icons are also
appropriate for toggle buttons that allow a single choice to be selected or
deselected, such as adding or removing a star to an item.
        `,
      },
      source: {
        code: `
<TeliButton aria-label="delete" variant="primary">
  <FontAwesomeIcon icon={faTrash} />
</TeliButton>
<TeliButton aria-label="delete" variant="secondary">
  <FontAwesomeIcon icon={faTrash} />
</TeliButton>
<TeliButton aria-label="delete" variant="tertiary">
  <FontAwesomeIcon icon={faTrash} />
</TeliButton>
<TeliButton aria-label="send" variant="basic">
  <FontAwesomeIcon icon={faSend} />
</TeliButton>
      `,
      },
    },
  },
};

export default IconButtons;
