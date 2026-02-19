import{a as r,j as e,F as x}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{U as g}from"./UserProfileContent-D7SfyGJp.js";import{F as a}from"./FlexBox-wqE_3hOo.js";import{T as o}from"./Text-D7i5Vapy.js";import{B as s}from"./Button-BBT7kpDa.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./styled-DjfdLqg6.js";import"./identifier-ubkqThfq.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./useTheme-CZEWbKR4.js";import"./Typography-NY1t2oJS.js";import"./generateUtilityClasses-axRDXlOb.js";import"./ButtonBase-DH2zkY_f.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./Button-DwUhO5A1.js";const W={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"outlined",color:"primary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const _=["Basic","WithActions"];export{n as Basic,i as WithActions,_ as __namedExportsOrder,W as default};
