import{b as s,a as t}from"./iframe-nsP25gKo.js";import{f as O}from"./figmaDesign-CKKXRVNK.js";import{d as n,B as S,U as N,A as y}from"./UserProfileContent-f95zNd9R.js";import"./IconButton-D_s4EuKD.js";import"./LinkButton-BfQndRTn.js";import{A as D,a as p}from"./AppInfoRow-CLIPujn3.js";import{A as E}from"./AppSettings-DVRHQY8i.js";import"./Badge-85zKMsnD.js";import"./Chip-JnNyPpPT.js";import{D as P}from"./Divider-DsquOdv6.js";import{T as R}from"./ThemeSwitchRow-BjVkP1Fv.js";import{A as L}from"./XIcon-DvjInBT6.js";import"./CogIcon-B6b_cT6g.js";import"./ExpandMoreIcon-BpXAgeqq.js";import"./InfoIcon-B4QZA7Dh.js";import"./SvgIcon-DR4WFJkh.js";import"./TableRow-BZSMQNDt.js";import"./Text-Bwgymadh.js";import"./TreeView-CrbubHa0.js";import{appList as I}from"./AppSwitch.stories-Dcl9lr8c.js";import{F}from"./FlexBox-Bbary1W6.js";import{B as k}from"./Box-BLLAoZm6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcG95mMM.js";import"./clsx-B-dksMZM.js";import"./styled-Bt4bz1Ri.js";import"./extendSxProp-BBWs3qYR.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Baj9xzH7.js";import"./TransitionGroupContext-CRxBndhR.js";import"./MapToggleButtonPresentational-DctfZT0J.js";import"./Remove-CzBf15o4.js";import"./createSvgIcon-LgicXHPs.js";import"./SvgIcon-DwNiQzjj.js";import"./IconButton-BYlTCNOG.js";import"./Paper-B4TYotmL.js";import"./Brand-D2VeOYCO.js";import"./Typography-DnSN7OSu.js";import"./Skeleton-DtU8OxFt.js";import"./Skeleton-CwfPMYJi.js";import"./TextField-yAyXnCKm.js";import"./useFormControl-BUEp33Hh.js";import"./FormControl-BMwiDYNj.js";import"./Modal-CeMyLzIn.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C1ZfCTRs.js";import"./useSlotProps-vjHHGShq.js";import"./index-DjtdcByO.js";import"./index-Dxol60-t.js";import"./utils-DLdYsqUd.js";import"./Popover-DUCsUIlP.js";import"./ListContext-B3Q6EA8E.js";import"./useControlled-etmNhFyh.js";import"./FormHelperText-CAF4d6sh.js";import"./MenuItem-ZgZIMTVz.js";import"./dividerClasses-CfQ_rPvR.js";import"./Divider-BIYJU6nM.js";import"./ListItem-DzmK-gV-.js";import"./Toolbar-Dp-Ug-sg.js";import"./Close-CCEFKHxU.js";import"./Popper-Bu4oq1KR.js";import"./Badge-9XdJnLxl.js";import"./Chip-CRajJEkV.js";import"./FormControlLabel-46a0qj7a.js";import"./Stack-RhHn8vw5.js";import"./styled-6EMwNmQ6.js";import"./createStyled-BLSQzFCR.js";import"./useThemeProps-DsTjZoaE.js";import"./Edit-y9PYitAs.js";import"./Box-ClYQvNbI.js";import"./Dialog-DylwUyfT.js";import"./DialogContent-c2oq3SeY.js";import"./Alert-BAgHB1Qx.js";import"./useSlot-OYO5iV9R.js";import"./LinearProgress-Ck7jjyC4.js";import"./LinearProgress-Dmr1J_kV.js";import"./Spinner-cC4ZThnx.js";import"./CircularProgress-B7fpNiMY.js";import"./TextField-CFGiNnsX.js";import"./FormControl-DpTA0hxG.js";import"./FormHelperText-BifUht1K.js";import"./LabeledSwitch-B9jnW4jb.js";import"./Switch-Cny72m0T.js";import"./Switch-Cble3tJI.js";import"./RadioGroup-DhIrKGmL.js";import"./Container-hgkEhD5P.js";import"./ToggleButton-A0J8XTcs.js";import"./ToggleButton-CYeKTcPs.js";import"./ToggleButtonGroup-CjH0lsuO.js";import"./MenuItem-BVxpSR0S.js";import"./Tabs-BgeYDhLN.js";import"./AccordionSummary-Bc-n5IVo.js";import"./Collapse-BSI7DmKL.js";import"./index-CLveBa9-.js";import"./Paper-CRM4XuDd.js";import"./_IconPopover-CM-VnDWQ.js";import"./ErrorFallback-CvDibk96.js";import"./ErrorFallbackText-CKST_BNY.js";import"./ErrorFallbackWrapper-BaLlP7IC.js";import"./TableCell-COiajT-b.js";import"./useThemeProps-qS4SKgCb.js";const De={title:"Surfaces/AppBar",component:L,tags:["autodocs"],parameters:{docs:{description:{component:`
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
