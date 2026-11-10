import{b as s,a as t}from"./iframe-BOxWlwg5.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-dZ7zWbX5.js";import"./IconButton-LgOVvbaj.js";import"./LinkButton-D8kcuh6P.js";import{A as D,a as p}from"./AppInfoRow-CANQsy5u.js";import{A as E}from"./AppSettings-DiZ0JEr4.js";import"./Badge-BGOsj2Ca.js";import"./Chip-8tQb7tBt.js";import{D as P}from"./Divider-kspxcsBA.js";import{T as R}from"./ThemeSwitchRow--QYarRG2.js";import{A as L}from"./XIcon-DBA19TI9.js";import"./CogIcon-B7SI9pu3.js";import"./ExpandMoreIcon-cR278gH1.js";import"./InfoIcon-BG9JhvZK.js";import"./SvgIcon-BtF96WW6.js";import"./TableRow-B9BSqYVz.js";import"./Text-dB-e86oS.js";import"./TreeView-BwV_15o1.js";import{appList as I}from"./AppSwitch.stories-BIbMgn8G.js";import{F}from"./FlexBox-Cv8f2Kgf.js";import{B as k}from"./Box-CvHBf5NP.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-RST7cKYM.js";import"./clsx-B-dksMZM.js";import"./styled-BgVBpEwg.js";import"./extendSxProp-CVzwORHv.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Fpsrv8av.js";import"./TransitionGroupContext-s9Ly73kI.js";import"./MapToggleButtonPresentational-BdOPS_HS.js";import"./Remove-q51AYkkp.js";import"./createSvgIcon-Cbav5LI2.js";import"./SvgIcon-BuYUPz_9.js";import"./IconButton-Dau69Om4.js";import"./Paper-sf9JWptJ.js";import"./Brand-XnqjgZ4f.js";import"./Typography-CFlIo-Q1.js";import"./Skeleton-O_rn9M7d.js";import"./Skeleton-DiHIX88t.js";import"./TextField-B-iZ9q_3.js";import"./useFormControl-CqEKaJO6.js";import"./FormControl-CNCCIB7H.js";import"./Modal-BhqwZZig.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-vB5A6xUp.js";import"./useSlotProps-Cg0GMwyG.js";import"./index-CNcMevBU.js";import"./index-DGC1M5ns.js";import"./utils-C3dOeq5Z.js";import"./Popover-DE_4eFiH.js";import"./ListContext-3BYol91A.js";import"./useControlled-Crd973ZW.js";import"./FormHelperText-Cdu7wh-n.js";import"./MenuItem-DCjm5sxk.js";import"./dividerClasses-B5mKUAOo.js";import"./Divider-w9MV6g0K.js";import"./ListItem-sx5uYsfj.js";import"./Toolbar-BDm5sDas.js";import"./Close-CIRg-aOw.js";import"./Popper-BZv-1Yvv.js";import"./Badge-DI9NlIAf.js";import"./Chip-iuAj1t61.js";import"./FormControlLabel-oASRYr7v.js";import"./Stack-CawfPr20.js";import"./styled-DO2oWJWU.js";import"./createStyled-BNm24LSV.js";import"./useThemeProps-Bxv5NIts.js";import"./Edit-Crc51dG7.js";import"./Box-DtSH4RJf.js";import"./Dialog-MZhmu3-0.js";import"./DialogContent-CR-wXjtm.js";import"./Alert-bOjTzR4W.js";import"./useSlot-ljNNkbcn.js";import"./LinearProgress-B2bHkg80.js";import"./LinearProgress-CX8da3qz.js";import"./Spinner-COCl1drt.js";import"./CircularProgress-BHwLWokq.js";import"./TextField-DIbPruU-.js";import"./FormControl-Dwd6rDK_.js";import"./FormHelperText-BIWFhEJH.js";import"./LabeledSwitch-C8YuLEMm.js";import"./Switch-CUBlLIbd.js";import"./Switch-9odXMQM9.js";import"./RadioGroup-OVsHCzkT.js";import"./Container-DHBouHEB.js";import"./ToggleButton-CsoQZQ9x.js";import"./ToggleButton-DfWGuPF5.js";import"./ToggleButtonGroup-BIYFhty6.js";import"./MenuItem-Bh_ocaUE.js";import"./Tabs-BsBGmFx0.js";import"./AccordionSummary-DWx619cH.js";import"./Collapse-CJdJ3uyR.js";import"./index-DHZDPTGE.js";import"./Paper-B8YjvAvG.js";import"./_IconPopover-OfVEyw5R.js";import"./ErrorFallback-z7nRQ4o7.js";import"./ErrorFallbackText-x_QK0bvY.js";import"./ErrorFallbackWrapper-CSs0BRCk.js";import"./TableCell-kr0lx5yP.js";import"./useThemeProps-CkA-ZwoX.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
