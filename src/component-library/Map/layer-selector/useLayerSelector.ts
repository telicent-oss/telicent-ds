// !CRITICAL do not extend. Duplicated from graph
// TODO import from shared repo
// WHEN TELFE-876
import { useCallback, useState } from "react";
import { z } from "zod";
import { LayerOption } from "./LayerSelector";

export const MapBoxSourceSchema = z.object({
  label: z.string(),
  uri: z.string(),
  image: z.string(),
});

// todo access mapStyles form here
export const useStyleSelector = (initialMapConfig) => {
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
      data: [mapConfig?.vectorStyles, ...mapConfig.tileSets].filter(Boolean),
    },
  };
};
