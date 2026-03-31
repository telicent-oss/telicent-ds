import{j as t,a as N}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{A as O}from"./TelicentHorizontalSVG-D3OEbY3t.js";import"./DataSetIcon-eLJEtM34.js";import"./UserIcon-o6gncd3f.js";import{U as I}from"./UserProfile-DRQRR7_X.js";import{T as r,A as v}from"./AuthModal-ohQe4pEe.js";import"./Text-D7i5Vapy.js";import"./Chip-BYDdnwPY.js";import{D}from"./Divider-BNrRnzv6.js";import"./TreeView-BaiGyGfQ.js";import"./UserProfileContent-89WrbRP9.js";import{B as w}from"./Button-BQmmc_Hj.js";import"./IconButton-CSRnY2wZ.js";import"./LinkButton-DOLgHIfS.js";import{appList as k}from"./AppSwitch.stories-Dc_TArkX.js";import{f as E}from"./figmaDesign-CKKXRVNK.js";import{B as S}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./SvgIcon-nu1RSFLJ.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./FlexGrid-WlHVYxOe.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./Container-CeTulhJU.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./FlexBox-CEMdxTrl.js";import"./Stack-C-VLTEnn.js";import"./Typography-NY1t2oJS.js";import"./Paper-DurtPqdU.js";import"./index-BRV0Se7Z.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-GSj0T9Pb.js";import"./utils-BfJHuSOI.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-DEWJqUJ8.js";import"./IconButton-oAA5JCuL.js";import"./ButtonBase-C9YLNer7.js";import"./Menu-Dz_6jnqr.js";import"./index-CejG0Q0C.js";import"./Popover-DlmTLUyz.js";import"./constants-scok30Ut.js";import"./iframe-D9mgO0kl.js";import"../sb-preview/runtime.js";import"./types-CMP91hxZ.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./AdapterDayjs-BEaMQcLJ.js";import"./useThemeProps-BCPloJZh.js";import"./TextField-Dp-4Je7P.js";import"./Select-DjoBVcxs.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BX05r4Wn.js";import"./Button-BsbypDuV.js";import"./Chip-DrHiCwPe.js";import"./MenuItem-B8oYDPYK.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Dfoz0doH.js";import"./ThemeProvider-BnKwSnOu.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-DBzAiknu.js";import"./TextField-Bn0OGEgO.js";import"./Select-CNwEk6pf.js";import"./Switch-hsriPZgu.js";import"./DatePicker-AtFJHvOV.js";import"./DateTimePicker-Pe_mHrSx.js";import"./Divider-ALDgEm0R.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-BqkrEGud.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./MapToggleButtonPresentational-X7PiIpGo.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const dr={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
A branded top-level navigation component built on MUI's \`<AppBar>\` with Telicent design-system styling. 
It supports a centered brand area, optional application name, version label, and flexible content areas on the left and right for things like app switching, user profile actions, or sign-out buttons.

---

### When & How to use it
- **Application headers:** Use at the top of a product or platform page.
- **Branding + navigation:** Ideal when you need consistent Telicent branding with contextual actions.
- **Flexible layouts:** Use \`startChild\` for left-side content such as an app switcher, and \`endChild\` for right-side content such as a user profile or action buttons.
- **Clickable:** Pass \`href\` to make this component clickabout, out of the box it opens in a blank tab.

\`\`\`jsx
<AppBar
  appName="Catalogue"
  isElevated
  href="/"
  startChild={<AppSwitch apps={appList} />}
  endChild={
    <Button color="primary" variant="contained">
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
`}},...E("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[A=>t(S,{sx:{width:"100%"},children:t(A,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},U=N(I,{fullName:"JohnDoe@company.co.uk",children:[t(r,{title:"Username",content:"John Doe"}),t(r,{title:"Email",content:"JohnDoe@company.co.uk"}),t(r,{title:"Deployed Organisation",content:"Company UK"}),t(r,{title:"Version number",content:"1.2.3"}),t(D,{}),t(S,{sx:{pt:1},children:t(w,{onClick:()=>console.log("Sign Out clicked"),color:"primary",variant:"contained",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),o={args:{}},e={args:{appName:"Catalogue",endChild:t(w,{color:"primary",variant:"contained",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},a={args:{disableBrand:!0,startChild:t(v,{apps:k}),endChild:U}},i={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},n={args:{appName:"Catalogue",isElevated:!0,startChild:t(v,{apps:k}),endChild:U},parameters:{docs:{description:{story:"Recommended application-header setup with branding, app navigation on the left, and a primary action on the right."}}}};var p,s,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    endChild: <Button color="primary" variant="contained" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,y,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    isElevated: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample
  },
  parameters: {
    docs: {
      description: {
        story: "Recommended application-header setup with branding, app navigation on the left, and a primary action on the right."
      }
    }
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const hr=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","UsageExample"];export{i as ClickableBrand,o as Default,n as UsageExample,a as WithNoBrand,e as WithSignOutButton,hr as __namedExportsOrder,dr as default};
