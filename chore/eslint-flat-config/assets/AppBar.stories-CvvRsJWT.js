import{b as s,a as t}from"./iframe-Cc505q8T.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-BCGV3pt1.js";import"./IconButton-bijqnudJ.js";import"./LinkButton-CrQZWdvL.js";import{A as D,a as p}from"./AppInfoRow-DNstdpiQ.js";import{A as E}from"./AppSettings-CJGIgiF6.js";import"./Badge-CaVpaSp6.js";import"./Chip-CSt2gfB4.js";import{D as P}from"./Divider-DoUPlLT7.js";import{T as R}from"./ThemeSwitchRow-DppX6RPX.js";import{A as L}from"./XIcon-DfplpFrn.js";import"./CogIcon-ChH7stlR.js";import"./ExpandMoreIcon-ldPi6jMj.js";import"./InfoIcon-Dz7o8k3j.js";import"./SvgIcon-BEgI93BA.js";import"./TableRow-DCNIHjLK.js";import"./Text-CeS4nIe3.js";import"./TreeView-BzLLrYY7.js";import{appList as I}from"./AppSwitch.stories-D0X5FAQk.js";import{F}from"./FlexBox-INXNFDos.js";import{B as k}from"./Box-DBDnR1g8.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BGbQUNXq.js";import"./clsx-B-dksMZM.js";import"./styled-BvzKQ4sx.js";import"./extendSxProp-DK-r-88F.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-xv6WL43m.js";import"./TransitionGroupContext-CQcyUDLY.js";import"./MapToggleButtonPresentational-SEdkkgro.js";import"./Remove-wLSkQjhc.js";import"./createSvgIcon-C2iK1MKO.js";import"./SvgIcon-QK6eTELx.js";import"./IconButton-wGfyijkC.js";import"./Paper-BEgnxPoV.js";import"./Brand-B_inw8Nn.js";import"./Typography-JA0wl7ef.js";import"./Skeleton-NT2g86kk.js";import"./Skeleton-wC5DXAYG.js";import"./TextField-BD6Mkee3.js";import"./useFormControl-C6vP74Jn.js";import"./FormControl-Ca5m24gk.js";import"./Modal-B1TMbF1u.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CEFtJ1JV.js";import"./useSlotProps-vDTfIZOq.js";import"./index-BYRKYzg2.js";import"./index-E67BpH2O.js";import"./utils-llZg6Ldu.js";import"./Popover-B-7QVUjC.js";import"./ListContext-mDo66NCa.js";import"./useControlled-bQ2OS_cP.js";import"./FormHelperText-BoGba_Gk.js";import"./MenuItem-CezCKy8F.js";import"./dividerClasses-BvSlSoD1.js";import"./Divider-CzNUtG-0.js";import"./ListItem-B3mBow1c.js";import"./Toolbar-bO9Fqt8n.js";import"./Close-DueXUMhB.js";import"./Popper-nweOkxzE.js";import"./Badge-UZyuKCJw.js";import"./Chip-C0LSZzbe.js";import"./FormControlLabel-CbfZt0_t.js";import"./Stack-CXQatkal.js";import"./styled-nyzOJzdX.js";import"./createStyled-DL0YunmW.js";import"./useThemeProps-DUoDE_hW.js";import"./Edit-CHOg278_.js";import"./Box-C7w_TU32.js";import"./Dialog-Co_6VBJM.js";import"./DialogContent-DXpWtf-D.js";import"./Alert-wTSBptqR.js";import"./useSlot-DSvhdQyN.js";import"./LinearProgress-CF5PbK0_.js";import"./LinearProgress-B38XWAmN.js";import"./Spinner-CkaqrDBP.js";import"./CircularProgress-Bo5P2Z-p.js";import"./TextField-CwQOSZsD.js";import"./FormControl-Bh0L5A3e.js";import"./FormHelperText-Dd5c2IgU.js";import"./LabeledSwitch-BO0Zz5ka.js";import"./Switch-ChbOueU7.js";import"./Switch-CHwrG2-X.js";import"./RadioGroup-CFZqodNP.js";import"./Container-C5FmO0ZG.js";import"./ToggleButton-D96Gk9kD.js";import"./ToggleButton--FZGV6SF.js";import"./ToggleButtonGroup-DaCVckCp.js";import"./MenuItem-CS3aBPeu.js";import"./Tabs-DF-xdkqW.js";import"./AccordionSummary-Bssa8i78.js";import"./Collapse-QTd9ButL.js";import"./index-CmE1T0Xl.js";import"./Paper-DT8s_h7n.js";import"./_IconPopover-CEgvvroX.js";import"./ErrorFallback-BhqQfFtZ.js";import"./ErrorFallbackText-CIKedg_H.js";import"./ErrorFallbackWrapper-CGtn1SJd.js";import"./TableCell-B-Xo9P4q.js";import"./useThemeProps-vZa-IxWp.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...O("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=s(N,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(P,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(S,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(S,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(y,{apps:I}),endChild:T}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},a={args:{appName:"Catalogue",isElevated:!0,startChild:t(y,{apps:I}),endChild:s(F,{direction:"row",alignItems:"center",spacing:.5,children:[s(D,{children:[t(p,{label:"Version",value:"1.16.0"}),t(p,{label:"Build",value:"a1b2c3d"}),t(p,{label:"Environment",value:"production"})]}),t(E,{children:t(R,{checked:!1,onChange:()=>{}})}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}},Ee=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
