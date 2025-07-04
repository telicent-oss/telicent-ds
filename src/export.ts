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
export * from "./v1/components/utils/index";

// Component library
export * from "./component-library/Map";

// Candidate Packages
export * from "./candidate-packages/authorize-flow/AuthModal";
export * from "./candidate-packages/authorize-flow/broadcastChannelService";
export * from "./candidate-packages/authorize-flow/useAuthSync";
export * from "./candidate-packages/authorize-flow";

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
  GRAPH_APP,
  // Logger
  type LoggerLevelString,
  type LoggerLevel,
  loggerLevelOrder,
  Logger,
} from "./candidate-packages/utils-lib/src/index";

// PROPOSED @telicent-oss/logout-syncer
export {
  setupWipe,
  WipeConfigSchema,
  type WipeConfig,
} from "./candidate-packages/logout-syncer/setupWipe";
export { requestWipe } from "./candidate-packages/logout-syncer/requestWipe";

export { renderErrorToHtml } from "./candidate-packages/renderErrorToHtml/renderErrorToHtml";
export { parseOrThrowWithInput } from "./candidate-packages/utils-lib/src/parseOrThrowWithInput/parseOrThrowWithInput";
