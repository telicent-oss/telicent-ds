import{j as t,a as N}from"./iframe-BoGmtiqi.js";import{A as O}from"./UserIcon-D75N07sQ.js";import{T as e,B as v,U as I,j as w}from"./DropdownButton-9Xj5t7HG.js";import"./Text-BkhkcLQ4.js";import"./Chip-DppDhca0.js";import{D}from"./Divider-CcBzd5UP.js";import"./TreeView-WVY7m-Dp.js";import"./LinkButton-Do56arYd.js";import{appList as k}from"./AppSwitch.stories-ao0J-0n2.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-BLhnI6lR.js";import"./preload-helper-C1FmrZbK.js";import"./createSvgIcon-BsGvT_Gg.js";import"./generateUtilityClass-DYiHiqeZ.js";import"./styled-B8RB16F4.js";import"./generateUtilityClasses-BfoAhINv.js";import"./useTheme-Bt6YqtiY.js";import"./Box-CbZaWvDN.js";import"./Container-BbQvdPgj.js";import"./styled-_ew7vjUr.js";import"./createStyled-BhHOUunM.js";import"./useThemeProps-EcFwFAXV.js";import"./Stack-DbUHIhyW.js";import"./Typography-Dqfx75Vr.js";import"./Paper-Ds8lE9E_.js";import"./useThemeProps-BU_zzqaP.js";import"./AdapterDayjs-DhXCFc3d.js";import"./Modal-YkTh51uo.js";import"./utils-EUvM7u40.js";import"./TransitionGroupContext-CCztK8Kk.js";import"./index-BTYKHUkg.js";import"./resolveComponentProps-BPxYzwMf.js";import"./TextField-DPpR00-L.js";import"./useFormControl-C2VNDp8l.js";import"./IconButton-Dn0-eezg.js";import"./ButtonBase-BSa7XpmR.js";import"./DialogContent-DO755nYy.js";import"./Button-D8B8-owY.js";import"./Chip-DKVjHm47.js";import"./DateTimePicker-C_8oxirJ.js";import"./Divider-CSlgSMAF.js";import"./Close-DEil8FH7.js";import"./LinearProgress-iD2FIEM-.js";import"./Spinner-Cw7U4Ywu.js";import"./Dialog-DDcXchB3.js";import"./MapToggleButtonPresentational-CYRGxPPM.js";import"./Remove-Cj_C0DEH.js";import"./TextField-CdX8-_-1.js";import"./Switch-CC_HtqMW.js";import"./DatePicker-BHvgUPK0.js";import"./Paper-Folpf_uw.js";import"./ErrorFallback-Lo0r634_.js";import"./ErrorFallbackText-UdARBjRi.js";import"./ErrorFallbackWrapper-C3xuKd4S.js";import"./Brand-BKGj_y_E.js";import"./constants-B6Vi70Vn.js";import"./Edit-BE6zqKXG.js";const jt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
