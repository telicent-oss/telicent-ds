import{j as t,a as N}from"./iframe-B_xAjz_a.js";import{A as O}from"./UserIcon-sXWYTtMY.js";import{T as e,B as v,U as I,i as w}from"./DropdownButton-BnaLLxdm.js";import"./Text-Dxo92Y_P.js";import"./Chip-CbHUK2Oi.js";import{D}from"./Divider-D_2gC9Rv.js";import"./TreeView-027Y335s.js";import"./LinkButton-BGw7Liqm.js";import{appList as k}from"./AppSwitch.stories-BjOOmt_W.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-HNQBJ69w.js";import"./preload-helper-C1FmrZbK.js";import"./createSvgIcon-DNxDKV7W.js";import"./styled-DWxCgiIq.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./useTheme-DXfWrHWZ.js";import"./Container-DZVvhBo5.js";import"./styled-Dj6VM8rS.js";import"./createStyled-YK0OyouD.js";import"./useThemeProps-B45YfUAa.js";import"./Stack-BUP2Ksyi.js";import"./Typography-ByJUc9gg.js";import"./Paper-BTmXDdaE.js";import"./useThemeProps-CIWHHPPz.js";import"./AdapterDayjs-q2OtrlCq.js";import"./Modal-BpjRytJz.js";import"./utils-CwDFzrhS.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./index-CI4uBojl.js";import"./Select-CuWSjzQW.js";import"./useFormControl-DsU6bxZg.js";import"./TextField-CXoQdh2Y.js";import"./IconButton-BCtq5lM_.js";import"./ButtonBase-rGiwpEnq.js";import"./DialogContent-5gmVHz0w.js";import"./Button-BK_6tBa6.js";import"./Chip-CnGyAVsl.js";import"./MenuItem-DqM4z-OC.js";import"./dividerClasses-LlugbWYd.js";import"./LinearProgress-BGR-shXY.js";import"./Spinner-C7CK19Se.js";import"./Dialog-kf4LGKqy.js";import"./MapToggleButtonPresentational-CEsfsZc1.js";import"./Remove-C35S1kL4.js";import"./TextField-DaNwDKAN.js";import"./Select-BehY_x2i.js";import"./Switch-Bsyk4KfN.js";import"./DatePicker-Vblbv12o.js";import"./DateTimePicker-DASuNmCH.js";import"./Divider-CmQ1Xcb5.js";import"./Paper-B7oVFYM9.js";import"./ErrorFallback-CYAgcxnT.js";import"./ErrorFallbackText-DvI-57tq.js";import"./ErrorFallbackWrapper-Bz-JcYeG.js";import"./Brand-DBW4B7CT.js";import"./constants-1TT1xdyQ.js";import"./Edit-DYLHrREl.js";const Wt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const jt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","UsageExample"];export{i as ClickableBrand,a as Default,n as UsageExample,o as WithNoBrand,r as WithSignOutButton,jt as __namedExportsOrder,Wt as default};
