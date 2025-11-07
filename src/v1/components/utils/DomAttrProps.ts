// dom-attrs.ts
import * as React from "react";

type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

export type DataKeys<T> = Extract<keyof T, `data-${string}`>;
export type AriaKeys<T> = Extract<keyof T, `aria-${string}`>;

// data-*
export type DataProps<T extends React.ElementType> =
  Pick<PropsOf<T>, DataKeys<PropsOf<T>>>;

// data-*, or aria-* or role
export type DataAriaRoleProps<T extends React.ElementType> =
  Pick<PropsOf<T>, DataKeys<PropsOf<T>> | AriaKeys<PropsOf<T>> | "role">;

/**
 * Helper generics.
 * 
 * Usage:
 *```ts
 *type BaseProps = {
 *  fullName: string;
 *  children?: React.ReactNode;
 * 
 *};
 *
 *type UserProfileProps = WithDataAriaRole<typeof Stack, BaseProps>;
 *```
 */

export type WithData<T extends React.ElementType, P = {}> =
  P & DataProps<T>;

export type WithDataAriaRole<T extends React.ElementType, P = {}> =
  P & DataAriaRoleProps<T>;

/**
 * Runtime filters (optional but recommended)
 * 
 * Explicity pick data/aria/role
 * ```
 * const ({ children, ...rest }) =>
 *  <div {...pickDataProps(rest)}>{children}</div>
 * ```
 */
export function pickDataProps<T extends React.ElementType>(
  props: Partial<PropsOf<T>>
): DataProps<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props as Record<string, unknown>)) {
    if (k.startsWith("data-")) out[k] = v;
  }
  return out as DataProps<T>;
}

export function pickDataAriaRoleProps<T extends React.ElementType>(
  props: Partial<PropsOf<T>>,
  opts: { includeRole?: boolean } = { includeRole: true }
): DataAriaRoleProps<T> {
  const out: Record<string, unknown> = {};
  const includeRole = opts.includeRole ?? true;

  for (const [k, v] of Object.entries(props as Record<string, unknown>)) {
    if (k.startsWith("data-") || k.startsWith("aria-") || (includeRole && k === "role")) {
      out[k] = v;
    }
  }
  if (!includeRole) delete (out as any).role;

  return out as DataAriaRoleProps<T>;
}
