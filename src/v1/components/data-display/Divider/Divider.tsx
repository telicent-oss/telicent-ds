import MUIDivider, { DividerProps as MUIDividerProps } from "@mui/material/Divider";

export interface DividerProps extends MUIDividerProps {
  component?: React.ElementType;
  flexItem?: boolean;
  orientation?: "horizontal" | "vertical";
}

const Divider = (props: DividerProps) => <MUIDivider {...props} />;

export default Divider;
