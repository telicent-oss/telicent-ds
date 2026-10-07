import{b as s,a as e,F as T}from"./iframe-EHiispHx.js";import{U as x,c as C,d as a,B as S}from"./DropdownButton-Ch2KHcVV.js";import{D}from"./Divider-B6qZ_hw9.js";import{F as U}from"./FlexBox-Brwmqgps.js";import{B as N}from"./Box-BaAFlwfY.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-jYjB0fJU.js";import"./SvgIcon-DoFYhYUo.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BZtHjZ0T.js";import"./extendSxProp-ChdDfLiy.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D_CvADku.js";import"./Box-C_PltGBT.js";import"./Container--hMSSlEw.js";import"./styled-Dsi4lrKP.js";import"./createStyled-C1fbm1Mc.js";import"./useThemeProps-BJ2283JF.js";import"./Stack-BDiVPNv1.js";import"./Typography-u692F7Lr.js";import"./Paper-D5wyd3V2.js";import"./CogIcon-BeV-4FUk.js";import"./InfoIcon-XACXhAsZ.js";import"./ExpandMoreIcon-BYRPKxhi.js";import"./ThemeSwitchRow-CWrDPQ4c.js";import"./index-BM8MsdEI.js";import"./Text-COeFgyG1.js";import"./AdapterDayjs-ByeICk9b.js";import"./useThemeProps-BfDwWLGL.js";import"./Modal-C84-Mwi0.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CRo6hKdF.js";import"./resolveComponentProps-DB8vWEuZ.js";import"./index-D6HbG4uh.js";import"./utils-BR7uOJR9.js";import"./Popover-CNEqh9b6.js";import"./TextField-Dzy82oKI.js";import"./useFormControl-DfdyR1E3.js";import"./FormControl-BrydlDY8.js";import"./ListContext-BlVgl-Pi.js";import"./useControlled-OJY6NH35.js";import"./createSvgIcon-B8I8xlXT.js";import"./FormHelperText-C_cemKQ0.js";import"./IconButton-D6RFmtWs.js";import"./ButtonBase-R0TygaOg.js";import"./DialogContent-CSkG4AHB.js";import"./Button-d-YWvRHk.js";import"./Chip-bJ3IowVa.js";import"./MenuItem-B3aA4AXj.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-D3s7jMPT.js";import"./Chip-E-lZUDs8.js";import"./TreeView-CUJ68v5-.js";import"./Collapse-DwqZb05A.js";import"./useSlot-BwMdRg8G.js";import"./AppInfoRow-C5_ggrgQ.js";import"./AppSettings-C2atzlyc.js";import"./SvgIcon-4pLSFCsg.js";import"./TableRow-B3CsX6Fd.js";import"./LinearProgress-D1Fz4RJ-.js";import"./Spinner-ByzkNUK0.js";import"./Dialog-Dkx34yy5.js";import"./MapToggleButtonPresentational-D-V7ixFF.js";import"./Remove-qKz_hbHL.js";import"./Alert-C6RVlPi4.js";import"./ToggleButton-AWyPEjYi.js";import"./LinkButton-BEGAfp3_.js";import"./TextField-BsHv7ljj.js";import"./Divider-Bj27IAqR.js";import"./Switch-B0Tv5QGv.js";import"./LabeledSwitch-BXMnIWFI.js";import"./DatePicker-CBY6xzyW.js";import"./DateTimePicker-B1l5MsHG.js";import"./FormControl-D_AEerrZ.js";import"./FormHelperText-pfF9X1Ya.js";import"./MenuItem-BPyYHvK7.js";import"./AccordionDetails-Cu0Lnfok.js";import"./Paper-Jsu15PNh.js";import"./ErrorFallback-Cwh2Uo6W.js";import"./ErrorFallbackText-CjRh0P2N.js";import"./ErrorFallbackWrapper-CQZHS6gC.js";import"./Brand-CXxdZUN_.js";import"./Edit-FsVyeYJ0.js";const it={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{fullName:{control:"text",description:"The user's name shown next to the avatar. Truncates via a responsive clamp with a `title` tooltip on overflow. Omit for an icon-only trigger.",table:{type:{summary:"string"}}},id:{control:"text",description:'Lands on the trigger button for stable E2E selectors (project convention is `testIdAttribute: "id"`). The menu id is derived as `${id}-menu`. Defaults to `"user-profile"` so every instance has a stable selector out of the box — override when multiple UserProfiles coexist on a page.',table:{type:{summary:"string"},defaultValue:{summary:'"user-profile"'}}},ariaLabel:{control:"text",description:'Accessible name for the trigger button — needed because `fullName` is hidden on small viewports and may be empty in icon-only mode. Default `"User menu"`.',table:{type:{summary:"string"}}},children:{control:!1,description:"Dropdown contents. Compose from `UserProfileContent` for the row layout, plus `Divider` and a primary `Button` for actions.",table:{type:{summary:"ReactNode"}}}},decorators:[b=>e(N,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:b()})]},n=s(T,{children:[s(C,{children:[e(a,{title:"Username",content:"Satoru Gojo"}),e(a,{title:"Email",content:"satoru.gojo@telicent.io"}),e(a,{title:"Deployed Organisation",content:"Telicent UK"})]}),e(D,{sx:{py:1}}),e(U,{sx:{pt:2},children:e(S,{variant:"primary",startIcon:e("i",{className:"fa-solid fa-arrow-right-from-bracket"}),onClick:()=>console.log("Sign Out"),children:"Sign Out"})})]}),t={args:{fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"The canonical shape — name + avatar inline, dropdown with three identity rows (`TitleAndContent`) and a Sign Out button separated by a `Divider`. This is the composition every Telicent app assembles."}}}},r={args:{children:n},parameters:{docs:{description:{story:"Omit `fullName` to render just the avatar and chevron — the shape `telicent-user-portal` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged."}}}},o={args:{id:"user-profile",fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"Supplies an `id` so E2E tests target the trigger as `#user-profile` and the opened menu as `#user-profile-menu`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free."}}}},i={args:{fullName:"Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",children:n},parameters:{docs:{description:{story:"Long names clamp to a breakpoint-responsive `maxWidth` with ellipsis overflow. The full name is still available via the browser-native `title` tooltip on hover."}}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const nt=["Default","IconOnly","WithId","LongName"];export{t as Default,r as IconOnly,i as LongName,o as WithId,nt as __namedExportsOrder,it as default};
