import React, { ChangeEvent, useState } from "react";
import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import { IconButton } from "../../buttons";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { FlexBox } from "../../layout";

export type InputText = TextFieldProps & {
  value: string;
  onSave: (value: string) => void;
};

const EditableInput: React.FC<InputText> = ({ value, onSave, ...props }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value || "");

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
      {isEditing ? (
        <>
          <TextField value={tempValue ?? ""} onChange={(e) => setTempValue(e.target.value)} {...props} />
          <IconButton onClick={handleSave} size="small">
            <CheckIcon sx={{ color: "green" }} />
          </IconButton>
          <IconButton onClick={handleCancel} size="small">
            <ClearIcon sx={{ color: "red" }} />
          </IconButton>
        </>
      ) : (
        <FlexBox direction="row" alignItems="center" gap={1}>
          <Typography>{value}</Typography>
          <IconButton onClick={handleEdit} size="small">
            <EditIcon fontSize="inherit" />
          </IconButton>
        </FlexBox>
      )}
    </Box>
  );
};

export default EditableInput;
