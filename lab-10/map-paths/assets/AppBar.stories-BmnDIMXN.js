import{a as p,j as t}from"./iframe-BJgHgd1Z.js";import{A as O}from"./UserIcon-DRBR6vIl.js";import{F as N}from"./FlexBox-BW1Y8iS1.js";import{n,B as y,U as D,f as S}from"./DropdownButton-BHLxTzKb.js";import"./Text-CFG1txZB.js";import"./Chip-BcrIk1ag.js";import{D as E}from"./Divider-BpZ0wQgx.js";import"./TreeView-BuHLvqR5.js";import{A as P,a as s}from"./AppInfoRow-if-kszvm.js";import"./LinkButton-CPyJZB5v.js";import{appList as I}from"./AppSwitch.stories-KxXvHr1I.js";import{f as L}from"./figmaDesign-CKKXRVNK.js";import{B as k}from"./Box-LUxyFkPT.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-DcQL11rx.js";import"./generateUtilityClass-Cn_5OWk3.js";import"./styled-BWamrOs2.js";import"./generateUtilityClasses-CN6mAH2Q.js";import"./useTheme-VlnuJmfA.js";import"./Box-Bf_aDvUP.js";import"./Container-DOyqGsQO.js";import"./styled-CHLKkDag.js";import"./createStyled-iOGV3soq.js";import"./useThemeProps-D_xWUNan.js";import"./Stack-DjNdkcoM.js";import"./Typography-ujR-W61_.js";import"./Paper-CZnL-9iG.js";import"./useThemeProps-BpwhqMOr.js";import"./AdapterDayjs-BcMpDRru.js";import"./Modal-D7NqsO6R.js";import"./utils-N4V_aYBY.js";import"./TransitionGroupContext-D4FwzG5v.js";import"./index-T_DZwRUx.js";import"./resolveComponentProps-D-A_8V-W.js";import"./Popover-COvp4hyZ.js";import"./TextField-By-8GSNF.js";import"./useFormControl-B_d30NUq.js";import"./createSvgIcon-ChgfbEw0.js";import"./IconButton-BUrmmeH6.js";import"./ButtonBase-DpqXy7HG.js";import"./DialogContent-J5S8hT7c.js";import"./Button-ChD7S6cs.js";import"./Chip-B2SFgqJb.js";import"./DateTimePicker-BjDAHjib.js";import"./Divider-opnLhPuq.js";import"./Alert-Cxym7-Pq.js";import"./LinearProgress-Cfw17EUD.js";import"./Spinner-xAqEJSl-.js";import"./Dialog-Brvs81gM.js";import"./MapToggleButtonPresentational-Bkby2JVx.js";import"./Remove-C9EWMhX9.js";import"./TextField-DHHt2Dvp.js";import"./Switch-aGo7kiQe.js";import"./DatePicker-Dt0l70gu.js";import"./Paper-B7QMBDVQ.js";import"./ErrorFallback-CbYt6AMR.js";import"./ErrorFallbackText-CnPzZMoL.js";import"./ErrorFallbackWrapper-BvueGW-I.js";import"./Brand-CHgKb0un.js";import"./Edit-B_-WGaN2.js";const _t={title:"Surfaces/AppBar",component:O,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},...L("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4"),layout:"fullscreen"},decorators:[T=>t(k,{sx:{width:"100%"},children:t(T,{})})],argTypes:{appName:{control:"text",description:"Optional application name displayed alongside the Telicent brand."},version:{control:"text",description:"Optional version label displayed next to the brand area."},href:{control:"text",description:"Optional URL that turns the centered brand area into a link."},target:{control:"text",description:"Target browsing context for the brand link."},beta:{control:"boolean",description:"If true, displays a beta badge next to the branding."},isElevated:{control:"boolean",description:"If true, applies elevation to the AppBar."},disableBrand:{control:"boolean",description:"If true, hides the Telicent branding elements."},position:{control:"select",options:["fixed","absolute","sticky","static","relative"],description:"Controls the CSS position of the AppBar."}}},U=p(D,{children:[t(n,{title:"Username",content:"John Doe"}),t(n,{title:"Email",content:"JohnDoe@company.co.uk"}),t(n,{title:"Deployed Organisation",content:"Company UK"}),t(E,{sx:{py:1}}),t(k,{sx:{pt:2},children:t(y,{onClick:()=>console.log("Sign Out clicked"),variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),"data-testid":"signOut",children:"Sign Out"})})]}),e={args:{}},o={args:{appName:"Catalogue",endChild:t(y,{variant:"primary",startIcon:t("i",{className:"fa-solid fa-arrow-right-from-bracket"}),children:"Sign Out"})}},r={args:{disableBrand:!0,startChild:t(S,{apps:I}),endChild:U}},a={args:{appName:"Catalogue",href:"https://telicent.io",target:"_blank"}},i={args:{appName:"Catalogue",isElevated:!0,startChild:t(S,{apps:I}),endChild:p(N,{direction:"row",alignItems:"center",spacing:.5,children:[p(P,{children:[t(s,{label:"Version",value:"1.16.0"}),t(s,{label:"Build",value:"a1b2c3d"}),t(s,{label:"Environment",value:"production"})]}),U]})},parameters:{docs:{description:{story:"The full Telicent app-header composition: `AppSwitch` on the left, `AppInfo` and `UserProfile` on the right. This is the shape every Telicent app should assemble — the DS provides the pieces, apps compose them in the AppBar slots. `AppInfo` sits next to `UserProfile` so version/build/environment metadata is one click away without cluttering the profile dropdown."}}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Vt=["Default","WithSignOutButton","WithNoBrand","ClickableBrand","StandardHeader"];export{a as ClickableBrand,e as Default,i as StandardHeader,r as WithNoBrand,o as WithSignOutButton,Vt as __namedExportsOrder,_t as default};
