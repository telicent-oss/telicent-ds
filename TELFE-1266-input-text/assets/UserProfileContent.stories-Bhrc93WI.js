import{j as e,a as r,F as x}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{U as g}from"./UserProfileContent-BtPWIMCF.js";import{F as a}from"./FlexBox-BEZBdzr_.js";import{T as o}from"./Text-DLq4GXsM.js";import{B as s}from"./Button-CP702T-k.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./styled-DzpWvPfW.js";import"./defaultTheme-BpkXhfeA.js";import"./styled-Ck8GJYy8.js";import"./useThemeProps--JElsblH.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./useTheme-D_QPa1U6.js";import"./Typography-D7Rc9HSx.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./ButtonBase-BKsdIIYL.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-BRXLRAOR.js";const R={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"outlined",color:"primary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        {items.map(item => <FlexBox key={item.heading}>
            <Text>
              <b>{item.heading}</b>
            </Text>
            <Text>{item.value}</Text>
          </FlexBox>)}
        <FlexBox direction="row" columnGap={2} justifyContent="end">
          <Button variant="outlined" color="primary" disableElevation>
            Action
          </Button>
          <Button disableElevation>Action</Button>
        </FlexBox>
      </>
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const W=["Basic","WithActions"];export{n as Basic,i as WithActions,W as __namedExportsOrder,R as default};
