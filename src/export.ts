import "./main.css";

export { default as TeliStandardLayout } from "./layouts/TeliStandardLayout/TeliStandardLayout";
export { default as TeliBasicLayout } from "./layouts/TeliBasicLayout/TeliBasicLayout";
export { default as DSProviders } from "./providers/LayoutProviders/DSProviders";
export { useOntologyStyles } from "./contexts/OntologyStyles";
export type { IconStyle } from "./contexts/OntologyStyles";
export * from "./components";
export { default as useDebounce } from "./hooks/useDebounce";

// Components
export * from './v2/components/Input/Input';
export { default as ButtonBase } from './v2/components/ButtonBase/ButtonBase';
export { default as Divider } from './v2/components/Divider/Divider';
export { default as Text, H1, H2, H3, H4, H5, H6 } from './v2/components/Text/Text';
export * from './v2/components/TreeView/TreeView';
export * from './v2/components/Button/Button';
export * from './v2/components/Skeleton/Skeleton';
export * from './v2/components/LinearProgress/LinearProgress';

// Layout
export { default as Grid } from './v2/layout/Grid/Grid';
export { default as Card } from './v2/layout/Card/Card';
export { default as Container } from './v2/layout/Container/Container';
export { default as Box } from './v2/layout/Box/Box';
export { default as Stack } from './v2/layout/Stack/Stack';
export { default as StandardAppChrome } from './v2/layout/StandardAppChrome/StandardAppChrome';
export * from './v2/layout/Paper/Paper';

// Utils
export { default as Popover } from './v2/utils/Popover/Popover';

// Icons
export { default as AccountIcon } from './v2/icons/AccountIcon/AccountIcon';
export { default as SearchIcon } from './v2/icons/SearchIcon/SearchIcon';


