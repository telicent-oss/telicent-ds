import MUIDivider from "@mui/material/Divider";

export interface DividerProps {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * If true, a vertical divider will have the correct height when used in flex
   * container. (By default, a vertical divider will have a calculated height of
   * 0px if it is the child of a flex container.)
   */
  flexItem?: boolean;
    /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

const Divider = (props: DividerProps) => <MUIDivider {...props} />;

export default Divider;
