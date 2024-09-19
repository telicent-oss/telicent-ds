import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { Divider, H4, H6, Text } from "../../data-display";
import { Box, Button } from "@mui/material";

const MOCK_DATA_POLICY = `
Effective Date: 25/10/20241. 

1. Introduction

This agency is committed to ensuring the security and confidentiality of the personal and sensitive data we handle. This policy outlines the procedures and responsibilities for managing and protecting data to comply with relevant laws and regulations.

2. Purpose

The purpose of this policy is to:Ensure the proper handling, protection, and use of data.Comply with applicable data protection laws and regulations.Protect the privacy rights of individuals whose data we handle.

3. Scope

This policy applies to all employees, contractors, and third-party service providers of who have access to, or handle, data.

4. Data Collection

Lawful and Fair Collection: Data must be collected lawfully and fairly, and only for specified, explicit, and legitimate purposes.Consent: Where applicable, data subjects must provide informed consent for the collection and processing of their data.

5. Data Use

Purpose Limitation: Data must be used only for the purposes for which it was collected and not further processed in a manner incompatible with those purposes.Data Minimization: Only the minimum necessary data should be collected and processed.

6. Data Storage

Secure Storage: Data must be stored securely to prevent unauthorized access, loss, or damage. This includes physical and electronic storage measures.Retention Period: Data must be retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.

For questions or concerns about this policy or data protection practices, contact John Smiley at 0394 300498.

Approved by:John Smiley
Head of Data Capture
The agency

25/03/2024
`;

const meta: Meta<typeof Modal> = {
  title: "Utils/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof Modal>;

export const Example: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = (_event: {}, reason: string) => {
      if (
        reason === "closeButtonClick" ||
        reason === "backdropClick" ||
        reason === "escapeKeyDown"
      ) {
        setOpen(false);
      } else {
        throw new Error(`Unknown reason: ${reason}`);
      }

    };

    return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal {...{ ...args, open, onClose: handleClose }}>
          <>
            <H4 id="modal-title">Data handling policy:</H4>
            <H6 id="modal-title">Data set 1:</H6>
            <Divider />

            <Box
              sx={{
                mt: 1,
                overflow: "auto", // Enables scrolling when content is too long
                flex: "1 1 auto", // Allows the content to grow and shrink appropriately
              }}
            >
              <Text whiteSpace={"preserve"}>{MOCK_DATA_POLICY}</Text>
            </Box>
          </>
        </Modal>
      </>
    );
  },
};