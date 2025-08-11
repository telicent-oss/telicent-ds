import React, { ChangeEvent, useState } from "react";
import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import { IconButton } from "../../buttons";
import { faFloppyDisk, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FloppyDiskIcon } from "../../data-display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <IconButton onClick={handleCancel} size="small">
            <FontAwesomeIcon icon={faXmark} />
          </IconButton>
          <IconButton onClick={handleSave} size="small">
            <FontAwesomeIcon icon={faFloppyDisk} />
          </IconButton>
        </>
      ) : (
        <FlexBox justifyContent="center" direction="row" justifyItems="center">
          <Typography>{value}</Typography>
          <IconButton onClick={handleEdit} size="small">
            <FontAwesomeIcon icon={faPencil} size="sm" />
          </IconButton>
        </FlexBox>
      )}
    </Box>
  );
};

export default EditableInput;
