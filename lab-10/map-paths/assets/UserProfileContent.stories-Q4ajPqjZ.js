import{a as o,j as t,F as x}from"./iframe-DxdAL3Su.js";import{a as g,B as m}from"./DropdownButton-C8SH5NFI.js";import{F as a}from"./FlexBox-DklXAHfg.js";import{T as n}from"./Text-IVDE9YTn.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DK1g9Y7I.js";import"./SvgIcon-BrZegZvx.js";import"./generateUtilityClass-CCWNKdwZ.js";import"./styled-BMgdzSE0.js";import"./generateUtilityClasses-BFT-1hNN.js";import"./useTheme-BiScoYdH.js";import"./Box-CUC1ye6D.js";import"./Box-C6ZKPQQM.js";import"./Container-CwbmEwEH.js";import"./styled-B5ypChp-.js";import"./createStyled-CAvy4QYQ.js";import"./useThemeProps-DjL2vo9e.js";import"./Stack-CTka0ZNx.js";import"./Typography-Dfep4tta.js";import"./Paper-Bo-zMr0f.js";import"./useThemeProps-DjyANJso.js";import"./AdapterDayjs-B8sl8BqR.js";import"./Modal-C-eco959.js";import"./utils-DdbwduB_.js";import"./TransitionGroupContext-CNW6Ngzs.js";import"./index-DZlZqtiH.js";import"./resolveComponentProps-SThDNSlW.js";import"./Popover-Yaup4hQ9.js";import"./TextField-C9zP0G1w.js";import"./useFormControl-BEwXsRPP.js";import"./createSvgIcon-_Ighe8Sl.js";import"./IconButton-BGqyBuSr.js";import"./ButtonBase-B08XEsVO.js";import"./DialogContent-B-yTN8YW.js";import"./Button-DzELj4X1.js";import"./Chip-HkIy4m5K.js";import"./DateTimePicker-CkhG3iI0.js";import"./Divider-MdwAVt74.js";import"./AppInfoRow-BzJrFUZL.js";import"./Chip-D3g4bIDP.js";import"./Divider-DkEzbiIJ.js";import"./TreeView-CwyoSr6y.js";import"./Alert-DFubWPaF.js";import"./LinearProgress-CDxEQywf.js";import"./Spinner-Br_wUKXY.js";import"./Dialog-B3_uQnpg.js";import"./MapToggleButtonPresentational-O9HFcMS3.js";import"./Remove-O3wbXYYW.js";import"./LinkButton-BJD9gsF1.js";import"./TextField-DpvM4Ypx.js";import"./Switch-CVrnh2hT.js";import"./DatePicker-rXBKxIM_.js";import"./Paper-DRDmcqGw.js";import"./ErrorFallback-CE6iQ_Fj.js";import"./ErrorFallbackText-BBZheYlx.js";import"./ErrorFallbackWrapper-DAGibDfQ.js";import"./Brand-BP7bvT03.js";import"./constants-BEJ6QLp2.js";import"./Edit-CwACQbY_.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
