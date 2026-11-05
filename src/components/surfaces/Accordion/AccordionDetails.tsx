import MuiAccordionDetails, { AccordionDetailsProps } from "@mui/material/AccordionDetails";
import React from "react";

export const AccordionDetails: React.FC<AccordionDetailsProps> = (props) => (
  <MuiAccordionDetails {...props} />
);

export type { AccordionDetailsProps };

export default AccordionDetails;
