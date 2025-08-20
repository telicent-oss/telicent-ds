import React, { ChangeEvent, useState } from "react";
import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import { IconButton } from "../../buttons";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { FlexBox } from "../../layout";
import { Text } from "../../data-display";
import { useExtendedTheme } from "../../../../export";


export type InputText = TextFieldProps & {
  value: string;
  onSave: (value: string) => void;
  errorText?: string;
  fullWidth?: boolean;
};


const EditableTextField: React.FC<InputText> = ({
  value,
  onSave,
  error,
  errorText,
  helperText,
  label,
  fullWidth,
  ...props
}) => {
const EditableTextField: React.FC<InputText> = ({ value, onSave, error, errorText, helperText, label, ...props }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value || "");

  const theme = useExtendedTheme();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(tempValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {isEditing || value === "" ? (
        <FlexBox direction="row" alignItems="baseline" gap={1}>
          <TextField
            autoFocus
            label={label}
            value={tempValue ?? ""}
            onChange={(e) => setTempValue(e.target.value)}
            error={error}
            helperText={error ? errorText : helperText}
            {...props}
          />
          <IconButton onClick={handleSave} size="small">
            <CheckIcon sx={{ color: theme.palette.primary.main, lineHeight: "inherit" }} />
          </IconButton>
          <IconButton onClick={handleCancel} size="small">
            <ClearIcon sx={{ color: theme.palette.primary.main, lineHeight: "inherit" }} />
          </IconButton>
        </FlexBox>
      ) : (
        <FlexBox direction="column">
          {label && <Text sx={{ fontWeight: "bold" }}>{label}:</Text>}
          <FlexBox direction="row" alignItems="center" gap={1}>
            <Typography>{value}</Typography>
            <IconButton onClick={handleEdit} size="small">
              <EditIcon fontSize="inherit" />
            </IconButton>
          </FlexBox>
        </FlexBox>
      )}
    </Box>
  );
};

export default EditableTextField;
