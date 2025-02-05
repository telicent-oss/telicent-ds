import{j as e,a as r,F as x}from"./DefaultPropsProvider-DW_T1ksU.js";import{U as g}from"./UserProfileContent-D76CJzOi.js";import{F as o}from"./FlexBox-BEh4lK-b.js";import{T as a}from"./Text-DRT_rUFN.js";import{B as s}from"./Button-Dqvxy-zZ.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./styled-CO2r5wNb.js";import"./styled-BGngFW9-.js";import"./useThemeProps-Crm_2MCc.js";import"./useTheme-B6WcV9Bx.js";import"./generateUtilityClasses-CBYfpbff.js";import"./PrimaryButton-BhFuj2T-.js";import"./Button-DUgHbXnN.js";import"./ButtonBase-k7dNn2-f.js";import"./TransitionGroupContext-DmssZhy-.js";import"./useTheme-CDFymf_6.js";import"./Box-BBaP0q4U.js";const O={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:n=>e("div",{style:{width:300},children:e(n,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],t={args:{children:u.slice(0,3).map(n=>r(o,{children:[e(a,{children:e("b",{children:n.heading})}),e(a,{children:n.value})]},n.heading))}},i={args:{children:r(x,{children:[u.map(n=>r(o,{children:[e(a,{children:e("b",{children:n.heading})}),e(a,{children:n.value})]},n.heading)),r(o,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const R=["Basic","WithActions"];export{t as Basic,i as WithActions,R as __namedExportsOrder,O as default};
