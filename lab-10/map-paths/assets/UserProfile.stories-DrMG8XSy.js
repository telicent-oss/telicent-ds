import{b as s,a as e,F as T}from"./iframe-BjrXztvy.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-YwxxBLO1.js";import{F as D}from"./FlexBox-C2m_hHiB.js";import{D as U}from"./Divider-CEsBrrMM.js";import{B as N}from"./Box-F47BA0Hn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-dBpFgvsm.js";import"./clsx-B-dksMZM.js";import"./styled-CZSAv6ph.js";import"./extendSxProp-Bthi1mip.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DKC4tNwY.js";import"./TransitionGroupContext-Bkt8ykp0.js";import"./MapToggleButtonPresentational-bfG7yowY.js";import"./Remove-gsWyX-Lp.js";import"./createSvgIcon-CPBnrQiH.js";import"./SvgIcon-B5isJYog.js";import"./IconButton-Bn9Hma8U.js";import"./Paper-BZgZdenZ.js";import"./XIcon-ZQ00GxhK.js";import"./Stack-K8HBDx6V.js";import"./styled-OzlqGBn7.js";import"./createStyled-ChpmfdhO.js";import"./useThemeProps-Ggzu69aw.js";import"./Typography-WZdIHWv0.js";import"./Box-D4Yea7CC.js";import"./Container-Dz0UBrhB.js";import"./Brand-C4AyXs8s.js";import"./IconButton-BZNX4IRe.js";import"./LinkButton-BiG5XURl.js";import"./AppInfoRow-QQUqARHA.js";import"./_IconPopover-DMkjh4MO.js";import"./Popover-CHGOs9uC.js";import"./utils-BtEp1Xpe.js";import"./index-BxB4E5u0.js";import"./index-D0p7aeEW.js";import"./Modal-Cwfc4HGx.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BF5TirMe.js";import"./useSlotProps-BNqAOz95.js";import"./InfoIcon-D83JWA8r.js";import"./Text-BkX1azto.js";import"./AppSettings-D0R77tUT.js";import"./CogIcon-DausHvAi.js";import"./Badge-CijpDrIE.js";import"./Badge-ChEc66ZK.js";import"./Chip-C4L73zbZ.js";import"./Chip-Cehwhsrm.js";import"./ThemeSwitchRow-CzgtAJPj.js";import"./Skeleton-Cnro9Ssf.js";import"./Skeleton-YERebpLh.js";import"./TextField-Be_m1itn.js";import"./useFormControl-BXFuf1AA.js";import"./FormControl-CpIrVJXG.js";import"./ListContext-BbQ-ELWI.js";import"./useControlled-B3nW4gSi.js";import"./FormHelperText-DriOhB8T.js";import"./MenuItem-9AWDicSn.js";import"./dividerClasses-CmrggnBC.js";import"./Divider-D90yCN7B.js";import"./ExpandMoreIcon-Drhp9NBW.js";import"./ListItem-BQbfhaNb.js";import"./Toolbar-NHe4wN1N.js";import"./Close-PYRyZLFk.js";import"./Popper-BP6_mYu6.js";import"./FormControlLabel-uXfgMOYb.js";import"./Edit-D7Wj015S.js";import"./SvgIcon-C9kKGRGN.js";import"./TableRow-BEr1GK-h.js";import"./TableCell-CKU-Sz5Y.js";import"./TreeView-C6Uvz5eX.js";import"./useThemeProps-DBqV773e.js";import"./index-fBdo_AAp.js";import"./Collapse-zg8g8jza.js";import"./Dialog-FcaLo1D3.js";import"./DialogContent-Cgw15Yeq.js";import"./Alert-DObdqKgJ.js";import"./useSlot-BZ0PDpI2.js";import"./LinearProgress-BPc8EmDZ.js";import"./LinearProgress-CzGVD_iw.js";import"./Spinner-CqnH8Z1g.js";import"./CircularProgress-BVSVe6Bz.js";import"./TextField-PgPe3GS0.js";import"./FormControl-CpHzLQRo.js";import"./FormHelperText-DGEG7tzH.js";import"./LabeledSwitch-CTvl5H5e.js";import"./Switch-CDvU1aS9.js";import"./Switch-DaX5OEsQ.js";import"./RadioGroup-MrifhHnI.js";import"./ToggleButton-CW3SCIEP.js";import"./ToggleButton-COzVB-Rg.js";import"./ToggleButtonGroup-CxQmKDVQ.js";import"./MenuItem-DfJXPFQL.js";import"./Tabs-UNb_SPs_.js";import"./AccordionSummary-cUjWgv_9.js";import"./Paper-BL8jtYAu.js";import"./ErrorFallback-DxZnaklR.js";import"./ErrorFallbackText-CBSkGSIV.js";import"./ErrorFallbackWrapper-2Ab5_OqS.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
