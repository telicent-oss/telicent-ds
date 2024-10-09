import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";

import TeliTextField from "../TeliTextField";
import { TeliTextFieldStory } from "../TeliTextField.stories";
import TeliButton from "../../TeliButton/TeliButton";

const AdornmentExamples: TeliTextFieldStory = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <div className="grid grid-cols-3 gap-3">
        <TeliTextField
          id="start-adornment-amount"
          label="Amount"
          startAdornment={<FontAwesomeIcon icon={faSterlingSign} size="sm" />}
        />
        <TeliTextField
          id="start-adornment-weight"
          label="Weight"
          startAdornment="kg"
        />
        <TeliTextField
          id="end-adornment-weight"
          label="Weight"
          endAdornment="kg"
        />
        <TeliTextField
          id="end-adornment-password"
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          endAdornment={
            <TeliButton onClick={handlePasswordVisibility}>
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                size="sm"
              />
            </TeliButton>
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Start and end adornments can be added to the component to add a 
        prefix, a suffix, or an action to an input. For instance, you can use 
        an icon button to hide or reveal the password.`,
      },
      source: {
        code: `
const [showPassword, setShowPassword] = useState(false);

const handlePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

return (
  <div className="grid grid-cols-3 gap-3">
    <TeliTextField
      id="start-adornment-amount"
      label="Amount"
      startAdornment={<FontAwesomeIcon icon={faPoundSign} size="sm" />}
    />
    <TeliTextField
      id="start-adornment-weight"
      label="Weight"
      startAdornment="kg"
    />
    <TeliTextField
      id="end-adornment-weight"
      label="Weight"
      endAdornment="kg"
    />
    <TeliTextField
      id="end-adornment-password"
      label="Password"
      type={showPassword ? "text" : "password"}
      autoComplete="current-password"
      endAdornment={
        <TeliButton onClick={handlePasswordVisibility}>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            size="sm"
          />
        </TeliButton>
      }
    />
  </div>
      `,
      },
    },
  },
};

export default AdornmentExamples;
