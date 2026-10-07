import{b as s,a as e,F as T}from"./iframe-DuvuyOYT.js";import{U as x,c as C,d as a,B as S}from"./DropdownButton-Cgp0ynRQ.js";import{D}from"./Divider-BcYVCAXY.js";import{F as U}from"./FlexBox-TPzjGHTu.js";import{B as N}from"./Box-CdEzcdGG.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-lDlqNob7.js";import"./SvgIcon-3Tw63ijk.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-Cho-jsTU.js";import"./extendSxProp-JkKasx3H.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DvEY6SKk.js";import"./Box-B0L08xCP.js";import"./Container-UrugBBKw.js";import"./styled-DgGNM0V5.js";import"./createStyled-BKTeOdVL.js";import"./useThemeProps-BobYEJQ-.js";import"./Stack-BvZMuuuV.js";import"./Typography-DktY0xgL.js";import"./Paper-DUkfPqTN.js";import"./CogIcon-C7ffmALX.js";import"./InfoIcon-1q2hApFd.js";import"./ExpandMoreIcon-Bk88I7pG.js";import"./ThemeSwitchRow-CSFvN-ub.js";import"./index-CI6Kqv0h.js";import"./Text-L7vd9pUz.js";import"./AdapterDayjs-2T0rZWQj.js";import"./useThemeProps--eCMneWE.js";import"./Modal-ztgM1uVX.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-hN8qFaVQ.js";import"./resolveComponentProps-3edEfYXu.js";import"./index-Bas_o1qY.js";import"./utils-B4ukibcw.js";import"./Popover-BOr5Tnx-.js";import"./TextField-CUB3zYB0.js";import"./useFormControl-B7qRo7M3.js";import"./FormControl-B_bhgqKA.js";import"./ListContext-DBsT2SYb.js";import"./useControlled-ebES1RRU.js";import"./createSvgIcon-D8oPFoN7.js";import"./FormHelperText-DHwUp4cY.js";import"./IconButton-rZ6cns_p.js";import"./ButtonBase-B-XK-vT0.js";import"./DialogContent-D43DrM7u.js";import"./Button-BnMbhCon.js";import"./Chip-DXBg8N5K.js";import"./MenuItem-DqsdRt18.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-Ck2hZc1U.js";import"./Chip-C-mRw_Vp.js";import"./TreeView-DqxVlk-o.js";import"./Collapse-BraLEtjm.js";import"./useSlot-C-CG0yuW.js";import"./AppInfoRow-D2P6hF0a.js";import"./AppSettings-BOXvpGNS.js";import"./SvgIcon-Bc8kLn_o.js";import"./TableRow-gyTKCCh4.js";import"./LinearProgress-dxBLqzdG.js";import"./Spinner-Ed6-sLfr.js";import"./Dialog-DoKSgzIK.js";import"./MapToggleButtonPresentational-DoCeO59m.js";import"./Remove-IX44AOl9.js";import"./Alert-BZ_em7ms.js";import"./ToggleButton-DXPBOEid.js";import"./LinkButton-C6Iwaywt.js";import"./TextField-BbDqVZmX.js";import"./Divider-D68Fa2cD.js";import"./Switch-DAw3yXht.js";import"./LabeledSwitch-D25ybaX8.js";import"./DatePicker-Br58-B3a.js";import"./DateTimePicker-BgSSeO5r.js";import"./FormControl-DiFEjGcX.js";import"./FormHelperText-DzVT_Kzu.js";import"./MenuItem-Db2sbs9g.js";import"./AccordionDetails---llt0mU.js";import"./Paper-D2SNeHbc.js";import"./ErrorFallback-C6Uj6zhy.js";import"./ErrorFallbackText-CoG67Tay.js";import"./ErrorFallbackWrapper-kKw7iFhr.js";import"./Brand-Bj9k9vyT.js";import"./Edit-DPnzdP9f.js";const it={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{fullName:{control:"text",description:"The user's name shown next to the avatar. Truncates via a responsive clamp with a `title` tooltip on overflow. Omit for an icon-only trigger.",table:{type:{summary:"string"}}},id:{control:"text",description:'Lands on the trigger button for stable E2E selectors (project convention is `testIdAttribute: "id"`). The menu id is derived as `${id}-menu`. Defaults to the legacy hardcoded `"user-profile-menu"` for backwards compatibility when omitted.',table:{type:{summary:"string"}}},ariaLabel:{control:"text",description:'Accessible name for the trigger button — needed because `fullName` is hidden on small viewports and may be empty in icon-only mode. Default `"User menu"`.',table:{type:{summary:"string"}}},children:{control:!1,description:"Dropdown contents. Compose from `UserProfileContent` for the row layout, plus `Divider` and a primary `Button` for actions.",table:{type:{summary:"ReactNode"}}}},decorators:[b=>e(N,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:b()})]},n=s(T,{children:[s(C,{children:[e(a,{title:"Username",content:"Satoru Gojo"}),e(a,{title:"Email",content:"satoru.gojo@telicent.io"}),e(a,{title:"Deployed Organisation",content:"Telicent UK"})]}),e(D,{sx:{py:1}}),e(U,{sx:{pt:2},children:e(S,{variant:"primary",startIcon:e("i",{className:"fa-solid fa-arrow-right-from-bracket"}),onClick:()=>console.log("Sign Out"),children:"Sign Out"})})]}),t={args:{fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"The canonical shape — name + avatar inline, dropdown with three identity rows (`TitleAndContent`) and a Sign Out button separated by a `Divider`. This is the composition every Telicent app assembles."}}}},r={args:{children:n},parameters:{docs:{description:{story:"Omit `fullName` to render just the avatar and chevron — the shape `telicent-user-portal` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged."}}}},o={args:{id:"user-profile",fullName:"Satoru Gojo",children:n},parameters:{docs:{description:{story:"Supplies an `id` so E2E tests target the trigger as `#user-profile` and the opened menu as `#user-profile-menu`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free."}}}},i={args:{fullName:"Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",children:n},parameters:{docs:{description:{story:"Long names clamp to a breakpoint-responsive `maxWidth` with ellipsis overflow. The full name is still available via the browser-native `title` tooltip on hover."}}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var u,f,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
