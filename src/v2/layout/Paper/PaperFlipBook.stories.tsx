import React, { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default {
  component: Paper,
} as Meta<typeof Paper>;


// Different args to cycle through
const cycledArgs:Array<Partial<PaperProps>> = [
  { elevation:1 },
  { elevation:4 },
  { elevation:8 },
  { elevation:16 },
  { variant: 'outlined' }
]

const Template: StoryFn<typeof Paper> = (passedArgs) => {
  const [args, setArgs] = useState(passedArgs);

  useEffect(() => {

    let current = 0;
    const interval = setInterval(() => {
      setArgs(cycledArgs[current]);
      current++;
      if (current === cycledArgs.length) {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper {...args}>
      {cycledArgs
        .map(el => JSON.stringify(el))
        .map(el => {
          const argsStr = JSON.stringify(args);
          return <Typography color={el === argsStr ? 'inherit' : 'grey'} style={{padding: '20px' }}>{el}</Typography>
        })

      }
      
    </Paper>
  );
};

export const PaperFlipBook = Template.bind({});
/*
ChatGPT: 
  The use of Template.bind({}) in Storybook is a 
  common pattern for creating stories, especially 
  when you need to re-use a single template function 
  across multiple stories with variations. 

export const Basic = Template.bind({});
Basic.args = {
  elevation: 1,
  content: 'Basic Example'
};
*/

PaperFlipBook.args = {
  // I think this must be blank
};
