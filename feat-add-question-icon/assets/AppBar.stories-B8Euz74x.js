import{a as p,j as t}from"./iframe-lbVyLo9M.js";import{A as O}from"./UserIcon-BYJvLZx1.js";import{F as N}from"./FlexBox-NMVzPqDV.js";import{T as n,B as y,U as D,i as S}from"./DropdownButton-DodwJLhq.js";import"./Text-GZhHB46q.js";import"./Chip-Cs6bMZDw.js";import{D as E}from"./Divider-BOL12Syp.js";import"./TreeView-DEjBOrW7.js";import{A as P,a as s}from"./AppInfoRow-COyx2En4.js";import"./LinkButton-XIf9yczH.js";import{appList as I}from"./AppSwitch.stories-DTZWNXPk.js";import{f as L}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-DlYuhDE8.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-BhjTKujD.js";import"./generateUtilityClass-mLX-m29y.js";import"./styled-thNUQRPl.js";import"./generateUtilityClasses-DGf4tbvL.js";import"./useTheme-CLkEv95-.js";import"./Box-C83oWY3G.js";import"./Container-DLPgUEUh.js";import"./styled-DCbo4I3z.js";import"./createStyled-lowEfwXB.js";import"./useThemeProps-At40PQ24.js";import"./Stack-CcM8nxhu.js";import"./Typography-7qJHmYWv.js";import"./Paper-D-csFAd3.js";import"./useThemeProps-CR3q6hIr.js";import"./AdapterDayjs-Bh746Glk.js";import"./Modal-DR8JHd-z.js";import"./utils-CtBn2Om0.js";import"./TransitionGroupContext-CHRtULwj.js";import"./index-DAZgcoYU.js";import"./resolveComponentProps-Dc14A0Xg.js";import"./Popover-BdniOjWh.js";import"./TextField-VYpRKwSw.js";import"./useFormControl-CZxL2IaN.js";import"./createSvgIcon-V9v0b-rh.js";import"./IconButton-D9SltU1Q.js";import"./ButtonBase-CvSf6vSn.js";import"./DialogContent-CfoP2HP5.js";import"./Button-Bf8_SP8e.js";import"./Chip-CPeHQbdq.js";import"./DateTimePicker-DtUwUzaw.js";import"./Divider-DHhQsNL_.js";import"./Alert-C83Wtki0.js";import"./LinearProgress-D1WH3K-w.js";import"./Spinner-CX2KmoCf.js";import"./Dialog-BJNkPgfD.js";import"./MapToggleButtonPresentational-BtIuW8W8.js";import"./Remove-qUnvA5Qg.js";import"./TextField-Z8WmXcEs.js";import"./Switch-vGqTkiql.js";import"./DatePicker-NdtGOenD.js";import"./Paper-BJ_QnuCU.js";import"./ErrorFallback-DSQ6d8ue.js";import"./ErrorFallbackText-CXIKZcAb.js";import"./ErrorFallbackWrapper-DbmuJJ7f.js";import"./Brand-BVn3cdyI.js";import"./constants-BK6Qtb1C.js";import"./Edit-DcejEQXi.js";const Vt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
