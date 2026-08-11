import{a as o,j as t,F as x}from"./iframe-CdPu0Nji.js";import{a as g,B as m}from"./DropdownButton-DLh5IwXH.js";import{a}from"./UserIcon-zZuyRK2V.js";import{T as n}from"./Text-B4VJCCMs.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-_uNjXpz2.js";import"./useThemeProps-C31Hu9eR.js";import"./useTheme-CpTvU32l.js";import"./AdapterDayjs--a3WegzB.js";import"./generateUtilityClass-BkGLkL42.js";import"./styled-DvAHf-ii.js";import"./Typography-jEpu3_H5.js";import"./generateUtilityClasses-1MNiGsyU.js";import"./Modal-H2NuyrfR.js";import"./utils-CZMvQYd-.js";import"./TransitionGroupContext-p-MdgXa8.js";import"./index-CjSg-LrS.js";import"./resolveComponentProps-BTqXFKqs.js";import"./TextField-0yYRCi_S.js";import"./useFormControl-DILhRqjH.js";import"./Paper-Dd_SbCQz.js";import"./createSvgIcon-BsGzgqT2.js";import"./createStyled-CdQc-wzQ.js";import"./IconButton-UIxH2BuM.js";import"./ButtonBase-CwLYgF7v.js";import"./DialogContent-B145AqQj.js";import"./Button-CYBCMGv1.js";import"./Chip-DsSTZC0S.js";import"./DateTimePicker-Buv1kwF8.js";import"./Divider-BvdIoCl6.js";import"./Chip-qDUxoCCM.js";import"./Divider-CQaGt93_.js";import"./Box-DT8xOrnE.js";import"./TreeView-DRYBS-Xt.js";import"./Stack-DaLGDZVV.js";import"./styled-CmJFQDl3.js";import"./Close-EDI9r0DC.js";import"./LinearProgress-Dz1fhiUi.js";import"./Spinner-CTU6TpBn.js";import"./Dialog-DJtg1d2n.js";import"./MapToggleButtonPresentational-Ca86nxH9.js";import"./Remove-CVv2NlLk.js";import"./TextField-CrDyAMED.js";import"./Switch-D6FP3j0O.js";import"./DatePicker-1LYmoJIP.js";import"./Box--WBeT2uu.js";import"./Container-A4vphWw1.js";import"./LinkButton-DdkrapHh.js";import"./Paper-yLhdaCIP.js";import"./ErrorFallback-De_3OhnE.js";import"./ErrorFallbackText-CIVzvqun.js";import"./ErrorFallbackWrapper-BCfSQJea.js";import"./Brand-BhO6VgG7.js";import"./constants-8XY3AVHe.js";import"./Edit-CU0UvQ5m.js";const Bt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const bt=["Basic","WithActions"];export{i as Basic,r as WithActions,bt as __namedExportsOrder,Bt as default};
