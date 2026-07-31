import{a as o,j as t,F as x}from"./iframe-DoslK4-Y.js";import{a as g,B as m}from"./DropdownButton-CpLqd6lJ.js";import{a}from"./UserIcon-DnXd5C1m.js";import{T as n}from"./Text-Cij1s-38.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BNlVDt2d.js";import"./useThemeProps-DNll4FD1.js";import"./useTheme-DzicPpM7.js";import"./AdapterDayjs-UbNq20Y4.js";import"./generateUtilityClass-JvD44KlO.js";import"./styled-B63D9YfN.js";import"./Typography-D2p4r1VP.js";import"./generateUtilityClasses-DKrtj2o0.js";import"./Modal-rS1eOuqw.js";import"./utils-Dvm8JGhi.js";import"./TransitionGroupContext-C-tiKQba.js";import"./index-CkH7vSdv.js";import"./resolveComponentProps-COOebCVT.js";import"./TextField-C2yuJQKq.js";import"./useFormControl-DRekPhCN.js";import"./Paper-1pU2OFLe.js";import"./createSvgIcon-kyaEsooS.js";import"./createStyled-C2aqfojm.js";import"./IconButton-poqVLHkM.js";import"./ButtonBase-C5TrPrFI.js";import"./DialogContent-DhrHlbA4.js";import"./Button-C-Z1g5oZ.js";import"./Chip-D3gK25ET.js";import"./DateTimePicker-BXudKtkl.js";import"./Divider-JBjBhjWn.js";import"./Chip-DNg9fUiC.js";import"./Divider-DPs7zMxh.js";import"./Box-D2_lAdOb.js";import"./TreeView-y43LHmco.js";import"./Stack-UL0xvK-j.js";import"./styled-BvUWTwGk.js";import"./Close-MejyRCXq.js";import"./LinearProgress-zmCoNGUe.js";import"./Spinner-DokMSZNQ.js";import"./Dialog-Zk72S_-8.js";import"./MapToggleButtonPresentational-Dqn1nl-c.js";import"./Remove-BlL-kZFd.js";import"./TextField-BX9-cCN-.js";import"./Switch-DAnjy2Z2.js";import"./DatePicker-yxE24Q2d.js";import"./Box-DAPH_7_v.js";import"./Container-PDo0r7TO.js";import"./LinkButton-OGrJf87H.js";import"./Paper-CuXqVMKU.js";import"./ErrorFallback-BxLGSuCI.js";import"./ErrorFallbackText-DMYJZIcj.js";import"./ErrorFallbackWrapper-CoUUqruh.js";import"./Brand-BHjzrKzK.js";import"./constants-4rCzzNn2.js";import"./Edit-BUNMs3rM.js";const Bt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
