export type DesignParam = { type: "figma"; url: string } | { type: "figspec"; url: string };

export const figmaDesign = (url: string): { design: DesignParam } => {
  const token = (import.meta as any).env?.VITE_FIGSPEC as boolean | false;

  if (!token) {
    return { design: { type: "figma", url } };
  }

  return { design: { type: "figspec", url } };
};
