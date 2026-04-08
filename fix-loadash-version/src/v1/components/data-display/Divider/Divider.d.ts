import { DividerProps as MUIDividerProps } from '@mui/material/Divider';
export interface DividerProps extends MUIDividerProps {
    component?: React.ElementType;
    flexItem?: boolean;
    orientation?: "horizontal" | "vertical";
}
declare const Divider: (props: DividerProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Divider;
