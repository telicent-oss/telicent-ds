import{b as s,a as t}from"./iframe-TzH9HoJB.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-DLDByR5F.js";import"./IconButton-Mzh_sPPf.js";import"./LinkButton-Du-kxWOQ.js";import{A as D,a as p}from"./AppInfoRow-BV_aa5lk.js";import{A as E}from"./AppSettings-BzU83vRR.js";import"./Badge-682oFqE8.js";import"./Chip-CTmkkGRh.js";import{D as P}from"./Divider-DBOrLmFb.js";import{T as R}from"./ThemeSwitchRow-CoAtHhZA.js";import{A as L}from"./XIcon-DGixMYxC.js";import"./CogIcon-K9_cAB5b.js";import"./ExpandMoreIcon-CpVvmAB8.js";import"./InfoIcon-CuaXepFp.js";import"./SvgIcon-ak9zVNAx.js";import"./TableRow-5QaVWAOF.js";import"./Text-Wjw9mAbu.js";import"./TreeView-Sl1KgHox.js";import{appList as I}from"./AppSwitch.stories-CqCCCfK9.js";import{F}from"./FlexBox-DRW8tIce.js";import{B as k}from"./Box-DS3YN1ZG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OwbOqTSh.js";import"./clsx-B-dksMZM.js";import"./styled-Fi-PJMA2.js";import"./extendSxProp-BcuL-Nvl.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B0uhPIY5.js";import"./TransitionGroupContext-9gZwZNUS.js";import"./MapToggleButtonPresentational-DFyons0C.js";import"./Remove-DAQRFvaE.js";import"./createSvgIcon-CUXDMF07.js";import"./SvgIcon-HYlfJc8_.js";import"./IconButton-PY87z89E.js";import"./Paper-YFzx4ddw.js";import"./Brand-BlQ8b-ry.js";import"./Typography-zeuNrRSn.js";import"./Skeleton-YZOMWl5n.js";import"./Skeleton-2TdWFO3K.js";import"./TextField-3lnVRzgq.js";import"./useFormControl-B5BL4Dkn.js";import"./FormControl-CCq8g0Qj.js";import"./Modal-DHYwyE7o.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BSzFeukN.js";import"./useSlotProps-CB65AuIn.js";import"./index-C5JqvuCX.js";import"./index-CoaIpLkh.js";import"./utils-DAXs4UmQ.js";import"./Popover-DX_paYG2.js";import"./ListContext-C1CE2G2k.js";import"./useControlled-DLY0GURg.js";import"./FormHelperText-8S5YkPy6.js";import"./MenuItem-CHk81Hva.js";import"./dividerClasses-yHkBJDJd.js";import"./Divider-nCna6h_E.js";import"./ListItem-CLOQjQZa.js";import"./Toolbar--ZbXsggf.js";import"./Close-DpJbrle0.js";import"./Popper-DAbEjCJA.js";import"./Badge-BFQfTkfR.js";import"./Chip-rF6T4rUT.js";import"./FormControlLabel-C0_yDqIQ.js";import"./Stack-VXbRlDW3.js";import"./styled-Detq6LXO.js";import"./createStyled-DpILs1eO.js";import"./useThemeProps-C-ryN40T.js";import"./Edit-qL9wNaAs.js";import"./Box-Bo6gauv7.js";import"./Dialog-Yb-veoJ6.js";import"./DialogContent-9AxQB7IK.js";import"./Alert-BhRCq8N3.js";import"./useSlot-CNLXZk78.js";import"./LinearProgress-W8XZFG7o.js";import"./LinearProgress-M-9cHjHE.js";import"./Spinner-kZ2y9DVo.js";import"./CircularProgress-HVwFS8ym.js";import"./TextField-jO_QGFZE.js";import"./FormControl-DsF2nchf.js";import"./FormHelperText-C1B-jnvM.js";import"./LabeledSwitch-B_k81Zfn.js";import"./Switch-BRrjrBxW.js";import"./Switch-LinUY1Bf.js";import"./RadioGroup-BQTXXTjr.js";import"./Container-8Zbg9EiI.js";import"./ToggleButton-Db5rHd7I.js";import"./ToggleButton-BYiCWuVK.js";import"./ToggleButtonGroup-CiG3xB0s.js";import"./MenuItem-C17Q6CqC.js";import"./Tabs-C87aF2xa.js";import"./AccordionSummary-DLRaYHNg.js";import"./Collapse-D2Q2PYDS.js";import"./index-D3hKYTw4.js";import"./Paper-DmuX9rfV.js";import"./_IconPopover-hWyolf0i.js";import"./ErrorFallback-BBjYL2F9.js";import"./ErrorFallbackText-CgArZ3nG.js";import"./ErrorFallbackWrapper-BvE4laRa.js";import"./TableCell-B3sIJQHc.js";import"./useThemeProps-CTGgwm9-.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
