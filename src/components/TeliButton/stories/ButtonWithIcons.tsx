import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const ButtonsWithIcons: Story = {
  render: () => (
    <div className="grid grid-rows-1 grid-cols-4 gap-4">
      <TeliButton
        variant="primary"
        startIcon={<FontAwesomeIcon icon={faTrash} />}
      >
        Delete
      </TeliButton>
      <TeliButton
        variant="secondary"
        endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
      >
        Send
      </TeliButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Sometimes you might want to have icons for certain buttons to enhance the UX
of the application as we recognize logos more easily than plain text.
For example, if you have a delete button you can label it with a dustbin icon.
      `,
      },
      source: {
        code: `
<TeliButton
  variant="primary"
  startIcon={<FontAwesomeIcon icon={faTrash} />}
>
  Delete
</TeliButton>
<TeliButton
  variant="secondary"
  endIcon={<FontAwesomeIcon icon={faSend} />}
>
  Send
</TeliButton>
      `,
      },
    },
  },
};

export default ButtonsWithIcons;
