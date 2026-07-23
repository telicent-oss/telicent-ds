import{a as o,j as t,F as x}from"./iframe-D9lU07Zf.js";import{a as g,B as m}from"./DropdownButton-DzsOMP1u.js";import{a}from"./UserIcon-r0zPa3RZ.js";import{T as n}from"./Text-HEEd4Tr4.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BVMIZTQV.js";import"./useThemeProps-BAvRSqZ0.js";import"./useTheme-SybXv74r.js";import"./AdapterDayjs-BjHxbXQG.js";import"./generateUtilityClass-D7q2yxGy.js";import"./styled-DoKDlkZ_.js";import"./Typography-C6RHNrrz.js";import"./generateUtilityClasses-DlijklOR.js";import"./Modal-8YIgZsH9.js";import"./utils-CoFbKNqr.js";import"./TransitionGroupContext-jFit0_oH.js";import"./index-BBdfoeT5.js";import"./resolveComponentProps-E2VM1uz1.js";import"./TextField-CJ0-8TEN.js";import"./useFormControl-TA3T3Av9.js";import"./Paper-Cej6lYK6.js";import"./createSvgIcon-DFI5qBHU.js";import"./createStyled-BPBpdXBm.js";import"./IconButton-tmuZo6L6.js";import"./ButtonBase-DSNICrLd.js";import"./DialogContent-BS32uX7_.js";import"./Button-DhyX7BiZ.js";import"./Chip-DoVi98mw.js";import"./DateTimePicker-CMScypHs.js";import"./Divider-AwwvZxp0.js";import"./Chip-luU8AZ1L.js";import"./Divider-BrsXIlBD.js";import"./Box-CSybQHSa.js";import"./TreeView-CJsNe1p9.js";import"./Stack-BnA3evNe.js";import"./styled-DiYYYjn2.js";import"./Close-C_etf32Q.js";import"./LinearProgress-Bxn_kvK2.js";import"./Spinner-DfGKdH87.js";import"./Dialog-Cw8kg19x.js";import"./MapToggleButtonPresentational-BbUeRSZp.js";import"./Remove-Be9W_CKm.js";import"./TextField-DFYGxZvh.js";import"./Switch-CoEGI3zX.js";import"./DatePicker-KE2OE2TB.js";import"./Box-BJrD4UE_.js";import"./Container-BcSzuyYl.js";import"./LinkButton-XbvtPO8L.js";import"./Paper-BwpRoinM.js";import"./ErrorFallback-BXGLlVLh.js";import"./ErrorFallbackText-C1gmEt6Z.js";import"./ErrorFallbackWrapper-DnVofVwB.js";import"./Brand-CKNi3Y53.js";import"./constants-mTaQgHmf.js";import"./Edit-CFpkLirJ.js";const Bt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
