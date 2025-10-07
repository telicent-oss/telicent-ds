# Authorize Flow Integration Guide

## Using `createApi`

This is what Telicent FE apps use.

The `createApi` function integrates the following:
* `axios` for sensible wrapping HTTP transport
* `react-query` for react integration
* `@telicent-oss/fe-auth-lib` to communicate with `@telicent-oss/auth-server`

```js
import { createApi } from '@telicent-oss/ds/authorize-flow';
import AuthServerOAuth2Client from '@telicent-oss/fe-auth-lib';

// Handy to keep ref for various auth-related events
const authClient = new AuthServerOAuth2Client({
  clientId: 'your-client-id',
  authServerUrl: 'http://auth.telicent.localhost'
});

const api = createApi(
    'https://api.example.com', 
    authClient
  )
  .withSessionHandling({
    queryClient, // React Query client for cache invalidation
    keysToInvalidate: ['user', 'profile'] // Query keys to invalidate on auth changes
  });
```

Uses `authClient`'s method makeAuthenticatedRequest() under-the-hood:
```js

const response = await api.instance.get('/protected-data');
const userData = await api.instance.post('/users', { name: 'John' });
```

## Configuration Options

## Alternative Integration

For non-axios HTTP clients, use `@telicent-oss/fe-auth-lib` directly:

```js
// Direct method (recommended)
const response = await authClient.makeAuthenticatedRequest('/api/data');

// Manual hooks (for custom integrations)
const options = authClient.beforeRequest({ method: 'GET' });
const response = await fetch(url, options);
const processedResponse = authClient.afterRequest(response, url);
```

**For complete AuthServerOAuth2Client documentation**, see the [@telicent-oss/fe-auth-lib integration guide](https://github.com/telicent-io/auth-server/blob/main/fe-auth-lib/INTEGRATION_GUIDE.md).