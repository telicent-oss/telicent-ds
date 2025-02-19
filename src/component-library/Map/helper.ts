import { splitURIForNamespaceAndTerm } from "./strings";

export const getIconLabel = (uri: string) => {
  const [namespace, term] = splitURIForNamespaceAndTerm(uri);
  let label = namespace;
  if (term !== "") {
    label = term;
  }
  return label;
};

export const getLabelCharacters = (label: string): string =>
  label.substring(0, 3);
