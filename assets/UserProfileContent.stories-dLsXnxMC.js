import{j as e,a as r,F as x}from"./DefaultPropsProvider-BXx8Lxdp.js";import{U as g}from"./UserProfileContent-cvJ4RGHp.js";import{F as a}from"./UserIcon-BvSIIGLn.js";import{T as o}from"./Text-mT4dy15X.js";import{B as s}from"./Button-D5Cdt3bu.js";import"./extends-EO7Nsyo1.js";import"./index-uubelm5h.js";import"./styled-CsMkIDyT.js";import"./createSvgIcon-B5EEX4Vz.js";import"./SvgIcon-Cq6PF86G.js";import"./generateUtilityClasses-DUdad9y1.js";import"./resolveComponentProps-wJjsJM5R.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./styled-B1p8gUNN.js";import"./useThemeProps-CoIeOuDd.js";import"./useTheme-BLQURKm4.js";import"./PrimaryButton-CS5XDf_-.js";import"./Button-CHvfK-Sl.js";import"./ButtonBase-Ds7yUReY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-BwmRXO23.js";const I={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
