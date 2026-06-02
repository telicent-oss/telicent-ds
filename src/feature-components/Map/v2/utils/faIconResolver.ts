import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

type ResolveStatus = "ready" | "missing" | "loading" | "invalid";

interface ResolveResult {
  path?: string;
  status: ResolveStatus;
}

type FaIconLoader = (faIcon: string) => Promise<IconDefinition | undefined>;

/* ------------------------------------------------------------------ */
/* Cache                                                              */
/* ------------------------------------------------------------------ */

const svgPathCache = new Map<string, string | undefined>();
const inflightLoads = new Map<string, Promise<string | undefined>>();

/* ------------------------------------------------------------------ */
/* Loader registry                                                    */
/* ------------------------------------------------------------------ */

const loaders: FaIconLoader[] = [];

/**
 * Register an icon loader (app or library).
 * Loaders are tried in registration order.
 */
export const registerFaIconLoader = (loader: FaIconLoader): void => {
  loaders.unshift(loader); // app loaders take precedence
};

/* ------------------------------------------------------------------ */
/* Default FREE icon loader (library safe)                            */
/* ------------------------------------------------------------------ */

const classToIconName = (faClass: string): string => {
  const parts = faClass.trim().split(/\s+/);
  const name = parts[1] ?? "";

  return (
    "fa" +
    name
      .replace("fa-", "")
      .replace(/^-/, "")
      .replace(/-./g, (x) => x[1].toUpperCase())
      .replace(/^./, (x) => x.toUpperCase())
  );
};

const isIconDefinition = (value: unknown): value is IconDefinition => {
  return (
    !!value &&
    typeof value === "object" &&
    "icon" in value &&
    Array.isArray((value as IconDefinition).icon)
  );
};

const freeLoader: FaIconLoader = async (faClass) => {
  const [prefix] = faClass.trim().split(/\s+/);
  const iconName = classToIconName(faClass);

  try {
    const mod =
      prefix === "fa-solid"
        ? await import("@fortawesome/free-solid-svg-icons")
        : await import("@fortawesome/free-regular-svg-icons");

    const candidate = (mod as Record<string, unknown>)[iconName];

    return isIconDefinition(candidate) ? candidate : undefined;
  } catch {
    return undefined;
  }
};

/* register default loader LAST (lowest priority) */
loaders.push(freeLoader);

/* ------------------------------------------------------------------ */
/* Resolution                                                         */
/* ------------------------------------------------------------------ */

export const resolveFaIconPath = (
  faIcon?: string | IconDefinition
): ResolveResult => {
  if (!faIcon) return { status: "missing" };

  if (typeof faIcon !== "string") {
    const path = faIcon.icon?.[4] as string | undefined;
    return { path, status: path ? "ready" : "invalid" };
  }

  if (svgPathCache.has(faIcon)) {
    const path = svgPathCache.get(faIcon);
    return { path, status: path ? "ready" : "invalid" };
  }

  if (inflightLoads.has(faIcon)) {
    return { status: "loading" };
  }

  return { status: "missing" };
};

/**
 * Ensure an icon is loaded using the loader chain.
 */
export const ensureFaIconPath = async (
  faIcon: string
): Promise<string | undefined> => {
  if (svgPathCache.has(faIcon)) {
    return svgPathCache.get(faIcon);
  }

  if (inflightLoads.has(faIcon)) {
    return inflightLoads.get(faIcon)!;
  }

  const promise = (async () => {
    try {
      for (const loader of loaders) {
        const def = await loader(faIcon);
        if (def?.icon?.[4]) {
          const path = def.icon[4] as string;
          svgPathCache.set(faIcon, path);
          return path;
        }
      }

      svgPathCache.set(faIcon, undefined);
      return undefined;
    } finally {
      inflightLoads.delete(faIcon);
    }
  })();

  inflightLoads.set(faIcon, promise);
  return promise;
};
