import { default as React } from '../../../../node_modules/react';
export interface BrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    appName?: string;
    beta?: boolean;
    size?: "base" | "jumbo";
}
declare const Brand: React.FC<BrandProps>;
export default Brand;
