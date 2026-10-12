import{b as s,a as e,F as T}from"./iframe-Cd_b2o5a.js";import{U as x,c as C,d as a,B as S}from"./DropdownButton-cxua4Oxx.js";import{D}from"./Divider-9h0MPdjV.js";import{F as U}from"./FlexBox-9GQOwYlj.js";import{B as N}from"./Box-D6LYlQtG.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-aVvcYNN5.js";import"./SvgIcon-B1KGk51t.js";import"./clsx-B-dksMZM.js";import"./styled-CGYYy0Dj.js";import"./extendSxProp-DmO-r4ow.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DMI-kw-e.js";import"./Box-dq88Ct6Q.js";import"./Container-Bzr0bNjy.js";import"./styled-DR5ZaSIi.js";import"./createStyled-BiNrR7bs.js";import"./useThemeProps-BeXTsOsN.js";import"./Stack-07laLbzL.js";import"./Typography-CsrEffoZ.js";import"./Paper-hJ6PGTek.js";import"./CogIcon-DhPeOlSR.js";import"./InfoIcon-CUR1EQCO.js";import"./ExpandMoreIcon-C7D9oUmn.js";import"./ThemeSwitchRow-BnpCDuSK.js";import"./index-M60GgTXs.js";import"./Text-Wjy9gNmi.js";import"./AdapterDayjs-C1RvpKBK.js";import"./useThemeProps-BJpOgLh3.js";import"./Modal-D0r_KFjq.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXwLzekK.js";import"./resolveComponentProps-DcS_ho5J.js";import"./index-t4Ln2bEE.js";import"./utils-DuG08QIw.js";import"./Popover-hZ9yWhQ1.js";import"./TextField-Dko6rREu.js";import"./useFormControl-BYRlGA8y.js";import"./FormControl-LraBFmA3.js";import"./ListContext-B_SN-Vsv.js";import"./useControlled-DH9GLKAS.js";import"./createSvgIcon-Bb20z-GJ.js";import"./FormHelperText-Dsn6gvV_.js";import"./IconButton-BvOf-PbX.js";import"./ButtonBase-DtNJCaLI.js";import"./DialogContent-D9MmNMVa.js";import"./Button-9YQTmtlR.js";import"./Chip-Bai6p_3l.js";import"./MenuItem-BLZc0iJP.js";import"./dividerClasses-Du-ckaEr.js";import"./_IconPopover-CiSr5uQZ.js";import"./Chip-Blkti73k.js";import"./TreeView-DMlgxYdm.js";import"./Collapse-BgXK0y6u.js";import"./useSlot-CybJwoih.js";import"./AppInfoRow-Bf3N0ddF.js";import"./AppSettings-Czqo5fXt.js";import"./SvgIcon-U-axE2xd.js";import"./TableRow-DC5TBsGP.js";import"./LinearProgress-Bni58dnK.js";import"./Spinner-BwzA_JHU.js";import"./Dialog-CDfX8NcR.js";import"./MapToggleButtonPresentational-D8XYaC1X.js";import"./Remove-DqG_RTGn.js";import"./Alert-CMzup6BR.js";import"./ToggleButton-C3nKEC15.js";import"./ToggleButtonGroup-CoNFQC6R.js";import"./LinkButton-DOqUGJcT.js";import"./TextField-LWye6xaa.js";import"./Divider-D1nuRWHP.js";import"./Switch-vWVIvl1D.js";import"./LabeledSwitch-C8r-iiSL.js";import"./DatePicker-CtgFdiGq.js";import"./DateTimePicker-CED5Da2b.js";import"./FormControl-DlJ-t_WI.js";import"./FormHelperText-Bmovl1Lw.js";import"./MenuItem-IST6gdzD.js";import"./AccordionDetails-CK9RoavB.js";import"./Paper-Hgkbc48O.js";import"./ErrorFallback-Dt0mghmj.js";import"./ErrorFallbackText-B2d79ctb.js";import"./ErrorFallbackWrapper-BG5Vtd-v.js";import"./Brand-DegRULdI.js";import"./Edit-CNNLFkXb.js";const it={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
