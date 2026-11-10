/**
 * The access part of an IDH security label: who may read the data it is on.
 * See https://docs.telicent.io/core/access/.
 */
export type IdhLabel = {
  classification: string;
  allowedNats: string[];
  allowedOrgs: string[];
  /** A reader needs every one of these groups. */
  groups: string[];
  containsPii?: boolean;
};

/**
 * What the signed-in user may put in an IDH label, read from their own label schema
 * (the-management's `GET /v1/labels/schemas`, the `idh` entry).
 */
export type IdhSchemaOptions = {
  /** Lowest first, capped at the user's clearance. */
  classifications: string[];
  /** `mustInclude`: the user's own nationality, kept so they can read what they label. */
  nats: { options: string[]; mustInclude: string[] };
  /** `mustInclude`: the user's own organisation, kept so they can read what they label. */
  orgs: { options: string[]; mustInclude: string[] };
  /** Only the groups the user holds. */
  groups: { options: string[] };
};

type Loose = Record<string, unknown>;

const at = (node: unknown, ...path: string[]): unknown =>
  path.reduce((acc: unknown, key) => (acc as Loose | undefined)?.[key], node);

const strings = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

/**
 * Follows a local `$ref` into the schema's `$defs`. Pydantic's model_json_schema() nests
 * sub-models that way, as a bare `{$ref}` or wrapped in `allOf`.
 */
const resolveRef = (node: unknown, root: unknown): unknown => {
  const ref = at(node, "$ref") ?? at(node, "allOf", "0", "$ref");
  if (typeof ref !== "string" || !ref.startsWith("#/")) {
    return node;
  }
  return at(root, ...ref.slice(2).split("/"));
};

/**
 * Reads the option lists out of the user's IDH label schema. Returns null when the schema has
 * no access block, or no classifications, nationalities or organisations: the user can then
 * build no valid label, so the caller should not offer labelling.
 */
export const extractIdhOptions = (idhSchema: unknown): IdhSchemaOptions | null => {
  const access = at(resolveRef(at(idhSchema, "properties", "access"), idhSchema), "properties");
  if (!access || typeof access !== "object") {
    return null;
  }
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

/**
 * The label a form starts from: the lowest classification, the user's own nationality and
 * organisation (or the first of each), and no groups.
 */
export const defaultIdhLabel = (options: IdhSchemaOptions): IdhLabel => ({
  classification: options.classifications[0],
  allowedNats: options.nats.mustInclude.length > 0 ? options.nats.mustInclude : options.nats.options.slice(0, 1),
  allowedOrgs: options.orgs.mustInclude.length > 0 ? options.orgs.mustInclude : options.orgs.options.slice(0, 1),
  groups: [],
});

/**
 * True when someone can read data under the label: it has a classification, and at least one
 * nationality and one organisation.
 */
export const isIdhLabelComplete = (label: IdhLabel): boolean =>
  label.classification !== "" && label.allowedNats.length > 0 && label.allowedOrgs.length > 0;
