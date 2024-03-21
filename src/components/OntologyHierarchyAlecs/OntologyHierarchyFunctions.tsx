import { IconStyle } from "../../contexts/OntologyStyles";

export const checkOntology = (iconType: string, findIcon: (classUri: string) => IconStyle) => {
  const flatOntology = findIcon(iconType);

  if (!flatOntology.faUnicode) {
    flatOntology.faIcon = "";
    flatOntology.faUnicode = flatOntology.iconFallbackText;
    flatOntology.shape = "roundrectangle";
  }
  return flatOntology as Required<IconStyle>;
};
