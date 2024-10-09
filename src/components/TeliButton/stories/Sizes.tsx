import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Story } from "../TeliButton.stories";
import TeliButton from "../TeliButton";

const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-x-4">
      <div>
        <TeliButton
          variant="primary"
          startIcon={<FontAwesomeIcon icon={faTrash} />}
          size="small"
        >
          Delete
        </TeliButton>
      </div>
      <div>
        <TeliButton
          variant="primary"
          color="danger"
          startIcon={<FontAwesomeIcon icon={faTrash} />}
          size="medium"
        >
          Delete
        </TeliButton>
      </div>
      <div>
        <TeliButton
          variant="secondary"
          startIcon={<FontAwesomeIcon icon={faTrash} />}
          size="large"
        >
          Delete
        </TeliButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "For larger or smaller icon buttons, use the size prop to set the size.",
      },
      source: {
        code: `
<TeliButton
variant="primary"
startIcon={<FontAwesomeIcon icon={faTrash} />}
size="small"
>
  Delete
</TeliButton>
<TeliButton
  variant="primary"
  color="danger"
  startIcon={<FontAwesomeIcon icon={faTrash} />}
  size="medium"
>
  Delete
</TeliButton>
<TeliButton
  variant="secondary"
  startIcon={<FontAwesomeIcon icon={faTrash} />}
  size="large"
>
  Delete
</TeliButton>
      `,
      },
    },
  },
};

export default Sizes;
