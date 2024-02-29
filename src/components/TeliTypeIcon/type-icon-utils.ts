export type TeliTypeIconSizeProp = "xs" | "sm" | "base" | "lg";

export const getSizeProps = (size: TeliTypeIconSizeProp) => {
  const base = {
    width: 48,
    height: 48,
  };

  switch (size) {
    case "xs":
      return {
        width: 24,
        height: 24,
        fontSize: 8,
      };
    case "sm":
      return {
        width: 36,
        height: 36,
        fontSize: 10,
      };
    case "lg":
      return {
        width: 62,
        height: 62,
        fontSize: 22,
      };
    default:
      return base;
  }
};

export const getDisabledStyles = (isDisabled: boolean) => {
  const disabledStyles = {
    filter: "grayscale(0.7)",
    opacity: "80%",
  };

  return isDisabled ? disabledStyles : {};
};
