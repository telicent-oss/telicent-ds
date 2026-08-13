import{j as e,a as b,F as A}from"./iframe-pszacA4H.js";import{A as y,a as o}from"./AppInfoRow-BRrAHWV8.js";import{B as I}from"./Box-CoitXI_U.js";import"./preload-helper-C1FmrZbK.js";import"./IconButton-5N96Sbkv.js";import"./generateUtilityClass-BfTSA2ZQ.js";import"./styled-CbW2HKyC.js";import"./generateUtilityClasses-DGogGnVz.js";import"./ButtonBase-i9cVtWJL.js";import"./TransitionGroupContext-CaODL787.js";import"./Box-rB9UFT7p.js";import"./useTheme-Bw0ZNVbz.js";import"./Popover-CLeTkZpW.js";import"./utils-JVxM4WCa.js";import"./index-C_qP2Xor.js";import"./Modal-B_JXUh34.js";import"./resolveComponentProps-Bnl83VAv.js";import"./Paper-DVbcfMuJ.js";import"./FlexBox-P753RbX0.js";import"./SvgIcon-XcfurnTf.js";import"./Stack-CowqRQdz.js";import"./styled-Bdsosz3P.js";import"./createStyled-CEQlNkwM.js";import"./useThemeProps-DitB9ftq.js";import"./Text-CY99CXXY.js";import"./Typography-CVdmjiVE.js";const G={title:"Data display/App info",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
An icon-button + popover shell that surfaces app metadata from the AppBar end slot. Every Telicent app uses this next to \`UserProfile\`, so the visual language and behaviour of the trigger and popover are enforced here rather than reimplemented per app.

The component is composition-first: it owns the trigger, the popover, and the layout, but nothing about what's inside. Consumers compose rows using \`AppInfoRow\` (or arbitrary JSX for exotic content).

---

### Supported use cases

- **Version-only** — the most common case. Pass a single \`AppInfoRow\` child with the version string.
- **Extra metadata rows** — compose additional \`AppInfoRow\` children for build hash, environment, licence, or anything else app-specific. All rows share the same styling.
- **Exotic content** — pass any JSX as children when a label:value row isn't the right shape (e.g. a copyright notice, a support link block). Match the visual style yourself, or lean on \`AppInfoRow\`.
- **Custom trigger id / label** — override \`id\` for stable E2E selectors (\`\${id}-trigger\`, \`\${id}-popover\`) and \`ariaLabel\` for the icon-button.

---

### When & how to use it

- **In the AppBar end slot** — place next to \`UserProfile\`. The anchor positioning is tuned for the top-right of the AppBar; do not use elsewhere.
- **App metadata comes from the app**, not the DS — read \`version\` from your app's \`package.json\` (via Vite \`define\`, direct import, or however your app configures it) and pass it as an \`AppInfoRow\` value.
- **Prefer \`AppInfoRow\` for every row** so per-app extensions share styling with the standard version row.

---

### Example

\`\`\`tsx
import { AppInfo, AppInfoRow } from "@telicent-oss/ds";
import { version } from "../../../package.json";

<AppInfo>
  <AppInfoRow label="Version" value={version} />
  <AppInfoRow label="Build" value={buildHash} />
  <AppInfoRow label="Environment" value={env} />
</AppInfo>
\`\`\`
        `}}},argTypes:{id:{control:"text",description:'Optional id prefix used for stable selectors (E2E, telemetry). Defaults to `"app-info"`, producing `${id}-trigger` and `${id}-popover`.'},ariaLabel:{control:"text",description:'Accessible label for the icon-button trigger and the popover dialog. Defaults to `"App information"`.'},children:{control:!1,description:"Rows rendered inside the popover. Compose from `AppInfoRow` for standard label:value pairs.",table:{type:{summary:"ReactNode"}}}},decorators:[w=>e(I,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:w()})]},r={args:{children:e(o,{label:"Version",value:"1.16.0"})},parameters:{docs:{description:{story:"The minimum viable usage — a single Version row. Click the info icon to open the popover."}}}},t={args:{children:b(A,{children:[e(o,{label:"Version",value:"1.16.0"}),e(o,{label:"Build",value:"a1b2c3d"}),e(o,{label:"Environment",value:"production"})]})},parameters:{docs:{description:{story:"Additional metadata rows. Every row uses `AppInfoRow`, so styling is uniform — no special-cased first row."}}}},a={args:{children:e(o,{label:"Version",value:"1.16.0-rc.3+build.2026-08-07.abc1234"})},parameters:{docs:{description:{story:"Verifies that long values wrap gracefully within the 240px popover — useful for pre-release builds that include build metadata."}}}},n={args:{id:"graph-app-info",children:e(o,{label:"Version",value:"1.16.0",id:"graph-app-info-version"})},parameters:{docs:{description:{story:"Override the id prefix on `AppInfo` to produce stable selectors for the trigger and popover. Put ids on individual `AppInfoRow` values as needed for E2E/telemetry."}}}};var s,i,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <AppInfoRow label="Version" value="1.16.0" />
  },
  parameters: {
    docs: {
      description: {
        story: "The minimum viable usage — a single Version row. Click the info icon to open the popover."
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppInfoRow label="Version" value="1.16.0" />
        <AppInfoRow label="Build" value="a1b2c3d" />
        <AppInfoRow label="Environment" value="production" />
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Additional metadata rows. Every row uses \`AppInfoRow\`, so styling is uniform — no special-cased first row."
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <AppInfoRow label="Version" value="1.16.0-rc.3+build.2026-08-07.abc1234" />
  },
  parameters: {
    docs: {
      description: {
        story: "Verifies that long values wrap gracefully within the 240px popover — useful for pre-release builds that include build metadata."
      }
    }
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "graph-app-info",
    children: <AppInfoRow label="Version" value="1.16.0" id="graph-app-info-version" />
  },
  parameters: {
    docs: {
      description: {
        story: "Override the id prefix on \`AppInfo\` to produce stable selectors for the trigger and popover. Put ids on individual \`AppInfoRow\` values as needed for E2E/telemetry."
      }
    }
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const K=["Default","WithExtraRows","LongVersion","CustomId"];export{n as CustomId,r as Default,a as LongVersion,t as WithExtraRows,K as __namedExportsOrder,G as default};
