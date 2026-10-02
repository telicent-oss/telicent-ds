import React from "react";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

export const Accordion: React.FC<AccordionProps> = (props) => <MuiAccordion {...props} />;

export type { AccordionProps };

export default Accordion;
