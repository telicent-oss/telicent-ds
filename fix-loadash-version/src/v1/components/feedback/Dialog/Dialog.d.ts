import { FC, ReactNode } from '../../../../../node_modules/react';
import { DialogProps as MuiDialogProps } from '@mui/material';
export { DialogTitle, DialogContent, DialogActions, } from '@mui/material';
export type { DialogTitleProps, DialogContentProps, DialogActionsProps, } from '@mui/material';
export interface DialogProps extends MuiDialogProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}
declare const Dialog: FC<DialogProps>;
export default Dialog;
