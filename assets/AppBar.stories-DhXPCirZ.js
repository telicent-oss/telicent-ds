import{b as s,a as t}from"./iframe-DXJBL9x_.js";import{A as O}from"./ExpandLessIcon-uPUcmea-.js";import"./CogIcon-CoAjbINP.js";import"./InfoIcon-CoapGGcx.js";import"./ExpandMoreIcon-B33Ufify.js";import{T as N}from"./ThemeSwitchRow-rqOztiFe.js";import{d as n,B as S,U as D,A as y}from"./DropdownButton-Ck1F7xyJ.js";import"./Text-Cd8V4L35.js";import"./Chip-CvK8d6TP.js";import{D as E}from"./Divider-CVknC9dk.js";import"./TreeView-nY6YMZFU.js";import{A as P,a as p}from"./AppInfoRow-C_MXw4cX.js";import{A as R}from"./AppSettings-Bto6a5pX.js";import"./SvgIcon-BbV-GOw9.js";import"./TableRow-BFQIGQ0G.js";import"./_IconPopover-mqjPC8DF.js";import"./LinkButton-CFWDgi0H.js";import{F as L}from"./FlexBox-B4rVdveV.js";import{appList as I}from"./AppSwitch.stories-B0oyZyPF.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-DPlGyRLj.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-BBzlhV2G.js";import"./clsx-B-dksMZM.js";import"./styled-CsWZb9OH.js";import"./extendSxProp-BPFiFnsi.js";import"./composeClasses-fLhin0tj.js";import"./Box-Bo6aUxrI.js";import"./Container-BpkmvtTi.js";import"./styled-BdvaptCO.js";import"./createStyled-CUvqKir0.js";import"./useThemeProps-BZz2lqqB.js";import"./Stack-CuewDGku.js";import"./Typography-DJo4I-Wf.js";import"./Paper-Nu-QYyfA.js";import"./index-B-3eVBdp.js";import"./ListItem-DFG_Xp5J.js";import"./ListContext-DOzi5bno.js";import"./FormControl-BZ3xKumC.js";import"./useFormControl-D4YDRhpd.js";import"./TransitionGroupContext-DhxQb8WC.js";import"./resolveComponentProps-CZl0YMKu.js";import"./ButtonBase-wJquHDGD.js";import"./Toolbar-Cz2sYW1x.js";import"./TextField-Dbn4DLF2.js";import"./Modal-BlVhDwBS.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DSK8Y_R1.js";import"./utils-BzNNiNjo.js";import"./Popover-DvuxT2TT.js";import"./useControlled-JK2H1dPE.js";import"./createSvgIcon-CeNn4fLw.js";import"./FormHelperText-CLNyKbC1.js";import"./Close-DmbqPrtW.js";import"./Popper-CRY2U-m0.js";import"./Chip-oiyFfkOd.js";import"./IconButton-BDsd9--s.js";import"./FormControlLabel-BqmsWTqz.js";import"./MenuItem-DlV2oXej.js";import"./dividerClasses-B8vzaTuv.js";import"./useSlot-CnB4Ksxy.js";import"./LinearProgress-ClOceYjE.js";import"./LinearProgress-DJoYhu9o.js";import"./Spinner-DmOJpO9I.js";import"./CircularProgress-BgbeK7sO.js";import"./Dialog-DoNpHslV.js";import"./DialogContent-BqAwFh2L.js";import"./Button-CkvRo_6-.js";import"./MapToggleButtonPresentational-ChQ52gJU.js";import"./Remove-lRy76Il0.js";import"./Alert-BgRBlvRq.js";import"./ToggleButton-Cp5pdiR3.js";import"./ToggleButton-b13yIPKW.js";import"./ToggleButtonGroup-nwMGxtld.js";import"./TextField-DbSeX_av.js";import"./Divider-CS83Zk5t.js";import"./Switch-Boc9Q6ti.js";import"./Switch-CbrWC3x_.js";import"./LabeledSwitch-DiCSkMqY.js";import"./RadioGroup-WuHXBzoT.js";import"./FormControl---tfQNLE.js";import"./FormHelperText-C_xlgv_t.js";import"./Tabs-CsJEKlqa.js";import"./MenuItem-D7ka_INz.js";import"./AccordionDetails-oiuPsPgc.js";import"./Collapse-B3IwCn1j.js";import"./Paper-CDWZhXCm.js";import"./ErrorFallback-CSZl7Tiy.js";import"./ErrorFallbackText-Bilm7gRB.js";import"./ErrorFallbackWrapper-pg5NbF54.js";import"./Brand-nMISz8L9.js";import"./Edit-DidijPs9.js";import"./useThemeProps-CKi109gG.js";import"./TableCell-DsNOT7cG.js";const ye={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Ie=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Ie as __namedExportsOrder,ye as default};
