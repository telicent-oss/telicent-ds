import{b as s,a as t}from"./iframe-AFxgTgVh.js";import{A as O}from"./ExpandLessIcon-Coc8f085.js";import"./CogIcon-DC6KQaAP.js";import"./InfoIcon-lSIhMqt2.js";import"./ExpandMoreIcon-CZhJx08f.js";import{T as N}from"./ThemeSwitchRow-C4g2Xynz.js";import{d as n,B as S,U as D,A as y}from"./DropdownButton-CmjCz-up.js";import"./Text-DXLE4G_s.js";import"./Chip-C6eTFzcU.js";import{D as E}from"./Divider-CiTbO13G.js";import"./TreeView-Q7eAtxGU.js";import{A as P,a as p}from"./AppInfoRow-DaJEEGeD.js";import{A as R}from"./AppSettings-Bxrh47vJ.js";import"./SvgIcon-B1EPKKW1.js";import"./TableRow-CvYZ37P_.js";import"./_IconPopover-3UG3pSje.js";import"./LinkButton-DEB6LEJn.js";import{F as L}from"./FlexBox-D3oDiYJs.js";import{appList as I}from"./AppSwitch.stories-H45wwo1l.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-BAyptZb_.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-CgCZoLsz.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BsI0-Lki.js";import"./extendSxProp-BD-Y0mPz.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-CbdznVAQ.js";import"./Box-oVOzhj2X.js";import"./Container-Br5OlP2Q.js";import"./styled-BADavTd0.js";import"./createStyled-C-Iq8mjg.js";import"./useThemeProps-ChNg2e9b.js";import"./Stack-DmXgS0Zc.js";import"./Typography-DFz7k-kI.js";import"./Paper-CbgL2EIb.js";import"./index-CpoxvXIl.js";import"./AdapterDayjs-DZVAbh7i.js";import"./useThemeProps-DHndbiQK.js";import"./Modal-qRAMf-Nc.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXXJO1FV.js";import"./resolveComponentProps-BAwsKLAE.js";import"./index-4IveHujF.js";import"./utils-C0JGDBoq.js";import"./Popover-BsgVjdIR.js";import"./TextField-DxwO5kEU.js";import"./useFormControl-Bg5crxJM.js";import"./FormControl-B_dJc-MU.js";import"./ListContext-DytnD_x2.js";import"./useControlled-B8RTFtfz.js";import"./createSvgIcon-Dpm5xP5l.js";import"./FormHelperText-DMGyUIz_.js";import"./IconButton-DBTDpe9N.js";import"./ButtonBase-Be1Z9iU4.js";import"./DialogContent-DJzRyI5L.js";import"./Button-BVSqHqLN.js";import"./Chip-CLw8XhUv.js";import"./MenuItem-ksmP0_yb.js";import"./dividerClasses-ClH17Faz.js";import"./useSlot-JMCK8GCP.js";import"./LinearProgress-CpwNTlvx.js";import"./Spinner-rNhXcUyc.js";import"./Dialog-kpJLggSC.js";import"./MapToggleButtonPresentational-BeBKKkmg.js";import"./Remove-BR_Tqlmz.js";import"./Alert-B0IPru6R.js";import"./ToggleButton-DmIMHj3V.js";import"./TextField-B1Gh1rGr.js";import"./Divider-Cs_qNx3V.js";import"./Switch-C_vcwcW1.js";import"./LabeledSwitch-BxWut5tD.js";import"./DatePicker-D23KJK8d.js";import"./DateTimePicker-CGr0SUDo.js";import"./FormControl-BEoO9Wxu.js";import"./FormHelperText-ByrV8KMP.js";import"./MenuItem-CSRF0Uv2.js";import"./AccordionDetails-5vciIkwG.js";import"./Collapse-CgizZByK.js";import"./Paper-DERQ4Oel.js";import"./ErrorFallback-efIZsijd.js";import"./ErrorFallbackText-rPp7xJ4J.js";import"./ErrorFallbackWrapper-BFBmLnXB.js";import"./Brand-BuZzOnWw.js";import"./Edit-CnWyMZY6.js";const ge={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...F("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=s(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(S,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(S,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(y,{apps:I}),endChild:T}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},a={args:{appName:"Catalogue",isElevated:!0,startChild:t(y,{apps:I}),endChild:s(L,{direction:"row",alignItems:"center",spacing:.5,children:[s(P,{children:[t(p,{label:"Version",value:"1.16.0"}),t(p,{label:"Build",value:"a1b2c3d"}),t(p,{label:"Environment",value:"production"})]}),t(R,{children:t(N,{checked:!1,onChange:()=>{}})}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const be=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,be as __namedExportsOrder,ge as default};
