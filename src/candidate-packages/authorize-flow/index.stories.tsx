// OAuthFlowDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import AuthServerOAuth2Client, { UserInfo } from "@telicent-oss/fe-auth-lib";

import { AuthModal } from "./components/AuthModal";
import { ForceNoIframe } from "./components/ForceNoIframe";
import { createApi } from "./index";
import { AuthEvent, broadcastAuthEvent } from "./services/broadcastChannelService";
import { setupOAuthEventListeners } from "./services/setupOAuthEventListeners";
import { RequestApi } from "./types";

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
import { AuthProvider } from "./context/AuthProvider";

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

interface NoUserInfo {
  authenticated: boolean;
  source: string;
  note: string;
}

const OAuthFlowDemo: React.FC<OAuthFlowDemoProps> = ({ config = {} }) => {
  const [client, setClient] = useState<AuthServerOAuth2Client | null>(null);
  const [api, setApi] = useState<RequestApi | null>(null);
  const [authState, setAuthState] = useState<"initial" | "callback" | "done">(
    "initial"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | NoUserInfo | null>(null);
  const [apiStatusDisplay, setApiStatusDisplay] = useState<string>("—");
  const [error, setError] = useState<string | null>(null);
  const [userInfoExpanded, setUserInfoExpanded] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  const popupRedirectUri = "http://localhost:6006/iframe.html?viewMode=story&id=candidate-packages-auth-flow--storybook-oauth-callback&globals=&args=";
  const defaultConfig = {
    clientId: "fe-storybook-app-config",
    authServerUrl: "http://auth.telicent.localhost",
    scope: "openid profile offline_access",
    redirectUri: 'http://localhost:6006/',
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

    const handleOAuthSuccess = () => {
      checkAuth();
    };

    const handleOAuthError = (error?: Error) => {
      setError("Authentication failed");
      setAuthState("initial");
    };

    // Set up OAuth event listeners
    const cleanup = setupOAuthEventListeners(
      oauthClient,
      handleOAuthSuccess,
      handleOAuthError
    );

    // Handle callback processing state
    const handleCallback = (event: Event) => {
      const customEvent = event as CustomEvent;
      setAuthState("callback");
    };
    window.addEventListener("oauth-callback", handleCallback);


    checkAuth();

    return () => {
      cleanup();
      window.removeEventListener("oauth-callback", handleCallback);
    };
  }, [apiStatusDisplay]);

  // Reset API status when authentication state changes
  useEffect(() => {
    if (isAuthenticated && (apiStatusDisplay.includes("⏳") || apiStatusDisplay.includes("🔄"))) {
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
        <ForceNoIframe linkText="Open in dedicated window">
          <SpacedStack>
            <AuthProvider config={defaultConfig} queryClient={queryClient} apiUrl="http://changeme.com">
              <AuthModal debounceMs={3000} />
            </AuthProvider>
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
                        const axiosError = err as { response: { status: number } };
                        const status = axiosError.response.status;
                        if (status === 401) {
                          setApiStatusDisplay("🔄 Session expired - redirecting to login");
                        } else {
                          setApiStatusDisplay(`❌ ${status}`);
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
        </ForceNoIframe>
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


const LoginSuccessComponent = () => {
  const [status, setStatus] = useState("Processing callback...");

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
    };

    handleCallback();
  }, []);

  return (
    <Container maxWidth="sm">
      <Stack>
        <Typography variant="h4">OAuth Callback</Typography>
        <Typography>{status}</Typography>
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
      <ForceNoIframe linkText="Open in dedicated window">
        <LoginSuccessComponent />
      </ForceNoIframe>
    );
  },
  parameters: { layout: "centered" },
};
