import{a as o,j as t,F as x}from"./iframe-BWbl0n-m.js";import{a as g,B as m}from"./DropdownButton-Mnj2kdS-.js";import{F as a}from"./FlexBox-D_1rxin-.js";import{T as n}from"./Text-BpKGjeEj.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DyG3eNif.js";import"./SvgIcon-Bh4gxdfA.js";import"./generateUtilityClass-B_owxAgJ.js";import"./styled-DcXC8MdH.js";import"./generateUtilityClasses-TDbmritb.js";import"./useTheme-DmjRKZlb.js";import"./Box-BWzji7VQ.js";import"./Box-B9rg1may.js";import"./Container-7PTy0-Eg.js";import"./styled-B4qHdp8Z.js";import"./createStyled-BUAz3FAp.js";import"./useThemeProps-B16WFuAG.js";import"./Stack-CtzM8nP1.js";import"./Typography-CipE5iZZ.js";import"./Paper-Ds_iTmZx.js";import"./useThemeProps-6iXLcsdV.js";import"./AdapterDayjs-4bvMsGl4.js";import"./Modal-BI24WZXX.js";import"./utils-Cj96EfuL.js";import"./TransitionGroupContext-BO9wJbcY.js";import"./index-D4MyRL19.js";import"./resolveComponentProps-DiK6_J4b.js";import"./Popover-BrYdNkwn.js";import"./TextField-ZNJA485N.js";import"./useFormControl-QicCnhBY.js";import"./createSvgIcon-vKc29NSt.js";import"./IconButton-DGKGWhyR.js";import"./ButtonBase-BKCC3Yfm.js";import"./DialogContent-CXuQtc83.js";import"./Button-C3fDFpoh.js";import"./Chip-BIc5mAwZ.js";import"./DateTimePicker-BUJ_NzTy.js";import"./Divider-BFWv2Sw5.js";import"./AppInfoRow--FDyu7yq.js";import"./Chip-C4CcYR6m.js";import"./Divider-SV-WqojL.js";import"./TreeView-znzljYnu.js";import"./Alert-DWppgABV.js";import"./LinearProgress-Cl656I14.js";import"./Spinner-B46se6MY.js";import"./Dialog-DeNq9WSz.js";import"./MapToggleButtonPresentational-BeOeGCzD.js";import"./Remove-KmRfI7Zo.js";import"./LinkButton-YSkiBdlL.js";import"./TextField-BsHv-Zfc.js";import"./Switch-B1CDaN66.js";import"./DatePicker-Bq3_9IkT.js";import"./Paper-Cai4wMuA.js";import"./ErrorFallback-B0s2UmXa.js";import"./ErrorFallbackText-DO82QlLj.js";import"./ErrorFallbackWrapper-Cs11x7fa.js";import"./Brand-CGpa3lI_.js";import"./constants-Bhc0tOON.js";import"./Edit-WmDTDE_G.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
