import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import OntologyService from "@telicent-oss/ontologyservice";
import {
  flattenStyles,
  getTypeInitials,
  getOntologyClass,
} from "./context-utils";

type OntologyStyle = {
  defaultIcons: {
    riIcon: string;
    faIcon: string;
    faUnicode: string;
    faClass: string;
  };
  defaultStyles: {
    shape: string;
    borderRadius: string;
    borderWidth: string;
    selectedBorderWidth: string;
    dark: {
      backgroundColor: string;
      color: string;
    };
    light: {
      backgroundColor: string;
      color: string;
    };
  };
};

export type StyleResponse = Record<string, OntologyStyle>;

export type IconStyle = {
  classUri: string;
  backgroundColor: string;
  color: string;
  iconFallbackText: string;
  alt: string;
} & Partial<{
  faIcon: string;
  faUnicode: string;
  shape: string;
}>;

type OntologyStylesContextProps = {
  isLoadingStyles: boolean;
  styles: IconStyle[];
  findIcon: (classUri: string) => IconStyle;
};

type OntologyStylesProviderProps = {
  service: OntologyService;
} & Partial<{
  children: React.ReactNode;
}>;

const OntologyStylesContext = createContext<OntologyStylesContextProps | null>(
  null
);

const OntologyStylesProvider: React.FC<OntologyStylesProviderProps> = ({
  service,
  children,
}) => {
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

  const query = useQuery({
    queryKey: ["ontology-styles"],
    queryFn: () => service.getStyles(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs,
    enabled: Boolean(service),
    select: flattenStyles,
  });

  const { isLoading: isLoadingStyles, data: styles = [] } = query;

  const findIcon = (classUri: string) => {
    const foundIcon = styles.find((style) => style.classUri === classUri);

    if (foundIcon) return foundIcon;

    const alt = getOntologyClass(classUri);
    const iconFallbackText = getTypeInitials(classUri);

    return {
      classUri,
      color: "#DDDDDD",
      backgroundColor: "#121212",
      iconFallbackText,
      alt,
    };
  };

  return (
    <OntologyStylesContext.Provider value={{ isLoadingStyles, styles, findIcon }}>
      {children}
    </OntologyStylesContext.Provider>
  );
};

const useOntologyStyles = () => {
  const ontology = useContext(OntologyStylesContext);

  if (!ontology) {
    throw new Error(
      "useOntologyService has to be used within <OntologyStylesProvider />"
    );
  }

  return ontology;
};

export { OntologyStylesProvider, useOntologyStyles };
