import{j as e,a as r,F as x}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{U as g}from"./UserProfileContent-CQNj73V_.js";import{F as a}from"./FlexBox-DVTFmfFO.js";import{T as o}from"./Text-BVIdl1Jw.js";import{B as s}from"./Button-2o7EfnUw.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./styled-gOU_XONt.js";import"./defaultTheme-DzLjz-dB.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./useTheme-Bb3Mws8A.js";import"./Typography-Dhe6o_9I.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./ButtonBase-DExEX2yL.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Button-B3igqjqf.js";const W={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"outlined",color:"primary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
