import{j as e,a as r,F as x}from"./DefaultPropsProvider-ZTfV1Zta.js";import{U as g}from"./UserProfileContent-B92njon_.js";import{F as o}from"./FlexBox-DADmAnZF.js";import{T as a}from"./Text-CGNagbCi.js";import{B as s}from"./Button-D3scS8V2.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";import"./styled-jMWuTdIG.js";import"./styled-NI2V6uj_.js";import"./useThemeProps-BdYmkKoE.js";import"./useTheme-BusmB1QR.js";import"./generateUtilityClasses-DD2dCBy1.js";import"./Button-DC-CYhQc.js";import"./ButtonBase-B36byFIM.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./useTheme-DUKUC1WO.js";import"./Box-DBuGxpzg.js";const N={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:n=>e("div",{style:{width:300},children:e(n,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],t={args:{children:u.slice(0,3).map(n=>r(o,{children:[e(a,{children:e("b",{children:n.heading})}),e(a,{children:n.value})]},n.heading))}},i={args:{children:r(x,{children:[u.map(n=>r(o,{children:[e(a,{children:e("b",{children:n.heading})}),e(a,{children:n.value})]},n.heading)),r(o,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const O=["Basic","WithActions"];export{t as Basic,i as WithActions,O as __namedExportsOrder,N as default};
