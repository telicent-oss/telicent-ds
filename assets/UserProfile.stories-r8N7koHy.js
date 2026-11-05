import{b as s,a as e,F as T}from"./iframe-Cc505q8T.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-BCGV3pt1.js";import{F as D}from"./FlexBox-INXNFDos.js";import{D as U}from"./Divider-DoUPlLT7.js";import{B as N}from"./Box-DBDnR1g8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGbQUNXq.js";import"./clsx-B-dksMZM.js";import"./styled-BvzKQ4sx.js";import"./extendSxProp-DK-r-88F.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-xv6WL43m.js";import"./TransitionGroupContext-CQcyUDLY.js";import"./MapToggleButtonPresentational-SEdkkgro.js";import"./Remove-wLSkQjhc.js";import"./createSvgIcon-C2iK1MKO.js";import"./SvgIcon-QK6eTELx.js";import"./IconButton-wGfyijkC.js";import"./Paper-BEgnxPoV.js";import"./XIcon-DfplpFrn.js";import"./Stack-CXQatkal.js";import"./styled-nyzOJzdX.js";import"./createStyled-DL0YunmW.js";import"./useThemeProps-DUoDE_hW.js";import"./Typography-JA0wl7ef.js";import"./Box-C7w_TU32.js";import"./Container-C5FmO0ZG.js";import"./Brand-B_inw8Nn.js";import"./IconButton-bijqnudJ.js";import"./LinkButton-CrQZWdvL.js";import"./AppInfoRow-DNstdpiQ.js";import"./_IconPopover-CEgvvroX.js";import"./Popover-B-7QVUjC.js";import"./utils-llZg6Ldu.js";import"./index-BYRKYzg2.js";import"./index-E67BpH2O.js";import"./Modal-B1TMbF1u.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CEFtJ1JV.js";import"./useSlotProps-vDTfIZOq.js";import"./InfoIcon-Dz7o8k3j.js";import"./Text-CeS4nIe3.js";import"./AppSettings-CJGIgiF6.js";import"./CogIcon-ChH7stlR.js";import"./Badge-CaVpaSp6.js";import"./Badge-UZyuKCJw.js";import"./Chip-CSt2gfB4.js";import"./Chip-C0LSZzbe.js";import"./ThemeSwitchRow-DppX6RPX.js";import"./Skeleton-NT2g86kk.js";import"./Skeleton-wC5DXAYG.js";import"./TextField-BD6Mkee3.js";import"./useFormControl-C6vP74Jn.js";import"./FormControl-Ca5m24gk.js";import"./ListContext-mDo66NCa.js";import"./useControlled-bQ2OS_cP.js";import"./FormHelperText-BoGba_Gk.js";import"./MenuItem-CezCKy8F.js";import"./dividerClasses-BvSlSoD1.js";import"./Divider-CzNUtG-0.js";import"./ExpandMoreIcon-ldPi6jMj.js";import"./ListItem-B3mBow1c.js";import"./Toolbar-bO9Fqt8n.js";import"./Close-DueXUMhB.js";import"./Popper-nweOkxzE.js";import"./FormControlLabel-CbfZt0_t.js";import"./Edit-CHOg278_.js";import"./SvgIcon-BEgI93BA.js";import"./TableRow-DCNIHjLK.js";import"./TableCell-B-Xo9P4q.js";import"./TreeView-BzLLrYY7.js";import"./useThemeProps-vZa-IxWp.js";import"./index-CmE1T0Xl.js";import"./Collapse-QTd9ButL.js";import"./Dialog-Co_6VBJM.js";import"./DialogContent-DXpWtf-D.js";import"./Alert-wTSBptqR.js";import"./useSlot-DSvhdQyN.js";import"./LinearProgress-CF5PbK0_.js";import"./LinearProgress-B38XWAmN.js";import"./Spinner-CkaqrDBP.js";import"./CircularProgress-Bo5P2Z-p.js";import"./TextField-CwQOSZsD.js";import"./FormControl-Bh0L5A3e.js";import"./FormHelperText-Dd5c2IgU.js";import"./LabeledSwitch-BO0Zz5ka.js";import"./Switch-ChbOueU7.js";import"./Switch-CHwrG2-X.js";import"./RadioGroup-CFZqodNP.js";import"./ToggleButton-D96Gk9kD.js";import"./ToggleButton--FZGV6SF.js";import"./ToggleButtonGroup-DaCVckCp.js";import"./MenuItem-CS3aBPeu.js";import"./Tabs-DF-xdkqW.js";import"./AccordionSummary-Bssa8i78.js";import"./Paper-DT8s_h7n.js";import"./ErrorFallback-BhqQfFtZ.js";import"./ErrorFallbackText-CIKedg_H.js";import"./ErrorFallbackWrapper-CGtn1SJd.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
