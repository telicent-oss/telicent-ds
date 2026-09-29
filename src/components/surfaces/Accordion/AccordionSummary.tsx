import React from "react";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "../../data-display/Icons/ExpandMoreIcon";

export const AccordionSummary: React.FC<AccordionSummaryProps> = (props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
);

export type { AccordionSummaryProps };

export default AccordionSummary;
