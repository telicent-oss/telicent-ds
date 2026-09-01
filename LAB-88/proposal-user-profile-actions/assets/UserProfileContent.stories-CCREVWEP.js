import{a as o,j as t,F as T}from"./iframe-CXSK8Dk-.js";import{a as f,B as m}from"./DropdownButton-vWLux3xG.js";import{F as s}from"./FlexBox-aDkc32O8.js";import{T as i}from"./Text-BMxl2SwS.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DfXchAa_.js";import"./SvgIcon-CwlR4LV8.js";import"./generateUtilityClass-Fzt3JCAB.js";import"./styled-DtvgUq6a.js";import"./generateUtilityClasses-Bj4Ss80x.js";import"./useTheme-BKykcnyZ.js";import"./Box-PoQ7y_F9.js";import"./Box-CN1tfwJW.js";import"./Container-BYH1eQOO.js";import"./styled-hp6s30PY.js";import"./createStyled-jo3qW0uY.js";import"./useThemeProps-CkYUtoJ-.js";import"./Stack-DTT6iyaf.js";import"./Typography-_WXcuVAU.js";import"./Paper-CCY0nncl.js";import"./useThemeProps-BBCRbUjf.js";import"./AdapterDayjs-DBeZyuIU.js";import"./Modal-C6fXv4Zz.js";import"./utils-BP8_ys-M.js";import"./TransitionGroupContext-CIYUs1Uk.js";import"./index-BH3lY3kJ.js";import"./resolveComponentProps-B-UI_umu.js";import"./Popover-Dbdn6-R4.js";import"./TextField-CsymqzzJ.js";import"./useFormControl-8AnV7jcl.js";import"./createSvgIcon-B4OWaiSw.js";import"./IconButton-CH8TE1o1.js";import"./ButtonBase-CyMDbepC.js";import"./DialogContent-CPmdNXcl.js";import"./Button-OtEdq2P_.js";import"./Chip-DpWSlKGB.js";import"./DateTimePicker-CuvapaAa.js";import"./Divider-Bv_OvFaD.js";import"./AppInfoRow-BqYxjxEK.js";import"./Chip-CP3VY8ZP.js";import"./Divider-B42Uh_Bj.js";import"./TreeView-DpdtxLcB.js";import"./Alert-B_Svt6kM.js";import"./LinearProgress-BzA3k14P.js";import"./Spinner-ClMpHh1d.js";import"./Dialog-B-CBTz5q.js";import"./MapToggleButtonPresentational-CEEmCWRw.js";import"./Remove-DsJJL5XN.js";import"./LinkButton-C4EtbQ1R.js";import"./TextField-C1RKnAyX.js";import"./Switch-Ck6dNew2.js";import"./DatePicker-63Sx7fEQ.js";import"./Paper-BtVQmXu1.js";import"./ErrorFallback-CyHZraUv.js";import"./ErrorFallbackText-CXNMYw6_.js";import"./ErrorFallbackWrapper-C9ggY6qV.js";import"./Brand-Bh3aijrf.js";import"./constants-CY3-_VsX.js";import"./Edit-6FH8M8KH.js";const Ct={title:"Data display/User profile/User profile content",component:f,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},d=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:d.slice(0,3).map(e=>o(s,{children:[t(i,{children:t("b",{children:e.heading})}),t(i,{children:e.value})]},e.heading))}},a={args:{children:o(T,{children:[d.map(e=>o(s,{children:[t(i,{children:t("b",{children:e.heading})}),t(i,{children:e.value})]},e.heading)),o(s,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}},r={args:{children:d.slice(0,3).map(e=>o(s,{children:[t(i,{children:t("b",{children:e.heading})}),t(i,{children:e.value})]},e.heading)),actions:t(m,{variant:"primary",children:"Sign Out"})}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
        {items.map(item => <FlexBox key={item.heading}>
            <Text>
              <b>{item.heading}</b>
            </Text>
            <Text>{item.value}</Text>
          </FlexBox>)}
        <FlexBox direction="row" columnGap={2} justifyContent="end">
          <Button variant="secondary" disableElevation>
            Action
          </Button>
          <Button disableElevation>Action</Button>
        </FlexBox>
      </>
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,v,b,B,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>),
    actions: <Button variant="primary">Sign Out</Button>
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"PROPOSAL. The same actions, through the `actions` slot instead of `children`.\n\nCompare against `WithActions` above, which is what the component allows\ntoday: no divider, right-aligned, actions indistinguishable from content.\nThis story is what graph, search, catalog and telicent-admin each build by\nhand around the component - divider, `pt: 1`, full-width button - and what\nthe slot renders for them instead.",...(y=(B=r.parameters)==null?void 0:B.docs)==null?void 0:y.description}}};const Ot=["Basic","WithActions","ProposedActionsSlot"];export{n as Basic,r as ProposedActionsSlot,a as WithActions,Ot as __namedExportsOrder,Ct as default};
