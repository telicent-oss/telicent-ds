import { Meta, StoryObj } from '@storybook/react';
import { BasicMapV2 } from './BasicMap';
import { BasicMapProperties } from '../../types/map-types';
export declare const allArgs: BasicMapProperties;
declare const meta: Meta<typeof BasicMapV2>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Empty: Story;
export declare const Template: Story;
