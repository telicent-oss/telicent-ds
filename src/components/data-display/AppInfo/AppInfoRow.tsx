import React, { ReactNode } from "react";

import FlexBox from "../../layout/FlexBox";
import { Text } from "../Text/Text";

export interface AppInfoRowProps {
  label: string;
  value: ReactNode;
  id?: string;
}

const AppInfoRow: React.FC<AppInfoRowProps> = ({ label, value, id }) => (
  <FlexBox
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    spacing={2}
  >
    <Text
      variant="caption"
      sx={{
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "text.secondary",
      }}
    >
      {label}
    </Text>
    <Text id={id} variant="body2">
      {value}
    </Text>
  </FlexBox>
);

export default AppInfoRow;
