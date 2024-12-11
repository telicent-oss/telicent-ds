import{j as e,a as r,F as x}from"./DefaultPropsProvider-d5Yg5iWD.js";import{U as g}from"./UserProfileContent-Cir61d2T.js";import{F as a}from"./UserIcon-RqCC6dbb.js";import{T as o}from"./Text-Cbj1DL2Z.js";import{B as s}from"./Button-8mhcKYmr.js";import"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import"./styled-Cd9OY9py.js";import"./createSvgIcon-DpCKqr1J.js";import"./SvgIcon-Bb1DILl7.js";import"./generateUtilityClasses-BeBiso4Q.js";import"./resolveComponentProps-Br404nvz.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./styled-CtDozGU3.js";import"./useThemeProps-DiuEeoPc.js";import"./useTheme-DmEqPdBI.js";import"./PrimaryButton-DSKPXw_K.js";import"./Button-CXDsjVp7.js";import"./ButtonBase-CMKap0Uh.js";import"./useTheme-BGtMGxNE.js";import"./Box-CiTSDCSY.js";const _={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:t=>e("div",{style:{width:300},children:e(t,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],n={args:{children:u.slice(0,3).map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading))}},i={args:{children:r(x,{children:[u.map(t=>r(a,{children:[e(o,{children:e("b",{children:t.heading})}),e(o,{children:t.value})]},t.heading)),r(a,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const I=["Basic","WithActions"];export{n as Basic,i as WithActions,I as __namedExportsOrder,_ as default};
