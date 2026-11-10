/** Who may read data under an IDH security label. */
export type IdhLabel = {
  classification: string;
  allowedNats: string[];
  allowedOrgs: string[];
  /** A reader needs all of them. */
  groups: string[];
  containsPii?: boolean;
};

/**
 * What the signed-in user may put in a label, from their own label schema (the-management
 * `GET /v1/labels/schemas`). `mustInclude` holds their own nationality and organisation.
 */
export type IdhSchemaOptions = {
  classifications: string[];
  nats: { options: string[]; mustInclude: string[] };
  orgs: { options: string[]; mustInclude: string[] };
  groups: { options: string[] };
};

const at = (node: unknown, ...path: string[]): unknown =>
  path.reduce((acc: unknown, key) => (acc as Record<string, unknown> | undefined)?.[key], node);

const strings = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

// Pydantic puts sub-models behind a local $ref, bare or wrapped in allOf.
const resolveRef = (node: unknown, root: unknown): unknown => {
  const ref = at(node, "$ref") ?? at(node, "allOf", "0", "$ref");
  return typeof ref === "string" && ref.startsWith("#/") ? at(root, ...ref.slice(2).split("/")) : node;
};

/** Reads the options from the user's `idh` schema. Null when it allows no valid label. */
export const extractIdhOptions = (idhSchema: unknown): IdhSchemaOptions | null => {
  const access = at(resolveRef(at(idhSchema, "properties", "access"), idhSchema), "properties");
  const classifications = strings(at(access, "classification", "enum"));
  const nats = strings(at(access, "allowedNats", "items", "enum"));
  const orgs = strings(at(access, "allowedOrgs", "items", "enum"));
  if (classifications.length === 0 || nats.length === 0 || orgs.length === 0) {
    return null;
  }
  return {
    classifications,
    nats: { options: nats, mustInclude: strings(at(access, "allowedNats", "contains", "enum")) },
    orgs: { options: orgs, mustInclude: strings(at(access, "allowedOrgs", "contains", "enum")) },
    groups: { options: strings(at(access, "groups", "items", "enum")) },
  };
};

/** The lowest classification, the user's own nationality and organisation (or the first), no groups. */
export const defaultIdhLabel = (options: IdhSchemaOptions): IdhLabel => ({
  classification: options.classifications[0],
  allowedNats: options.nats.mustInclude.length > 0 ? options.nats.mustInclude : options.nats.options.slice(0, 1),
  allowedOrgs: options.orgs.mustInclude.length > 0 ? options.orgs.mustInclude : options.orgs.options.slice(0, 1),
  groups: [],
});

/** True when someone can read data under the label. */
export const isIdhLabelComplete = (label: IdhLabel): boolean =>
  label.classification !== "" && label.allowedNats.length > 0 && label.allowedOrgs.length > 0;
