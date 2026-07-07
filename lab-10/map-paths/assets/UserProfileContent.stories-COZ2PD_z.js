import{a as o,j as e,F as x}from"./iframe-CYKKeyXc.js";import{a as g,B as m}from"./DropdownButton-DXvUw18o.js";import{a}from"./UserIcon-BEDwv6nP.js";import{T as n}from"./Text-Bt17FoZM.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-nKkQeJ84.js";import"./useThemeProps-CSMSYrHE.js";import"./useTheme-Clo7ftRJ.js";import"./AdapterDayjs-LnHs1126.js";import"./styled-DYVy4BQZ.js";import"./Typography-BqCL54fa.js";import"./generateUtilityClasses-BddLF0YE.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./index-BOq1Y2DU.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./Paper-mUQjj_jn.js";import"./createSvgIcon-BCA_qiKo.js";import"./createStyled-BrwGJ6p7.js";import"./IconButton-CwWFg1EF.js";import"./ButtonBase-BY4v5x24.js";import"./DialogContent-DBkrQtLX.js";import"./Button-BK6a-J9_.js";import"./Chip-BigX0SwN.js";import"./DateTimePicker-CUaoXgcA.js";import"./Divider-CZT4G2av.js";import"./Chip-D-ivFaV7.js";import"./Divider-BtKIWAtl.js";import"./Box-B5Idbuu2.js";import"./TreeView-CioP4QeT.js";import"./Stack-BjITiBsD.js";import"./styled-C485N8nh.js";import"./LinearProgress--AT7LVoA.js";import"./Spinner-CEVLaIRL.js";import"./Dialog-C76QJbsQ.js";import"./MapToggleButtonPresentational-L_xNR8KH.js";import"./Remove-B42JroOj.js";import"./TextField-nYr1dY0Q.js";import"./Switch-Bt5eTPpW.js";import"./DatePicker-HFvHu9pg.js";import"./Container-B4YkWBlj.js";import"./LinkButton-BI7eyHxU.js";import"./Paper-grcJF4O1.js";import"./ErrorFallback-CikF8nPt.js";import"./ErrorFallbackText-BKonECwZ.js";import"./ErrorFallbackWrapper-DAHz8e70.js";import"./Brand-CfZWDtPV.js";import"./constants-C9fBqqHE.js";import"./Edit-BwdZQDqg.js";const ue={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(t=>o(a,{children:[e(n,{children:e("b",{children:t.heading})}),e(n,{children:t.value})]},t.heading))}},r={args:{children:o(x,{children:[u.map(t=>o(a,{children:[e(n,{children:e("b",{children:t.heading})}),e(n,{children:t.value})]},t.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(m,{variant:"secondary",disableElevation:!0,children:"Action"}),e(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
