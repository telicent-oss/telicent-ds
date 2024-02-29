import { startCase } from "lodash";
import { IconStyle, StyleResponse } from "./OntologyStyles";

const hasFragment = (uri: string) =>
  uri && uri.startsWith("http") && uri.includes("#");

export const getURIFragment = (uri: string) => {
  if (hasFragment(uri)) {
    const uriParts = uri.split("#");
    return uriParts.length > 1 ? uriParts[1] : uri;
  }
  return uri;
};

const getInitials = (value: string) => {
  if (value) {
    const REGEX_GET_FIRST_CHAR_OF_STRING = /(\b[a-zA-Z0-9])?/g; // matches any alphanumeric character (letters or digits).
    const initials = value.match(REGEX_GET_FIRST_CHAR_OF_STRING);
    if (initials) return initials.join("").slice(0, 3);
  }

  console.warn(
    `Telicent DS (getInitials): Unable to get initials from "${value}"`
  );
  return "";
};

export const getTypeInitials = (type: string) => {
  if (hasFragment(type)) {
    const uriParts = type.split("#");
    if (uriParts.length === 2) return getInitials(startCase(uriParts[1]));
  }

  return type ?? "";
};

export const flattenStyles = (data: StyleResponse): IconStyle[] => {
  return Object.entries(data).map(([classUri, style]) => ({
    classUri,
    backgroundColor: style.defaultStyles.dark.backgroundColor,
    color: style.defaultStyles.dark.color,
    iconFallbackText: getTypeInitials(classUri),
    alt: getURIFragment(classUri),
    shape: style.defaultStyles.shape,
    faUnicode: style.defaultIcons.faUnicode,
    faIcon: style.defaultIcons.faIcon,
  }));
};
