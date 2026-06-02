import{j as t,a as N}from"./emotion-react-jsx-runtime.browser.esm-OTCsP_zj.js";import{A as O}from"./UserIcon-Cn55tEQ2.js";import{T as e,B as v,U as I,A as w}from"./DropdownButton-l51GFW5y.js";import"./Text-D0lNsqSI.js";import"./Chip-BwAmCpCJ.js";import{D}from"./Divider-wVQl8Tit.js";import"./TreeView-CTXybiJL.js";import"./LinkButton-D9Uz2SFG.js";import{appList as k}from"./AppSwitch.stories-DNTEeH9H.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-BVltnmec.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-7LYIoTbn.js";import"./createSvgIcon-DU2rVRio.js";import"./defaultTheme-ACnAOKMv.js";import"./styled-Dr6LHSty.js";import"./generateUtilityClasses-CBlNI-gU.js";import"./DefaultPropsProvider-BINl2W1D.js";import"./useTheme-BCfSMqPY.js";import"./useTheme-DmgbyzQG.js";import"./Container-Cpr-ywPw.js";import"./styled-xzbhM0n_.js";import"./createStyled-CsLhtPiI.js";import"./useThemeProps-DhNaUrQ2.js";import"./Stack-_9FQNGpJ.js";import"./Typography-CSCiAqzj.js";import"./Paper-3rHlC0dZ.js";import"./useThemeProps-k0ivW4aO.js";import"./AdapterDayjs-Cl81F8SA.js";import"./index-B4OJPA8G.js";import"./Modal-JNcevMIf.js";import"./utils-CXYPeQrV.js";import"./TransitionGroupContext-itkx9jux.js";import"./useEnhancedEffect-oYjd7u20.js";import"./index-DONRZHi-.js";import"./Select-BfRenVFP.js";import"./useFormControl-lkbi0or6.js";import"./useId-Cf3J66lm.js";import"./GlobalStyles-B130YdEm.js";import"./GlobalStyles-Canp8JzW.js";import"./TextField-BklvXUyq.js";import"./IconButton-K5H0oyhF.js";import"./ButtonBase-D1U61Dnt.js";import"./colorManipulator-4CHxWgpo.js";import"./DialogContent-CX0jwU1P.js";import"./Button-6gIpOcku.js";import"./Chip-D4rXNsqT.js";import"./MenuItem-bua5XKnv.js";import"./dividerClasses-Cw9q1-aC.js";import"./UIThemeProvider-4LUh-fR0.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-BUQO26gH.js";import"./LinearProgress-Bb8hrd7I.js";import"./Spinner-BOxs5Djo.js";import"./Dialog-vILqERHu.js";import"./MapToggleButtonPresentational-86Mslv2I.js";import"./Remove-B14EzRR3.js";import"./TextField-jr6Bp6UA.js";import"./Select-CyedWs7E.js";import"./Switch-CckCM0FO.js";import"./DatePicker-DcCgiJ2j.js";import"./DateTimePicker-Dp4MmL11.js";import"./Divider-A3I7BnBV.js";import"./Paper-CmfYDRfa.js";import"./ErrorFallback-Box0VFpD.js";import"./ErrorFallbackText-BxC3bExW.js";import"./ErrorFallbackWrapper-Dv-Jy562.js";import"./Brand-DN1iXAq-.js";import"./constants-BFdM9Isu.js";import"./iframe-Bv5O5v4d.js";import"../sb-preview/runtime.js";import"./Edit-DKn8TmSo.js";const Xt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[A=>t(S,{sx:{width:"100%"},children:t(A,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},U=N(I,{fullName:"JohnDoe@company.co.uk",children:[t(e,{title:"Username",content:"John Doe"}),t(e,{title:"Email",content:"JohnDoe@company.co.uk"}),t(e,{title:"Deployed Organisation",content:"Company UK"}),t(e,{title:"Version number",content:"1.2.3"}),t(D,{}),t(S,{sx:{pt:1},children:t(v,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),r={args:{}},a={args:{appName:"Catalogue",endChild:t(v,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},o={args:{disableBrand:!0,startChild:t(w,{apps:k}),endChild:U}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},n={args:{appName:"Catalogue",isElevated:!0,startChild:t(w,{apps:k}),endChild:U},parameters:{docs:{description:{story:"Recommended application-header setup with branding, app navigation on the left, and a primary action on the right."}}}};var p,s,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    endChild: <Button variant="primary" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,u,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const Yt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","UsageExample"];export{i as ClickableBrand,r as Default,n as UsageExample,o as WithNoBrand,a as WithSignOutButton,Yt as __namedExportsOrder,Xt as default};
