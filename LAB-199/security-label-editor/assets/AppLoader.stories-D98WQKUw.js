import{W as A,X as E,Y as C,r as O,b as T,a as g,F as _}from"./iframe-nsP25gKo.js";import"./preload-helper-Dp1pzeXC.js";const n="initial-overlay",a="initial-overlay-logo",I="initial-overlay-message",M="app-ready",D=[["line1","m35.78,48.13c-7.69-6.61-17.39-10.22-27.69-10.22H0v10.22h8.09c8.75,0,16.92,3.41,23.02,9.61,6.09,6.19,9.45,14.46,9.45,23.29v52.24h10.22v-52.24c0-11.53-4.4-22.35-12.39-30.46-.84-.85-1.71-1.67-2.61-2.44"],["line2","m129.24,0H0v10.22h8.09c12.11,0,23.74,3.03,34.02,8.74,5.02,2.78,9.72,6.2,13.99,10.22.62.58,1.23,1.17,1.83,1.77,2.19,2.2,4.21,4.53,6.07,6.97,2.47,3.23,4.64,6.65,6.49,10.22,5.21,10.02,7.98,21.24,7.98,32.9v52.25h10.22v-52.25c0-11.53-2.37-22.68-6.86-32.9h47.41v-10.22h-52.82c-1.9-3.03-4.01-5.95-6.32-8.74h59.14v-10.22H59.99c-3.93-3.33-8.13-6.25-12.56-8.74h81.81V0Z"],["line3","m52.59,37.91c-.25-.26-.5-.53-.76-.79-2.97-3-6.2-5.65-9.63-7.94-9.34-6.24-20.22-9.78-31.68-10.22-.81-.03-1.62-.05-2.43-.05v.05H0v10.22h10.35c9.61.41,18.72,3.43,26.52,8.74,2.74,1.86,5.31,3.99,7.69,6.4,1.21,1.22,2.35,2.5,3.43,3.82,7.5,9.24,11.58,20.74,11.58,32.9v52.24h10.22v-52.24c0-11.83-3.24-23.14-9.28-32.9-2.26-3.64-4.9-7.06-7.92-10.22"]],G=e=>`
  <svg id="${a}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 133.27" width="96" height="96" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    ${D.map(([t,o])=>`<path class="${t}" fill="currentColor" d="${o}" />`).join(`
    `)}
  </svg>
  <p id="${I}">${e}</p>
`,y='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',c=(e,t,o)=>{if(typeof e!="string")throw new Error(`app-loader: ${o} has no ${t}`);return e},f=(e,t)=>{var h,m;const o=t?A(e):E(e),l=o==null?void 0:o.primary;return{background:c((h=o==null?void 0:o.background)==null?void 0:h.default,"background.default",e),text:c((m=o==null?void 0:o.text)==null?void 0:m.primary,"text.primary",e),logo:c(l&&"main"in l?l.main:void 0,"primary.main",e)}},H=e=>({dark:f(e,!0),light:f(e,!1)}),P=`
#${a} path {
  fill-opacity: 0;
  animation: 3.6s ease-in-out infinite;
  animation-delay: var(--logo-animation-delay, 0s);
}
#${a} .line1 { animation-name: initial-overlay-fade-1; }
#${a} .line2 { animation-name: initial-overlay-fade-2; }
#${a} .line3 { animation-name: initial-overlay-fade-3; }
@keyframes initial-overlay-fade-1 {
  0% { fill-opacity: 0; } 20% { fill-opacity: 1; } 77% { fill-opacity: 1; } 100% { fill-opacity: 0; }
}
@keyframes initial-overlay-fade-3 {
  0% { fill-opacity: 0; } 20% { fill-opacity: 0; } 40% { fill-opacity: 1; } 77% { fill-opacity: 1; } 100% { fill-opacity: 0; }
}
@keyframes initial-overlay-fade-2 {
  0% { fill-opacity: 0; } 40% { fill-opacity: 0; } 60% { fill-opacity: 1; } 77% { fill-opacity: 1; } 100% { fill-opacity: 0; }
}`,F=({dark:e,light:t})=>`
html, body { background-color: ${e.background}; margin: 0; }
body { padding: 0; }
html[data-theme="light"], html[data-theme="light"] body { background-color: ${t.background}; }`,K=({dark:e,light:t})=>`
#${n} {
  /* 100vw/100vh, not inset: 0. inset shrinks when a scrollbar gutter appears and the logo shifts. */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* px so a later html font-size rule can't move the text. */
  gap: 16px;
  background-color: ${e.background};
  color: ${e.text};
  font-family: ${y};
  transition: opacity 400ms ease;
}
/* !important: CssBaseline's body/p rules load later and win on equal specificity. */
#${n} p {
  margin: 0 !important;
  font-family: ${y} !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  letter-spacing: normal !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}
body.${M} #${n} { opacity: 0; pointer-events: none; }
#${a} { color: ${e.logo}; }
[data-theme="light"] #${n} { background-color: ${t.background}; color: ${t.text}; }
[data-theme="light"] #${a} { color: ${t.logo}; }
${P}`,R=e=>{const t=H(e);return F(t)+K(t)},d="Loading…",p="Logging you in…",j=({theme:e,mode:t,message:o})=>(O.useEffect(()=>(document.documentElement.dataset.theme=t,()=>{delete document.documentElement.dataset.theme}),[t]),T(_,{children:[g("style",{children:R(e)}),g("div",{id:n,"aria-live":"polite",dangerouslySetInnerHTML:{__html:G(o)}})]})),z={title:"Feedback/AppLoader",component:j,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:320},description:{component:`
The loading screen every app shows before React mounts. It ships as a Vite plugin, not a component, because it has to paint from the first byte of HTML, before the bundle loads.

---

### The opinion

- **Dark unless the user chose light.** The head script reads \`modeStorageKey\` from localStorage and goes light only when it holds \`"light"\`. It never follows \`prefers-color-scheme\`, so nobody gets a bright screen they didn't ask for.
- **Colours come from the palette.** \`background.default\`, \`text.primary\` and \`primary.main\` for the app's theme in each mode. Apps hold no hex values.
- **Scripts are files, never inline.** App CSPs are \`script-src 'self'\`. The plugin emits content-hashed scripts and inlines only the CSS.

---

### Handoff contract

Remove the overlay by adding the \`app-ready\` class to \`<body>\` once the app is ready. It fades out over 400ms. The ids \`initial-overlay\`, \`initial-overlay-logo\` and \`initial-overlay-message\` are stable.

Apps that switch mode at runtime should keep \`<html data-theme>\` in step with their stored value.

---

### Defaults

- Message: "${d}", or "${p}" on any path containing \`/callback\`.
- Logo animation: 3.6s cycle, resumed across the \`/callback\` → \`/\` full-page navigation.
- Fonts: system stack only. Figtree's late swap made the text twitch.

---

### When to use it

Every Telicent app. Delete any hand-written overlay markup, inline styles and \`public/loading-overlay-*.js\` from \`index.html\` when adopting it.

\`\`\`ts
// vite.config.ts
import { appLoader } from "@telicent-oss/ds/app-loader";

export default defineConfig({
  plugins: [react(), appLoader({ theme: "GraphOrange", modeStorageKey: "graph.themeMode" })],
});
\`\`\`
`}}},argTypes:{theme:{control:"select",options:C.options,description:"Plugin option `theme`. Match the app's `UIThemeProvider`."},mode:{control:"inline-radio",options:["dark","light"],description:"What the head script resolves from `modeStorageKey`. Dark unless the user stored light."},message:{control:"select",options:[d,p],description:"Set by the message script from the URL. Not a plugin option."}},args:{theme:"GraphOrange",mode:"dark",message:d}},r={parameters:{docs:{description:{story:"The default. Shown whenever no light preference is stored."}}}},i={args:{mode:"light"},parameters:{docs:{description:{story:'Shown only when `modeStorageKey` holds `"light"`. The logo keeps the brand colour.'}}}},s={args:{message:p},parameters:{docs:{description:{story:"On `/callback`, while the OAuth redirect completes."}}}},N=["Dark","Light","LoggingIn"];var u,v,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The default. Shown whenever no light preference is stored."
      }
    }
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,S,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mode: "light"
  },
  parameters: {
    docs: {
      description: {
        story: "Shown only when \`modeStorageKey\` holds \`\\"light\\"\`. The logo keeps the brand colour."
      }
    }
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var $,x,L;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    message: CALLBACK_MESSAGE
  },
  parameters: {
    docs: {
      description: {
        story: "On \`/callback\`, while the OAuth redirect completes."
      }
    }
  }
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};export{r as Dark,i as Light,s as LoggingIn,N as __namedExportsOrder,z as default};
