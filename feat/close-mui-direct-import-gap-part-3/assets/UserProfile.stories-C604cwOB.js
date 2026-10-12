import{b as s,a as e,F as T}from"./iframe-aFe7UUBz.js";import{U as x,c as C,d as a,B as S}from"./DropdownButton-CGpi1hqS.js";import{D}from"./Divider-Dp_aJAS1.js";import{F as U}from"./FlexBox-CmBTY25V.js";import{B as N}from"./Box-C4GBjpR7.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-_Gn5GBEU.js";import"./SvgIcon--evEnJni.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BisXqFak.js";import"./extendSxProp-Cg1_Zgz3.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Box-D3NLLewX.js";import"./Container-SU972UVC.js";import"./styled-pNRJu87k.js";import"./createStyled-BGui5uB2.js";import"./useThemeProps-wiEASLar.js";import"./Stack-DONLWdUd.js";import"./Typography-BW_wQ-ow.js";import"./Paper-Dibq-B0l.js";import"./CogIcon-Dzw3a1eq.js";import"./InfoIcon-DtypYTQN.js";import"./ExpandMoreIcon-CXldgYGR.js";import"./ThemeSwitchRow-Dg_y3FM8.js";import"./index-BZ_yw_br.js";import"./Text-DzLxPjqb.js";import"./AdapterDayjs-KkvHR9Mv.js";import"./useThemeProps-BXD491Jy.js";import"./Modal-B6NB2nb_.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CzKtgD_a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-COer71JX.js";import"./index-BCoUhWCm.js";import"./utils-DumdPjpW.js";import"./Popover-DAqhZQe9.js";import"./InputAdornment-CZufPfa6.js";import"./useFormControl-BWvbFyMh.js";import"./TextField-BJ5r44lN.js";import"./FormControl-Drt8KI8a.js";import"./ListContext-BI1i6AEx.js";import"./useControlled-DSueLwQ1.js";import"./createSvgIcon-B8v7KFIv.js";import"./FormHelperText-B1iyLw_g.js";import"./IconButton-B1f28KGp.js";import"./ButtonBase--L73nkrK.js";import"./DialogContent-BK3fYsXw.js";import"./Button-i5m3WpsB.js";import"./Chip-jnP50xz1.js";import"./DataGrid-DvrmVkGc.js";import"./index-hVAbpQul.js";import"./Switch-CYakBrxK.js";import"./FormControlLabel-AQIEhTjn.js";import"./Skeleton-BYYXkkHT.js";import"./MenuItem-BksAsHXH.js";import"./dividerClasses-ClH17Faz.js";import"./LinearProgress-DoDInf46.js";import"./Divider-D0LHX0qm.js";import"./CircularProgress-C8hIlNO3.js";import"./Close-EYRLp0W2.js";import"./Tabs-D7uWqjx4.js";import"./TableCell-BAKDulqq.js";import"./ToggleButton-d-GapL7d.js";import"./_IconPopover-YVipcYc4.js";import"./Chip-CUl3csw_.js";import"./TreeView-CZ0g_WUA.js";import"./Collapse-_-rzgl6R.js";import"./useSlot-CmIeWFIT.js";import"./AppInfoRow-F3c1S5e4.js";import"./AppSettings-DScsrM9R.js";import"./SvgIcon-Bpd7uWoU.js";import"./TableRow-b_2L1XJo.js";import"./LinearProgress-khjbRmBd.js";import"./Spinner-CWY5xgQX.js";import"./Dialog-DRC_GMD1.js";import"./MapToggleButtonPresentational-JgXdEZxi.js";import"./Remove-BYWHJlSb.js";import"./Alert-DqW_EzS7.js";import"./ToggleButton-DfTYlbw3.js";import"./LinkButton-17csqiIs.js";import"./TextField-Cx5VJ8ov.js";import"./Switch-4P0ZX1Dh.js";import"./LabeledSwitch-CLOpL5K_.js";import"./DatePicker-BxrT-zy4.js";import"./DateTimePicker-Di_rakTc.js";import"./LocalizationProvider-BHfuR2cp.js";import"./RadioGroup-OxucSz7v.js";import"./FormControl-DEBxrS_-.js";import"./FormHelperText-4VYnSz9d.js";import"./MenuItem-CpN00EoB.js";import"./AccordionDetails-fAqhD8kD.js";import"./Paper-B-DWjYaW.js";import"./ErrorFallback-DGzzW2Jr.js";import"./ErrorFallbackText-B_Z_nAtZ.js";import"./ErrorFallbackWrapper-CBwm4dqE.js";import"./Brand-GlYAhSh3.js";import"./Edit-qB64VPbS.js";const yt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{fullName:{control:"text",description:"The user's name shown next to the avatar. Truncates via a responsive clamp with a `title` tooltip on overflow. Omit for an icon-only trigger.",table:{type:{summary:"string"}}},id:{control:"text",description:'Lands on the trigger button for stable E2E selectors (project convention is `testIdAttribute: "id"`). The menu id is derived as `${id}-menu`. Defaults to `"user-profile"` so every instance has a stable selector out of the box — override when multiple UserProfiles coexist on a page.',table:{type:{summary:"string"},defaultValue:{summary:'"user-profile"'}}},ariaLabel:{control:"text",description:'Accessible name for the trigger button — needed because `fullName` is hidden on small viewports and may be empty in icon-only mode. Default `"User menu"`.',table:{type:{summary:"string"}}},children:{control:!1,description:"Dropdown contents. Compose from `UserProfileContent` for the row layout, plus `Divider` and a primary `Button` for actions.",table:{type:{summary:"ReactNode"}}}},decorators:[b=>e(N,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:b()})]},n=s(T,{children:[s(C,{children:[e(a,{title:"Username",content:"Satoru Gojo"}),e(a,{title:"Email",content:"satoru.gojo@telicent.io"}),e(a,{title:"Deployed Organisation",content:"Telicent UK"})]}),e(D,{sx:{py:1}}),e(U,{sx:{pt:2},children:e(S,{variant:"primary",startIcon:e("i",{className:"fa-solid fa-arrow-right-from-bracket"}),onClick:()=>console.log("Sign Out"),children:"Sign Out"})})]}),t={args:{fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"The canonical shape — name + avatar inline, dropdown with three identity rows (`TitleAndContent`) and a Sign Out button separated by a `Divider`. This is the composition every Telicent app assembles."}}}},r={args:{children:n},parameters:{docs:{description:{story:"Omit `fullName` to render just the avatar and chevron — the shape `telicent-user-portal` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged."}}}},o={args:{id:"user-profile",fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"Supplies an `id` so E2E tests target the trigger as `#user-profile` and the opened menu as `#user-profile-menu`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free."}}}},i={args:{fullName:"Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",children:n},parameters:{docs:{description:{story:"Long names clamp to a breakpoint-responsive `maxWidth` with ellipsis overflow. The full name is still available via the browser-native `title` tooltip on hover."}}}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const wt=["Default","IconOnly","WithId","LongName"];export{t as Default,r as IconOnly,i as LongName,o as WithId,wt as __namedExportsOrder,yt as default};
