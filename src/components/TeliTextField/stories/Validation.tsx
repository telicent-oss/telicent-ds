import TeliTextField from "../TeliTextField";
import { TeliTextFieldStory } from "../TeliTextField.stories";

const ValidationExamples: TeliTextFieldStory = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
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

export default ValidationExamples;
