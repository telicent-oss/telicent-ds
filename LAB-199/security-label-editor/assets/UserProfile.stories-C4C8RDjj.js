import{b as s,a as e,F as T}from"./iframe-Qc_S7xDc.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-BtTtKEHB.js";import{F as D}from"./FlexBox-DBS92b2G.js";import{D as U}from"./Divider-CTYdoKka.js";import{B as N}from"./Box-CxkKEmSS.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dj7cUP7O.js";import"./clsx-B-dksMZM.js";import"./styled-CgcIX_5n.js";import"./extendSxProp-BDprp3VL.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BGM1JOzh.js";import"./TransitionGroupContext-CPUMsqsi.js";import"./MapToggleButtonPresentational-BTwyEcFF.js";import"./Remove-BPrAu3rF.js";import"./createSvgIcon-vUDj1WZO.js";import"./SvgIcon-CVLqOmKr.js";import"./IconButton-BfhPabTn.js";import"./Paper-C70JDaiv.js";import"./XIcon-FwcEWS-P.js";import"./Stack-DoNqUwFA.js";import"./styled-BB7A3pcn.js";import"./createStyled-CUdeGtFR.js";import"./useThemeProps-BxFBB-sR.js";import"./Typography-Cu-yy0Da.js";import"./Box-DtX81eGL.js";import"./Container-C-AxOArc.js";import"./Brand-CXuO_7Nj.js";import"./IconButton-CRgr_6IA.js";import"./LinkButton-PZL0MtA6.js";import"./AppInfoRow-L9Ct41uR.js";import"./_IconPopover-CVwwBihx.js";import"./Popover-C5IN9cMT.js";import"./utils-ckqgl2AC.js";import"./index-xdr6vpDP.js";import"./index-DFgxXqr5.js";import"./Modal-KUCWN-hc.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C8vHIN9n.js";import"./useSlotProps-fAUM90Vx.js";import"./InfoIcon-WP7T-PZz.js";import"./Text-B8g7NM2g.js";import"./AppSettings-DLGgVhD4.js";import"./CogIcon-QfRJwl7x.js";import"./Badge-DH4M2IdE.js";import"./Badge-if7a42J8.js";import"./Chip-DtxHEqsM.js";import"./Chip-uL9TB9Pu.js";import"./ThemeSwitchRow-B00tKUjH.js";import"./Skeleton-BJSorI16.js";import"./Skeleton-Dkff_NGZ.js";import"./TextField-xzu_DPyE.js";import"./useFormControl-xNPWxtva.js";import"./FormControl-X_hisCzp.js";import"./ListContext-BHAyDyBX.js";import"./useControlled-Cpi-ico-.js";import"./FormHelperText-DwzhRR8K.js";import"./MenuItem-TKTN96be.js";import"./dividerClasses-yonhPajF.js";import"./Divider-D8fiawbv.js";import"./ExpandMoreIcon-CcvmRhY8.js";import"./ListItem-C8W6Ik8d.js";import"./Toolbar-DSDblHdz.js";import"./Close-CIhAeHGU.js";import"./Popper-BT4vA2xI.js";import"./FormControlLabel-DLxcqeM9.js";import"./Edit-BvmZceNx.js";import"./SvgIcon-BrScsTXV.js";import"./TableRow-DHvRRQH1.js";import"./TableCell-_uNta8pa.js";import"./TreeView-BfiblcHE.js";import"./useThemeProps-Df8lhP5o.js";import"./index-C7V_D8MZ.js";import"./Collapse-CYu1yO86.js";import"./Dialog-DQAHdxrq.js";import"./DialogContent-DxaHQn4a.js";import"./Alert-C-ywUKjz.js";import"./useSlot-Cj9015tv.js";import"./LinearProgress-YzlvXZ7B.js";import"./LinearProgress-Cx-vdS0c.js";import"./Spinner-CFkE0pqS.js";import"./CircularProgress-Cu2BM2_M.js";import"./TextField-CMKqH5KV.js";import"./FormControl-BQbHDIJ4.js";import"./FormHelperText-Ca1ptZ2c.js";import"./LabeledSwitch-Z3aJeObb.js";import"./Switch-DDlhBOlC.js";import"./Switch-CLg_WwE6.js";import"./RadioGroup-Bf07373r.js";import"./ToggleButton-ClkVXijM.js";import"./ToggleButton-DMCkzxLU.js";import"./ToggleButtonGroup-B1_EfocB.js";import"./MenuItem-CFb7InxQ.js";import"./Tabs-C5IpzZMr.js";import"./AccordionSummary-Bp6-l77_.js";import"./Paper-CUW1p5Tc.js";import"./ErrorFallback-CETo05fh.js";import"./ErrorFallbackText-CMA-asQU.js";import"./ErrorFallbackWrapper-iwCi0O44.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
A user-identity trigger + dropdown that sits in the AppBar end slot. The
trigger renders a name, avatar, and chevron inline; clicking it opens a
right-aligned popover whose contents the app composes via \`children\`.

The DS owns the chrome — trigger button, dropdown anchoring, focus/dismiss
behaviour, a11y wiring. The app owns everything inside the dropdown
(user details rows, actions like Sign Out), typically composed from
\`UserProfileContent\` plus \`TitleAndContent\`, a \`Divider\`, and a primary
\`Button\`.

---

### Supported use cases

- **Name + avatar** — the default. Pass \`fullName\`; the name truncates
  responsively via a clamp and a title tooltip on overflow.
- **Icon-only** — omit \`fullName\` to render just the avatar and
  chevron. Use when the surrounding chrome already names the user, or
  when the dropdown surfaces the identity itself. This is the shape
  \`telicent-user-portal\` uses.
- **Custom id** — pass \`id\` for stable E2E selectors. The menu's id is
  derived as \`\${id}-menu\`, so multiple UserProfiles on the same page
  stay collision-free.

---

### Accessibility

- Trigger is a real \`<button>\` element (promoted via MUI Stack
  \`component="button"\`), not a clickable div. Native Enter / Space
  activation works for free; keyboard tab reaches it.
- Carries \`aria-haspopup="menu"\`, \`aria-expanded\` reflecting the open
  state, and \`aria-controls\` pointing at the menu id when open.
- The inner chevron is a decorative span (\`aria-hidden\`, \`tabIndex={-1}\`)
  rather than a nested interactive button — fixes the
  button-inside-button HTML the previous version produced.

---

### When & how to use it

- **In the AppBar end slot** — pair with \`AppInfo\` and \`AppSettings\` for
  the canonical Telicent app-header shape.
- **Compose the dropdown with \`UserProfileContent\`** — it wraps the row
  layout and spacing. Inside, use \`TitleAndContent\` for standard
  label:value pairs, \`Divider\` between sections, and a primary \`Button\`
  for Sign Out.

---

### Example

\`\`\`tsx
import {
  UserProfile,
  UserProfileContent,
  TitleAndContent,
  Divider,
  Button,
} from "@telicent-oss/ds";

<UserProfile id="user-profile" fullName={user.fullName}>
  <UserProfileContent>
    <TitleAndContent title="Username" content={user.username} />
    <TitleAndContent title="Email" content={user.email} />
    <TitleAndContent title="Deployed Organisation" content={user.org} />
  </UserProfileContent>
  <Divider sx={{ py: 1 }} />
  <Box sx={{ pt: 2 }}>
    <Button variant="primary" onClick={onSignOut}>Sign Out</Button>
  </Box>
</UserProfile>
\`\`\`
        `}}},argTypes:{fullName:{control:"text",description:"The user's name shown next to the avatar. Truncates via a responsive clamp with a `title` tooltip on overflow. Omit for an icon-only trigger.",table:{type:{summary:"string"}}},id:{control:"text",description:'Lands on the trigger button for stable E2E selectors (project convention is `testIdAttribute: "id"`). The menu id is derived as `${id}-menu`. Defaults to `"user-profile"` so every instance has a stable selector out of the box — override when multiple UserProfiles coexist on a page.',table:{type:{summary:"string"},defaultValue:{summary:'"user-profile"'}}},ariaLabel:{control:"text",description:'Accessible name for the trigger button — needed because `fullName` is hidden on small viewports and may be empty in icon-only mode. Default `"User menu"`.',table:{type:{summary:"string"}}},children:{control:!1,description:"Dropdown contents. Compose from `UserProfileContent` for the row layout, plus `Divider` and a primary `Button` for actions.",table:{type:{summary:"ReactNode"}}}},decorators:[b=>e(N,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:b()})]},n=s(T,{children:[s(C,{children:[e(a,{title:"Username",content:"Satoru Gojo"}),e(a,{title:"Email",content:"satoru.gojo@telicent.io"}),e(a,{title:"Deployed Organisation",content:"Telicent UK"})]}),e(U,{sx:{py:1}}),e(D,{sx:{pt:2},children:e(S,{variant:"primary",startIcon:e("i",{className:"fa-solid fa-arrow-right-from-bracket"}),onClick:()=>console.log("Sign Out"),children:"Sign Out"})})]}),t={args:{fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"The canonical shape — name + avatar inline, dropdown with three identity rows (`TitleAndContent`) and a Sign Out button separated by a `Divider`. This is the composition every Telicent app assembles."}}}},r={args:{children:n},parameters:{docs:{description:{story:"Omit `fullName` to render just the avatar and chevron — the shape `telicent-user-portal` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged."}}}},o={args:{id:"user-profile",fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"Supplies an `id` so E2E tests target the trigger as `#user-profile` and the opened menu as `#user-profile-menu`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free."}}}},i={args:{fullName:"Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",children:n},parameters:{docs:{description:{story:"Long names clamp to a breakpoint-responsive `maxWidth` with ellipsis overflow. The full name is still available via the browser-native `title` tooltip on hover."}}}},Tt=["Default","IconOnly","WithId","LongName"];var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fullName: "Satoru Gojo",
    children: DropdownChildren
  },
  parameters: {
    docs: {
      description: {
        story: "The canonical shape — name + avatar inline, dropdown with three identity rows (\`TitleAndContent\`) and a Sign Out button separated by a \`Divider\`. This is the composition every Telicent app assembles."
      }
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: DropdownChildren
  },
  parameters: {
    docs: {
      description: {
        story: "Omit \`fullName\` to render just the avatar and chevron — the shape \`telicent-user-portal\` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged."
      }
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "user-profile",
    fullName: "Satoru Gojo",
    children: DropdownChildren
  },
  parameters: {
    docs: {
      description: {
        story: "Supplies an \`id\` so E2E tests target the trigger as \`#user-profile\` and the opened menu as \`#user-profile-menu\`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free."
      }
    }
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fullName: "Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",
    children: DropdownChildren
  },
  parameters: {
    docs: {
      description: {
        story: "Long names clamp to a breakpoint-responsive \`maxWidth\` with ellipsis overflow. The full name is still available via the browser-native \`title\` tooltip on hover."
      }
    }
  }
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};export{t as Default,r as IconOnly,i as LongName,o as WithId,Tt as __namedExportsOrder,bt as default};
