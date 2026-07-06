import{j as t,a as N}from"./iframe-2a6KH_Y2.js";import{A as O}from"./UserIcon-DsHhd6fS.js";import{T as e,B as v,U as I,j as w}from"./DropdownButton-ee1y9LC3.js";import"./Text-kR8p7DIq.js";import"./Chip-CU7LtMVk.js";import{D}from"./Divider-wOcP7z2O.js";import"./TreeView-DYsm38IX.js";import"./LinkButton-Cms5QcfP.js";import{appList as k}from"./AppSwitch.stories-BcYP88ze.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-UIDy46IG.js";import"./preload-helper-C1FmrZbK.js";import"./createSvgIcon-D_wZWHy4.js";import"./styled-DgdLtGG_.js";import"./generateUtilityClasses-CVtZWfJL.js";import"./useTheme-Cx6vnF0r.js";import"./Container-Du9KxdkV.js";import"./styled-D3ZZnIDk.js";import"./createStyled-DxFvKydN.js";import"./useThemeProps-vJmRtplj.js";import"./Stack-CojT_K4F.js";import"./Typography-DrPsKv4d.js";import"./Paper-BSuha06s.js";import"./useThemeProps-BL2jWHZa.js";import"./AdapterDayjs-DDbCIOBk.js";import"./Modal-DJ8VBj3p.js";import"./utils-D2GhKSPk.js";import"./TransitionGroupContext-DW3H988m.js";import"./index-DrFhovnn.js";import"./TextField-BNf4QAhE.js";import"./useFormControl-CJp2h8rR.js";import"./IconButton-iUn1E9on.js";import"./ButtonBase-CsM7vvGl.js";import"./DialogContent-B_353Kkw.js";import"./Button-U2NznJnU.js";import"./Chip-D4g1B89E.js";import"./DateTimePicker-5YrKsRJP.js";import"./Divider-D9DUnApf.js";import"./LinearProgress-Di7e5FGy.js";import"./Spinner-A93-VFYS.js";import"./Dialog-CK4FehKs.js";import"./MapToggleButtonPresentational-BLFCwFJH.js";import"./Remove-CI5wx82-.js";import"./TextField-CfA3Y3m5.js";import"./Switch-DtkAca1Z.js";import"./DatePicker-DaayXdth.js";import"./Paper-wbthJljv.js";import"./ErrorFallback-uzjZCzEW.js";import"./ErrorFallbackText-B9n1SuaO.js";import"./ErrorFallbackWrapper-CvVKmhKf.js";import"./Brand-B-imz1vn.js";import"./constants-a7scF7as.js";import"./Edit-BAp5m9tO.js";const Et={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
