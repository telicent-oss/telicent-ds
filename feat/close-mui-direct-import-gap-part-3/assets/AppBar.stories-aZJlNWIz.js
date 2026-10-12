import{b as s,a as t}from"./iframe-aFe7UUBz.js";import{A as O}from"./ExpandLessIcon-_Gn5GBEU.js";import"./CogIcon-Dzw3a1eq.js";import"./InfoIcon-DtypYTQN.js";import"./ExpandMoreIcon-CXldgYGR.js";import{T as N}from"./ThemeSwitchRow-Dg_y3FM8.js";import{d as n,B as S,U as D,A as y}from"./DropdownButton-CGpi1hqS.js";import"./Text-DzLxPjqb.js";import"./Chip-CUl3csw_.js";import{D as E}from"./Divider-Dp_aJAS1.js";import"./TreeView-CZ0g_WUA.js";import{A as P,a as p}from"./AppInfoRow-F3c1S5e4.js";import{A as R}from"./AppSettings-DScsrM9R.js";import"./SvgIcon-Bpd7uWoU.js";import"./TableRow-b_2L1XJo.js";import"./DataGrid-DvrmVkGc.js";import"./_IconPopover-YVipcYc4.js";import"./LinkButton-17csqiIs.js";import{F as L}from"./FlexBox-CmBTY25V.js";import{appList as I}from"./AppSwitch.stories-62tHFtuR.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-C4GBjpR7.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon--evEnJni.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BisXqFak.js";import"./extendSxProp-Cg1_Zgz3.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Box-D3NLLewX.js";import"./Container-SU972UVC.js";import"./styled-pNRJu87k.js";import"./createStyled-BGui5uB2.js";import"./useThemeProps-wiEASLar.js";import"./Stack-DONLWdUd.js";import"./Typography-BW_wQ-ow.js";import"./Paper-Dibq-B0l.js";import"./index-BZ_yw_br.js";import"./AdapterDayjs-KkvHR9Mv.js";import"./useThemeProps-BXD491Jy.js";import"./Modal-B6NB2nb_.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CzKtgD_a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-COer71JX.js";import"./index-BCoUhWCm.js";import"./utils-DumdPjpW.js";import"./Popover-DAqhZQe9.js";import"./InputAdornment-CZufPfa6.js";import"./useFormControl-BWvbFyMh.js";import"./TextField-BJ5r44lN.js";import"./FormControl-Drt8KI8a.js";import"./ListContext-BI1i6AEx.js";import"./useControlled-DSueLwQ1.js";import"./createSvgIcon-B8v7KFIv.js";import"./FormHelperText-B1iyLw_g.js";import"./IconButton-B1f28KGp.js";import"./ButtonBase--L73nkrK.js";import"./DialogContent-BK3fYsXw.js";import"./Button-i5m3WpsB.js";import"./Chip-jnP50xz1.js";import"./useSlot-CmIeWFIT.js";import"./LinearProgress-khjbRmBd.js";import"./LinearProgress-DoDInf46.js";import"./Spinner-CWY5xgQX.js";import"./CircularProgress-C8hIlNO3.js";import"./Dialog-DRC_GMD1.js";import"./MapToggleButtonPresentational-JgXdEZxi.js";import"./Remove-BYWHJlSb.js";import"./Alert-DqW_EzS7.js";import"./Close-EYRLp0W2.js";import"./ToggleButton-DfTYlbw3.js";import"./ToggleButton-d-GapL7d.js";import"./TextField-Cx5VJ8ov.js";import"./MenuItem-BksAsHXH.js";import"./dividerClasses-ClH17Faz.js";import"./Divider-D0LHX0qm.js";import"./Switch-4P0ZX1Dh.js";import"./Switch-CYakBrxK.js";import"./FormControlLabel-AQIEhTjn.js";import"./LabeledSwitch-CLOpL5K_.js";import"./DatePicker-BxrT-zy4.js";import"./DateTimePicker-Di_rakTc.js";import"./Tabs-D7uWqjx4.js";import"./LocalizationProvider-BHfuR2cp.js";import"./RadioGroup-OxucSz7v.js";import"./FormControl-DEBxrS_-.js";import"./FormHelperText-4VYnSz9d.js";import"./MenuItem-CpN00EoB.js";import"./AccordionDetails-fAqhD8kD.js";import"./Collapse-_-rzgl6R.js";import"./Paper-B-DWjYaW.js";import"./ErrorFallback-DGzzW2Jr.js";import"./ErrorFallbackText-B_Z_nAtZ.js";import"./ErrorFallbackWrapper-CBwm4dqE.js";import"./Brand-GlYAhSh3.js";import"./Edit-qB64VPbS.js";import"./TableCell-BAKDulqq.js";import"./index-hVAbpQul.js";import"./Skeleton-BYYXkkHT.js";const Oe={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...F("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=s(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(S,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(S,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(y,{apps:I}),endChild:T}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},a={args:{appName:"Catalogue",isElevated:!0,startChild:t(y,{apps:I}),endChild:s(L,{direction:"row",alignItems:"center",spacing:.5,children:[s(P,{children:[t(p,{label:"Version",value:"1.16.0"}),t(p,{label:"Build",value:"a1b2c3d"}),t(p,{label:"Environment",value:"production"})]}),t(R,{children:t(N,{checked:!1,onChange:()=>{}})}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,w,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,B,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Ne=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Ne as __namedExportsOrder,Oe as default};
