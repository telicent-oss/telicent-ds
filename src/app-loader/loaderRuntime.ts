// Scripts the plugin emits as same-origin files: app CSPs are
// `script-src 'self'`, so they can't be inlined. Each function is
// serialised with toString(), so it must be self-contained and take its
// inputs as JSON-serialisable arguments.

export const ANIMATION_START_KEY = "telicent-overlay-animation-start";
export const DEFAULT_MESSAGE = "Loading…";
export const CALLBACK_MESSAGE = "Logging you in…";

// Runs in <head>, before the overlay parses. Dark unless the user stored
// "light"; never follows prefers-color-scheme.
export const applyLoaderHead = (modeStorageKey: string | null, animationStartKey: string): void => {
  let mode = "dark";
  try {
    if (modeStorageKey && window.localStorage.getItem(modeStorageKey) === "light") mode = "light";
  } catch {
    // Storage blocked (private mode, policy): stay dark.
  }
  document.documentElement.dataset.theme = mode;

  let start = Date.now();
  try {
    const stored = parseInt(window.sessionStorage.getItem(animationStartKey) ?? "", 10);
    if (stored) start = stored;
    else window.sessionStorage.setItem(animationStartKey, String(start));
  } catch {
    // Storage blocked: the animation restarts on navigation.
  }
  const elapsedSec = (Date.now() - start) / 1000;
  document.documentElement.style.setProperty("--logo-animation-delay", `${-elapsedSec}s`);
};

// Runs straight after the overlay markup, so /callback shows its message
// from first paint.
export const applyLoaderMessage = (messageId: string, callbackMessage: string): void => {
  if (window.location.pathname.indexOf("/callback") === -1) return;
  const message = document.getElementById(messageId);
  if (message) message.textContent = callbackMessage;
};

export const toScript = (fn: (...args: never[]) => void, args: unknown[]): string =>
  `(${fn.toString()})(${args.map((arg) => JSON.stringify(arg)).join(", ")});\n`;
