import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button/Button";
import { useExtendedTheme } from "../../../../export";
import { ButtonProps } from "@mui/material";

export type CopyToClipboardProps = ButtonProps & { text: string; title: string; ariaLabel?: string };

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, title, ariaLabel = "copy to clipboard", sx }) => {
  const [copyIcon, setCopyIcon] = useState(faCopy);
  const theme = useExtendedTheme();

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyIcon(faCheck);
      setTimeout(() => {
        setCopyIcon(faCopy);
      }, 1500);
    } catch (error) {
      console.error("Clipboard write failed", error);
    }
  };

  return (
    <Button
      variant="noStyle"
      onClick={handleClick}
      disableRipple
      title={title}
      aria-label={ariaLabel}
      sx={{ color: theme.palette.primary.main, ...sx }}
    >
      <FontAwesomeIcon icon={copyIcon} />
    </Button>
  );
};

export default CopyToClipboard;
