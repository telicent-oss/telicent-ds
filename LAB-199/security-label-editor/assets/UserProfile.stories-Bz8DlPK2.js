import{b as s,a as e,F as T}from"./iframe-nsP25gKo.js";import{U as x,c as C,d as a,B as S}from"./UserProfileContent-f95zNd9R.js";import{F as D}from"./FlexBox-Bbary1W6.js";import{D as U}from"./Divider-DsquOdv6.js";import{B as N}from"./Box-BLLAoZm6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcG95mMM.js";import"./clsx-B-dksMZM.js";import"./styled-Bt4bz1Ri.js";import"./extendSxProp-BBWs3qYR.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Baj9xzH7.js";import"./TransitionGroupContext-CRxBndhR.js";import"./MapToggleButtonPresentational-DctfZT0J.js";import"./Remove-CzBf15o4.js";import"./createSvgIcon-LgicXHPs.js";import"./SvgIcon-DwNiQzjj.js";import"./IconButton-BYlTCNOG.js";import"./Paper-B4TYotmL.js";import"./XIcon-DvjInBT6.js";import"./Stack-RhHn8vw5.js";import"./styled-6EMwNmQ6.js";import"./createStyled-BLSQzFCR.js";import"./useThemeProps-DsTjZoaE.js";import"./Typography-DnSN7OSu.js";import"./Box-ClYQvNbI.js";import"./Container-hgkEhD5P.js";import"./Brand-D2VeOYCO.js";import"./IconButton-D_s4EuKD.js";import"./LinkButton-BfQndRTn.js";import"./AppInfoRow-CLIPujn3.js";import"./_IconPopover-CM-VnDWQ.js";import"./Popover-DUCsUIlP.js";import"./utils-DLdYsqUd.js";import"./index-DjtdcByO.js";import"./index-Dxol60-t.js";import"./Modal-CeMyLzIn.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C1ZfCTRs.js";import"./useSlotProps-vjHHGShq.js";import"./InfoIcon-B4QZA7Dh.js";import"./Text-Bwgymadh.js";import"./AppSettings-DVRHQY8i.js";import"./CogIcon-B6b_cT6g.js";import"./Badge-85zKMsnD.js";import"./Badge-9XdJnLxl.js";import"./Chip-JnNyPpPT.js";import"./Chip-CRajJEkV.js";import"./ThemeSwitchRow-BjVkP1Fv.js";import"./Skeleton-DtU8OxFt.js";import"./Skeleton-CwfPMYJi.js";import"./TextField-yAyXnCKm.js";import"./useFormControl-BUEp33Hh.js";import"./FormControl-BMwiDYNj.js";import"./ListContext-B3Q6EA8E.js";import"./useControlled-etmNhFyh.js";import"./FormHelperText-CAF4d6sh.js";import"./MenuItem-ZgZIMTVz.js";import"./dividerClasses-CfQ_rPvR.js";import"./Divider-BIYJU6nM.js";import"./ExpandMoreIcon-BpXAgeqq.js";import"./ListItem-DzmK-gV-.js";import"./Toolbar-Dp-Ug-sg.js";import"./Close-CCEFKHxU.js";import"./Popper-Bu4oq1KR.js";import"./FormControlLabel-46a0qj7a.js";import"./Edit-y9PYitAs.js";import"./SvgIcon-DR4WFJkh.js";import"./TableRow-BZSMQNDt.js";import"./TableCell-COiajT-b.js";import"./TreeView-CrbubHa0.js";import"./useThemeProps-qS4SKgCb.js";import"./index-CLveBa9-.js";import"./Collapse-BSI7DmKL.js";import"./Dialog-DylwUyfT.js";import"./DialogContent-c2oq3SeY.js";import"./Alert-BAgHB1Qx.js";import"./useSlot-OYO5iV9R.js";import"./LinearProgress-Ck7jjyC4.js";import"./LinearProgress-Dmr1J_kV.js";import"./Spinner-cC4ZThnx.js";import"./CircularProgress-B7fpNiMY.js";import"./TextField-CFGiNnsX.js";import"./FormControl-DpTA0hxG.js";import"./FormHelperText-BifUht1K.js";import"./LabeledSwitch-B9jnW4jb.js";import"./Switch-Cny72m0T.js";import"./Switch-Cble3tJI.js";import"./RadioGroup-DhIrKGmL.js";import"./ToggleButton-A0J8XTcs.js";import"./ToggleButton-CYeKTcPs.js";import"./ToggleButtonGroup-CjH0lsuO.js";import"./MenuItem-BVxpSR0S.js";import"./Tabs-BgeYDhLN.js";import"./AccordionSummary-Bc-n5IVo.js";import"./Paper-CRM4XuDd.js";import"./ErrorFallback-CvDibk96.js";import"./ErrorFallbackText-CKST_BNY.js";import"./ErrorFallbackWrapper-BaLlP7IC.js";const bt={title:"Data display/User profile",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
