import{j as e,a as r,F as x}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{U as g}from"./UserProfileContent-DdYm007D.js";import{F as a}from"./FlexBox-D6GhYe9U.js";import{T as o}from"./Text-BNIHq94e.js";import{B as s}from"./Button-Db1NJzza.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./styled-D6pw60Bp.js";import"./defaultTheme-Cydao2Tu.js";import"./styled-HsAy3ZEw.js";import"./useThemeProps-CBEhXQxo.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./useTheme-DxGOHaWi.js";import"./Typography-BuiWgCNN.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./Button-a6vHgwhc.js";import"./ButtonBase-BUg8pwcP.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./SecondaryButton-RKCuUyYG.js";import"./useTheme-BYNjlLc8.js";import"./Box-DjrL3vcN.js";const I={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const P=["Basic","WithActions"];export{n as Basic,i as WithActions,P as __namedExportsOrder,I as default};
