import { useState } from "react";
import { Input } from "../Input";
import { InputStory } from "../Input.stories";
import { Box, Button, TextField } from "@mui/material";

export const Simple: InputStory = {
  render: () => {
    const [value, setValue] = useState("I'm batman!");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <div className="grid grid-cols-3 gap-3">
        <Input />
        <span color="red" style={{color:'red'}}>Hello</span>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <TextField
            variant="outlined"
            label="Input"
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            Go
          </Button>
        </Box>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Test.",
      },
      source: {
        code: `
        <div className="grid grid-cols-3 gap-3">
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <TextField
              variant="outlined"
              label="Input"
              sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              Go
            </Button>
          </Box>
        </div>
      
      `,
      },
    },
  },
};

export default Simple;
