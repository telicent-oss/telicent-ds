import{a as o,j as t,F as x}from"./iframe-DTfHyu5W.js";import{a as g,B as m}from"./DropdownButton-DUCyq73_.js";import{F as a}from"./FlexBox-Dx9ngdP2.js";import{T as n}from"./Text-CbmCHta1.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DPsHQdqc.js";import"./SvgIcon-ByJD-XbM.js";import"./generateUtilityClass-Ba3X23cx.js";import"./styled-tbRfHNfe.js";import"./generateUtilityClasses-9N7BeDkA.js";import"./useTheme-CurHEFdS.js";import"./Box-6g8k1lEa.js";import"./Box-iMTEkAxo.js";import"./Container-CFRLiDzI.js";import"./styled-V-O3-yLC.js";import"./createStyled-28Jskctr.js";import"./useThemeProps-DhRvrWEK.js";import"./Stack-B5wnKsZi.js";import"./Typography-DEVUDcjz.js";import"./Paper-7aLAfVaY.js";import"./useThemeProps-BMiY-Nz3.js";import"./AdapterDayjs-DfVF7Ju1.js";import"./Modal-CuQBat2_.js";import"./utils-hc9ieIbF.js";import"./TransitionGroupContext-pH2rcq8m.js";import"./index-BojeORES.js";import"./resolveComponentProps-kTxaYEkO.js";import"./Popover-CiC5O2RE.js";import"./TextField-Bq5brCt8.js";import"./useFormControl-CfqMxs37.js";import"./createSvgIcon-eW_NYhFU.js";import"./IconButton-B22dA0Mh.js";import"./ButtonBase-B4JUzgMd.js";import"./DialogContent-S6vhYFVZ.js";import"./Button-Dae9G8Ev.js";import"./Chip-C9IKZPuh.js";import"./DateTimePicker-CXsTfPVe.js";import"./Divider-B8-GGABN.js";import"./AppInfoRow-DM5JDCIg.js";import"./Chip-Ce6ftWrB.js";import"./Divider-DQcY7mpQ.js";import"./TreeView-CKyPmjfa.js";import"./Alert-DZul0Vde.js";import"./LinearProgress-HKvtzsEf.js";import"./Spinner-Dx14enoI.js";import"./Dialog-CGZIbGHz.js";import"./MapToggleButtonPresentational-jSE1x0h9.js";import"./Remove-NJ9P2pvD.js";import"./LinkButton-CUXW4PH5.js";import"./TextField-C0bNNYYR.js";import"./Switch-CyPgFvnQ.js";import"./DatePicker-YZ26x2F9.js";import"./Paper-BXaJm_Li.js";import"./ErrorFallback-UX7BvmTl.js";import"./ErrorFallbackText-CnIufqnP.js";import"./ErrorFallbackWrapper-B3axQyNr.js";import"./Brand-e-EQElnn.js";import"./constants-BAHDwWKH.js";import"./Edit-CU6kEAEu.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
