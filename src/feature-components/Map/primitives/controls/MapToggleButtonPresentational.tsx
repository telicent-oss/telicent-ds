// pages/Search/MapToggleButton.tsx
import React from "react";
import { Box, FormControlLabel, IconButton, Paper } from "@mui/material";

import { List as ListIcon } from "@telicent-oss/mui-icons-material";
import SecondaryButton, { SecondaryButtonProps } from "../../../../components/buttons/Button/SecondaryButton";

export const MapToggleButtonPresentational: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <Box>
      <Paper>
        <SecondaryButton {...props}>
          Back to list view
          {/* TODO a11y: invalid HTML — <button> nested inside another <button>. The inner IconButton is decorative and unlabelled. Deferred to avoid a visible behaviour change in the current release; see docs/accessibility.md § Known gaps. */}
          <IconButton>
            <ListIcon />
          </IconButton>
        </SecondaryButton>
      </Paper>
    </Box>
  );
};
