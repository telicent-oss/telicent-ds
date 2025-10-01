// OAuthFlowDemo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import AuthServerOAuth2Client from "@telicent/fe-auth-lib";

import { AuthModal } from "./AuthModal";
import { IframeSwitch } from "./IFrameSwitch";
import { createApi } from "./index";

import {
  Alert,
  Breadcrumbs,
  Button,
  Collapse,
  Container,
  Stack,
  Typography,
} from "@mui/material";

// Reusables
const SpacedStack = (props) => <Stack spacing={2} {...props} />;

const MonoSpace = (props) => <Typography sx={{ fontFamily: "monospace", ...(props?.sx || null) }} {...props} />;

const ActionButton = (props) => <Button variant="contained" size="small" sx={{ alignSelf: "flex-start" }} {...props} />;

interface OAuthFlowDemoProps {
  config?: {
    clientId?: string;
    authServerUrl?: string;
    redirectUri?: string;
    scope?: string;
    redirectTarget?:
      | { type: "window" }
      | { type: "newWindow"; features?: string }
      | { type: "iframe"; selector: string };
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

  const defaultConfig = {
    clientId: "fe-storybook-app-config",
    authServerUrl: "http://auth.telicent.localhost",
    // See telicent-io/auth-server/fe-storybook-app-config/package.json
    redirectUri:
      "http://localhost:6006/iframe.html?viewMode=story&id=candidate-packages-auth-flow--storybook-oauth-callback&globals=&args=",
    scope: "openid profile offline_access",
    redirectTarget: {
      type: "newWindow" as const,
      features: "width=600,height=700",
    },
    onLogout: () => {
      setAuthState("initial");
      setIsAuthenticated(false);
      setUserInfo(null);
      setApiStatusDisplay(
        "Logged out."
      );
    },
    ...config,
  };


  useEffect(() => {
    const oauthClient = new AuthServerOAuth2Client(defaultConfig);
    setClient(oauthClient);

    // Create API instance with OAuth client integration
    const apiInstance = createApi('http://protected-api.telicent.localhost', oauthClient)
      .withSessionHandling({
        queryClient,
        keysToInvalidate: []
      });
    setApi(apiInstance);

    const checkAuth = async () => {
      try {
        console.log('checkAuth: Starting authentication check');
        const isAuth = await oauthClient.isAuthenticated();
        console.log('checkAuth: isAuthenticated =', isAuth);
        if (isAuth) {
          setAuthState("done");
          setIsAuthenticated(true);
          const userInfo = oauthClient.getUserInfo();
          console.log('checkAuth: userInfo =', userInfo);
          if (userInfo) {
            setUserInfo(userInfo);
          } else {
            setUserInfo({
              authenticated: true,
              source: "session_only",
              note: "ID token not available, but session is valid",
            });
          }
        } else {
          console.log('checkAuth: User not authenticated');
          setAuthState("initial");
        }
      } catch (err) {
        console.error('checkAuth: Error =', err);
        setError(String(err));
      }
    };

    // Minimal event handling for OAuth client's popup communication
    const handleOAuthSuccess = () => {
      console.log('OAuth success event received');
      checkAuth();
    };
    const handleOAuthError = () => {
      console.log('OAuth error event received');
      setError('Authentication failed');
      setAuthState('initial');
    };
    const handleOAuthCallback = async (event) => {
      console.log('OAuth callback event received', event.detail);
      setAuthState('callback');

      try {
        // Process the callback with the provided URL
        const callbackUrl = event.detail.callbackUrl;
        console.log('Processing callback URL:', callbackUrl);
        const callbackResult = await oauthClient.handleCallback(new URL(callbackUrl).search);
        console.log('Callback processed successfully:', callbackResult);
        checkAuth();
      } catch (error) {
        console.error('Callback processing failed:', error);
        setError(String(error));
        setAuthState('initial');
      }
    };

    window.addEventListener(AuthServerOAuth2Client.OAUTH_SUCCESS, handleOAuthSuccess);
    window.addEventListener(AuthServerOAuth2Client.OAUTH_ERROR, handleOAuthError);
    window.addEventListener('oauth-callback', handleOAuthCallback);

    checkAuth();

    return () => {
      window.removeEventListener(AuthServerOAuth2Client.OAUTH_SUCCESS, handleOAuthSuccess);
      window.removeEventListener(AuthServerOAuth2Client.OAUTH_ERROR, handleOAuthError);
      window.removeEventListener('oauth-callback', handleOAuthCallback);
    };
  }, []);

  const handleLogin = () => client?.login();
  const handleLogout = async () => {
    if (client) await client.logout();
  };
  const handleSimulateTimeout = async () => {
    simulateSessionTimeout();
  };

  const handleMakeAuthenticatedRequest = async () => {
    if (!api) return;
    setApiStatusDisplay("⏳ Loading...");
    try {
      const response = await api.instance.get('http://protected-api.telicent.localhost/get');
      setApiStatusDisplay(`✅ ${response.status}`);
    } catch (err) {
      if (err.response?.status === 401) {
        setApiStatusDisplay("🔄 Session expired - redirecting to login");
      } else {
        setApiStatusDisplay(`❌ Error: ${err.message}`);
      }
    }
  };

  const simulateSessionTimeout = async () => {
    // Use client logout to simulate timeout - keeps UI clean
    if (client) {
      await client.logout();
      setIsAuthenticated(false);
      setUserInfo(null);
      setAuthState("initial");
      setApiStatusDisplay(
        "Session expired. Click 'client.makeAuthenticatedRequest' to trigger login flow..."
      );
    }
  };



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
                    color: authState === "initial" ? "primary.main" : "text.secondary",
                    
                  }}
                >
                  1. Unauthenticated
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: authState === "callback" ? "bold" : "normal",
                    color: authState === "callback" ? "primary.main" : "text.secondary"
                  }}
                >
                  2. Processing Code
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: (authState === "done" && isAuthenticated) ? "bold" : "normal",
                    color: (authState === "done" && isAuthenticated) ? "success.main" : "text.secondary"
                  }}
                >
                  3. Authenticated
                </Typography>
              </Breadcrumbs>
            </SpacedStack>
          </SpacedStack>

          <SpacedStack>
            {/* Client */}
            <SpacedStack>
              <Typography variant="h5">Client</Typography>


              {/* Methods */}
              <SpacedStack>
                <Typography variant="h6">
                  Methods
                </Typography>
                <SpacedStack>
                  <MonoSpace variant="body2">
                    login()
                  </MonoSpace>
                  <ActionButton
                    onClick={handleLogin}
                    disabled={isAuthenticated}
                  >
                    Call
                  </ActionButton>
                </SpacedStack>

                <SpacedStack>
                  <MonoSpace variant="body2">
                    logout()
                  </MonoSpace>
                  <ActionButton
                    onClick={handleLogout}
                    disabled={!isAuthenticated}
                  >
                    Call
                  </ActionButton>
                </SpacedStack>

                <SpacedStack>
                  <MonoSpace variant="body2">
                    createApi().instance.get("//protected-api.telicent.localhost/data")
                  </MonoSpace>
                  <ActionButton
                    onClick={handleMakeAuthenticatedRequest}
                  >
                    Call
                  </ActionButton>
                  <Typography variant="body2">
                    {apiStatusDisplay}
                  </Typography>
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
                  ) : <Typography variant="body2">(auto-called when logged in)</Typography>}

                  <Collapse in={userInfoExpanded}>
                    {!userInfo ? (
                      <Typography variant="body2" color="text.secondary">
                        No user info available
                      </Typography>
                    ) : (
                      <pre style={{ fontFamily: "monospace", fontSize: "14px", margin: 0 }}>
                        {JSON.stringify(userInfo, null, 2)}
                      </pre>
                    )}
                  </Collapse>
                </SpacedStack>
              </SpacedStack>
            </SpacedStack>
            <SpacedStack>
              <Typography variant="h5">Debug actions</Typography>

              <SpacedStack>
                <Typography variant="body1">
                  Simulate session timeout
                </Typography>
                <ActionButton
                  onClick={handleSimulateTimeout}
                >
                  Call
                </ActionButton>
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

export const Default: Story = { args: {} };

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
          redirectUri: window.location.href.split('?')[0],
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
          <ActionButton onClick={() => window.close()}>
            Close now
          </ActionButton>
        </Stack>
      </Stack>
    </Container>
  );
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
