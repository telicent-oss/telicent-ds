import{a as p,j as t}from"./iframe-woqfefPC.js";import{A as O}from"./UserIcon-CZrO7rOz.js";import{F as N}from"./FlexBox-CFiAFxVr.js";import{T as n,B as y,U as D,i as S}from"./DropdownButton-B1bD1lNa.js";import"./Text-CVdTrgex.js";import"./Chip-Ye1FV8gr.js";import{D as E}from"./Divider-B-R56vz7.js";import"./TreeView-CnSgD92Q.js";import{A as P,a as s}from"./AppInfoRow-FQf-Uxyu.js";import"./LinkButton-B1YmsP7j.js";import{appList as I}from"./AppSwitch.stories-BDnuwi9Z.js";import{f as L}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-CdBdZvPi.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-Bo1XjP9O.js";import"./generateUtilityClass-BJXokMoA.js";import"./styled-DxPBiXUf.js";import"./generateUtilityClasses-BfMa5HrZ.js";import"./useTheme-DjCAOCMf.js";import"./Box-B199DmZe.js";import"./Container-DlcQbp9d.js";import"./styled-CUr9clCY.js";import"./createStyled-IyuL39l2.js";import"./useThemeProps-C7rvhRGK.js";import"./Stack-CkaIEl_P.js";import"./Typography-DpKxRL_6.js";import"./Paper-Cel9I3vj.js";import"./useThemeProps-DiI4sMJp.js";import"./AdapterDayjs-SYc6eaHj.js";import"./Modal-CaqrQysV.js";import"./utils-BHr5gcCM.js";import"./TransitionGroupContext-DpyE4Xc2.js";import"./index-Cc2aF9ce.js";import"./resolveComponentProps-BPbh-zwX.js";import"./Popover-FzkS9WOq.js";import"./TextField-C8YEFGvP.js";import"./useFormControl-CdUfgNyJ.js";import"./createSvgIcon-DMQw-rzj.js";import"./IconButton-CZXr5bFM.js";import"./ButtonBase-CZ3-eO2f.js";import"./DialogContent-D9t3JHo2.js";import"./Button-BYXN4taO.js";import"./Chip-CN1uKpCE.js";import"./DateTimePicker-BCq-mAD2.js";import"./Divider-CDzzakYn.js";import"./Alert-5oooyx2V.js";import"./LinearProgress-BghVVCAF.js";import"./Spinner-C544qo6r.js";import"./Dialog-Ck4mEIjf.js";import"./MapToggleButtonPresentational-DigQzjPw.js";import"./Remove-BFnkFzrU.js";import"./TextField-DBB085ZE.js";import"./Switch-CUBS3sDF.js";import"./DatePicker-C25_Cre5.js";import"./Paper-BJBTp4DB.js";import"./ErrorFallback-FTfU9tJD.js";import"./ErrorFallbackText-BxvBPsFK.js";import"./ErrorFallbackWrapper-WIZsIluo.js";import"./Brand-DchGyFNu.js";import"./constants-5mjpbbvY.js";import"./Edit-DCb6sKCZ.js";const Vt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...L("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=p(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(y,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(y,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(S,{apps:I}),endChild:T}},a={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},i={args:{appName:"Catalogue",isElevated:!0,startChild:t(S,{apps:I}),endChild:p(N,{direction:"row",alignItems:"center",spacing:.5,children:[p(P,{children:[t(s,{label:"Version",value:"1.16.0"}),t(s,{label:"Build",value:"a1b2c3d"}),t(s,{label:"Environment",value:"production"})]}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,x,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var B,A,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Jt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{a as ClickableBrand,e as Default,i as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Jt as __namedExportsOrder,Vt as default};
