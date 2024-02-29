import TeliTextField from "../TeliTextField";
import { TeliTextFieldStory } from "../TeliTextField.stories";

const FormProps: TeliTextFieldStory = {
  render: ({ label, id }) => (
    <div className="grid grid-cols-3 gap-3">
      <TeliTextField
        required
        id="required-example"
        label="Required"
        defaultValue="Hello World"
      />
      <TeliTextField
        disabled
        id="disabled-example"
        label="Disabled"
        defaultValue="Hello World"
      />
      <TeliTextField
        id="password-example"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <TeliTextField
        readOnly
        id="read-only-example"
        label="Read Only"
        defaultValue="Hello World"
      />
      <TeliTextField
        pointerEvents
        id="number-example"
        label="Number"
        type="number"
      />
      <TeliTextField id="search-example" label="Search" type="search" />
      <TeliTextField
        id="helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `Standard form attributes are supported e.g. required, disabled, 
        type, etc. as well as a helperText which is used to give context about a 
        field's input, such as how the input will be used.`,
      },
      source: {
        code: `
<TeliTextField
  required
  id="required-example"
  label="Required"
  defaultValue="Hello World"
/>
<TeliTextField
  disabled
  id="disabled-example"
  label="Disabled"
  defaultValue="Hello World"
/>
<TeliTextField
  id="password-example"
  label="Password"
  type="password"
  autoComplete="current-password"
/>
<TeliTextField
  readOnly
  id="read-only-example"
  label="Read Only"
  defaultValue="Hello World"
/>
<TeliTextField
  pointerEvents
  id="number-example"
  label="Number"
  type="number"
/>
<TeliTextField id="search-example" label="Search" type="search" />
<TeliTextField
  id="helperText"
  label="Helper text"
  defaultValue="Default Value"
  helperText="Some important text"
/>
      `,
      },
    },
  },
};

export default FormProps;
