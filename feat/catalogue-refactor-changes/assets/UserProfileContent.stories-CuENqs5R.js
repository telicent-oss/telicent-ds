import{a as o,j as e,F as x}from"./iframe-CEWiRzw6.js";import{a as g,B as m}from"./DropdownButton-D5zAe562.js";import{a}from"./UserIcon-72JnTjY2.js";import{T as n}from"./Text-Dp4zv4uS.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BifiOOpz.js";import"./useThemeProps-BfTjzlrr.js";import"./useTheme-BvI3wAVy.js";import"./AdapterDayjs-DKU0gh2u.js";import"./styled-BMacbev-.js";import"./Typography-Ct9CX6dI.js";import"./generateUtilityClasses-Cw_0ODav.js";import"./Modal-BQhHhnX1.js";import"./utils-l9xoT8cx.js";import"./TransitionGroupContext-BMjDgQGH.js";import"./index-BV2l58Ww.js";import"./TextField-yl0ILouP.js";import"./useFormControl-CEp6dWZX.js";import"./Paper-Dpz_fFsE.js";import"./createSvgIcon-BAc5XkB5.js";import"./createStyled-BmFIYWCc.js";import"./IconButton-DX3o1mfc.js";import"./ButtonBase-DBR6Y10-.js";import"./DialogContent-BO2JCZn7.js";import"./Button-C95QZql4.js";import"./Chip-BIzlRnt1.js";import"./DateTimePicker-CLBYXH6l.js";import"./Divider-C3q8yTWy.js";import"./Chip-lJpclgZf.js";import"./Divider-CGtdrDdv.js";import"./Box-B9TS0c-T.js";import"./TreeView-C7kXjfir.js";import"./Stack-eaccBTma.js";import"./styled-BBOfX3DR.js";import"./LinearProgress-C909keVa.js";import"./Spinner-D6JI1MNv.js";import"./Dialog-D5TmvNsl.js";import"./MapToggleButtonPresentational-DcEVZk3p.js";import"./Remove-DEwthPW7.js";import"./TextField-BT8Xt3Sl.js";import"./Switch-28k243sq.js";import"./DatePicker-GkMLM4rl.js";import"./Container-DTFPg4no.js";import"./LinkButton-BQLavjxu.js";import"./Paper-DLWLBnlh.js";import"./ErrorFallback-CGk6Dun0.js";import"./ErrorFallbackText-DHFTb4mH.js";import"./ErrorFallbackWrapper-CTHNPdE-.js";import"./Brand-DHhfrOsC.js";import"./constants-DWn7Y7Mg.js";import"./Edit-BiEqD8O-.js";const ue={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(t=>o(a,{children:[e(n,{children:e("b",{children:t.heading})}),e(n,{children:t.value})]},t.heading))}},r={args:{children:o(x,{children:[u.map(t=>o(a,{children:[e(n,{children:e("b",{children:t.heading})}),e(n,{children:t.value})]},t.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(m,{variant:"secondary",disableElevation:!0,children:"Action"}),e(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const xe=["Basic","WithActions"];export{i as Basic,r as WithActions,xe as __namedExportsOrder,ue as default};
