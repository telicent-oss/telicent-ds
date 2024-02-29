import "./main.css";

export { default as TeliStandardLayout } from "./layouts/TeliStandardLayout/TeliStandardLayout";
export { default as TeliBasicLayout } from "./layouts/TeliBasicLayout/TeliBasicLayout";
export { default as DSProviders } from "./providers/LayoutProviders/DSProviders";
export { useOntologyStyles } from "./contexts/OntologyStyles";
export type { IconStyle } from "./contexts/OntologyStyles";
export * from "./components";
export { default as useDebounce } from "./hooks/useDebounce";

