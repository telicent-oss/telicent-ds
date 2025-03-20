import "./main.css";

export { default as TeliStandardLayout } from "./layouts/TeliStandardLayout/TeliStandardLayout";
export { default as TeliBasicLayout } from "./layouts/TeliBasicLayout/TeliBasicLayout";
export { default as DSProviders } from "./providers/LayoutProviders/DSProviders";
export * from "./components";
export { default as useDebounce } from "./hooks/useDebounce";
export { default as useExtendedTheme } from "./hooks/useExtendedTheme";

// V1
export * from "./v1/components/data-display";
export * from "./v1/components/feedback";
export * from "./v1/components/inputs";
export * from "./v1/components/layout";
export * from "./v1/components/surfaces";
export * from "./v1/theme";
export { Modal, type ModalProps } from "./v1/components/utils/index";

// Component library
export * from "./component-library/Map";

// PROPOSED @telicent-oss/utils-lib
export {
  // getCodec
  getCodec,
  type Codec,
  base64Codec,
  uriComponentCodec,
  // schemaAndTypes
  ENCODE_SEARCH_PARAMS_MODES_Schema,
  type ENCODE_SEARCH_PARAMS_MODES_Type,
  // toStringEncoded
  toStringEncoded,
  type URLSearchParamsInit,
} from "./candidate-packages/utils-lib/src/index";
