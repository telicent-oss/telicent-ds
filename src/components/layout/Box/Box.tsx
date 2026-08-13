import BoxRaw, { type BoxProps } from "@mui/material/Box";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SxProps, Theme } from "@mui/material/styles";
import type { BoxTypeMap } from "@mui/system";

type BoxVariant = "outlined";
type BoxAdditionalProps = { variant?: BoxVariant };

const variantSx: Record<BoxVariant, SxProps<Theme>> = {
  outlined: (theme) => ({
    border: `1px solid ${theme.palette.primary.main}`,
  }),
};

const BoxImpl = ({ variant, sx, ...rest }: BoxProps & BoxAdditionalProps) => {
  if (!variant) {
    return <BoxRaw sx={sx} {...rest} />;
  }

  const consumerSx = Array.isArray(sx) ? sx : [sx];
  const composedSx = [variantSx[variant], ...consumerSx];

  return <BoxRaw sx={composedSx} {...rest} />;
};

export const Box = BoxImpl as OverridableComponent<
  BoxTypeMap<BoxAdditionalProps, "div", Theme>
>;
