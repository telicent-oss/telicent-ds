import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import License from "./License";

const meta: Meta<typeof License> = {
  component: License,
};

export default meta;

type Story = StoryObj<typeof License>;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const MitLicense = (
  <>
    <p>MIT License </p>
    <p>Copyright (c) 2023 Telicent </p>
    <p>
      Permission is hereby granted, free of charge, to any person obtaining a
      copy of this software and associated documentation files (the “Software”),
      to deal in the Software without restriction, including without limitation
      the rights to use, copy, modify, merge, publish, distribute, sublicense,
      and/or sell copies of the Software, and to permit persons to whom the
      Software is furnished to do so, subject to the following conditions: The
      above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
    </p>
    <p>
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
      THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
      DEALINGS IN THE SOFTWARE.
    </p>
  </>
);

export const Example: Story = {
  args: {
    appName: "design system",
    appVersion: "1.3",
    expiryDate: tomorrow,
    licenseCopy: MitLicense,
  },
};

export const ExpiredLicenseExample: Story = {
  args: {
    appName: "design system",
    appVersion: "1.3",
    expiryDate: today,
    licenseCopy: MitLicense,
  },
};

export const NoDateExample: Story = {
  args: {
    appName: "design system",
    appVersion: "1.3",
    licenseCopy: MitLicense,
  },
};
