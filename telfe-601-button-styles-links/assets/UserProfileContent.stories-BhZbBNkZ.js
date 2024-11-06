import{j as e,a as r,F as x}from"./DefaultPropsProvider-_Lew82y0.js";import{U as g}from"./UserProfileContent-CJyar8S6.js";import{F as a}from"./UserIcon-BW6od35l.js";import{T as o}from"./Text-CGTJRmaL.js";import{B as s}from"./Button-lH8i3IaK.js";import"./extends-l96ZYLL7.js";import"./index-BBkUAzwr.js";import"./styled-BJBODTqz.js";import"./createSvgIcon-6016U0XV.js";import"./SvgIcon-nOE-MXQL.js";import"./generateUtilityClasses-Dvcw8qpp.js";import"./resolveComponentProps-BX18Z20f.js";import"./TransitionGroupContext-BxlS8Jd0.js";import"./styled-CkjOwDsr.js";import"./useThemeProps-Q6_fKbvr.js";import"./useTheme-D3h9sCof.js";import"./PrimaryButton-C4l5l8uh.js";import"./Button-CERsBFR3.js";import"./ButtonBase-_xvnSuiZ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-BFzPSdMH.js";const I={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
