// pages/Search/MapToggleButton.tsx
import React from "react";
import { Box, FormControlLabel, IconButton, Paper } from "@mui/material";

import ListIcon from "@telicent-oss/mui-icons-material/List";
import SecondaryButton, { SecondaryButtonProps } from "../../../../v1/components/buttons/Button/SecondaryButton";

export const MapToggleButtonPresentational: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <Box>
      <Paper>
        <SecondaryButton {...props}>
          Back to list view
          <IconButton>
            <ListIcon />
          </IconButton>
        </SecondaryButton>
      </Paper>
    </Box>
  );
};
