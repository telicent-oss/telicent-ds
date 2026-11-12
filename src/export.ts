import { Box,Button, IconButton } from "@mui/material";
export const mui = { IconButton, Button, Box };
import "./main.css";

export { default as useDebounce } from "./hooks/useDebounce";
export { default as useExtendedTheme } from "./hooks/useExtendedTheme";

// V1
export * from "./components/Brand/index";
export * from "./components/buttons";
export * from "./components/data-display";
export * from "./components/feedback";
export * from "./components/inputs";
export * from "./components/layout";
export * from "./components/Navigation";
export * from "./components/SearchAutocompleteDialog";
export * from "./components/surfaces";
export { default as TeliTypeIcon } from "./components/TypeIcon/TypeIcon";
export * from "./components/utils/index";
export * from "./theme";

// Component library
export * from "./feature-components/InsetInMap";
export * from "./feature-components/Map/v2/composites/BasicMap/BasicMap";
export * from "./feature-components/Map/v2/primitives/controls/ButtonZoomIn";
export * from "./feature-components/Map/v2/primitives/controls/ButtonZoomOut";
export * from "./feature-components/Map/v2/primitives/controls/MapToggleButtonPresentational";
export * from "./feature-components/Map/v2/primitives/LayerSelector/LayerSelector";
export * from "./feature-components/Map/v2/primitives/MapCanvas/MapCanvas";
export * from "./feature-components/Map/v2/types";
export * from "./feature-components/Map/v2/utils";

// Candidate Packages
export * from "./utils/authorize-flow/exports";
export * from "./utils/preferred-label-lib";

// PROPOSED @telicent-oss/utils-lib
export { renderErrorToHtml } from "./utils/renderErrorToHtml/renderErrorToHtml";
export {
  base64Codec,
  type Codec,
  // schemaAndTypes
  ENCODE_SEARCH_PARAMS_MODES_Schema,
  type ENCODE_SEARCH_PARAMS_MODES_Type,
  // getCodec
  getCodec,
  GRAPH_APP,
  Logger,
  type LoggerLevel,
  loggerLevelOrder,
  // Logger
  type LoggerLevelString,
  // toStringEncoded
  toStringEncoded,
  uriComponentCodec,
  type URLSearchParamsInit,
} from "./utils/utils-lib/src/index";
export { parseOrThrowWithInput } from "./utils/utils-lib/src/parseOrThrowWithInput/parseOrThrowWithInput";
