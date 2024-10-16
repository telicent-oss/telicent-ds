import React from "react";
import MUIBox from "@mui/material/Box/Box";

export interface IESTypeProps extends React.HTMLAttributes<HTMLElement> {
  backgroundColor: string;
  borderColor: string;
  color: string;
  iconClass: string;
}

const IESType: React.FC<IESTypeProps> = ({
  backgroundColor,
  borderColor,
  color,
  iconClass,
  className,
  role = "img",
  ...props
}) => (
  <MUIBox
    component="div"
    sx={{
      backgroundColor,
      color,
      borderColor,
      borderRadius: 9999,
      width: 34,
      height: 34,
      borderWidth: 2,
      borderStyle: "solid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <i
      role={role}
      aria-hidden="true"
      className={iconClass + " " + className}
      {...props}
    />
  </MUIBox>
);

export default IESType;
