import{b as s,a as t}from"./iframe-DZvJTdLH.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-BecRDo52.js";import"./IconButton-8pZ9K19z.js";import"./LinkButton-oo7B018k.js";import{A as D,a as p}from"./AppInfoRow-BnZOAG2R.js";import{A as E}from"./AppSettings-CwOueJgv.js";import"./Badge-CXcYRuuH.js";import"./Chip-DOiPte_Q.js";import{D as P}from"./Divider-Bt0PK1Em.js";import{T as R}from"./ThemeSwitchRow-PZEOW11l.js";import{A as L}from"./XIcon-QAa36Zq2.js";import"./CogIcon-CIuYjsyA.js";import"./ExpandMoreIcon-CoyOjiP1.js";import"./InfoIcon-zRlouagw.js";import"./SvgIcon-DjOKORyd.js";import"./TableRow-B_USo3AD.js";import"./Text-CeICp6tE.js";import"./TreeView-2KoVSPL2.js";import{appList as I}from"./AppSwitch.stories-CAPg95e8.js";import{F}from"./FlexBox-DqoSphCj.js";import{B as k}from"./Box-BKngloQ-.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-_W7uhZIP.js";import"./clsx-B-dksMZM.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";import"./MapToggleButtonPresentational-Bv15blBa.js";import"./Remove-DfAAsDlO.js";import"./createSvgIcon-DAAJopla.js";import"./SvgIcon-Dh5ZJP-b.js";import"./IconButton-DUdtZIUE.js";import"./Paper-CCIRRnYl.js";import"./Brand-fdaXkxaR.js";import"./Typography-CMsNHFNw.js";import"./Skeleton-oWp-lzGI.js";import"./Skeleton-B6kfoS7x.js";import"./TextField--zteS9Z3.js";import"./useFormControl-DRohniRh.js";import"./FormControl-CMWNxSpD.js";import"./Modal-B-Jrfzth.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CGbu6pRn.js";import"./useSlotProps-D1CGgc7b.js";import"./index-BeNEZCo_.js";import"./index-DZKKb8Ei.js";import"./utils-BojYxu5F.js";import"./Popover-DCCxxHyt.js";import"./ListContext-IkSGtFSk.js";import"./useControlled-CMjA5emF.js";import"./FormHelperText-DSqqnB4u.js";import"./MenuItem-BbOJvVrz.js";import"./dividerClasses-DXr8v9nN.js";import"./Divider-Co3nspBN.js";import"./ListItem-BW1ZgJz6.js";import"./Toolbar-BUoDdB4_.js";import"./Close-HI-kgcXD.js";import"./Popper-FEDRhdQ8.js";import"./Badge-DAQPuUGC.js";import"./Chip-D0ft7hQi.js";import"./FormControlLabel-W0LRkKmU.js";import"./Stack-Tdm1puzf.js";import"./styled-D3T-GcQA.js";import"./createStyled-DCQOt2Af.js";import"./useThemeProps-DukH9-pI.js";import"./Edit-7kV_dAD-.js";import"./Box-oyFUK34N.js";import"./Dialog-DSHn1z9S.js";import"./DialogContent-B0W5F4Cx.js";import"./Alert-CcKbQcmF.js";import"./useSlot-CzbqdBW5.js";import"./LinearProgress-D96_7Ef0.js";import"./LinearProgress-CkoUAzn0.js";import"./Spinner-MO7bqc-q.js";import"./CircularProgress-CyLAzHGZ.js";import"./TextField-C7If2Wuf.js";import"./FormControl-CDX6nODe.js";import"./FormHelperText-CLInVfCn.js";import"./LabeledSwitch-CLfoxOWm.js";import"./Switch-BTn852xS.js";import"./Switch-D4XwAo5L.js";import"./RadioGroup-CHruPiDE.js";import"./Container-BneX2xXG.js";import"./ToggleButton-L5BGVeTP.js";import"./ToggleButton-wbRLKRj1.js";import"./ToggleButtonGroup-B8J0oCmm.js";import"./MenuItem-DN6TEHwr.js";import"./Tabs-CrI35iIi.js";import"./AccordionSummary-DG4EpXIp.js";import"./Collapse-MMMT4y8r.js";import"./index--cAEdwB6.js";import"./Paper-BMay5fSE.js";import"./_IconPopover-C-5OzzCa.js";import"./ErrorFallback-Cd58QQxa.js";import"./ErrorFallbackText-MlzepuDI.js";import"./ErrorFallbackWrapper-CeD4slRe.js";import"./TableCell-Dqb6AS6c.js";import"./useThemeProps-HgEH_AVI.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
