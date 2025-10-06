// OAuthFlowDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import AuthServerOAuth2Client from "@telicent-oss/fe-auth-lib";

import { AuthModal } from "./AuthModal";
import { IframeSwitch } from "./IFrameSwitch";
import { createApi } from "./index";
import { AuthEvent, broadcastAuthEvent } from "./broadcastChannelService";

import {
  Alert,
  Breadcrumbs,
  Button,
  ButtonProps,
  Collapse,
  Container,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from "@mui/material";

// Reusables
const SpacedStack = (props: StackProps) => <Stack spacing={2} {...props} />;

const MonoSpace = (props: TypographyProps) => (
  <Typography
    sx={{ fontFamily: "monospace", ...(props?.sx || null) }}
    {...props}
  />
);

const ActionButton = (props: ButtonProps) => (
  <Button
    variant="text"
    size="small"
    sx={{ alignSelf: "flex-start" }}
    {...props}
  />
);

interface OAuthFlowDemoProps {
  config?: {
    clientId?: string;
    authServerUrl?: string;
    popupRedirectUri?: string;
    scope?: string;
  };
}

const OAuthFlowDemo: React.FC<OAuthFlowDemoProps> = ({ config = {} }) => {
  const [client, setClient] = useState<any>(null);
  const [api, setApi] = useState<any>(null);
  const [authState, setAuthState] = useState<"initial" | "callback" | "done">(
    "initial"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [apiStatusDisplay, setApiStatusDisplay] = useState<string>("—");
  const [error, setError] = useState<string | null>(null);
  const [userInfoExpanded, setUserInfoExpanded] = useState(false);
  const [queryClient] = useState(() => new QueryClient());
  
  const popupRedirectUri = "http://localhost:6006/iframe.html?viewMode=story&id=candidate-packages-auth-flow--storybook-oauth-callback&globals=&args=";
  const defaultConfig = {
    clientId: "fe-storybook-app-config",
    authServerUrl: "http://auth.telicent.localhost",
    scope: "openid profile offline_access",
    popupRedirectUri,
    onLogout: () => {
      setAuthState("initial");
      setIsAuthenticated(false);
      setUserInfo(null);
      setApiStatusDisplay("Logged out.");
    },
    ...config,
  };


  useEffect(() => {
    const oauthClient = new AuthServerOAuth2Client(defaultConfig);
    setClient(oauthClient);

    // Create API instance with OAuth client integration
    const apiInstance = createApi(
      "http://protected-api.telicent.localhost",
      oauthClient
    ).withSessionHandling({
      queryClient,
      keysToInvalidate: [],
    });
    setApi(apiInstance);

    const checkAuth = async () => {
      try {
        console.log("checkAuth: Starting authentication check");
        const isAuth = await oauthClient.isAuthenticated();
        console.log("checkAuth: isAuthenticated =", isAuth);
        if (isAuth) {
          setAuthState("done");
          setIsAuthenticated(true);
          const userInfo = oauthClient.getUserInfo();
          console.log("checkAuth: userInfo =", userInfo);
          if (userInfo) {
            setUserInfo(userInfo);
          } else {
            setUserInfo({
              authenticated: true,
              source: "session_only",
              note: "ID token not available, but session is valid",
            });
          }
          // Broadcast authentication success to close AuthModal
          broadcastAuthEvent(AuthEvent.AUTHENTICATED);
        } else {
          console.log("checkAuth: User not authenticated");
          setAuthState("initial");
        }
      } catch (err) {
        console.error("checkAuth: Error =", err);
        setError(String(err));
      }
    };

    // Minimal event handling for OAuth client's popup communication
    const handleOAuthSuccess = () => {
      console.log("OAuth success event received");
      checkAuth();
    };
    const handleOAuthError = () => {
      console.log("OAuth error event received");
      setError("Authentication failed");
      setAuthState("initial");
    };
    const handleOAuthCallback = async (event: CustomEvent) => {
      console.log("OAuth callback event received", event.detail);
      setAuthState("callback");

      try {
        // Process the callback with the provided URL
        const callbackUrl = event.detail.callbackUrl;
        console.log("Processing callback URL:", callbackUrl);
        const callbackResult = await oauthClient.handleCallback(
          new URL(callbackUrl).search
        );
        console.log("Callback processed successfully:", callbackResult);
        checkAuth();
      } catch (error) {
        console.error("Callback processing failed:", error);
        setError(String(error));
        setAuthState("initial");
      }
    };

    window.addEventListener(
      AuthServerOAuth2Client.OAUTH_SUCCESS,
      handleOAuthSuccess
    );
    window.addEventListener(
      AuthServerOAuth2Client.OAUTH_ERROR,
      handleOAuthError
    );
    window.addEventListener("oauth-callback", handleOAuthCallback);

    checkAuth();

    return () => {
      window.removeEventListener(
        AuthServerOAuth2Client.OAUTH_SUCCESS,
        handleOAuthSuccess
      );
      window.removeEventListener(
        AuthServerOAuth2Client.OAUTH_ERROR,
        handleOAuthError
      );
      window.removeEventListener("oauth-callback", handleOAuthCallback);
    };
  }, []);

  // Reset API status when authentication state changes
  useEffect(() => {
    if (isAuthenticated && apiStatusDisplay.includes("⏳")) {
      setApiStatusDisplay("Ready to test");
    }
  }, [isAuthenticated]);

  if (error) {
    return (
      <Container maxWidth="md">
        <Stack>
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => setError(null)}
              >
                Clear
              </Button>
            }
          >
            {error}
          </Alert>
        </Stack>
      </Container>
    );
  }

  return (
    // <ThemeProvider theme={baseTheme}>
    <Container maxWidth="md">
      <SpacedStack>
        <IframeSwitch linkText="Open in dedicated window">
          <SpacedStack>
            {client && <AuthModal authClient={client} debounceMs={3000} />}
            <SpacedStack>
              <Breadcrumbs separator="→">
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: authState === "initial" ? "bold" : "normal",
                    color:
                      authState === "initial"
                        ? "primary.main"
                        : "text.secondary",
                  }}
                >
                  1. Unauthenticated
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: authState === "callback" ? "bold" : "normal",
                    color:
                      authState === "callback"
                        ? "primary.main"
                        : "text.secondary",
                  }}
                >
                  2. Processing Code
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight:
                      authState === "done" && isAuthenticated
                        ? "bold"
                        : "normal",
                    color:
                      authState === "done" && isAuthenticated
                        ? "success.main"
                        : "text.secondary",
                  }}
                >
                  3. Authenticated
                </Typography>
              </Breadcrumbs>
            </SpacedStack>
          </SpacedStack>

          <SpacedStack>
            <SpacedStack>
              <Typography variant="h5">
                AuthServerOAuth2Client-powered methods
              </Typography>
              <SpacedStack>
                <MonoSpace variant="body2">loginWithPopup()</MonoSpace>
                <ActionButton
                  onClick={() => client?.loginWithPopup(popupRedirectUri)}
                  disabled={isAuthenticated}
                >
                  Call
                </ActionButton>
              </SpacedStack>

              <SpacedStack>
                <MonoSpace variant="body2">logout()</MonoSpace>
                <ActionButton
                  onClick={async () => {
                    if (client) await client.logout();
                  }}
                  disabled={!isAuthenticated}
                >
                  Call
                </ActionButton>
              </SpacedStack>

              <SpacedStack>
                <MonoSpace variant="body2">
                  Mock Api call createApi().instance.get("//protected-api.telicent.localhost/data")
                </MonoSpace>
                <ActionButton
                  onClick={async () => {
                    if (!api) return;
                    setApiStatusDisplay("⏳ Loading...");

                    // Add timeout and cleanup
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

                    try {
                      const response = await api.instance.get(
                        "http://protected-api.telicent.localhost/get",
                        { signal: controller.signal }
                      );
                      setApiStatusDisplay(`${response.status >= 400 ? '❌' : '✅'} ${response.status}`);
                    } catch (err) {
                      if (controller.signal.aborted) {
                        setApiStatusDisplay("⏰ Request timeout");
                      } else if (err && typeof err === 'object' && 'response' in err) {
                        const status = err.response?.status;
                        if (status === 401) {
                          setApiStatusDisplay("🔄 Session expired - redirecting to login");
                        } else {
                          setApiStatusDisplay(`❌ ${status || 'Network error'}`);
                        }
                      } else {
                        const message = err && typeof err === 'object' && 'message' in err && typeof err.message === 'string' ? err.message : 'Unknown error';
                        setApiStatusDisplay(`⛔ ${message}`);
                      }
                    } finally {
                      clearTimeout(timeoutId);
                    }
                  }}
                  disabled={!api || apiStatusDisplay.includes("⏳")}
                >
                  Call
                </ActionButton>
                <Typography variant="body2">{apiStatusDisplay}</Typography>
              </SpacedStack>

              {/* getUserInfo() under Methods */}
              <SpacedStack>
                <MonoSpace variant="body2">getUserInfo()</MonoSpace>
                {userInfo ? (
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => setUserInfoExpanded(!userInfoExpanded)}
                  >
                    See info {userInfoExpanded ? "▼" : "▶"}
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    (auto-called when logged in)
                  </Typography>
                )}

                <Collapse in={userInfoExpanded}>
                  {!userInfo ? (
                    <Typography variant="body2" color="text.secondary">
                      No user info available
                    </Typography>
                  ) : (
                    <pre
                      style={{
                        fontFamily: "monospace",
                        fontSize: "14px",
                        margin: 0,
                      }}
                    >
                      {JSON.stringify(userInfo, null, 2)}
                    </pre>
                  )}
                </Collapse>
              </SpacedStack>
            </SpacedStack>
          </SpacedStack>
        </IframeSwitch>
      </SpacedStack>
    </Container>
    // </ThemeProvider>
  );
};

const meta = {
  title: "candidate-packages/auth-flow",
  component: OAuthFlowDemo,
  parameters: {
    docs: {
      description: {
        component: `
React equivalent of spa-client/public/index.html. Demonstrates the complete OAuth2 flow using AuthServerOAuth2Client.
        `,
      },
    },
  },
  tags: [],
} satisfies Meta<typeof OAuthFlowDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginWithPopup: Story = { args: {} };

// export const WithNewWindow: Story = {
//   args: {
//     config: {
//       redirectTarget: { type: "newWindow", features: "width=600,height=700" },
//     },
//   },
// };

// export const WithCustomConfig: Story = {
//   args: {
//     config: {
//       clientId: "custom-spa-client",
//       scope: "openid profile email",
//       redirectTarget: { type: "window" },
//     },
//   },
// };

const LoginSuccessComponent = () => {
  const [msLeft, setMsLeft] = useState(3000);
  const [status, setStatus] = useState("Processing callback...");
  const [workComplete, setWorkComplete] = useState(false);

  // Use OAuth client to handle popup callback automatically
  useEffect(() => {
    const handleCallback = async () => {
      try {
        const client = new AuthServerOAuth2Client({
          clientId: "fe-storybook-app-config",
          authServerUrl: "http://auth.telicent.localhost",
          scope: "openid profile offline_access",
        });

        client.finishPopupFlow();
        setStatus("Callback completed!");
      } catch (error) {
        console.error("Callback error:", error);
        setStatus("Callback failed!");
      }
      setWorkComplete(true);
    };

    handleCallback();
  }, []);

  // RAF countdown → close at 0 (only start after work is complete)
  useEffect(() => {
    if (!workComplete) return;

    const end = performance.now() + 3000;
    let raf = 0;
    const tick = (now: number) => {
      const remaining = Math.max(0, end - now);
      setMsLeft(remaining);
      if (remaining <= 0) {
        window.close();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [workComplete]);

  const secs = (msLeft / 1000).toFixed(1);

  return (
    <Container maxWidth="sm">
      <Stack>
        <Typography variant="h4">OAuth Callback</Typography>
        <Typography>{status}</Typography>
        <Typography>This window will close in {secs}s…</Typography>
        <Stack direction="row">
          <ActionButton onClick={() => window.close()}>Close now</ActionButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export const LoginCurrentWindow: StoryObj = {
  name: "Login (Current Window) - TODO",
  render: () => {
    return (
      <Container maxWidth="md">
        <SpacedStack>
          <Typography variant="h4">TODO: Create login() Call Version</Typography>
          <Typography variant="h6">UI Components to Add:</Typography>
          <Typography component="div">
            <ul>
              <li>Authentication status indicator</li>
              <li>login() button with current window redirect</li>
              <li>User info display section</li>
              <li>Protected API call test button</li>
              <li>Logout button</li>
              <li>OAuth flow progress breadcrumbs</li>
              <li>Error handling and display</li>
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Note: This will require a different clientId/redirectUri configuration
            than the popup version since the callback behavior differs.
          </Typography>
        </SpacedStack>
      </Container>
    );
  },
  parameters: { layout: "centered" },
};

export const StorybookOauthCallback: StoryObj = {
  name: "Login success",
  render: () => {
    return (
      <IframeSwitch linkText="Open in dedicated window">
        <LoginSuccessComponent />
      </IframeSwitch>
    );
  },
  parameters: { layout: "centered" },
};
