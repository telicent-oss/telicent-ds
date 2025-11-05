import { z } from "zod";

/**
 * Zod schema for validating OAuth2 configuration.
 * Ensures both authServerUrl and popupRedirectUri are absolute URLs.
 *
 * @example
 * ```ts
 * const config = AuthV2ConfigSchema.parse({
 *   authServerUrl: "https://auth.example.com",
 *   popupRedirectUri: "https://app.example.com/auth-callback"
 * });
 * ```
 */
export const AuthV2ConfigSchema = z.object({
  authServerUrl: z.string().url("authServerUrl must be an absolute URL (e.g., https://auth.example.com)"),
  popupRedirectUri: z.string().url("popupRedirectUri must be an absolute URL (e.g., https://app.example.com/callback)")
});

export type AuthV2Config = z.infer<typeof AuthV2ConfigSchema>;
