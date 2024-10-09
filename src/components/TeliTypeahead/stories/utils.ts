export type Target = {
  targetUri: string;
  displayName: string;
  primaryType: string;
};

export const transformData = (targets: Target[]) => {
  const options = targets.map((target) => ({
    value: target.targetUri,
    label: target.displayName,
    type: target.primaryType,
  }));
  return options;
};
