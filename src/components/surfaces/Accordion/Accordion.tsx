import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import React from "react";

export const Accordion: React.FC<AccordionProps> = (props) => <MuiAccordion {...props} />;

export type { AccordionProps };

export default Accordion;
