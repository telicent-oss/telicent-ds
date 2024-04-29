import React from 'react';
import { Paper, Typography } from "@mui/material"

const elevatedStyle = { padding: 20, marginBottom: 20 };

export const ExampleElevatedContent: React.FC = () => (
    <>
      <Paper elevation={1} style={elevatedStyle}>
        <Typography variant="h6">Content Block 1</Typography>
        <Typography>The Container centers this content horizontally.</Typography>
        <Typography>{JSON.stringify(elevatedStyle)}</Typography>
      </Paper>
      <Paper elevation={1} style={elevatedStyle}>
        <Typography variant="h6">Content Block 2</Typography>
        <Typography>See controls to modify behavior.</Typography>
        <Typography>{JSON.stringify(elevatedStyle)}</Typography>
      </Paper>
    </>
  );


const typographyStyle = { padding: '16px' };
export const ExampleTypographyContent: React.FC = () => (
    <>
        <Typography style={typographyStyle} variant="h6">Typography h6</Typography>
        <Typography style={typographyStyle} >Typography regular text.</Typography>
        <Typography style={typographyStyle} variant="h6">Typography h6</Typography>
        <Typography style={typographyStyle}>{`Typography has style= ${JSON.stringify(typographyStyle)}`}</Typography>

    </>
  );


  export const ExampleContent: React.FC = () => (
    <>
        <ExampleTypographyContent />
        <ExampleElevatedContent />

    </>
  );