import{a as p,j as t}from"./iframe-pszacA4H.js";import{A as O}from"./UserIcon-CB1G1wTy.js";import{F as N}from"./FlexBox-P753RbX0.js";import{T as n,B as y,U as D,i as S}from"./DropdownButton-C9PYtlvl.js";import"./Text-CY99CXXY.js";import"./Chip-Ck-CjMOG.js";import{D as E}from"./Divider-BV2jxKYP.js";import"./TreeView-Cg5cah_6.js";import{A as P,a as s}from"./AppInfoRow-BRrAHWV8.js";import"./LinkButton-CJEhHAkn.js";import{appList as I}from"./AppSwitch.stories-BDvuQWgZ.js";import{f as L}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-CoitXI_U.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-XcfurnTf.js";import"./generateUtilityClass-BfTSA2ZQ.js";import"./styled-CbW2HKyC.js";import"./generateUtilityClasses-DGogGnVz.js";import"./useTheme-Bw0ZNVbz.js";import"./Box-rB9UFT7p.js";import"./Container-UFLQM5aJ.js";import"./styled-Bdsosz3P.js";import"./createStyled-CEQlNkwM.js";import"./useThemeProps-DitB9ftq.js";import"./Stack-CowqRQdz.js";import"./Typography-CVdmjiVE.js";import"./Paper-DVbcfMuJ.js";import"./useThemeProps-WWbtI8HR.js";import"./AdapterDayjs-BBUVLuYE.js";import"./Modal-B_JXUh34.js";import"./utils-JVxM4WCa.js";import"./TransitionGroupContext-CaODL787.js";import"./index-C_qP2Xor.js";import"./resolveComponentProps-Bnl83VAv.js";import"./Popover-CLeTkZpW.js";import"./TextField-BtmYsaUD.js";import"./useFormControl-B9g9kZo5.js";import"./createSvgIcon-OMymEHKM.js";import"./IconButton-5N96Sbkv.js";import"./ButtonBase-i9cVtWJL.js";import"./DialogContent-SD13_ieT.js";import"./Button-9QqdFzed.js";import"./Chip-BtBjn1GF.js";import"./DateTimePicker-CFmdo-og.js";import"./Divider-CZs5Ku8H.js";import"./Alert-CfkRJKnU.js";import"./LinearProgress-B3k1N0Vh.js";import"./Spinner-COeGv-jx.js";import"./Dialog-BVjlScIy.js";import"./MapToggleButtonPresentational-B8OSYcmI.js";import"./Remove-DEmqYZQ1.js";import"./TextField-BXIIhSmS.js";import"./Switch-Cw_ietTJ.js";import"./DatePicker-5BS5wq4q.js";import"./Paper-BVfCuSkB.js";import"./ErrorFallback-BUB_KZrd.js";import"./ErrorFallbackText-D_fv6GUU.js";import"./ErrorFallbackWrapper-BydtoVbs.js";import"./Brand-BJODkHYZ.js";import"./constants-Bbs9w9BQ.js";import"./Edit-DtmqGm9P.js";const Vt={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...L("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[U=>t(k,{sx:{width:"100%"},children:t(U,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},T=p(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(y,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(y,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(S,{apps:I}),endChild:T}},a={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},i={args:{appName:"Catalogue",isElevated:!0,startChild:t(S,{apps:I}),endChild:p(N,{direction:"row",alignItems:"center",spacing:.5,children:[p(P,{children:[t(s,{label:"Version",value:"1.16.0"}),t(s,{label:"Build",value:"a1b2c3d"}),t(s,{label:"Environment",value:"production"})]}),T]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,h,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,x,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank"
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var B,A,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Jt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{a as ClickableBrand,e as Default,i as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Jt as __namedExportsOrder,Vt as default};
