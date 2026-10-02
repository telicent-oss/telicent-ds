import React from "react";
import MuiAccordionDetails, { AccordionDetailsProps } from "@mui/material/AccordionDetails";

export const AccordionDetails: React.FC<AccordionDetailsProps> = (props) => (
  <MuiAccordionDetails {...props} />
);

export type { AccordionDetailsProps };

export default AccordionDetails;
