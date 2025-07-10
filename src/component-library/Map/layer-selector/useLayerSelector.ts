// !CRITICAL do not extend. Duplicated from graph
// TODO import from shared repo
// WHEN TELFE-876
import { useCallback, useState } from "react";
import { z } from "zod";
import { LayerOption } from "./LayerSelector";
import { StyleOption } from "../utils/schema";

export const MapBoxSourceSchema = z.object({
  label: z.string(),
  uri: z.string(),
  image: z.string(),
});

// todo access mapStyles form here
export const useStyleSelector = (initialMapConfig: {
  vectorStyles?: StyleOption | StyleOption[]; // by the looks of it we are only allowed up to one vector style, so why are we accepting an array?
  tileSets?: StyleOption[];
}) => {
  const [selected, setSelected] = useState<z.infer<
    typeof MapBoxSourceSchema
  > | null>(null);
  const [mapConfig] = useState({ tileSets: [], ...initialMapConfig });
  const onChange = useCallback(
    (value: LayerOption) => setSelected(value),
    [setSelected]
  );
  return {
    selected,
    mapConfig,
    props: {
      onChange,
      data: [
        ...(Array.isArray(mapConfig.vectorStyles)
            ? mapConfig.vectorStyles
            : mapConfig.vectorStyles
            ? [mapConfig.vectorStyles]
            : []),
        ...mapConfig.tileSets].filter(Boolean),
    },
  };
};
