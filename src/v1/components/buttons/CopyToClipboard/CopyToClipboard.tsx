import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Button, { ButtonProps } from "../Button/Button";
import { useExtendedTheme } from "../../../../export";
import { Tooltip, tooltipClasses } from "@mui/material";

export type CopyToClipboardProps = ButtonProps & {
  text: string;
  successMsg?: string;
  title?: string;
  ariaLabel?: string;
  testFailure?: boolean;
  style?: String;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  successMsg = "Copied!",
  title = "copy to clipboard",
  ariaLabel = "copy to clipboard",
  testFailure = false,
  sx,
}) => {
  const [icon, setIcon] = useState(faCopy);
  const [message, setMessage] = useState<string | null>(successMsg);
  const [open, setOpen] = useState<boolean>(false);

  const theme = useExtendedTheme();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleClick = async () => {
    try {
      if (testFailure) {
        throw new Error("Simulated clipboard failure");
      }
      await navigator.clipboard.writeText(text);
      setOpen(true);
      setIcon(faCheck);
      setMessage(successMsg);

      setTimeout(() => {
        setIcon(faCopy);
        setOpen(false);
      }, 1500);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Clipboard write failed";
      setMessage(errorMessage);
      setOpen(true);
    }
  };

  return (
    <Tooltip
      title={message}
      onClose={handleTooltipClose}
      open={open}
      leaveDelay={1400}
      arrow
      placement="right"
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: message !== successMsg ? theme.palette.error.main : undefined,
            [`& .${tooltipClasses.arrow}`]: {
              color: message !== successMsg ? theme.palette.error.main : undefined,
            },
            fontSize: "0.75rem",
          },
        },
      }}
    >
      <Button
        style="base"
        onClick={handleClick}
        title={title}
        aria-label={ariaLabel}
        sx={{ color: theme.palette.primary.main, padding: 0.5, borderRadius: 1, ...sx }}
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
    </Tooltip>
  );
};

export default CopyToClipboard;
