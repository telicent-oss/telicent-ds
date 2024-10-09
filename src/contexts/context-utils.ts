import { startCase } from "lodash";
import { IconStyle, StyleResponse } from "./OntologyStyles";

const PREFIX_LOOKUP: Record<string, string> = {
  "http://telicent.io/ontology/": "telicent:",
};

const hasFragment = (uri: string) => uri && uri.startsWith("http") && uri.includes("#");

export const getOntologyClass = (uri: string) => {
  if (hasFragment(uri)) {
    const uriParts = uri.split("#");
    return uriParts.length > 1 ? uriParts[1] : uri;
  }

  const foundNamespace = Object.keys(PREFIX_LOOKUP).find((namespace) => {
    return uri.startsWith(namespace);
  });

  if (foundNamespace) {
    return uri.replace(foundNamespace, "");
  }

  return uri;
};

const getInitials = (value: string) => {
  if (value) {
    const REGEX_GET_FIRST_CHAR_OF_STRING = /(\b[a-zA-Z0-9])?/g; // matches any alphanumeric character (letters or digits).
    const initials = value.match(REGEX_GET_FIRST_CHAR_OF_STRING);
    if (initials) return initials.join("").slice(0, 3);
  }

  console.warn(`Telicent DS (getInitials): Unable to get initials from "${value}"`);
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
    alt: getOntologyClass(classUri),
    shape: style.defaultStyles.shape,
    faUnicode: style.defaultIcons.faUnicode,
    faIcon: style.defaultIcons.faIcon,
  }));
};
