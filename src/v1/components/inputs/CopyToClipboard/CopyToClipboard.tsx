import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Button, { ButtonProps } from "../Button/Button";
import { useExtendedTheme } from "../../../../export";
import { Tooltip, tooltipClasses } from "@mui/material";

export type CopyToClipboardProps = ButtonProps & {
  text: string;
  title?: string;
  ariaLabel?: string;
  testFailure?: boolean;
  variant?: "link" | "text" | "noStyle" | "primary" | "secondary" | "tertiary" | undefined;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  title = "copy to clipboard",
  ariaLabel = "copy to clipboard",
  testFailure = false,
  color,
  variant,
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
      console.error(errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <Tooltip
      title={error || ""}
      open={!!error}
      arrow
      placement="top"
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: { offset: [0, 8] },
          },
        ],
      }}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: theme.palette.error.main,
            [`& .${tooltipClasses.arrow}`]: {
              color: theme.palette.error.main,
            },
            fontSize: "0.75rem",
          },
        },
      }}
    >
      <Button
        onClick={handleClick}
        disableRipple
        title={title + !text ? '(no text to copy)' : ''}
        aria-label={ariaLabel}
        sx={sx}
        color={color}
        variant={variant}
        disabled={!text}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
    </Tooltip>
  );
};

export default CopyToClipboard;
