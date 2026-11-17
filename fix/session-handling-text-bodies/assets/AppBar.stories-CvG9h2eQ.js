import{b as s,a as t}from"./iframe-DgB5DOOK.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-DWmBNlHz.js";import"./IconButton-Cj-3dO6Q.js";import"./LinkButton-K1pKYT9-.js";import{A as D,a as p}from"./AppInfoRow-CeJwZqED.js";import{A as E}from"./AppSettings-BNO02vyz.js";import"./Badge-jcWGJ-ob.js";import"./Chip-BfLzWb3z.js";import{D as P}from"./Divider-BM3QVx1-.js";import{T as R}from"./ThemeSwitchRow-DfVigJG0.js";import{A as L}from"./XIcon-VEg9iy4g.js";import"./CogIcon--qSeQQYv.js";import"./ExpandMoreIcon-GTPNzf5m.js";import"./InfoIcon-D991cygI.js";import"./SvgIcon-CZ0P8_U4.js";import"./TableRow-BhnodZ9D.js";import"./Text-D7_q6jLQ.js";import"./TreeView-CzefoKm9.js";import{appList as I}from"./AppSwitch.stories-CozIvr9u.js";import{F}from"./FlexBox-rNRJ5qOl.js";import{B as k}from"./Box-BKgVgTA7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-yhUhh5rC.js";import"./clsx-B-dksMZM.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";import"./MapToggleButtonPresentational-BH1dZTqP.js";import"./Remove-DU6di_qq.js";import"./createSvgIcon-buxlCkbb.js";import"./SvgIcon-B7PwMVYn.js";import"./IconButton-D20y2IYX.js";import"./Paper-CfxavN5N.js";import"./Brand-CNlSU-fT.js";import"./Typography-BF7sK5Ae.js";import"./Skeleton-DalovIMe.js";import"./Skeleton-dAzTvYwV.js";import"./TextField-CWkT05Xq.js";import"./useFormControl-C1QvXYzQ.js";import"./FormControl-C7ixcWY7.js";import"./Modal-CTU41rng.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CE999ugD.js";import"./useSlotProps-Jx-sIlO7.js";import"./index-DQlIAx8_.js";import"./index-HokJ49V1.js";import"./utils-C3Jk0TUt.js";import"./Popover-H8c48_my.js";import"./ListContext-D16S_6sV.js";import"./useControlled-BxoUib7D.js";import"./FormHelperText-B_G7GOx3.js";import"./MenuItem-BpR-NCbk.js";import"./dividerClasses-DLOnW1Qs.js";import"./Divider-B1R26w1K.js";import"./ListItem-DgR4_kwz.js";import"./Toolbar-D-_K5ffV.js";import"./Close-RAdmLMOk.js";import"./Popper-4C-oHIR9.js";import"./Badge-SkVSrEOx.js";import"./Chip-BbjdBAAm.js";import"./FormControlLabel-BEFCwgAZ.js";import"./Stack-DSlyJ0-P.js";import"./styled-CSa8JTl7.js";import"./createStyled-Cr_yrpzs.js";import"./useThemeProps-Cv6lQb1Z.js";import"./Edit-6-OjV0-m.js";import"./Box-lNHAZIk0.js";import"./Dialog-BRVCmQfd.js";import"./DialogContent-CKLJHH2b.js";import"./Alert-B3-1Er1S.js";import"./useSlot-V0kD_uWO.js";import"./LinearProgress-CauuDUEI.js";import"./LinearProgress-DHQnu2TY.js";import"./Spinner-DNEUjWM6.js";import"./CircularProgress-vEt8I-xb.js";import"./TextField-By1fm5Ld.js";import"./FormControl-CG1fKJho.js";import"./FormHelperText-Cx6ksy42.js";import"./LabeledSwitch-0HSP2kfR.js";import"./Switch-DA9rneG8.js";import"./Switch-DhiRFrM7.js";import"./RadioGroup-BaCjTbVF.js";import"./Container-C0Xc2FRN.js";import"./ToggleButton-B4UHGI52.js";import"./ToggleButton-Bs18IMrD.js";import"./ToggleButtonGroup-D0tbUhZv.js";import"./MenuItem-BIurvtuG.js";import"./Tabs-DQ5Yd--o.js";import"./AccordionSummary-BjeUD95x.js";import"./Collapse-DbztTgdD.js";import"./index-DW9QV88U.js";import"./Paper-Bd2hcL_j.js";import"./_IconPopover-ujUl4F4j.js";import"./ErrorFallback-CRTMDqB9.js";import"./ErrorFallbackText-11peTATx.js";import"./ErrorFallbackWrapper-Bwlh2Dtv.js";import"./TableCell-B5sas6rL.js";import"./useThemeProps-B2nAv7Dy.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...O("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=s(N,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(P,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(S,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(S,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(y,{apps:I}),endChild:T}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},a={args:{appName:"Catalogue",isElevated:!0,startChild:t(y,{apps:I}),endChild:s(F,{direction:"row",alignItems:"center",spacing:.5,children:[s(D,{children:[t(p,{label:"Version",value:"1.16.0"}),t(p,{label:"Build",value:"a1b2c3d"}),t(p,{label:"Environment",value:"production"})]}),t(E,{children:t(R,{checked:!1,onChange:()=>{}})}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}},Ee=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Ee as __namedExportsOrder,De as default};
