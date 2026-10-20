import{b as s,a as t}from"./iframe-H00w80Or.js";import{A as O}from"./ExpandLessIcon-BszsM4qE.js";import"./CogIcon-yzQkEaTn.js";import"./InfoIcon-KXnvf3xk.js";import"./ExpandMoreIcon-CmOQf-OW.js";import{T as N}from"./ThemeSwitchRow-DC0I62HD.js";import{d as n,B as S,U as D,A as y}from"./DropdownButton-dp3UZT7u.js";import"./Text-wA3ZXyxz.js";import"./Badge-D-W6c0gw.js";import"./Chip-DKIonNZh.js";import{D as E}from"./Divider-pZ3IXV4I.js";import"./TreeView-DIg7qFOg.js";import{A as P,a as p}from"./AppInfoRow-kOozOQgV.js";import{A as R}from"./AppSettings-D-4IsWrA.js";import"./SvgIcon-8QThMI5m.js";import"./TableRow-uDW1Sb-b.js";import"./IconButton-DlbSnkMX.js";import"./LinkButton-DU5juLDL.js";import{F as L}from"./FlexBox-CO2h70Gz.js";import{appList as I}from"./AppSwitch.stories-C2O637Q5.js";import{f as F}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-PGTe_iKL.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-62q7EVQn.js";import"./clsx-B-dksMZM.js";import"./styled-0iMzvdEp.js";import"./extendSxProp-DjNpUFg0.js";import"./composeClasses-fLhin0tj.js";import"./Box-BPWUYpPq.js";import"./Container-xAch6yKK.js";import"./styled-DEANjgQR.js";import"./createStyled-BS21KARw.js";import"./useThemeProps-BwLca_Tx.js";import"./Stack-D4ylMwmH.js";import"./Typography-BeNp4hZk.js";import"./Paper-ufb6o8lk.js";import"./index-DroXl4b1.js";import"./ListItem-CIX3erCJ.js";import"./ListContext-JPB_oyLb.js";import"./FormControl-DgKeLVgZ.js";import"./useFormControl-IvUXOtj3.js";import"./TransitionGroupContext-BzdPLesw.js";import"./resolveComponentProps-BEZJTj5A.js";import"./ButtonBase-q86Xzq01.js";import"./Toolbar-B8bYqEFU.js";import"./TextField-gd7MEMhf.js";import"./Modal-4pBuhtQR.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-lvm_v48l.js";import"./index-CtDoTQ8v.js";import"./utils-D2gZUpWj.js";import"./Popover-FTtalKAU.js";import"./useControlled-Bn2nyR_9.js";import"./createSvgIcon-CiVlnnHz.js";import"./FormHelperText-Byk_ugW2.js";import"./Close-BjCtc8xA.js";import"./Popper-4ejOxVhQ.js";import"./Badge-C0V1iWjJ.js";import"./Chip-CIeLwZjP.js";import"./IconButton-B-TGVwcE.js";import"./FormControlLabel-DT2ODpRX.js";import"./MenuItem-DdlDr0ZH.js";import"./dividerClasses-BFp8x9AY.js";import"./useSlot-28dyUGlP.js";import"./LinearProgress-DtO0fbZP.js";import"./LinearProgress-B2fSExrt.js";import"./Spinner-CF6arQiu.js";import"./CircularProgress-CjEAu3fq.js";import"./Dialog-C8r9bZj8.js";import"./DialogContent-3cYYjIfQ.js";import"./Button-C_DxOEgn.js";import"./MapToggleButtonPresentational-BZf2zw2H.js";import"./Remove-D7AlsKhh.js";import"./Alert-BlUYh8NQ.js";import"./ToggleButton-CTbh2YDH.js";import"./ToggleButton-BENVC70c.js";import"./ToggleButtonGroup-BrXjNDoG.js";import"./TextField-vmXQ439n.js";import"./Divider-dkPyhD-7.js";import"./Switch-CZks5nrW.js";import"./Switch-nDSeyWnc.js";import"./LabeledSwitch-CPePvXi_.js";import"./RadioGroup-QDFk1CAT.js";import"./FormControl-Ddw-GhPc.js";import"./FormHelperText-Bmn0upHu.js";import"./Tabs-DPrcsUlF.js";import"./MenuItem-RCWgR922.js";import"./AccordionDetails-Dbo1O38p.js";import"./Collapse-BhPshysv.js";import"./_IconPopover-DihhQVMX.js";import"./Paper-BJSr6UaX.js";import"./ErrorFallback-C0XWCyRr.js";import"./ErrorFallbackText-BCpI9Vcj.js";import"./ErrorFallbackWrapper-LbAdlq-T.js";import"./Brand-BCpYs0jj.js";import"./Edit-B-OE2jTa.js";import"./useThemeProps-C79kCelR.js";import"./TableCell-DFC8CWhZ.js";const Ue={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Oe=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{i as ClickableBrand,e as Default,a as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Oe as __namedExportsOrder,Ue as default};
