import{b as s,a as t}from"./iframe-CWOAzfBe.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-PP1H7xMQ.js";import"./IconButton-2rYQRxsd.js";import"./LinkButton-XU4sXk5X.js";import{A as D,a as p}from"./AppInfoRow-CS9nkuxJ.js";import{A as E}from"./AppSettings-CAogJme_.js";import"./Badge-D_pdYXXr.js";import"./Chip-BqgzveIY.js";import{D as P}from"./Divider-pNwF1iHD.js";import{T as R}from"./ThemeSwitchRow-BIg4pT4X.js";import{A as L}from"./XIcon-dAr9ghTX.js";import"./CogIcon-DoUxEvuA.js";import"./ExpandMoreIcon-CD2Z_dgw.js";import"./InfoIcon-Dm5ciMv4.js";import"./SvgIcon-Dte4xqyw.js";import"./TableRow-CJHAGSMA.js";import"./Text-C2R7pbPC.js";import"./TreeView-Bwkbpo83.js";import{appList as I}from"./AppSwitch.stories-Dwl_-XMj.js";import{F}from"./FlexBox-pZJaha5u.js";import{B as k}from"./Box-Be9RsHl4.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TjLPzi1x.js";import"./clsx-B-dksMZM.js";import"./styled-yqtTQwkH.js";import"./extendSxProp-CSX3D6uH.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B2y4Re2S.js";import"./TransitionGroupContext-DeA-sbXP.js";import"./MapToggleButtonPresentational-CEHdazAY.js";import"./Remove-C8RIYb0h.js";import"./createSvgIcon-BHb-OUfU.js";import"./SvgIcon-ClJFXd34.js";import"./IconButton-DgurzXTO.js";import"./Paper-7wOgw64N.js";import"./Brand-CKv8y3LC.js";import"./Typography-D-Cq-N2y.js";import"./Skeleton-D5xdqxBS.js";import"./Skeleton-D4kMWV6G.js";import"./TextField-BCQeTXpB.js";import"./useFormControl-Du95Ze_o.js";import"./FormControl-psQBgE76.js";import"./Modal-DpeBRA_s.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DyVW6uNc.js";import"./useSlotProps-DYSwu3K9.js";import"./index-DWVJrjyq.js";import"./index-DjnTYE3b.js";import"./utils-Bhl493yy.js";import"./Popover-vUzglvRh.js";import"./ListContext-D0cTsJmH.js";import"./useControlled-CQQMs9uM.js";import"./FormHelperText-Bpw2KcDZ.js";import"./MenuItem-D6VvEmRc.js";import"./dividerClasses-CvuSSyUr.js";import"./Divider-CFFp1ukz.js";import"./ListItem-BPZeYGxz.js";import"./Toolbar-CToRG8p1.js";import"./Close-BxICseQ8.js";import"./Popper-CrLTcQdC.js";import"./Badge-B8UvVhKt.js";import"./Chip-Cmk_bJZP.js";import"./FormControlLabel-a66K3OEG.js";import"./Stack-BSuJYMST.js";import"./styled-BPbJu004.js";import"./createStyled-DnaBivQ6.js";import"./useThemeProps-DwBSHX6c.js";import"./Edit-BGN1rUEo.js";import"./Box-BeooBb3v.js";import"./Dialog-DcXNP11i.js";import"./DialogContent-B_RMQklx.js";import"./Alert-D1RRFPA_.js";import"./useSlot-BCKzb_k_.js";import"./LinearProgress-DYdo5kC4.js";import"./LinearProgress-BwQMcTrR.js";import"./Spinner-BUwM6wcC.js";import"./CircularProgress-hkecqCAX.js";import"./TextField-BvQJwsnk.js";import"./FormControl-C6XdQTGq.js";import"./FormHelperText-Cpr8FSPI.js";import"./LabeledSwitch-CZe5HyJI.js";import"./Switch-Bgf3cuRU.js";import"./Switch-C9fMxVpv.js";import"./RadioGroup-BjERn-tn.js";import"./Container-F3J-sHJz.js";import"./ToggleButton-DaGu9yPS.js";import"./ToggleButton--S7xR4zz.js";import"./ToggleButtonGroup-s374tJhr.js";import"./MenuItem-CpoRDk7B.js";import"./Tabs-BsDialm7.js";import"./AccordionSummary-FJf2LPtG.js";import"./Collapse-CuLQ9H5N.js";import"./index-Db069xsF.js";import"./Paper-CcJbfhLV.js";import"./_IconPopover-7sZ10jAV.js";import"./ErrorFallback-r5W_n7Xq.js";import"./ErrorFallbackText-B8i4qwXi.js";import"./ErrorFallbackWrapper-TPpQ5mRs.js";import"./TableCell-BcaiVUkP.js";import"./useThemeProps-Ce3qTZG0.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
