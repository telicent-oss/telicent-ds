import { default as React } from 'react';
import { ButtonProps } from '@mui/material';

type PrimaryButtonProps = Omit<ButtonProps, "variant" | "color">;
declare const PrimaryButton: React.FC<PrimaryButtonProps>;
export default PrimaryButton;
