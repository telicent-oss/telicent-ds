import{a as o,j as t,F as x}from"./iframe-C9OzQXg_.js";import{a as g,B as m}from"./DropdownButton-C4xttH7Y.js";import{F as a}from"./FlexBox-BhSKdKN3.js";import{T as n}from"./Text-DJBgtXcr.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B0X7YR88.js";import"./SvgIcon-B9jV-vVV.js";import"./generateUtilityClass-nmhkov4J.js";import"./styled-B4qHs92x.js";import"./generateUtilityClasses-B-IRdbhl.js";import"./useTheme-BoFB3y9E.js";import"./Box-DVA2EOpM.js";import"./Box-B6_welVH.js";import"./Container-Dd_avWFZ.js";import"./styled-tQz00g93.js";import"./createStyled-aUbpq_KF.js";import"./useThemeProps-C59Agyjh.js";import"./Stack-CVFIDsG6.js";import"./Typography-R7t904JM.js";import"./Paper-K-rVIpDQ.js";import"./useThemeProps-D6gL08vt.js";import"./AdapterDayjs-zE6fXVsl.js";import"./Modal-DeCTlAE4.js";import"./utils-5nTvwYBN.js";import"./TransitionGroupContext-B0kHEjtr.js";import"./index-aDITQ5Y9.js";import"./resolveComponentProps-DLoKn3XJ.js";import"./Popover-oHEbtlOD.js";import"./TextField-C2OAhByY.js";import"./useFormControl-DULJhOwb.js";import"./createSvgIcon-CNR6JU_j.js";import"./IconButton-D27QAIgA.js";import"./ButtonBase-D7zqtzaV.js";import"./DialogContent-Bqyrw-Dw.js";import"./Button-C_IckAB6.js";import"./Chip-2NNPtnVz.js";import"./DateTimePicker-CsFwsMPz.js";import"./Divider-o04g-Szi.js";import"./AppInfoRow-zLITu-6A.js";import"./Chip-By1rLTon.js";import"./Divider-DaR7zBo2.js";import"./TreeView-CXCZxfYx.js";import"./Alert-BFVxOiq7.js";import"./LinearProgress-DX9Q_02A.js";import"./Spinner-DtzXi4x2.js";import"./Dialog-D61FGst9.js";import"./MapToggleButtonPresentational-C417ZVG5.js";import"./Remove-DBRMIEBC.js";import"./LinkButton-BDmrpSVS.js";import"./TextField-DfFTX4IJ.js";import"./Switch-CFkCea9A.js";import"./DatePicker-PqR1hban.js";import"./Paper-BC8jjBQR.js";import"./ErrorFallback-4ND5IQwj.js";import"./ErrorFallbackText-DxDVeSdA.js";import"./ErrorFallbackWrapper-BnyZ3rrn.js";import"./Brand-CobJZEjG.js";import"./constants-BRNzpaAh.js";import"./Edit-DhYGh0Lv.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,c,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Ft=["Basic","WithActions"];export{i as Basic,r as WithActions,Ft as __namedExportsOrder,Tt as default};
