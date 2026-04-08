import { default as React } from '../../../../../node_modules/react';
import { ButtonProps } from '../Button/Button';
export type CopyToClipboardProps = ButtonProps & {
    text: string;
    successMsg?: string;
    ariaLabel?: string;
    testFailure?: boolean;
    style?: String;
};
declare const CopyToClipboard: React.FC<CopyToClipboardProps>;
export default CopyToClipboard;
