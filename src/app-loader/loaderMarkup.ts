// Ids and class kept from the apps' hand-rolled overlay so existing
// selectors and the `body.app-ready` handoff in App.tsx don't move.
export const OVERLAY_ID = "initial-overlay";
export const LOGO_ID = "initial-overlay-logo";
export const MESSAGE_ID = "initial-overlay-message";
export const APP_READY_CLASS = "app-ready";

const LOGO_PATHS: ReadonlyArray<readonly [string, string]> = [
  ["line1", "m35.78,48.13c-7.69-6.61-17.39-10.22-27.69-10.22H0v10.22h8.09c8.75,0,16.92,3.41,23.02,9.61,6.09,6.19,9.45,14.46,9.45,23.29v52.24h10.22v-52.24c0-11.53-4.4-22.35-12.39-30.46-.84-.85-1.71-1.67-2.61-2.44"],
  ["line2", "m129.24,0H0v10.22h8.09c12.11,0,23.74,3.03,34.02,8.74,5.02,2.78,9.72,6.2,13.99,10.22.62.58,1.23,1.17,1.83,1.77,2.19,2.2,4.21,4.53,6.07,6.97,2.47,3.23,4.64,6.65,6.49,10.22,5.21,10.02,7.98,21.24,7.98,32.9v52.25h10.22v-52.25c0-11.53-2.37-22.68-6.86-32.9h47.41v-10.22h-52.82c-1.9-3.03-4.01-5.95-6.32-8.74h59.14v-10.22H59.99c-3.93-3.33-8.13-6.25-12.56-8.74h81.81V0Z"],
  ["line3", "m52.59,37.91c-.25-.26-.5-.53-.76-.79-2.97-3-6.2-5.65-9.63-7.94-9.34-6.24-20.22-9.78-31.68-10.22-.81-.03-1.62-.05-2.43-.05v.05H0v10.22h10.35c9.61.41,18.72,3.43,26.52,8.74,2.74,1.86,5.31,3.99,7.69,6.4,1.21,1.22,2.35,2.5,3.43,3.82,7.5,9.24,11.58,20.74,11.58,32.9v52.24h10.22v-52.24c0-11.83-3.24-23.14-9.28-32.9-2.26-3.64-4.9-7.06-7.92-10.22"],
];

export const buildOverlayInner = (message: string): string => `
  <svg id="${LOGO_ID}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 133.27" width="96" height="96" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    ${LOGO_PATHS.map(([line, d]) => `<path class="${line}" fill="currentColor" d="${d}" />`).join("\n    ")}
  </svg>
  <p id="${MESSAGE_ID}">${message}</p>
`;
