import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  MobileStepper,
  Paper,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@telicent-oss/mui-icons-material";

const meta: Meta<typeof Stepper> = {
  title: "MUI Coverage/Individual/Stepper",
  excludeStories: ["Markup"],
  component: Stepper,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: completed vs active vs upcoming step icon colours, connector line colour and weight, label typography, step content indentation, mobile stepper progress bar, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const steps: string[] = ["Select dataset", "Map ontology", "Review and publish"];
const activeStep = 1;

export const Markup: React.FC = () => (
  <Stack spacing={5} sx={{ width: 560 }}>
    <Stepper activeStep={activeStep} connector={<StepConnector />}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>

    <Stepper activeStep={activeStep} nonLinear>
      {steps.map((label) => (
        <Step key={label} completed={steps.indexOf(label) < activeStep}>
          <StepButton>{label}</StepButton>
        </Step>
      ))}
    </Stepper>

    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            <Typography variant="body2">Content for {label}.</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>

    <Stack direction="row" spacing={2} alignItems="center">
      <StepIcon icon={1} completed />
      <StepIcon icon={2} active />
      <StepIcon icon={3} />
      <StepIcon icon={4} error />
    </Stack>

    <Paper>
      <MobileStepper
        variant="progress"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small">
            Next
            <ChevronRight />
          </Button>
        }
        backButton={
          <Button size="small">
            <ChevronLeft />
            Back
          </Button>
        }
      />
    </Paper>
  </Stack>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };
