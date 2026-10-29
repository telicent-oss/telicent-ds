import{a as t}from"./iframe-Bm3hXUOR.js";import{A as r}from"./AppSettings-ueUwBjzn.js";import{T as l}from"./ThemeSwitchRow-D2RDNnRH.js";import"./preload-helper-Dp1pzeXC.js";import"./CogIcon-BvyMh2cw.js";import"./SvgIcon-BeWTLv9H.js";import"./clsx-B-dksMZM.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./composeClasses-fLhin0tj.js";import"./_IconPopover-B-DWREQB.js";import"./IconButton-DbDsumXP.js";import"./IconButton-CErjrx2_.js";import"./ButtonBase-B90bUUd9.js";import"./TransitionGroupContext-TroGB69i.js";import"./Box-D21XowzU.js";import"./Box-CexaEQmQ.js";import"./Popover-EfvB51d9.js";import"./utils-BaA0rvxy.js";import"./index-Cj-yI5r7.js";import"./index-DQBmKBjb.js";import"./Modal-DT28HXjZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-B_u2Bd7V.js";import"./useSlotProps-BDu1bYir.js";import"./Paper-pWUzODlp.js";import"./index-DCLPWREO.js";const{useGlobals:c}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:"Data display/AppSettings",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
An icon-triggered popover for app-level settings. Mirrors the shape of \`AppInfo\`: a cog icon that opens a popover anchored bottom-right, containing whatever settings the app chooses to slot in via \`children\`.

Presentational only — the DS owns the chrome (icon button, popover positioning, focus/dismiss behaviour, a11y wiring). The app owns everything inside: which settings appear, their state, and how that state persists.

---

### The opinion

- **Cog icon, fixed placement.** The trigger and popover positioning are baked; the DS decides the shell so every app converges on the same chrome. Match \`AppInfo\` in the same slot for consistency.
- **Children slot, no built-in rows.** No settings ship inside DS. The most common use is a \`ThemeSwitchRow\` (see the story below), but the DS doesn't presume that. Whatever the app puts in the slot appears in the popover.

---

### Accessibility

- Trigger is an \`IconButton\` with \`aria-haspopup="dialog"\`, \`aria-expanded\` tracking the open state, and \`aria-label\` (default \`"App settings"\`).
- Popover contents are wrapped in a \`role="dialog"\` \`Box\` with the same \`ariaLabel\`.
- Trigger id defaults to \`app-settings-trigger\`; popover id to \`app-settings-popover\`. Both can be overridden via \`id\` for stable E2E selectors.

---

### Example

\`\`\`tsx
import { AppSettings, ThemeSwitchRow } from "@telicent-oss/ds";
import { useAppThemeMode } from "./hooks/useAppThemeMode";

export const AppBarSettings = () => {
  const { dark, setDark } = useAppThemeMode();
  return (
    <AppSettings>
      <ThemeSwitchRow checked={dark} onChange={setDark} />
    </AppSettings>
  );
};
\`\`\`
        `}}},argTypes:{id:{control:"text",description:'Prefix for the trigger and popover ids. Default `"app-settings"` → `"app-settings-trigger"`, `"app-settings-popover"`.'},ariaLabel:{control:"text",description:'Accessible name for the trigger button and the popover dialog. Default `"App settings"`.'},children:{control:!1,description:"The settings rows to render inside the popover. Typical content: `ThemeSwitchRow` plus any app-specific preferences.",table:{type:{summary:"ReactNode"}}}}},e={render:p=>{const[n,a]=c(),d=n.mode==="dark";return t("div",{style:{display:"flex",justifyContent:"flex-end",padding:16},children:t(r,{...p,children:t(l,{checked:d,onChange:h=>a({mode:h?"dark":"light"})})})})},parameters:{docs:{description:{story:"Click the cog to open the popover. The `ThemeSwitchRow` inside is wired to Storybook's `Mode` global via `useGlobals()`, so toggling flips the preview theme across every story — same shape an app shell uses in production."}}}},U=["Default"];var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [globals, updateGlobals] = useGlobals();
    const isDark = globals.mode === "dark";
    return <div style={{
      display: "flex",
      justifyContent: "flex-end",
      padding: 16
    }}>
        <AppSettings {...args}>
          <ThemeSwitchRow checked={isDark} onChange={v => updateGlobals({
          mode: v ? "dark" : "light"
        })} />
        </AppSettings>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Click the cog to open the popover. The \`ThemeSwitchRow\` inside is wired to Storybook's \`Mode\` global via \`useGlobals()\`, so toggling flips the preview theme across every story — same shape an app shell uses in production."
      }
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{e as Default,U as __namedExportsOrder,K as default};
