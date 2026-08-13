import { useContext } from "react";
import { useStore } from "zustand";
import { AuthContext, AuthContextProps } from "./AuthContext";

export const useAuth = (): AuthContextProps => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");

  // Per-field selectors: a consumer re-renders only when one of these values
  // changes, never because the provider re-rendered.
  const user = useStore(ctx.store, (s) => s.user);
  const error = useStore(ctx.store, (s) => s.error);
  const loading = useStore(ctx.store, (s) => s.loading);

  return {
    user,
    error,
    loading,
    api: ctx.api,
    authClient: ctx.authClient,
    login: ctx.login,
    logout: ctx.logout,
  };
};
