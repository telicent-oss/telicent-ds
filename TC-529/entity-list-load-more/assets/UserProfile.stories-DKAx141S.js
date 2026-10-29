import{b as s,a as e,F as T}from"./iframe-Bm3hXUOR.js";import{U as x,c as C,d as a,B as S}from"./EntityList-rJdJf1cx.js";import{D}from"./Divider-1DTE9E3S.js";import{F as U}from"./FlexBox-_AwHYlr2.js";import{B as N}from"./Box-CexaEQmQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-DijcGIMv.js";import"./Typography-IeSSUSnG.js";import"./clsx-B-dksMZM.js";import"./styled-DyULGS0b.js";import"./extendSxProp-BuZx_F0_.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-DK998PZh.js";import"./ListItem-mVDRARA2.js";import"./FormControl-BPl_v2oA.js";import"./useFormControl-Dh2tG7y1.js";import"./TransitionGroupContext-TroGB69i.js";import"./resolveComponentProps-B_u2Bd7V.js";import"./ButtonBase-B90bUUd9.js";import"./Toolbar-BGwmXmZ6.js";import"./TextField-DZPOD6P2.js";import"./Modal-DT28HXjZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-BDu1bYir.js";import"./index-Cj-yI5r7.js";import"./index-DQBmKBjb.js";import"./utils-BaA0rvxy.js";import"./Popover-EfvB51d9.js";import"./Paper-pWUzODlp.js";import"./useControlled-BLxWakUc.js";import"./createSvgIcon-CY9Fp0_O.js";import"./SvgIcon-BeWTLv9H.js";import"./FormHelperText-B1KQ539b.js";import"./Close-DwHyc7oX.js";import"./Popper-ByZb3Mzn.js";import"./Badge-C2hR_d-s.js";import"./Chip-BZnuQMLc.js";import"./IconButton-CErjrx2_.js";import"./FormControlLabel-zVmiSlDE.js";import"./Stack-CweGn0Hc.js";import"./styled-C7iFnRcW.js";import"./createStyled-BSW-AAi3.js";import"./useThemeProps-DbicsnOf.js";import"./MenuItem-DPWeZRqW.js";import"./dividerClasses-DReHYfP6.js";import"./Button-CBrDpZ-p.js";import"./MapToggleButtonPresentational-CBDLh_cV.js";import"./Remove-BQa1AOEr.js";import"./ExpandLessIcon-DBGEN9sP.js";import"./Box-D21XowzU.js";import"./Container-edJRQxXs.js";import"./CogIcon-BvyMh2cw.js";import"./InfoIcon-DtylHRhB.js";import"./ExpandMoreIcon-Rcc8lwpw.js";import"./ThemeSwitchRow-D2RDNnRH.js";import"./index-DCLPWREO.js";import"./IconButton-DbDsumXP.js";import"./Badge-Bln6FEW9.js";import"./Chip-sFPDCY_T.js";import"./TreeView-DbGOvJIf.js";import"./useThemeProps-Bp1dY9od.js";import"./Collapse-Ddn3acUj.js";import"./useSlot-Dr-m60mq.js";import"./AppInfoRow-C1wf-V0h.js";import"./_IconPopover-B-DWREQB.js";import"./AppSettings-ueUwBjzn.js";import"./SvgIcon-BOgW6Vs6.js";import"./TableRow-D-N1ayrG.js";import"./TableCell-D6yiUVMs.js";import"./Divider-eqbb1UOv.js";import"./Skeleton-D7hRqs-z.js";import"./Skeleton-B_UdrOGr.js";import"./Edit-RIIp7UWE.js";import"./LinearProgress-CayA7BiN.js";import"./LinearProgress-BUkYKEbD.js";import"./Spinner-DXnO_-hv.js";import"./CircularProgress-Dib0Lx_Z.js";import"./Dialog-BJXw5Ehe.js";import"./DialogContent-DMwkd_KF.js";import"./Alert-FBw1yGft.js";import"./ToggleButton-YWaXnOlt.js";import"./ToggleButton-BCPxy8Ge.js";import"./ToggleButtonGroup-DgGofYMS.js";import"./LinkButton-BXoA6ppQ.js";import"./TextField-ByxcbquB.js";import"./Switch-CDRD8Euo.js";import"./Switch-It0KOob1.js";import"./LabeledSwitch-DVDqP3zB.js";import"./RadioGroup-BAvBK26U.js";import"./FormControl-CiX3rHgQ.js";import"./FormHelperText-Bc9Sqjm2.js";import"./Tabs-3h5XvcqN.js";import"./MenuItem-CH4gFEae.js";import"./AccordionDetails-Ct_vIrVf.js";import"./Paper-BDi0dJoh.js";import"./ErrorFallback-DgO8QC3X.js";import"./ErrorFallbackText-C_qZY6-a.js";import"./ErrorFallbackWrapper-FM7Ac7RI.js";import"./Brand-CHH9dXMD.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{fullName:{control:"text",description:"The user's name shown next to the avatar. Truncates via a responsive clamp with a `title` tooltip on overflow. Omit for an icon-only trigger.",table:{type:{summary:"string"}}},id:{control:"text",description:'Lands on the trigger button for stable E2E selectors (project convention is `testIdAttribute: "id"`). The menu id is derived as `${id}-menu`. Defaults to `"user-profile"` so every instance has a stable selector out of the box — override when multiple UserProfiles coexist on a page.',table:{type:{summary:"string"},defaultValue:{summary:'"user-profile"'}}},ariaLabel:{control:"text",description:'Accessible name for the trigger button — needed because `fullName` is hidden on small viewports and may be empty in icon-only mode. Default `"User menu"`.',table:{type:{summary:"string"}}},children:{control:!1,description:"Dropdown contents. Compose from `UserProfileContent` for the row layout, plus `Divider` and a primary `Button` for actions.",table:{type:{summary:"ReactNode"}}}},decorators:[b=>e(N,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:b()})]},n=s(T,{children:[s(C,{children:[e(a,{title:"Username",content:"Satoru Gojo"}),e(a,{title:"Email",content:"satoru.gojo@telicent.io"}),e(a,{title:"Deployed Organisation",content:"Telicent UK"})]}),e(D,{sx:{py:1}}),e(U,{sx:{pt:2},children:e(S,{variant:"primary",startIcon:e("i",{className:"fa-solid fa-arrow-right-from-bracket"}),onClick:()=>console.log("Sign Out"),children:"Sign Out"})})]}),t={args:{fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"The canonical shape — name + avatar inline, dropdown with three identity rows (`TitleAndContent`) and a Sign Out button separated by a `Divider`. This is the composition every Telicent app assembles."}}}},r={args:{children:n},parameters:{docs:{description:{story:"Omit `fullName` to render just the avatar and chevron — the shape `telicent-user-portal` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged."}}}},o={args:{id:"user-profile",fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"Supplies an `id` so E2E tests target the trigger as `#user-profile` and the opened menu as `#user-profile-menu`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free."}}}},i={args:{fullName:"Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",children:n},parameters:{docs:{description:{story:"Long names clamp to a breakpoint-responsive `maxWidth` with ellipsis overflow. The full name is still available via the browser-native `title` tooltip on hover."}}}},Tt=["Default","IconOnly","WithId","LongName"];var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
