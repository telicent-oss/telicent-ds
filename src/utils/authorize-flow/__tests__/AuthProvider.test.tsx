// __tests__/auth-library.test.tsx
import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

import { AuthProvider } from "../context/AuthProvider";
import { useAuth } from "../context/useAuth";
import { AuthRedirectUri } from "../pages/AuthRedirectUri";
import { AuthEvent, broadcastAuthEvent } from "../services/broadcastChannelService";

// ----- MOCKS -----
const mockAuthClient = {
  finishPopupFlow: jest.fn(),
  loginWithPopup: jest.fn(),
  logout: jest.fn(),
  getUserInfo: jest.fn().mockResolvedValue({ name: "Test User", email: "test@example.com" }),
} as any;

const mockConfig = {
  redirectUri: "http://app.redirect.localhost",
  popupRedirectUri: "http://app.popupredirect.localhost",
  authServerUrl: "http://auth.telicent.localhost",
  clientId: "mockClient",
  scope: "offline",
  onLogout: jest.fn(),
}

// ----- PROVIDER WRAPPER -----
const queryClient = new QueryClient();
const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider apiUrl="http://changeme.com" config={mockConfig} queryClient={queryClient}>{children}</AuthProvider>
);

// ----- TESTS -----
describe("Auth Library Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("AuthProvider renders children and modal", async () => {
    render(
      <AuthProvider apiUrl="http://changeme.com" config={mockConfig} queryClient={queryClient}>
        <div>Child Content</div>
      </AuthProvider>
    );

    waitFor(() => {
      expect(screen.getByText("Child Content")).toBeInTheDocument();
    })
    // AuthModal text example
    // Simulate 401
    act(() => {
      broadcastAuthEvent(AuthEvent.UNAUTHORIZED);
    });

    waitFor(() => {
      expect(screen.getByText(/Sign in|Processing login/i)).toBeInTheDocument();
    })
  });

  test("useAuth hook returns context values", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    waitFor(() => {

      expect(result.current.authClient).toBeDefined();
      expect(result.current.api).toBeDefined();
      expect(typeof result.current.login).toBe("function");
      expect(typeof result.current.logout).toBe("function");
    })
  });

  test("AuthRedirectUri calls finishPopupFlow and shows message", () => {
    render(
      <AuthProvider apiUrl="http://changeme.com" config={mockConfig} queryClient={queryClient}>
        <MemoryRouter initialEntries={["/auth-redirect-uri"]}>
          <Routes>
            <Route path="/auth-redirect-uri" element={<AuthRedirectUri config={mockConfig} />} />
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    waitFor(() => {
      expect(screen.getByText(/Processing login/i)).toBeInTheDocument();
      expect(mockAuthClient.finishPopupFlow).toHaveBeenCalled();
    })
  });
});

