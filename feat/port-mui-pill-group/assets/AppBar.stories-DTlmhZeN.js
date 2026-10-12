import{b as s,a as t}from"./iframe-Cd_b2o5a.js";import{A as O}from"./ExpandLessIcon-aVvcYNN5.js";import"./CogIcon-DhPeOlSR.js";import"./InfoIcon-CUR1EQCO.js";import"./ExpandMoreIcon-C7D9oUmn.js";import{T as N}from"./ThemeSwitchRow-BnpCDuSK.js";import{d as n,B as S,U as D,A as y}from"./DropdownButton-cxua4Oxx.js";import"./Text-Wjy9gNmi.js";import"./Chip-Blkti73k.js";import{D as E}from"./Divider-9h0MPdjV.js";import"./TreeView-DMlgxYdm.js";import{A as P,a as p}from"./AppInfoRow-Bf3N0ddF.js";import{A as R}from"./AppSettings-Czqo5fXt.js";import"./SvgIcon-U-axE2xd.js";import"./TableRow-DC5TBsGP.js";import"./_IconPopover-CiSr5uQZ.js";import"./LinkButton-DOqUGJcT.js";import{F as L}from"./FlexBox-9GQOwYlj.js";import{appList as I}from"./AppSwitch.stories-BXCec0q3.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-D6LYlQtG.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-B1KGk51t.js";import"./clsx-B-dksMZM.js";import"./styled-CGYYy0Dj.js";import"./extendSxProp-DmO-r4ow.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DMI-kw-e.js";import"./Box-dq88Ct6Q.js";import"./Container-Bzr0bNjy.js";import"./styled-DR5ZaSIi.js";import"./createStyled-BiNrR7bs.js";import"./useThemeProps-BeXTsOsN.js";import"./Stack-07laLbzL.js";import"./Typography-CsrEffoZ.js";import"./Paper-hJ6PGTek.js";import"./index-M60GgTXs.js";import"./AdapterDayjs-C1RvpKBK.js";import"./useThemeProps-BJpOgLh3.js";import"./Modal-D0r_KFjq.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CXwLzekK.js";import"./resolveComponentProps-DcS_ho5J.js";import"./index-t4Ln2bEE.js";import"./utils-DuG08QIw.js";import"./Popover-hZ9yWhQ1.js";import"./TextField-Dko6rREu.js";import"./useFormControl-BYRlGA8y.js";import"./FormControl-LraBFmA3.js";import"./ListContext-B_SN-Vsv.js";import"./useControlled-DH9GLKAS.js";import"./createSvgIcon-Bb20z-GJ.js";import"./FormHelperText-Dsn6gvV_.js";import"./IconButton-BvOf-PbX.js";import"./ButtonBase-DtNJCaLI.js";import"./DialogContent-D9MmNMVa.js";import"./Button-9YQTmtlR.js";import"./Chip-Bai6p_3l.js";import"./MenuItem-BLZc0iJP.js";import"./dividerClasses-Du-ckaEr.js";import"./useSlot-CybJwoih.js";import"./LinearProgress-Bni58dnK.js";import"./Spinner-BwzA_JHU.js";import"./Dialog-CDfX8NcR.js";import"./MapToggleButtonPresentational-D8XYaC1X.js";import"./Remove-DqG_RTGn.js";import"./Alert-CMzup6BR.js";import"./ToggleButton-C3nKEC15.js";import"./ToggleButtonGroup-CoNFQC6R.js";import"./TextField-LWye6xaa.js";import"./Divider-D1nuRWHP.js";import"./Switch-vWVIvl1D.js";import"./LabeledSwitch-C8r-iiSL.js";import"./DatePicker-CtgFdiGq.js";import"./DateTimePicker-CED5Da2b.js";import"./FormControl-DlJ-t_WI.js";import"./FormHelperText-Bmovl1Lw.js";import"./MenuItem-IST6gdzD.js";import"./AccordionDetails-CK9RoavB.js";import"./Collapse-BgXK0y6u.js";import"./Paper-Hgkbc48O.js";import"./ErrorFallback-Dt0mghmj.js";import"./ErrorFallbackText-B2d79ctb.js";import"./ErrorFallbackWrapper-BG5Vtd-v.js";import"./Brand-DegRULdI.js";import"./Edit-CNNLFkXb.js";const ge={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const be=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,be as __namedExportsOrder,ge as default};
