# Authorize Flow Integration Guide

This guide shows how to integrate OAuth authentication with any HTTP client.

## Recommended Approach: createApi

The simplest way to integrate OAuth authentication with axios:

```javascript
import { createApi } from './index';

// Create API with OAuth client integration
const api = createApi('https://api.example.com', authClient)
  .withSessionHandling({
    queryClient,
    keysToInvalidate: ['user', 'profile']
  });

// Use normally - authentication is handled automatically
const response = await api.instance.get('/protected-data');
const userData = await api.instance.post('/users', { name: 'John' });
```

**How it works**: The `createApi` function replaces the axios adapter to use the OAuth client's `makeAuthenticatedRequest` method internally, ensuring perfect compatibility with the OAuth client's authentication logic.

## Manual Integration with Hooks

For other HTTP clients, the OAuth client provides `beforeRequest` and `afterRequest` hooks:

```javascript
// 1. beforeRequest - adds auth headers and credentials
const requestOptions = authClient.beforeRequest({ method: 'GET' });

// 2. afterRequest - handles 401 responses and triggers re-auth
const processedResponse = authClient.afterRequest(response, url, options);
```

### Manual Axios Setup (Not Recommended)

```javascript
// Note: Use createApi instead for better reliability
const instance = axios.create({ baseURL: 'https://api.example.com' });

// Request interceptor
instance.interceptors.request.use(config => {
  const options = authClient.beforeRequest({ method: config.method });
  return { ...config, headers: options.headers, withCredentials: true };
});

// Response interceptor
instance.interceptors.response.use(
  response => authClient.afterRequest(response, response.config.url),
  error => {
    if (error.response) {
      authClient.afterRequest(error.response, error.config.url);
    }
    return Promise.reject(error);
  }
);
```

**Warning**: Manual interceptor setup can cause header conflicts. Use `createApi` for axios integration.

### Fetch

```javascript
async function authenticatedFetch(url, options = {}) {
  const requestOptions = authClient.beforeRequest(options);
  const response = await fetch(url, requestOptions);
  return authClient.afterRequest(response, url, options);
}

// Use like normal fetch
const response = await authenticatedFetch('/api/data', { method: 'POST' });
```

### XMLHttpRequest

```javascript
function createAuthenticatedXHR(method, url) {
  const xhr = new XMLHttpRequest();
  const options = authClient.beforeRequest({ method });

  xhr.open(method, url);
  xhr.withCredentials = options.credentials === 'include';

  // Add auth headers
  Object.entries(options.headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.onload = () => {
    try {
      authClient.afterRequest({ status: xhr.status }, url);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return xhr;
}
```

### EventSource/Streaming

```javascript
function createAuthenticatedEventSource(url) {
  const options = authClient.beforeRequest();

  return new EventSource(url, {
    withCredentials: options.credentials === 'include',
    headers: options.headers
  });
}
```

## How It Works

### beforeRequest(options)

- **Cross-domain**: Adds `Authorization: Bearer ${sessionId}` header
- **Same-domain**: Adds CSRF token for POST/PUT/DELETE requests
- **Always**: Sets `credentials: 'include'` for cookie support
- **Returns**: Complete request options object

### afterRequest(response, url, options)

- **401 responses**: Triggers automatic re-authentication via `login()`
- **Protected operations**: Prevents infinite loops during auth flows
- **Session cleanup**: Clears expired session data
- **Error handling**: Throws `'Session expired'` for invalid sessions

## Session Management

The hooks automatically handle:

- **Cross-domain authentication** via Authorization headers
- **Same-domain authentication** via cookies + CSRF tokens
- **Session expiration** detection and automatic re-auth
- **Broadcast events** for cross-tab session coordination
- **Protected endpoints** (no auto-logout during auth operations)

## Error Handling

```javascript
try {
  const response = await authenticatedFetch('/api/data');
  const data = await response.json();
} catch (error) {
  if (error.message === 'Session expired') {
    // User will be automatically redirected to login
    console.log('Authentication required');
  } else {
    // Handle other errors
    console.error('API error:', error);
  }
}
```

## Advanced Usage

### Custom Error Handling

```javascript
// Override default auth error behavior
authClient.login = () => {
  // Custom login logic
  window.location.href = '/custom-login';
};
```

### Skip Auto-Logout

```javascript
// Prevent auto-logout for specific requests
const options = authClient.beforeRequest({
  method: 'GET',
  skipAutoLogout: true
});
```

### Debug Authentication

```javascript
const options = authClient.beforeRequest({ method: 'GET' });
console.log('Auth headers:', options.headers);
console.log('Cross-domain mode:', authClient.isCrossDomain);
```