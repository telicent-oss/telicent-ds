import { IconButton, Button, Box } from "@mui/material";
export const mui = { IconButton, Button, Box };
import "./main.css";

// export * from "./components";
export { default as useDebounce } from "./hooks/useDebounce";
export { default as useExtendedTheme } from "./hooks/useExtendedTheme";

// V1
export * from "./components/data-display";
export * from "./components/feedback";
export * from "./components/inputs";
export * from "./components/buttons";
export * from "./components/layout";
export * from "./components/surfaces";
export * from "./theme";
export * from "./components/utils/index";
export * from "./components/Brand/index";
export * from "./components/SearchAutocompleteDialog";
export { default as TeliTypeIcon } from "./components/TypeIcon/TypeIcon";

// Component library
export * from "./feature-components/Map";
export * from "./feature-components/InsetInMap";
export * from "./feature-components/Map/v2/primitives/MapCanvas/MapCanvas";
export * from "./feature-components/Map/v2/primitives/LayerSelector/LayerSelector";
export * from "./feature-components/Map/v2/composites/BasicMap/BasicMap";
export * from "./feature-components/Map/v2/types";
export * from "./feature-components/Map/v2/utils";

// Candidate Packages
export * from "./candidate-packages/authorize-flow/exports";

export * from "./candidate-packages/preferred-label-lib";

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

export { renderErrorToHtml } from "./candidate-packages/renderErrorToHtml/renderErrorToHtml";
export { parseOrThrowWithInput } from "./candidate-packages/utils-lib/src/parseOrThrowWithInput/parseOrThrowWithInput";
