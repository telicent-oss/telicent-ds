import { default as React } from 'react';
import { CardProps as MUICardProps } from '@mui/material/Card';
import { CardHeaderProps as MUICardHeaderProps } from '@mui/material/CardHeader';

type CardProps = Omit<MUICardProps, "classes" | "raised" | "sx"> & Partial<{
    maxWidth: React.CSSProperties["maxWidth"];
}>;
declare const Card: React.FC<CardProps>;
declare const CardHeader: React.FC<MUICardHeaderProps>;
export default Card;
export { CardHeader };
