import TeliTextField from "../TeliTextField";
import { TeliTextFieldStory } from "../TeliTextField.stories";

const MultilineExamples: TeliTextFieldStory = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      <TeliTextField
        id="multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
      />
      <TeliTextField
        id="textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
      />
      <TeliTextField
        id="multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `The error prop toggles the error state. The helperText prop can 
        then be used to provide feedback to the user about the error.`,
      },
      source: {
        code: `
<TeliTextField
  error
  id="error-example"
  label="Error"
  defaultValue="Hello World"
/>
<TeliTextField
  error
  id="error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect input"
/>
      `,
      },
    },
  },
};

export default MultilineExamples;
