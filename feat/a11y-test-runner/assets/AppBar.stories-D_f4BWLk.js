import{b as s,a as t}from"./iframe-Y1N6bk8p.js";import{A as O}from"./ExpandLessIcon-Cl7uik3S.js";import"./CogIcon-DvPSQXZo.js";import"./InfoIcon-Ct5f0UzT.js";import"./ExpandMoreIcon-CeKVlKWF.js";import{T as N}from"./ThemeSwitchRow-BSMzMCw1.js";import{o as n,B as S,U as D,A as y}from"./DropdownButton-DLugr0xg.js";import"./Text-B8NihZq2.js";import"./Chip-Bbcx00in.js";import{D as E}from"./Divider-BxRyf5aR.js";import"./TreeView-BLSiq3QR.js";import{A as P,a as p}from"./AppInfoRow-CjdXbBLa.js";import{A as R}from"./AppSettings-Dhwai-20.js";import"./SvgIcon-DDcy4gnv.js";import"./TableRow-CUQU1TNz.js";import"./_IconPopover-BSW2238Q.js";import"./LinkButton-C0iWbNJQ.js";import{F as L}from"./FlexBox-DoF2Tbdg.js";import{appList as I}from"./AppSwitch.stories-D-l_TfWJ.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-CXk6M6mR.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-CxVDfqSx.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DiMPCvor.js";import"./extendSxProp-DbTy98VK.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D-jdU__u.js";import"./Box-D3afCydQ.js";import"./Container-D3Y9-mOQ.js";import"./styled-WAGLmHxX.js";import"./createStyled-BL_vYvCM.js";import"./useThemeProps-Biv_2OSw.js";import"./Stack-D8q2WUfD.js";import"./Typography-DmCu6xYW.js";import"./Paper-DN68ECSn.js";import"./index-LiVer2cg.js";import"./AdapterDayjs-DP2CnPXm.js";import"./useThemeProps-DFwnlb8_.js";import"./Modal-B4PiUlG8.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-w0BzhBs7.js";import"./resolveComponentProps-DtqC7Jdc.js";import"./index-CriZbu4z.js";import"./utils-FxzgolTc.js";import"./Popover-CwKmJLrH.js";import"./TextField-D67MRuoC.js";import"./useFormControl-D_Xige0L.js";import"./FormControl-v9I3oitM.js";import"./ListContext-BSGrFhbe.js";import"./useControlled-zS0ZvXST.js";import"./createSvgIcon-CqGXTWJV.js";import"./FormHelperText-DAWPwhSQ.js";import"./IconButton-BTiO4iMN.js";import"./ButtonBase-Dh8n1X5l.js";import"./DialogContent-C9N2UKrx.js";import"./Button-D5koxhYf.js";import"./Chip-BA5IS77I.js";import"./MenuItem-2qdsD5am.js";import"./dividerClasses-ClH17Faz.js";import"./useSlot-sFClRxF7.js";import"./LinearProgress-DijGLa0J.js";import"./Spinner-D28ZfjXd.js";import"./Dialog-B3meZdDB.js";import"./MapToggleButtonPresentational-DWQxMudH.js";import"./Remove-DH3EMgKC.js";import"./Alert-D3Q4Es8x.js";import"./ToggleButton-ClBjS5Ky.js";import"./TextField-BgCiXhS4.js";import"./Divider-Cu_DPk8e.js";import"./Switch-DUAgT_Dc.js";import"./LabeledSwitch-BWamddRC.js";import"./DatePicker-G9qJ6QsT.js";import"./DateTimePicker-BmvwZZ-N.js";import"./FormControl-DNaghd-n.js";import"./FormHelperText-kXl3i3tQ.js";import"./MenuItem-B6NIKMg1.js";import"./AccordionDetails-xda9fO-T.js";import"./Collapse-DAMiDAlQ.js";import"./Paper-D1WHigEv.js";import"./ErrorFallback-Cmgcm6jb.js";import"./ErrorFallbackText-COet1f5O.js";import"./ErrorFallbackWrapper-C4fgBbmv.js";import"./Brand-NzozEoiB.js";import"./Edit-BAaxdE7v.js";const ge={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
