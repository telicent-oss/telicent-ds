import{j as t,a as N}from"./iframe-BfEsncEF.js";import{A as O}from"./UserIcon-DAdv8Ixp.js";import{T as e,B as v,U as I,j as w}from"./DropdownButton-99vgIkCV.js";import"./Text-BMw1ybWa.js";import"./Chip-wEw5ZNvW.js";import{D}from"./Divider-Berqrx4H.js";import"./TreeView-D2h7huiz.js";import"./LinkButton-DybG3JjG.js";import{appList as k}from"./AppSwitch.stories-BS8u-SD1.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-CtVv9OHw.js";import"./preload-helper-C1FmrZbK.js";import"./createSvgIcon-C6teTnyS.js";import"./generateUtilityClass-DLTO8EZ0.js";import"./styled-CKEjpOwx.js";import"./generateUtilityClasses-CgDs_uOe.js";import"./useTheme-BD06mfPU.js";import"./Box-ChCTlzLQ.js";import"./Container-DHCExKqq.js";import"./styled-D7FRfLSG.js";import"./createStyled-KEG0ma0P.js";import"./useThemeProps-D2PMoY2V.js";import"./Stack-DB3Y16n1.js";import"./Typography-Cur-qBxx.js";import"./Paper-CmIu2cj4.js";import"./useThemeProps-j1RL-BpF.js";import"./AdapterDayjs-D6qtZrEv.js";import"./Modal-BoRvpCnD.js";import"./utils-D9P5YpBK.js";import"./TransitionGroupContext-BiIjqEy8.js";import"./index-CuxFIe6q.js";import"./resolveComponentProps-2Wttismo.js";import"./TextField-BV7Va00E.js";import"./useFormControl-3m3RTCoN.js";import"./IconButton-scd69Lv3.js";import"./ButtonBase-CyDfjua2.js";import"./DialogContent-orjmG92r.js";import"./Button-jK3vDH7L.js";import"./Chip-C3EaWfE-.js";import"./DateTimePicker-C-sZiwTj.js";import"./Divider-BDyVO8zM.js";import"./Close-1c413Acz.js";import"./LinearProgress-4SIHWNA8.js";import"./Spinner-p-63cFPN.js";import"./Dialog-BfMJ9NKL.js";import"./MapToggleButtonPresentational-Bgmt2_LX.js";import"./Remove-DoXNBLDf.js";import"./TextField-M5Osf9JN.js";import"./Switch-C_gUrCjS.js";import"./DatePicker-D3jVMaej.js";import"./Paper-VpNf2qxV.js";import"./ErrorFallback-Dn6So0DV.js";import"./ErrorFallbackText-DoD_00IC.js";import"./ErrorFallbackWrapper-DKy8QON8.js";import"./Brand-B8b8xuEA.js";import"./constants-C1bu_m5W.js";import"./Edit-CfOidwdt.js";const jt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[A=>t(S,{sx:{width:"100%"},children:t(A,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},U=N(I,{fullName:"JohnDoe@company.co.uk",children:[t(e,{title:"Username",content:"John Doe"}),t(e,{title:"Email",content:"JohnDoe@company.co.uk"}),t(e,{title:"Deployed Organisation",content:"Company UK"}),t(e,{title:"Version number",content:"1.2.3"}),t(D,{}),t(S,{sx:{pt:1},children:t(v,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),a={args:{}},r={args:{appName:"Catalogue",endChild:t(v,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},o={args:{disableBrand:!0,startChild:t(w,{apps:k}),endChild:U}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},n={args:{appName:"Catalogue",isElevated:!0,startChild:t(w,{apps:k}),endChild:U},parameters:{docs:{description:{story:"Recommended application-header setup with branding, app navigation on the left, and a primary action on the right."}}}};var s,p,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const Wt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","UsageExample"];export{i as ClickableBrand,a as Default,n as UsageExample,o as WithNoBrand,r as WithSignOutButton,Wt as __namedExportsOrder,jt as default};
