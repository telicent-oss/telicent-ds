import{j as e,a as r,F as x}from"./DefaultPropsProvider--lJPAVOf.js";import{U as g}from"./UserProfileContent-C0M4KfJU.js";import{F as o}from"./UserIcon-VQcL6Cr3.js";import{T as a}from"./Text-CJDA79D9.js";import{B as s}from"./Button--cz5G96H.js";import"./jsx-runtime-Dwss98Nb.js";import"./index-Du_IP5cC.js";import"./styled-BSeuGzyp.js";import"./createSvgIcon-BEbM4De7.js";import"./SvgIcon-DJ7HZSEs.js";import"./generateUtilityClasses-MMAG8yM0.js";import"./resolveComponentProps-DNRE6Age.js";import"./TransitionGroupContext-DmssZhy-.js";import"./styled-DBIzsiFI.js";import"./useThemeProps-CgZ-XvV1.js";import"./useTheme-DqTbxjpC.js";import"./PrimaryButton-DlcywPdN.js";import"./Button-D07OoOtO.js";import"./ButtonBase-DOatf38x.js";import"./useTheme-tLVpAwB4.js";const W={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:n=>e("div",{style:{width:300},children:e(n,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],t={args:{children:u.slice(0,3).map(n=>r(o,{children:[e(a,{children:e("b",{children:n.heading})}),e(a,{children:n.value})]},n.heading))}},i={args:{children:r(x,{children:[u.map(n=>r(o,{children:[e(a,{children:e("b",{children:n.heading})}),e(a,{children:n.value})]},n.heading)),r(o,{direction:"row",columnGap:2,justifyContent:"end",children:[e(s,{variant:"secondary",disableElevation:!0,children:"Action"}),e(s,{disableElevation:!0,children:"Action"})]})]})}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const _=["Basic","WithActions"];export{t as Basic,i as WithActions,_ as __namedExportsOrder,W as default};