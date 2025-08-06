import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { FlexBox, useExtendedTheme } from "../../../../export";
import { ButtonProps, Typography } from "@mui/material";

export type CopyToClipboardProps = ButtonProps & {
  text: string;
  title?: string;
  ariaLabel?: string;
  testFailure?: boolean;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  title = "copy to clipboard",
  ariaLabel = "copy to clipboard",
  testFailure = false,
  sx,
}) => {
  const [icon, setIcon] = useState(faCopy);
  const [error, setError] = useState<string | null>(null);

  const theme = useExtendedTheme();

  const handleClick = async () => {
    try {
      setError(null);

      if (testFailure) {
        throw new Error("Simulated clipboard failure");
      }
      await navigator.clipboard.writeText(text);
      setIcon(faCheck);
      setTimeout(() => {
        setIcon(faCopy);
      }, 1500);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Clipboard write failed";
      console.log(errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <FlexBox direction="row" spacing={1} alignItems="flex-start">
      <Button
        variant="noStyle"
        onClick={handleClick}
        disableRipple
        title={title}
        aria-label={ariaLabel}
        sx={{ color: theme.palette.primary.main, ...sx }}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </FlexBox>
  );
};

export default CopyToClipboard;
