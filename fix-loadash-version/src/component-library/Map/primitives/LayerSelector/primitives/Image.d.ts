import { default as React } from '../../../../../../node_modules/react';
interface ImageProps {
    borderColor?: string;
    src: string;
    alt?: string;
    title: string;
    role?: React.AriaRole;
}
export declare const Image: React.FC<ImageProps>;
export {};
