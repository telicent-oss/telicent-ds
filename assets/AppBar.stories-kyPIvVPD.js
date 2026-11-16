import{b as s,a as t}from"./iframe-DunpSdH6.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-D_7QN1X2.js";import"./IconButton-CnZQJMnz.js";import"./LinkButton-BoEmtgzU.js";import{A as D,a as p}from"./AppInfoRow-TLJdMOCL.js";import{A as E}from"./AppSettings-CieG7Itn.js";import"./Badge-DfmfDckY.js";import"./Chip-ClFjssnv.js";import{D as P}from"./Divider-DOwJyp8h.js";import{T as R}from"./ThemeSwitchRow-DKnKmbOE.js";import{A as L}from"./XIcon-B-AAlqIS.js";import"./CogIcon-DURisWGj.js";import"./ExpandMoreIcon-BIxTqLU3.js";import"./InfoIcon-C6C5JcpY.js";import"./SvgIcon-DQ2JuKIZ.js";import"./TableRow-D4o3RwxN.js";import"./Text-CAHfJU7X.js";import"./TreeView-BDnoQbge.js";import{appList as I}from"./AppSwitch.stories-BIl8zIeB.js";import{F}from"./FlexBox-DwjKj-U_.js";import{B as k}from"./Box-B-pmLQD1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-stnAc-Tj.js";import"./clsx-B-dksMZM.js";import"./styled-DLhCII3n.js";import"./extendSxProp-DbmafzOS.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-TD2UFsiu.js";import"./TransitionGroupContext-DpYXvT-8.js";import"./MapToggleButtonPresentational-DhL_tRuE.js";import"./Remove-CypNUzA-.js";import"./createSvgIcon-DoUG9alq.js";import"./SvgIcon-DvaLc9-e.js";import"./IconButton-BxRM68Nx.js";import"./Paper-BnYpX6e-.js";import"./Brand-D0GB8OW-.js";import"./Typography-Cnm5zE5B.js";import"./Skeleton-OXXt9MRY.js";import"./Skeleton-DeprtIml.js";import"./TextField-Bmgg2D5C.js";import"./useFormControl-DJJUNb1q.js";import"./FormControl-g-yWrPYN.js";import"./Modal-d3tziOSd.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Cq-RMR5j.js";import"./useSlotProps-CVslE_Pq.js";import"./index-MiBr_QQr.js";import"./index-DLav748F.js";import"./utils-W3WhWsKZ.js";import"./Popover-DsC-QvdX.js";import"./ListContext-C9AaZLBf.js";import"./useControlled-D5RrLse2.js";import"./FormHelperText-BuPvD1hT.js";import"./MenuItem-B2bWzFXk.js";import"./dividerClasses-DaEwxQ2U.js";import"./Divider-CZk7lu9D.js";import"./ListItem-BhthYCMo.js";import"./Toolbar-DNoBnjCT.js";import"./Close-Cj-9lqkJ.js";import"./Popper-DYqxq4vL.js";import"./Badge-DNThIf1X.js";import"./Chip-Cph2lDK-.js";import"./FormControlLabel-oM-7wre-.js";import"./Stack-CGlC5oSp.js";import"./styled-DlfzhkfP.js";import"./createStyled-BLV0Zz4B.js";import"./useThemeProps-BeK64rtS.js";import"./Edit-DCrwz_Eh.js";import"./Box-CCnO3-HF.js";import"./Dialog-CK4_JL4u.js";import"./DialogContent-DkAI-Cl0.js";import"./Alert-CN792Xkl.js";import"./useSlot-CWMKbCxx.js";import"./LinearProgress-aosU5P48.js";import"./LinearProgress-DX42AqMp.js";import"./Spinner-BAHqvCO1.js";import"./CircularProgress-CpVFRLj9.js";import"./TextField-B0XeM5G1.js";import"./FormControl-Bz1Pa-gf.js";import"./FormHelperText-D3Z6WRSy.js";import"./LabeledSwitch-CQiKhy5B.js";import"./Switch-zPa9dcOV.js";import"./Switch-d71D0uBO.js";import"./RadioGroup-DjTHdfvI.js";import"./Container-COQeBzQQ.js";import"./ToggleButton-wesw0Lhu.js";import"./ToggleButton-DGKJly8H.js";import"./ToggleButtonGroup-DhWfGsgc.js";import"./MenuItem-iCAnPddj.js";import"./Tabs-CIlDC37T.js";import"./AccordionSummary-ChOmO8Ka.js";import"./Collapse-WWGG7p11.js";import"./index-CZvxb2J0.js";import"./Paper-CNdqdVGK.js";import"./_IconPopover-kbbuypBQ.js";import"./ErrorFallback-DcOvTajC.js";import"./ErrorFallbackText-DYZvmVRS.js";import"./ErrorFallbackWrapper-rsg5SlDs.js";import"./TableCell-xtN6Kl0n.js";import"./useThemeProps-BitkL5n2.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
