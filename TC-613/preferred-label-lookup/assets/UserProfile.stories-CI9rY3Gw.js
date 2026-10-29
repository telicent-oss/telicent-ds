import{b as s,a as e,F as T}from"./iframe-C1kADl7K.js";import{U as x,c as C,d as a,B as S}from"./EntityList-DD__byuN.js";import{D}from"./Divider-f5jacwQy.js";import{F as U}from"./FlexBox-0Zk8Z1wf.js";import{B as N}from"./Box-BdLyxJDN.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-HgubeblD.js";import"./Typography-B2gj4f-z.js";import"./clsx-B-dksMZM.js";import"./styled-B_lTjOn2.js";import"./extendSxProp-A80SNn2E.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-CpKQvUa4.js";import"./ListItem-zqYHDaok.js";import"./FormControl-FAVJKkDC.js";import"./useFormControl-DZcbumU_.js";import"./TransitionGroupContext-DqUd00ju.js";import"./resolveComponentProps-CH300SQ3.js";import"./ButtonBase-NZH3pNGk.js";import"./Toolbar-BXcFouCQ.js";import"./TextField-LvDA3ZY0.js";import"./Modal-ZwwWAhia.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Ddp69iyh.js";import"./index-7_0JHsY4.js";import"./index-CSdfPHX6.js";import"./utils-DhhX_lJH.js";import"./Popover-BhjfhAkg.js";import"./Paper-DQDiDue-.js";import"./useControlled-CMijF2lP.js";import"./createSvgIcon-vxqAnrWb.js";import"./SvgIcon-Dgf8Yk0z.js";import"./FormHelperText-Ctz0a05h.js";import"./Close-DlnbITpg.js";import"./Popper-BIvXmWfM.js";import"./Badge-DVEzrCrb.js";import"./Chip-Cday2RBB.js";import"./IconButton-D9H-eKUV.js";import"./FormControlLabel-DE2FMvJ1.js";import"./Stack-VS7yGLX2.js";import"./styled-Dqs76Ca-.js";import"./createStyled-Cjai_X-W.js";import"./useThemeProps-Ceyy6DTc.js";import"./MenuItem-An3zk10d.js";import"./dividerClasses-B_31kY5s.js";import"./Button-CRAaBK8B.js";import"./MapToggleButtonPresentational-FOs4i9Kd.js";import"./Remove-Bj49Kl6q.js";import"./ExpandLessIcon-BAbK8V4h.js";import"./Box-LsPv36hu.js";import"./Container-BJFXwx0J.js";import"./CogIcon-BR-e7jH6.js";import"./InfoIcon-CR0eptQ5.js";import"./ExpandMoreIcon-Ca-rTBJg.js";import"./ThemeSwitchRow-DggDMvDb.js";import"./index-BeWUlcg2.js";import"./IconButton-D5lK2i8o.js";import"./Badge-CFK-UBwA.js";import"./Chip-Dl8h3Hwb.js";import"./TreeView-BNkh8rg4.js";import"./useThemeProps-V4VNHFY4.js";import"./Collapse-D-lGiZGf.js";import"./useSlot-DWlSKb9c.js";import"./AppInfoRow-C2KGKin4.js";import"./_IconPopover-BigTk8_r.js";import"./AppSettings-Ce1ekPQV.js";import"./SvgIcon-DjNXdhgA.js";import"./TableRow-Cp9U1s9E.js";import"./TableCell-YjjddMcy.js";import"./Divider-CijklUH2.js";import"./Skeleton-Dd-aKLDg.js";import"./Skeleton-Cw8vu2zv.js";import"./Edit-B0xnlOWG.js";import"./LinearProgress-D7LbuYfT.js";import"./LinearProgress-Cc3KIWRO.js";import"./Spinner-oxy8AqCs.js";import"./CircularProgress-CPCux3_H.js";import"./Dialog-CJUISWAB.js";import"./DialogContent-Dmn_sdtG.js";import"./Alert-B6r98CIF.js";import"./ToggleButton-CltJGPg5.js";import"./ToggleButton-D0NaummI.js";import"./ToggleButtonGroup-CjMZ_ebh.js";import"./LinkButton-DYifi3rJ.js";import"./TextField-Ls5lKTbc.js";import"./Switch-vKlz1c9P.js";import"./Switch-Bxq9Tkvu.js";import"./LabeledSwitch-DORL5yab.js";import"./RadioGroup-BMjLAN0C.js";import"./FormControl-Ckwgi1a3.js";import"./FormHelperText-CyMEtxqf.js";import"./Tabs-a25RXXRz.js";import"./MenuItem-YUdwQe2h.js";import"./AccordionDetails-C7SPSNj5.js";import"./Paper-Dv5b5qFz.js";import"./ErrorFallback-2Hmi_7YV.js";import"./ErrorFallbackText-Bksmpx64.js";import"./ErrorFallbackWrapper-dwx0rRDf.js";import"./Brand-DxKKSwRE.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
