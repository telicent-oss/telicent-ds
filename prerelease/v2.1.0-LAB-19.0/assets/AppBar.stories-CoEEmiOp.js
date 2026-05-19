import{j as t,a as N}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{A as O}from"./UserIcon-CYDlAMM8.js";import{T as e,f as v,U as I,A as w}from"./AuthModal-Du-gkYTW.js";import"./Text-DOFQHH6y.js";import"./Chip-BRwbwVbv.js";import{D}from"./Card-D8BkeIZl.js";import"./TreeView-BkIoI9QN.js";import"./LinkButton-aT7Hu3l6.js";import{appList as k}from"./AppSwitch.stories-BQIl7H_E.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-vAbK_4PI.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./createSvgIcon-DvZHek-i.js";import"./identifier-NKQQRePw.js";import"./styled-CjWt8UVi.js";import"./generateUtilityClasses-B2BBkElw.js";import"./DefaultPropsProvider-DtThQIVP.js";import"./useTheme-DPnT8y_r.js";import"./useTheme-Ke1uTKsJ.js";import"./Container-hm5vFygi.js";import"./styled-VzSze10G.js";import"./createStyled-Bvwk-_EE.js";import"./useThemeProps-nZW5Papo.js";import"./Stack-CY4EFDZz.js";import"./Typography-Dt5bLYJQ.js";import"./AppBar-DsGNkIzs.js";import"./Paper-CLsLNy44.js";import"./constants-KYtGOcw0.js";import"./iframe-BLoGSFSA.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./GlobalStyles-vI--UIQO.js";import"./GlobalStyles-sLZUO0b6.js";import"./useThemeProps-C2Iq9OHP.js";import"./ButtonBase-DFf65YyL.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-5fkkG_Vc.js";import"./Select-gRzCjZbZ.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-3f11im9F.js";import"./utils-B1Pnwxg8.js";import"./useId-DMVUMfb1.js";import"./ListItem-DAm1IJrN.js";import"./Toolbar-CWAIilLy.js";import"./Chip-CMxnGK95.js";import"./IconButton-Bo7QGuUx.js";import"./Switch-7uPqVfWJ.js";import"./MenuItem-nMzlburO.js";import"./dividerClasses-BU2gZmHL.js";import"./UIThemeProvider-Brj0zjMt.js";import"./colorManipulator-BRsEHmOt.js";import"./ThemeProvider-un6kJHlG.js";import"./LinearProgress-CUuKFvvX.js";import"./LinearProgress-BfvI3P-T.js";import"./Spinner-DTNXzZM5.js";import"./Dialog-IWHBpnq2.js";import"./DialogContent-BwRvQmzV.js";import"./Button-ZGJdOyfv.js";import"./MapToggleButtonPresentational-DMcR06l5.js";import"./Remove-ORZ2Ffdu.js";import"./TextField-_IJI58oT.js";import"./TextField-C5Vpu56G.js";import"./Select-B2EkDVMA.js";import"./Switch-nwTgaDx0.js";import"./DatePicker-Cd3EM856.js";import"./AdapterDayjs-Kn4cdtM7.js";import"./DateTimePicker-DGWs0BNw.js";import"./Tabs-DRIhGf0U.js";import"./Divider-CKsZbUR-.js";import"./Paper-Bl82cnKL.js";import"./ErrorFallback-CGP1zAVd.js";import"./ErrorFallbackText-D-_xaRa8.js";import"./ErrorFallbackWrapper-H8jVUQSn.js";import"./Brand-lXzjEeMF.js";import"./Edit-C1ZXnIQP.js";import"./Card-BG9kVIdx.js";const ae={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
A branded top-level navigation component built on MUI's \`<AppBar>\` with Telicent design-system styling. 
It supports a centered brand area, optional application name, version label, and flexible content areas on the left and right for things like app switching, user profile actions, or sign-out buttons.

---

### When & How to use it
- **Application headers:** Use at the top of a product or platform page.
- **Branding + navigation:** Ideal when you need consistent Telicent branding with contextual actions.
- **Flexible layouts:** Use \`startChild\` for left-side content such as an app switcher, and \`endChild\` for right-side content such as a user profile or action buttons.
- **Clickable:** Pass \`href\` to make this component clickabout, out of the box it opens in a blank tab.

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
`}},...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[A=>t(S,{sx:{width:"100%"},children:t(A,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},U=N(I,{fullName:"JohnDoe@company.co.uk",children:[t(e,{title:"Username",content:"John Doe"}),t(e,{title:"Email",content:"JohnDoe@company.co.uk"}),t(e,{title:"Deployed Organisation",content:"Company UK"}),t(e,{title:"Version number",content:"1.2.3"}),t(D,{}),t(S,{sx:{pt:1},children:t(v,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),r={args:{}},o={args:{appName:"Catalogue",endChild:t(v,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},a={args:{disableBrand:!0,startChild:t(w,{apps:k}),endChild:U}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},n={args:{appName:"Catalogue",isElevated:!0,startChild:t(w,{apps:k}),endChild:U},parameters:{docs:{description:{story:"Recommended application-header setup with branding, app navigation on the left, and a primary action on the right."}}}};var p,s,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,y,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    isElevated: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample
  },
  parameters: {
    docs: {
      description: {
        story: "Recommended application-header setup with branding, app navigation on the left, and a primary action on the right."
      }
    }
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const ie=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","UsageExample"];export{i as ClickableBrand,r as Default,n as UsageExample,a as WithNoBrand,o as WithSignOutButton,ie as __namedExportsOrder,ae as default};
