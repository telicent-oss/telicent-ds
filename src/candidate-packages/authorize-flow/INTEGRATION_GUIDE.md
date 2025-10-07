# Authorize Flow Integration Guide

This guide shows how to integrate `createApi` with `@telicent-oss/fe-auth-lib` for authenticated HTTP requests.

## Using createApi

The `createApi` function integrates axios with `@telicent-oss/fe-auth-lib`:

```javascript
import { createApi } from '@telicent-oss/ds/authorize-flow';
import AuthServerOAuth2Client from '@telicent-oss/fe-auth-lib';

// Initialize OAuth client
const authClient = new AuthServerOAuth2Client({
  clientId: 'your-client-id',
  authServerUrl: 'http://auth.telicent.localhost'
});

// Create API instance
const api = createApi('https://api.example.com', authClient)
  .withSessionHandling({
    queryClient,
    keysToInvalidate: ['user', 'profile']
  });

// Make authenticated requests
const response = await api.instance.get('/protected-data');
const userData = await api.instance.post('/users', { name: 'John' });
```

**How it works**: The `createApi` function uses `@telicent-oss/fe-auth-lib`'s `makeAuthenticatedRequest` method for API calls.

## Configuration Options

### withSessionHandling

```javascript
const api = createApi(baseURL, authClient).withSessionHandling({
  queryClient,           // React Query client for cache invalidation
  keysToInvalidate: []   // Query keys to invalidate on auth changes
});
```

## Alternative Integration

For non-axios HTTP clients, use `@telicent-oss/fe-auth-lib` directly:

```javascript
// Direct method (recommended)
const response = await authClient.makeAuthenticatedRequest('/api/data');

// Manual hooks (for custom integrations)
const options = authClient.beforeRequest({ method: 'GET' });
const response = await fetch(url, options);
const processedResponse = authClient.afterRequest(response, url);
```

**For complete AuthServerOAuth2Client documentation**, see the [@telicent-oss/fe-auth-lib integration guide](https://github.com/telicent-io/auth-server/blob/main/fe-auth-lib/INTEGRATION_GUIDE.md).