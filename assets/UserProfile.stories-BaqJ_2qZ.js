import{b as s,a as e,F as T}from"./iframe-AFxgTgVh.js";import{U as x,c as C,d as a,B as S}from"./DropdownButton-CmjCz-up.js";import{D}from"./Divider-CiTbO13G.js";import{F as U}from"./FlexBox-D3oDiYJs.js";import{B as N}from"./Box-BAyptZb_.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Coc8f085.js";import"./SvgIcon-CgCZoLsz.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BsI0-Lki.js";import"./extendSxProp-BD-Y0mPz.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-CbdznVAQ.js";import"./Box-oVOzhj2X.js";import"./Container-Br5OlP2Q.js";import"./styled-BADavTd0.js";import"./createStyled-C-Iq8mjg.js";import"./useThemeProps-ChNg2e9b.js";import"./Stack-DmXgS0Zc.js";import"./Typography-DFz7k-kI.js";import"./Paper-CbgL2EIb.js";import"./CogIcon-DC6KQaAP.js";import"./InfoIcon-lSIhMqt2.js";import"./ExpandMoreIcon-CZhJx08f.js";import"./ThemeSwitchRow-C4g2Xynz.js";import"./index-CpoxvXIl.js";import"./Text-DXLE4G_s.js";import"./AdapterDayjs-DZVAbh7i.js";import"./useThemeProps-DHndbiQK.js";import"./Modal-qRAMf-Nc.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXXJO1FV.js";import"./resolveComponentProps-BAwsKLAE.js";import"./index-4IveHujF.js";import"./utils-C0JGDBoq.js";import"./Popover-BsgVjdIR.js";import"./TextField-DxwO5kEU.js";import"./useFormControl-Bg5crxJM.js";import"./FormControl-B_dJc-MU.js";import"./ListContext-DytnD_x2.js";import"./useControlled-B8RTFtfz.js";import"./createSvgIcon-Dpm5xP5l.js";import"./FormHelperText-DMGyUIz_.js";import"./IconButton-DBTDpe9N.js";import"./ButtonBase-Be1Z9iU4.js";import"./DialogContent-DJzRyI5L.js";import"./Button-BVSqHqLN.js";import"./Chip-CLw8XhUv.js";import"./MenuItem-ksmP0_yb.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-3UG3pSje.js";import"./Chip-C6eTFzcU.js";import"./TreeView-Q7eAtxGU.js";import"./Collapse-CgizZByK.js";import"./useSlot-JMCK8GCP.js";import"./AppInfoRow-DaJEEGeD.js";import"./AppSettings-Bxrh47vJ.js";import"./SvgIcon-B1EPKKW1.js";import"./TableRow-CvYZ37P_.js";import"./LinearProgress-CpwNTlvx.js";import"./Spinner-rNhXcUyc.js";import"./Dialog-kpJLggSC.js";import"./MapToggleButtonPresentational-BeBKKkmg.js";import"./Remove-BR_Tqlmz.js";import"./Alert-B0IPru6R.js";import"./ToggleButton-DmIMHj3V.js";import"./LinkButton-DEB6LEJn.js";import"./TextField-B1Gh1rGr.js";import"./Divider-Cs_qNx3V.js";import"./Switch-C_vcwcW1.js";import"./LabeledSwitch-BxWut5tD.js";import"./DatePicker-D23KJK8d.js";import"./DateTimePicker-CGr0SUDo.js";import"./FormControl-BEoO9Wxu.js";import"./FormHelperText-ByrV8KMP.js";import"./MenuItem-CSRF0Uv2.js";import"./AccordionDetails-5vciIkwG.js";import"./Paper-DERQ4Oel.js";import"./ErrorFallback-efIZsijd.js";import"./ErrorFallbackText-rPp7xJ4J.js";import"./ErrorFallbackWrapper-BFBmLnXB.js";import"./Brand-BuZzOnWw.js";import"./Edit-CnWyMZY6.js";const it={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
