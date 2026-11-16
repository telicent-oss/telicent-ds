import{b as s,a as t}from"./iframe-C_A9w9Xb.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-CRSr_rhf.js";import"./IconButton-DZaun261.js";import"./LinkButton-jvGGWVn2.js";import{A as D,a as p}from"./AppInfoRow-CShKA_AM.js";import{A as E}from"./AppSettings-BpaW4aTJ.js";import"./Badge-CTGjuVUc.js";import"./Chip-4mXnUy-p.js";import{D as P}from"./Divider-DJS9w1fE.js";import{T as R}from"./ThemeSwitchRow-QiuVBBXJ.js";import{A as L}from"./XIcon-D-mT89jA.js";import"./CogIcon-Xohb8vl0.js";import"./ExpandMoreIcon-BqYNX6oE.js";import"./InfoIcon-CsN7XvfL.js";import"./SvgIcon-BL6aEYyy.js";import"./TableRow-BzcwC7-J.js";import"./Text-VJDIJLPP.js";import"./TreeView-DGUcOfc2.js";import{appList as I}from"./AppSwitch.stories-C6FtX5E5.js";import{F}from"./FlexBox-xFc9aoH-.js";import{B as k}from"./Box-DB6K2VlN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVdDZnN4.js";import"./clsx-B-dksMZM.js";import"./styled-BxBMGnZ7.js";import"./extendSxProp-DbsjyKNJ.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DghXKeJ1.js";import"./TransitionGroupContext-BJMJdx4M.js";import"./MapToggleButtonPresentational-CdT4filz.js";import"./Remove-CC1RGYYl.js";import"./createSvgIcon-i-zQ-M6d.js";import"./SvgIcon-C8_G8FNz.js";import"./IconButton-DGQcrcgI.js";import"./Paper-DSCOcLrg.js";import"./Brand-d6OKu9aw.js";import"./Typography-BLZTU97p.js";import"./Skeleton-CuTvwxzQ.js";import"./Skeleton-DWpJL6zw.js";import"./TextField-CPHMgkHr.js";import"./useFormControl-2yPes8mR.js";import"./FormControl-fAwcUdMf.js";import"./Modal-xQORnQ13.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-r2KoCv7J.js";import"./useSlotProps-aaY8J2bg.js";import"./index-i4WXsvPC.js";import"./index-BHdyBRPi.js";import"./utils-DHOV5Dn-.js";import"./Popover-DKdEqhrZ.js";import"./ListContext-DDqsAt6U.js";import"./useControlled-3RSfgazB.js";import"./FormHelperText-C73ZFMlI.js";import"./MenuItem-BXjSr2Yp.js";import"./dividerClasses-BaXV3koW.js";import"./Divider-uAMQ62Ay.js";import"./ListItem-CqSEfq_v.js";import"./Toolbar-yZjFEbA8.js";import"./Close-XBuytlI5.js";import"./Popper-PPx8E8Kn.js";import"./Badge-BZZrZQQO.js";import"./Chip-umbtqylA.js";import"./FormControlLabel-TrbeFuul.js";import"./Stack-CcwLWQH2.js";import"./styled-DY34dW0Q.js";import"./createStyled-B7kozB3A.js";import"./useThemeProps-sj6Fs-gH.js";import"./Edit-CwFXdWdx.js";import"./Box-fYkPIWZP.js";import"./Dialog-C55D5thn.js";import"./DialogContent-C9vdccJg.js";import"./Alert-DbC5Ef0h.js";import"./useSlot-DetFjtbb.js";import"./LinearProgress-CFMEE1Eh.js";import"./LinearProgress-MCxEeQKE.js";import"./Spinner-9Pq1qpOg.js";import"./CircularProgress-BFo9ue-1.js";import"./TextField-CDBDoTkX.js";import"./FormControl-DPrwx_NL.js";import"./FormHelperText-BBL7cKe3.js";import"./LabeledSwitch-iaBcHpl_.js";import"./Switch-Bx0dlzK_.js";import"./Switch-DvW86pnT.js";import"./RadioGroup-D0W8_lBw.js";import"./Container-C4ujFY5f.js";import"./ToggleButton-DvpTABDR.js";import"./ToggleButton-Czzc7CD5.js";import"./ToggleButtonGroup-C2sUNclb.js";import"./MenuItem-BjrtayUA.js";import"./Tabs-CvGfBwpz.js";import"./AccordionSummary-J3dFvStq.js";import"./Collapse-jyqoWJz2.js";import"./index-BQ8CXDCk.js";import"./Paper-BUzr6iGG.js";import"./_IconPopover-DZzlnGrx.js";import"./ErrorFallback-BWZMsFtf.js";import"./ErrorFallbackText-CBna-xSZ.js";import"./ErrorFallbackWrapper-CXtFrO_G.js";import"./TableCell-DIcGZfcO.js";import"./useThemeProps-mFM7TQzY.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
