import{b as s,a as e,F as T}from"./iframe-CkNiiXLn.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-fQaFq2Ij.js";import{F as D}from"./FlexBox-DuXm_8u8.js";import{D as U}from"./Divider-BBGr4h1z.js";import{B as N}from"./Box-05pko2XY.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dyz6JNkZ.js";import"./clsx-B-dksMZM.js";import"./styled-76ib0pne.js";import"./extendSxProp-BK5IVCsk.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-BqURM9Ak.js";import"./TransitionGroupContext-B2d67udZ.js";import"./MapToggleButtonPresentational-l2lmOHYk.js";import"./Remove-Ct8rdzlS.js";import"./createSvgIcon-iDztRpkl.js";import"./SvgIcon-B-DccnQT.js";import"./IconButton-CuVEOxhO.js";import"./Paper-Co2ZhE_m.js";import"./XIcon-BnpOzrUx.js";import"./Stack-CsP74eLy.js";import"./styled-BvHWXNqt.js";import"./createStyled-Cvg3k3VR.js";import"./useThemeProps-iEI_UVVT.js";import"./Typography-DuOx53ON.js";import"./Box-YjUNvW-N.js";import"./Container-DJ50h9Ca.js";import"./Brand-Dm6iRMuI.js";import"./IconButton-Dodp6b5p.js";import"./LinkButton-C8qoOrAY.js";import"./AppInfoRow-54zgxE88.js";import"./_IconPopover-ChFYTO37.js";import"./Popover-CHk_5JT_.js";import"./utils-DUL0G8fu.js";import"./index-DahoM0Dd.js";import"./index-DmVtciI9.js";import"./Modal-i00kY4hp.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CMe9gMdQ.js";import"./useSlotProps-BLPs0jNc.js";import"./InfoIcon-CNZtHU0c.js";import"./Text-rScatiJx.js";import"./AppSettings-C58RzYiC.js";import"./CogIcon-CUgKmZnu.js";import"./Badge-Cf6QQjYx.js";import"./Badge-DcNyFGRo.js";import"./Chip-CzIXPAM6.js";import"./Chip-B_4aGR8d.js";import"./ThemeSwitchRow-DgBfNZR_.js";import"./Skeleton-CLKvWyBu.js";import"./Skeleton-DB4Iig_r.js";import"./TextField-jGTAB-zs.js";import"./useFormControl-Cy5_hCFa.js";import"./FormControl-Aq3S65NU.js";import"./ListContext-Dy1fZMht.js";import"./useControlled-BJ9psZrO.js";import"./FormHelperText-BkLGYuAu.js";import"./MenuItem-IabHC3U2.js";import"./dividerClasses-A0fl45Fm.js";import"./Divider-CupyNWLf.js";import"./ExpandMoreIcon-7GR4ETlZ.js";import"./ListItem-DfLiUxe7.js";import"./Toolbar-B-fWGjIK.js";import"./Close-3Y3Q-Wdq.js";import"./Popper-C_4fisPz.js";import"./FormControlLabel-DHtC2mPb.js";import"./Edit-CjwvC8Or.js";import"./SvgIcon-DSEb6mw_.js";import"./TableRow-CUz_YY1F.js";import"./TableCell-Db5UJInr.js";import"./TreeView-YO-ZddkQ.js";import"./useThemeProps-BIQFXi-5.js";import"./index-DspNy_CZ.js";import"./Collapse-renE2O0C.js";import"./Dialog-CpFNgoFo.js";import"./DialogContent-DaXl4CQu.js";import"./Alert-BoTqSYeo.js";import"./useSlot-k-KZgeup.js";import"./LinearProgress-Dy5_CdNI.js";import"./LinearProgress-DMwXeD9I.js";import"./Spinner-CT2AH6u2.js";import"./CircularProgress-BTnJNT1d.js";import"./TextField-BjCIF13p.js";import"./FormControl-CXubaWvq.js";import"./FormHelperText-BnJKYq1n.js";import"./LabeledSwitch-BNOamzBb.js";import"./Switch-DEcm6u5p.js";import"./Switch-C-S4rpDT.js";import"./RadioGroup-9Q56424I.js";import"./ToggleButton-BXKvGfFv.js";import"./ToggleButton-6UcPHypp.js";import"./ToggleButtonGroup-DJ_gF3ao.js";import"./MenuItem-72aw9qZO.js";import"./Tabs-CSxADV3D.js";import"./AccordionSummary-CkdrW3Ti.js";import"./Paper-Dv3fWX-M.js";import"./ErrorFallback-IkkxBrLa.js";import"./ErrorFallbackText-DyiZWMdz.js";import"./ErrorFallbackWrapper-iVC7iWcE.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
