import{b as s,a as t}from"./iframe-COFs_UtR.js";import{A as O}from"./UserIcon-BFtUc4n_.js";import"./CogIcon-DOgitz6v.js";import"./InfoIcon-x18FY27k.js";import{T as N}from"./ThemeSwitchRow-D9BYjnUD.js";import{o as n,B as S,U as D,A as y}from"./DropdownButton-DdQkmJUC.js";import"./Text-DRb1poC2.js";import"./Chip-A07BHzeG.js";import{D as E}from"./Divider-CZSVcPjF.js";import"./TreeView-m4trFAYo.js";import{A as P,a as p}from"./AppInfoRow-B60RiNSZ.js";import{A as R}from"./AppSettings-BOKLsdFo.js";import"./TableRow-sL2cRuc0.js";import"./_IconPopover-DMMWxGzb.js";import"./LinkButton-CKtknzFJ.js";import{F as L}from"./FlexBox-CM3pIGUP.js";import{appList as I}from"./AppSwitch.stories-dpefrh2J.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-DSZohf0j.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-Cu8kR4gr.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-Br9ekNhD.js";import"./Box-BEb_3Tji.js";import"./Container-D004PVc3.js";import"./styled-DsoO9eq7.js";import"./createStyled-btN_05Dm.js";import"./useThemeProps-C1YLMFu1.js";import"./Stack-Udab0hUQ.js";import"./Typography-DDyWDEsv.js";import"./Paper-B8rmAYsL.js";import"./index-CLjgFykj.js";import"./AdapterDayjs-C5Ouz9-c.js";import"./useThemeProps-B3b-1bce.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Popover-B7jPgFGm.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./FormHelperText-pSG34NeB.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";import"./DateTimePicker-D_pIcGw1.js";import"./Divider-CEy0w4OC.js";import"./Alert-D-nOd5MK.js";import"./LinearProgress-CXvQl4fD.js";import"./Spinner-J2JsTlyl.js";import"./Dialog-Djic2CFV.js";import"./MapToggleButtonPresentational-DeY3mUq6.js";import"./Remove-CdEeIubw.js";import"./TextField-CzTYTlCu.js";import"./Switch-5JMBQZns.js";import"./LabeledSwitch-e4hrpLv0.js";import"./DatePicker-DSnxmH6o.js";import"./FormControl-CuWG66iZ.js";import"./FormHelperText-Dzx1WlCL.js";import"./Paper-D-Oim7GD.js";import"./ErrorFallback-TQb8da9R.js";import"./ErrorFallbackText-C8RcO45_.js";import"./ErrorFallbackWrapper-D42w-3GQ.js";import"./Brand-Bs80UuC1.js";import"./Edit-BOV9wVf0.js";const ie={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...F("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=s(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(S,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(S,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(y,{apps:I}),endChild:T}},a={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},i={args:{appName:"Catalogue",isElevated:!0,startChild:t(y,{apps:I}),endChild:s(L,{direction:"row",alignItems:"center",spacing:.5,children:[s(P,{children:[t(p,{label:"Version",value:"1.16.0"}),t(p,{label:"Build",value:"a1b2c3d"}),t(p,{label:"Environment",value:"production"})]}),t(R,{children:t(N,{checked:!1,onChange:()=>{}})}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,w,A;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(A=(w=a.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,B,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        <AppSettings>
          <ThemeSwitchRow checked={false} onChange={() => undefined} />
        </AppSettings>
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
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const ne=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{a as ClickableBrand,e as Default,i as StandardHeader,r as WithNoBrand,o as WithSignOutButton,ne as __namedExportsOrder,ie as default};
