import{a as p,j as t}from"./iframe-wwyKJVT7.js";import{A as O}from"./UserIcon-BJUhZHXy.js";import{F as N}from"./FlexBox-PSVLjaHH.js";import{n,B as y,U as D,f as S}from"./DropdownButton-BjR4G6c6.js";import"./Text-Cs_t5jTe.js";import"./Chip-BBcf24H1.js";import{D as E}from"./Divider-DvGORPwC.js";import"./TreeView-BUpBgZFV.js";import{A as P,a as s}from"./AppInfoRow-DD0pDyG_.js";import"./LinkButton-tlP8KO0e.js";import{appList as I}from"./AppSwitch.stories-Bov11Y7o.js";import{f as L}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-CvHLitPM.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-CUVs1lE1.js";import"./generateUtilityClass-CkoJfXzB.js";import"./styled-LpRxHRpP.js";import"./generateUtilityClasses-lZioDJSU.js";import"./useTheme-fWgDsTlF.js";import"./Box-BfkY0LoG.js";import"./Container-Ex8awo5l.js";import"./styled-CqLf-K_6.js";import"./createStyled-7rACZg1S.js";import"./useThemeProps-DGz7F6m3.js";import"./Stack-DkIolbKj.js";import"./Typography-KsMZ-Lzq.js";import"./Paper-Ty8OBP7-.js";import"./useThemeProps-6ff9_uQw.js";import"./AdapterDayjs-DLuz1KZP.js";import"./Modal-FJt4lU_X.js";import"./utils-De2QkNKz.js";import"./TransitionGroupContext-Ci1yj1nx.js";import"./index-Bc6yxq3M.js";import"./resolveComponentProps-Tez3FZ9N.js";import"./Popover-ad1rGmx0.js";import"./TextField-DQEmSFXz.js";import"./useFormControl-Bu5lKDwq.js";import"./createSvgIcon-Bca1zsRN.js";import"./IconButton-DAUWwzIO.js";import"./ButtonBase-ZfxRSw2y.js";import"./DialogContent-B9FHsown.js";import"./Button-BUB-REPY.js";import"./Chip-dWFWXs2g.js";import"./DateTimePicker-CCwiql_t.js";import"./Divider-CgD_nbzY.js";import"./Alert-BSE5AHq1.js";import"./LinearProgress-rfUNUhKS.js";import"./Spinner-tbj581ml.js";import"./Dialog-BtzheIZz.js";import"./MapToggleButtonPresentational-DIhML7LJ.js";import"./Remove-BOsHTnyW.js";import"./TextField-DzD39lVx.js";import"./Switch-DnCT64eH.js";import"./DatePicker-C6MhubZW.js";import"./Paper-K6NL7s7r.js";import"./ErrorFallback-SJMDDmk_.js";import"./ErrorFallbackText-CQHNy6L3.js";import"./ErrorFallbackWrapper-C_Ne2lSR.js";import"./Brand-Bn9laiH-.js";import"./Edit-CBu4FngS.js";const _t={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...L("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[T=>t(k,{sx:{width:"100%"},children:t(T,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},U=p(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(y,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(y,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(S,{apps:I}),endChild:U}},a={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},i={args:{appName:"Catalogue",isElevated:!0,startChild:t(S,{apps:I}),endChild:p(N,{direction:"row",alignItems:"center",spacing:.5,children:[p(P,{children:[t(s,{label:"Version",value:"1.16.0"}),t(s,{label:"Build",value:"a1b2c3d"}),t(s,{label:"Environment",value:"production"})]}),U]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Vt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{a as ClickableBrand,e as Default,i as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Vt as __namedExportsOrder,_t as default};
