import{b as s,a as e,F as T}from"./iframe-C_A9w9Xb.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-CRSr_rhf.js";import{F as D}from"./FlexBox-xFc9aoH-.js";import{D as U}from"./Divider-DJS9w1fE.js";import{B as N}from"./Box-DB6K2VlN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVdDZnN4.js";import"./clsx-B-dksMZM.js";import"./styled-BxBMGnZ7.js";import"./extendSxProp-DbsjyKNJ.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DghXKeJ1.js";import"./TransitionGroupContext-BJMJdx4M.js";import"./MapToggleButtonPresentational-CdT4filz.js";import"./Remove-CC1RGYYl.js";import"./createSvgIcon-i-zQ-M6d.js";import"./SvgIcon-C8_G8FNz.js";import"./IconButton-DGQcrcgI.js";import"./Paper-DSCOcLrg.js";import"./XIcon-D-mT89jA.js";import"./Stack-CcwLWQH2.js";import"./styled-DY34dW0Q.js";import"./createStyled-B7kozB3A.js";import"./useThemeProps-sj6Fs-gH.js";import"./Typography-BLZTU97p.js";import"./Box-fYkPIWZP.js";import"./Container-C4ujFY5f.js";import"./Brand-d6OKu9aw.js";import"./IconButton-DZaun261.js";import"./LinkButton-jvGGWVn2.js";import"./AppInfoRow-CShKA_AM.js";import"./_IconPopover-DZzlnGrx.js";import"./Popover-DKdEqhrZ.js";import"./utils-DHOV5Dn-.js";import"./index-i4WXsvPC.js";import"./index-BHdyBRPi.js";import"./Modal-xQORnQ13.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-r2KoCv7J.js";import"./useSlotProps-aaY8J2bg.js";import"./InfoIcon-CsN7XvfL.js";import"./Text-VJDIJLPP.js";import"./AppSettings-BpaW4aTJ.js";import"./CogIcon-Xohb8vl0.js";import"./Badge-CTGjuVUc.js";import"./Badge-BZZrZQQO.js";import"./Chip-4mXnUy-p.js";import"./Chip-umbtqylA.js";import"./ThemeSwitchRow-QiuVBBXJ.js";import"./Skeleton-CuTvwxzQ.js";import"./Skeleton-DWpJL6zw.js";import"./TextField-CPHMgkHr.js";import"./useFormControl-2yPes8mR.js";import"./FormControl-fAwcUdMf.js";import"./ListContext-DDqsAt6U.js";import"./useControlled-3RSfgazB.js";import"./FormHelperText-C73ZFMlI.js";import"./MenuItem-BXjSr2Yp.js";import"./dividerClasses-BaXV3koW.js";import"./Divider-uAMQ62Ay.js";import"./ExpandMoreIcon-BqYNX6oE.js";import"./ListItem-CqSEfq_v.js";import"./Toolbar-yZjFEbA8.js";import"./Close-XBuytlI5.js";import"./Popper-PPx8E8Kn.js";import"./FormControlLabel-TrbeFuul.js";import"./Edit-CwFXdWdx.js";import"./SvgIcon-BL6aEYyy.js";import"./TableRow-BzcwC7-J.js";import"./TableCell-DIcGZfcO.js";import"./TreeView-DGUcOfc2.js";import"./useThemeProps-mFM7TQzY.js";import"./index-BQ8CXDCk.js";import"./Collapse-jyqoWJz2.js";import"./Dialog-C55D5thn.js";import"./DialogContent-C9vdccJg.js";import"./Alert-DbC5Ef0h.js";import"./useSlot-DetFjtbb.js";import"./LinearProgress-CFMEE1Eh.js";import"./LinearProgress-MCxEeQKE.js";import"./Spinner-9Pq1qpOg.js";import"./CircularProgress-BFo9ue-1.js";import"./TextField-CDBDoTkX.js";import"./FormControl-DPrwx_NL.js";import"./FormHelperText-BBL7cKe3.js";import"./LabeledSwitch-iaBcHpl_.js";import"./Switch-Bx0dlzK_.js";import"./Switch-DvW86pnT.js";import"./RadioGroup-D0W8_lBw.js";import"./ToggleButton-DvpTABDR.js";import"./ToggleButton-Czzc7CD5.js";import"./ToggleButtonGroup-C2sUNclb.js";import"./MenuItem-BjrtayUA.js";import"./Tabs-CvGfBwpz.js";import"./AccordionSummary-J3dFvStq.js";import"./Paper-BUzr6iGG.js";import"./ErrorFallback-BWZMsFtf.js";import"./ErrorFallbackText-CBna-xSZ.js";import"./ErrorFallbackWrapper-CXtFrO_G.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
