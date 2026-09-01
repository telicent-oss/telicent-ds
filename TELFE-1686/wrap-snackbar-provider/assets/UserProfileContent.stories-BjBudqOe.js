import{a as o,j as t,F as x}from"./iframe-BXY8qhtT.js";import{a as g,B as m}from"./DropdownButton-CMCln0pB.js";import{F as a}from"./FlexBox-H-sCRMiR.js";import{T as n}from"./Text-BYojZcvc.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Bz3heM6b.js";import"./SvgIcon-Ny0aRQHI.js";import"./generateUtilityClass-wYVai49J.js";import"./styled-H7Fdw8PF.js";import"./generateUtilityClasses-BA7K2SXw.js";import"./useTheme-jpEbcY17.js";import"./Box-BKFfSYU7.js";import"./Box-DmdH8_CM.js";import"./Container-u3BuaPcs.js";import"./styled-bWS-fPzl.js";import"./createStyled-C5U3_gNR.js";import"./useThemeProps-lfivHL7Q.js";import"./Stack-mn3XG4cs.js";import"./Typography-D_A1aX7c.js";import"./Paper-Dxa9EUvO.js";import"./useThemeProps-DH9W_0R3.js";import"./AdapterDayjs-5XgIQcgH.js";import"./Modal-ipxBrzNN.js";import"./utils-CE69r2C4.js";import"./TransitionGroupContext-CryLiEHc.js";import"./index-WLUfl6fz.js";import"./resolveComponentProps-mqZrAnvV.js";import"./Popover-BVxxj8q6.js";import"./TextField-BpDVwlCN.js";import"./useFormControl-E--nQZxq.js";import"./createSvgIcon-DjsA-uZ8.js";import"./IconButton-B-B6ziHV.js";import"./ButtonBase-BadIhpsX.js";import"./DialogContent-CyDUkUFC.js";import"./Button-BGy2rwjE.js";import"./Chip-B3_yOCCL.js";import"./DateTimePicker-B7sYKJNb.js";import"./Divider-B2-WeumM.js";import"./AppInfoRow-ZAGiEJOr.js";import"./Chip-C5kaT8Lc.js";import"./Divider-BZWBYD5d.js";import"./TreeView-lJGuyWyx.js";import"./Alert-CbPLOKCy.js";import"./LinearProgress-BRbnBQfK.js";import"./Spinner-DiRwWvdE.js";import"./Dialog-Djinkl1M.js";import"./MapToggleButtonPresentational-BPCec7gk.js";import"./Remove-FN9daPXK.js";import"./LinkButton-CCn1fa7f.js";import"./TextField-BiPbqIQb.js";import"./Switch-CbYpuBJM.js";import"./DatePicker-B42bozBr.js";import"./Paper-BJ8D2bs1.js";import"./ErrorFallback-CXf1lrVR.js";import"./ErrorFallbackText-BbxsiRdP.js";import"./ErrorFallbackWrapper-F_6HkMfr.js";import"./Brand-BHfEveUR.js";import"./constants-BgFE9pGk.js";import"./Edit-0n8mwjN-.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
