import{a as o,j as t,F as x}from"./iframe-CakKu3tO.js";import{a as g,B as m}from"./DropdownButton-DzEacR5L.js";import{a}from"./UserIcon-BV3RYnBk.js";import{T as n}from"./Text-BpfdXhwS.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-B0dC3yxA.js";import"./useThemeProps-CaBBmZ9W.js";import"./useTheme-CU3Z1LPN.js";import"./AdapterDayjs-FG7X0hAC.js";import"./generateUtilityClass-6Xw7P5Pk.js";import"./styled-D0i_6XAq.js";import"./Typography-VZwDLLsu.js";import"./generateUtilityClasses-CTZdcpcX.js";import"./Modal-B3Wl13vZ.js";import"./utils-CGnDQcez.js";import"./TransitionGroupContext-B9U98U0r.js";import"./index-Chjky9EM.js";import"./resolveComponentProps-iQz6eQKL.js";import"./TextField-Dz5pbBA4.js";import"./useFormControl-BnXqfYXF.js";import"./Paper-DBfB9cOM.js";import"./createSvgIcon-DzFzUuJj.js";import"./createStyled-_kKMVs_z.js";import"./IconButton-by7O0-70.js";import"./ButtonBase-DXatlffU.js";import"./DialogContent-CqiwXf8a.js";import"./Button-4KrkEQt7.js";import"./Chip-DLnMpScH.js";import"./DateTimePicker-CeMgnArL.js";import"./Divider-DBfCyhXV.js";import"./Chip-B3Sx6Jvd.js";import"./Divider-B5Ng5m_3.js";import"./Box-Dqg2QVrM.js";import"./TreeView-_VwDVBrL.js";import"./Stack-Bp4TNhTS.js";import"./styled-Bc9giz0S.js";import"./Close-fI8KD5QN.js";import"./LinearProgress-K4-hTmuI.js";import"./Spinner-CQ5Mmb5a.js";import"./Dialog-hPYI290l.js";import"./MapToggleButtonPresentational-DlZ_MTdF.js";import"./Remove-C87szEH0.js";import"./TextField-X3bvylQP.js";import"./Switch-CvCjsl_j.js";import"./DatePicker-CvxthTcJ.js";import"./Box-CScMK_tz.js";import"./Container-qAOf7brY.js";import"./LinkButton-Cv90u6o7.js";import"./Paper-0914DYk_.js";import"./ErrorFallback-D2fuzadK.js";import"./ErrorFallbackText-_e0eHtFb.js";import"./ErrorFallbackWrapper-C92QdUtP.js";import"./Brand-oBbv0poP.js";import"./constants-kG9JxYl2.js";import"./Edit-CmkU-7Bg.js";const Bt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,c,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const bt=["Basic","WithActions"];export{i as Basic,r as WithActions,bt as __namedExportsOrder,Bt as default};
