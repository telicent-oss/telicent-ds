import { default as React } from 'react';
import { TeliStandardLayoutHeaderProps } from '../../components/TeliHeader/TeliStandardLayoutHeader';

type MainProps = JSX.IntrinsicElements["main"];
export type TeliStandardLayoutProps = TeliStandardLayoutHeaderProps & MainProps;
declare const TeliStandardLayout: React.FC<TeliStandardLayoutProps>;
export default TeliStandardLayout;
