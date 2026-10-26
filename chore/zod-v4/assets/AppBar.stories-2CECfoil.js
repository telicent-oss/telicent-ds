import{b as s,a as t}from"./iframe-Djv8ktra.js";import{A as O}from"./ExpandLessIcon-C3pwZ4Pc.js";import"./CogIcon-CT9n-ILh.js";import"./InfoIcon-CHj9CFVM.js";import"./ExpandMoreIcon-teVtSgL8.js";import{T as N}from"./ThemeSwitchRow-H2pqK7Sf.js";import{d as n,B as S,U as D,A as y}from"./EntityList-CmXEoAc2.js";import"./Text-Y9XZ_yHR.js";import"./Badge-CMOuLR30.js";import"./Chip-CxSld7rQ.js";import{D as E}from"./Divider-C9GgdKvp.js";import"./TreeView-CmgLkcRM.js";import{A as P,a as p}from"./AppInfoRow-C5ZQnBbJ.js";import{A as R}from"./AppSettings-CSEbvKPB.js";import"./SvgIcon-DcOD0BqO.js";import"./TableRow-zzNEo6q7.js";import"./IconButton-CerlmnQB.js";import"./LinkButton-CYrYI8ff.js";import{F as L}from"./FlexBox-Do_i3sJ9.js";import{appList as I}from"./AppSwitch.stories-BpnN-8_T.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-C9osqYpn.js";import"./preload-helper-Dp1pzeXC.js";import"./SvgIcon-DECtGhh0.js";import"./clsx-B-dksMZM.js";import"./styled-DTBkkZW7.js";import"./extendSxProp-Bg6AHp8L.js";import"./composeClasses-fLhin0tj.js";import"./Box-Cvy3NsGq.js";import"./Container-D5lO9yGB.js";import"./styled-CpIMtI8p.js";import"./createStyled-C4labjHn.js";import"./useThemeProps-2HbMDrfU.js";import"./Stack-DjL-eZhY.js";import"./Typography-Dq-Ciojh.js";import"./Paper-1JE7t4a2.js";import"./index-8FsRt4pB.js";import"./ListContext-DOkPQ55E.js";import"./ListItem-DgF_KQ7w.js";import"./FormControl-KHlRX9wq.js";import"./useFormControl-yjc7eBp6.js";import"./TransitionGroupContext-BAmDsqe-.js";import"./resolveComponentProps-BCG5tMa5.js";import"./ButtonBase-BsGOhoOZ.js";import"./Toolbar-zYbL7pMK.js";import"./TextField-FyiAyxRB.js";import"./Modal-CbQrDciN.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-D4VVjH6n.js";import"./index-CVsYjqM0.js";import"./index-CwsYzhsj.js";import"./utils-B6N13bq2.js";import"./Popover-B86b2_k9.js";import"./useControlled-BYl-fCxX.js";import"./createSvgIcon-DZnw1m24.js";import"./FormHelperText-D2wijesy.js";import"./Close-uaArJQbm.js";import"./Popper-CRx9JkVY.js";import"./Badge-Bne_esn3.js";import"./Chip-Df5TxRX3.js";import"./IconButton-D0URHQdC.js";import"./FormControlLabel-Dl4rNMyO.js";import"./MenuItem-BrTfhZTz.js";import"./dividerClasses-CaIblDIL.js";import"./Button-DwhmFZ5z.js";import"./MapToggleButtonPresentational-9yu7-Ilq.js";import"./Remove-UDhVurmI.js";import"./useSlot-DS97Xucj.js";import"./Divider-BQgZCPEt.js";import"./Skeleton-Kydo8R4j.js";import"./Skeleton-CnHTnMO_.js";import"./Edit-BKmGEAwu.js";import"./LinearProgress-DdDDCrSp.js";import"./LinearProgress-DK1T17kM.js";import"./Spinner-CZ5RlgS9.js";import"./CircularProgress-DH002ZiD.js";import"./Dialog-CNnh_iBj.js";import"./DialogContent-6oCYEZl_.js";import"./Alert-BVz-9DlK.js";import"./ToggleButton-GvPbRr0J.js";import"./ToggleButton-CFoTEcuq.js";import"./ToggleButtonGroup-BS0uvyOk.js";import"./TextField-DZFwm5FK.js";import"./Switch-Ckcfd9qm.js";import"./Switch-DP0w0isr.js";import"./LabeledSwitch-Boji5GC-.js";import"./RadioGroup-CHfeD9PB.js";import"./FormControl-DEhUdqs_.js";import"./FormHelperText-B0uW7-Qr.js";import"./Tabs-DLjDcbju.js";import"./MenuItem-DaXvOOwF.js";import"./AccordionDetails-CqSaJtGy.js";import"./Collapse-BPTOiYJG.js";import"./_IconPopover-BLyK2_eM.js";import"./Paper-IIlbTA42.js";import"./ErrorFallback-ei1UHZWN.js";import"./ErrorFallbackText-CuxdV7zC.js";import"./ErrorFallbackWrapper-C5pNwo6x.js";import"./Brand-4F19u9Fh.js";import"./useThemeProps-DvIlKj6P.js";import"./TableCell-Bunj5ZcK.js";const De={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
A branded top-level navigation component built on MUI's \`<AppBar>\` with Telicent design-system styling. 
It supports a centered brand area, optional application name, version label, and flexible content areas on the left and right for things like app switching, user profile actions, or sign-out buttons.

---

### When & How to use it
- **Application headers:** Use at the top of a product or platform page.
- **Branding + navigation:** Ideal when you need consistent Telicent branding with contextual actions.
- **Flexible layouts:** Use \`startChild\` for left-side content such as an app switcher, and \`endChild\` for right-side content such as a user profile or action buttons.
- **Clickable:** Pass \`href\` to make this component clickable, out of the box it opens in a blank tab.

\`\`\`jsx
<AppBar
  appName="Catalogue"
  isElevated
  href="/"
  startChild={<AppSwitch apps={appList} />}
  endChild={
    <Button variant="primary">
      Sign Out
    </Button>
  }
/>
\`\`\`

---

### Layout behaviour
The AppBar uses a three-column grid layout:

- left area for supporting actions
- centered brand area
- right area for user actions

This keeps the brand visually centered while allowing flexible content on either side.
`}},...F("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=s(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(S,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(S,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(y,{apps:I}),endChild:T}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},a={args:{appName:"Catalogue",isElevated:!0,startChild:t(y,{apps:I}),endChild:s(L,{direction:"row",alignItems:"center",spacing:.5,children:[s(P,{children:[t(p,{label:"Version",value:"1.16.0"}),t(p,{label:"Build",value:"a1b2c3d"}),t(p,{label:"Environment",value:"production"})]}),t(R,{children:t(N,{checked:!1,onChange:()=>{}})}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}},Ee=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,w,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,B,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    isElevated: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: <FlexBox direction="row" alignItems="center" spacing={0.5}>
        <AppInfo>
          <AppInfoRow label="Version" value="1.16.0" />
          <AppInfoRow label="Build" value="a1b2c3d" />
          <AppInfoRow label="Environment" value="production" />
        </AppInfo>
        <AppSettings>
          <ThemeSwitchRow checked={false} onChange={() => undefined} />
        </AppSettings>
        {UserProfileExample}
      </FlexBox>
  },
  parameters: {
    docs: {
      description: {
        story: "The full Telicent app-header composition: \`AppSwitch\` on the left, \`AppInfo\` and \`UserProfile\` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. \`AppInfo\` sits next to \`UserProfile\` so version/build/environment metadata is one click away without cluttering the profile dropdown."
      }
    }
  }
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Ee as __namedExportsOrder,De as default};
