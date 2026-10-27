import{b as s,a as e,F as T}from"./iframe-DZvJTdLH.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-BecRDo52.js";import{F as D}from"./FlexBox-DqoSphCj.js";import{D as U}from"./Divider-Bt0PK1Em.js";import{B as N}from"./Box-BKngloQ-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-_W7uhZIP.js";import"./clsx-B-dksMZM.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";import"./MapToggleButtonPresentational-Bv15blBa.js";import"./Remove-DfAAsDlO.js";import"./createSvgIcon-DAAJopla.js";import"./SvgIcon-Dh5ZJP-b.js";import"./IconButton-DUdtZIUE.js";import"./Paper-CCIRRnYl.js";import"./XIcon-QAa36Zq2.js";import"./Stack-Tdm1puzf.js";import"./styled-D3T-GcQA.js";import"./createStyled-DCQOt2Af.js";import"./useThemeProps-DukH9-pI.js";import"./Typography-CMsNHFNw.js";import"./Box-oyFUK34N.js";import"./Container-BneX2xXG.js";import"./Brand-fdaXkxaR.js";import"./IconButton-8pZ9K19z.js";import"./LinkButton-oo7B018k.js";import"./AppInfoRow-BnZOAG2R.js";import"./_IconPopover-C-5OzzCa.js";import"./Popover-DCCxxHyt.js";import"./utils-BojYxu5F.js";import"./index-BeNEZCo_.js";import"./index-DZKKb8Ei.js";import"./Modal-B-Jrfzth.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CGbu6pRn.js";import"./useSlotProps-D1CGgc7b.js";import"./InfoIcon-zRlouagw.js";import"./Text-CeICp6tE.js";import"./AppSettings-CwOueJgv.js";import"./CogIcon-CIuYjsyA.js";import"./Badge-CXcYRuuH.js";import"./Badge-DAQPuUGC.js";import"./Chip-DOiPte_Q.js";import"./Chip-D0ft7hQi.js";import"./ThemeSwitchRow-PZEOW11l.js";import"./index--cAEdwB6.js";import"./Skeleton-oWp-lzGI.js";import"./Skeleton-B6kfoS7x.js";import"./TextField--zteS9Z3.js";import"./useFormControl-DRohniRh.js";import"./FormControl-CMWNxSpD.js";import"./ListContext-IkSGtFSk.js";import"./useControlled-CMjA5emF.js";import"./FormHelperText-DSqqnB4u.js";import"./MenuItem-BbOJvVrz.js";import"./dividerClasses-DXr8v9nN.js";import"./Divider-Co3nspBN.js";import"./ExpandMoreIcon-CoyOjiP1.js";import"./ListItem-BW1ZgJz6.js";import"./Toolbar-BUoDdB4_.js";import"./Close-HI-kgcXD.js";import"./Popper-FEDRhdQ8.js";import"./FormControlLabel-W0LRkKmU.js";import"./Edit-7kV_dAD-.js";import"./SvgIcon-DjOKORyd.js";import"./TableRow-B_USo3AD.js";import"./TableCell-Dqb6AS6c.js";import"./TreeView-2KoVSPL2.js";import"./useThemeProps-HgEH_AVI.js";import"./Collapse-MMMT4y8r.js";import"./Dialog-DSHn1z9S.js";import"./DialogContent-B0W5F4Cx.js";import"./Alert-CcKbQcmF.js";import"./useSlot-CzbqdBW5.js";import"./LinearProgress-D96_7Ef0.js";import"./LinearProgress-CkoUAzn0.js";import"./Spinner-MO7bqc-q.js";import"./CircularProgress-CyLAzHGZ.js";import"./TextField-C7If2Wuf.js";import"./FormControl-CDX6nODe.js";import"./FormHelperText-CLInVfCn.js";import"./LabeledSwitch-CLfoxOWm.js";import"./Switch-BTn852xS.js";import"./Switch-D4XwAo5L.js";import"./RadioGroup-CHruPiDE.js";import"./ToggleButton-L5BGVeTP.js";import"./ToggleButton-wbRLKRj1.js";import"./ToggleButtonGroup-B8J0oCmm.js";import"./MenuItem-DN6TEHwr.js";import"./Tabs-CrI35iIi.js";import"./AccordionSummary-DG4EpXIp.js";import"./Paper-BMay5fSE.js";import"./ErrorFallback-Cd58QQxa.js";import"./ErrorFallbackText-MlzepuDI.js";import"./ErrorFallbackWrapper-CeD4slRe.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
