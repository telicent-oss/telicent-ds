import{b as s,a as e,F as T}from"./iframe-B8Ndjgs7.js";import{U as x,c as C,d as a,B as S}from"./EntityList-BhryZOsc.js";import{D}from"./Divider-BCsdqXJ_.js";import{F as U}from"./FlexBox-Dm4YTDCC.js";import{B as N}from"./Box-DWlntqlD.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-B8d64O_Y.js";import"./Typography-s2ICI44X.js";import"./clsx-B-dksMZM.js";import"./styled-CtcE8cKO.js";import"./extendSxProp-21VtOiYW.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-BrZ-GaYK.js";import"./ListItem-CB8jEQm3.js";import"./FormControl-3TJEEoeT.js";import"./useFormControl-BjXCnS6h.js";import"./TransitionGroupContext-DZHet8-E.js";import"./resolveComponentProps-utvTJYfY.js";import"./ButtonBase-B_Llp_PF.js";import"./Toolbar-CISRzm9i.js";import"./TextField-BTz-o-Kc.js";import"./Modal-Ct6w46wj.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-AhVjQ7Gk.js";import"./index-BtgTVimu.js";import"./index-BbzF8qOu.js";import"./utils-DYAAZsgJ.js";import"./Popover-CCtwc_z-.js";import"./Paper-rbZdw6s-.js";import"./useControlled-mY01Zfpb.js";import"./createSvgIcon-CGOjPHBt.js";import"./SvgIcon-C47WU1LB.js";import"./FormHelperText-DpwVaweK.js";import"./Close-BdpiD1Ss.js";import"./Popper-AaPlJ6uF.js";import"./Badge-DYs2SihV.js";import"./Chip-D_9jUssn.js";import"./IconButton-KoDWoU7V.js";import"./FormControlLabel-uh3SpxA2.js";import"./Stack-rvIPxQ-d.js";import"./styled-BYZRNKV0.js";import"./createStyled-wNLCiFTP.js";import"./useThemeProps-CLApfop_.js";import"./MenuItem-CQaq3Nw5.js";import"./dividerClasses-CXlbGETs.js";import"./Button-Ds71WDMa.js";import"./MapToggleButtonPresentational-DaEIfM6E.js";import"./Remove-DLztY2SR.js";import"./ExpandLessIcon-XoRe2dIW.js";import"./Box-tid9eA9-.js";import"./Container-BIyIkFdg.js";import"./CogIcon-Cx2nuXV6.js";import"./InfoIcon-z080ie21.js";import"./ExpandMoreIcon-C-7YScuE.js";import"./ThemeSwitchRow-QHgoULL7.js";import"./IconButton-Bp9NzKGU.js";import"./Badge-CCUmKRz_.js";import"./Chip-DkK8QWr7.js";import"./TreeView-3XRMjQH4.js";import"./useThemeProps-C4jrygnl.js";import"./index-BreE0q1-.js";import"./Collapse-B-5zWWtm.js";import"./useSlot-BfqIP4m7.js";import"./AppInfoRow-DcG9pln0.js";import"./_IconPopover-C1PNRads.js";import"./AppSettings-BXK_6o6N.js";import"./SvgIcon-C22eSXdq.js";import"./TableRow-DWGhKXZz.js";import"./TableCell--HWIkjOy.js";import"./Divider-DP7n1nVq.js";import"./Skeleton-BcRltIku.js";import"./Skeleton-B2XntzD3.js";import"./Edit-L48O_6R-.js";import"./LinearProgress-BKGZlMo3.js";import"./LinearProgress-BuxH05pl.js";import"./Spinner-rjnbl10G.js";import"./CircularProgress-B0d2h-_4.js";import"./Dialog-DAlnXd4S.js";import"./DialogContent-CSHYPR4j.js";import"./Alert-CLckrKX0.js";import"./ToggleButton-DqmNPX07.js";import"./ToggleButton-XWsnd7ne.js";import"./ToggleButtonGroup-syVqFRSt.js";import"./LinkButton-C9RIImpp.js";import"./TextField-BZJb3dXc.js";import"./Switch-CM1NShQE.js";import"./Switch-CkdQrvO8.js";import"./LabeledSwitch-D2KenOv3.js";import"./RadioGroup-B4cSf-Rs.js";import"./FormControl-DNyd5Wo1.js";import"./FormHelperText-BPBLk9Qd.js";import"./Tabs-umBbm1V9.js";import"./MenuItem-DS_246t9.js";import"./AccordionDetails-BhI29Hn1.js";import"./Paper-DCXKoJ6A.js";import"./ErrorFallback-DmKx3vvI.js";import"./ErrorFallbackText-DDsYNZoE.js";import"./ErrorFallbackWrapper-DrscerA0.js";import"./Brand-Bx7kSsxa.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
