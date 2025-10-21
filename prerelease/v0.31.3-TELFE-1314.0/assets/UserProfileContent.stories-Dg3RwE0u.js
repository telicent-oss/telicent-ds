import{j as e,a as r,F as x}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{U as g}from"./UserProfileContent-Be3-9Jzl.js";import{F as a}from"./FlexBox-CPV3qV_w.js";import{T as o}from"./Text-8Kdc4mds.js";import{B as s}from"./Button-BUdKq2Nf.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./styled-0JAKTnfS.js";import"./identifier-y0bUoTO6.js";import"./styled-BJZjZNjA.js";import"./createStyled-CQbojMn1.js";import"./useThemeProps-dlg6X6gD.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./useTheme-DD-YLZ4_.js";import"./Typography-BrwPcXc_.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./ButtonBase-BPGrtmaq.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-C78fFQkL.js";const W={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"outlined",color:"primary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
