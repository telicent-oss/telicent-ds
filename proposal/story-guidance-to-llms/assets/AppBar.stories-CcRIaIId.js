import{j as t,a as N}from"./iframe-ekgyvAI9.js";import{A as O}from"./UserIcon-6Ji74agl.js";import{T as e,B as v,U as I,j as w}from"./DropdownButton-iOB7tFo3.js";import"./Text-C-7vsUm_.js";import"./Chip-CNM9xVJ3.js";import{D}from"./Divider-BHvtS0lt.js";import"./TreeView-D2h7Y55m.js";import"./LinkButton-BUP5FRO7.js";import{appList as k}from"./AppSwitch.stories-CxwQPdFc.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-Bgfu1TlP.js";import"./preload-helper-C1FmrZbK.js";import"./createSvgIcon-Cz2FQkUF.js";import"./styled-Q5upQxit.js";import"./generateUtilityClasses-CWOgA3Fs.js";import"./useTheme-C5GDcVVQ.js";import"./Container-CmEFyrQ9.js";import"./styled-BpMn-R5t.js";import"./createStyled-FZZaYGHg.js";import"./useThemeProps-DphVTmkb.js";import"./Stack-Cg7aALjV.js";import"./Typography-C64aAkxC.js";import"./Paper-BydBWlqJ.js";import"./useThemeProps-Bvz7h4cQ.js";import"./AdapterDayjs-NJf71x8s.js";import"./Modal-hmFd8PXe.js";import"./utils-flKsKshn.js";import"./TransitionGroupContext-tYyA_bnk.js";import"./index-C0fOhz_b.js";import"./TextField-DC_L1p9b.js";import"./useFormControl-CTEGWcEb.js";import"./IconButton-Cxch8VOt.js";import"./ButtonBase-CMje8YMJ.js";import"./DialogContent-DGeR41IL.js";import"./Button-CtnKgSct.js";import"./Chip-DbpRRavE.js";import"./DateTimePicker-BUG89NrY.js";import"./Divider-B---moVq.js";import"./LinearProgress-CnTXpHZ7.js";import"./Spinner-C9U-wMq9.js";import"./Dialog-BvbXRq2s.js";import"./MapToggleButtonPresentational-Bh86kc4C.js";import"./Remove-BKfh7hYJ.js";import"./TextField-D_pudeUr.js";import"./Switch-CGAgnWot.js";import"./DatePicker-DGw7q5t1.js";import"./Paper-1zPDfvU6.js";import"./ErrorFallback-D8Ajf5ZN.js";import"./ErrorFallbackText-DO-g4CVs.js";import"./ErrorFallbackWrapper-BteWv4mc.js";import"./Brand-CYryFwae.js";import"./constants-4ukM-jXN.js";import"./Edit-BIOwsPnM.js";const Et={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const Tt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","UsageExample"];export{i as ClickableBrand,a as Default,n as UsageExample,o as WithNoBrand,r as WithSignOutButton,Tt as __namedExportsOrder,Et as default};
