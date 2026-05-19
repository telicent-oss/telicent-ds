import React from "react";
import { Box, Typography } from "@mui/material";

export interface BrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  appName?: string;
  beta?: boolean;
  size?: "base" | "jumbo";
}

const Brand: React.FC<BrandProps> = ({ appName, beta, size = "base", href, target, ...rest }) => {
  const isBase = size === "base";
  const isJumbo = size === "jumbo";

  return (
    <Box
      component="a"
      href={href}
      target={target}
      sx={{
        display: "inline-flex",
        alignItems: "flex-end",
        gap: 1,
        textDecoration: "none",
        cursor: href ? "pointer" : "default",
      }}
      {...rest}
    >
      <Typography
        component="h1"
        sx={{
          display: "flex",
          gap: 1.25,
          fontFamily: "Figtree",
          fontSize: isJumbo ? "clamp(1.802rem, 5vw, 4.11rem)" : "1.802rem",
          lineHeight: isJumbo ? 1 : "2rem",
          margin: 0,
        }}
      >
        <Box
          component="span"
          sx={{
            display: { xs: "none", sm: "inline" },
          }}
        >
          telicent
        </Box>

        {appName && (
          <Box
            component="span"
            sx={{
              color: "primary.main",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {appName}
          </Box>
        )}
      </Typography>

      {beta && (
        <Box
          sx={{
            fontFamily: "var(--font-body, Figtree)",
            backgroundColor: "whiteSmoke.100",
            borderRadius: 1,
            border: "1px solid",
            borderColor: "black.300",
            color: "black.100",
            fontWeight: 500,
            fontSize: "clamp(0.624rem, 0.6vw, 0.889rem)",
            px: "clamp(0.125rem, 1vw, 0.5rem)",
            mb: isJumbo ? "clamp(0.25rem, 1vw, 0.5rem)" : 0.25,
          }}
        >
          BETA
        </Box>
      )}
    </Box>
  );
};

export default Brand;
