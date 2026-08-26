import{a as o,j as t,F as x}from"./iframe-CA_6RkqO.js";import{a as g,B as m}from"./DropdownButton-BZtDtOal.js";import{F as a}from"./FlexBox-CNxWriJY.js";import{T as n}from"./Text-kbO6tKSd.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DTk_4ZHb.js";import"./SvgIcon-BWAhgByR.js";import"./generateUtilityClass-CfDRvlGw.js";import"./styled-CVefpKE-.js";import"./generateUtilityClasses-C47siXwS.js";import"./useTheme-Dm6Z4O55.js";import"./Box-BW6pEvIo.js";import"./Box-DRdQdhLP.js";import"./Container-ljR5Mlot.js";import"./styled-BZqq2mi8.js";import"./createStyled-D4eWRD3H.js";import"./useThemeProps-Cd3wv7Xx.js";import"./Stack-BF2ZTufs.js";import"./Typography-89Tvlrsc.js";import"./Paper-Ec3Q2dVy.js";import"./useThemeProps-Ciz7WQ9r.js";import"./AdapterDayjs-D37bSqFv.js";import"./Modal-ClU2RWPM.js";import"./utils-CUE5wzp2.js";import"./TransitionGroupContext-B7OUtgPI.js";import"./index-CZHtQLZq.js";import"./resolveComponentProps-Dn_frYuF.js";import"./Popover-BEGXH3NQ.js";import"./TextField-vpmRkwtN.js";import"./useFormControl-B5eiIyWN.js";import"./createSvgIcon-BmwhwAqn.js";import"./IconButton-DtNtarBg.js";import"./ButtonBase-D6Bx6lP1.js";import"./DialogContent-Bjk6fQxi.js";import"./Button-CtzIpja4.js";import"./Chip-CUcMHjoK.js";import"./DateTimePicker-BFqbfcrX.js";import"./Divider-C7dFHnGB.js";import"./AppInfoRow-CEbLv7hl.js";import"./Chip-Bn4GruJi.js";import"./Divider-Ch-VEHlJ.js";import"./TreeView-B6I62OZ2.js";import"./Alert-fjB33Bay.js";import"./LinearProgress-uTJnSXzv.js";import"./Spinner-CCLxETt1.js";import"./Dialog-CxPCMfoF.js";import"./MapToggleButtonPresentational-5Q31WZ7z.js";import"./Remove-DmcGi_Wa.js";import"./LinkButton-vlyktWjA.js";import"./TextField-X3HuGAf0.js";import"./Switch-M79zMsH0.js";import"./DatePicker-C_Oow28J.js";import"./Paper-BuyoLuFc.js";import"./ErrorFallback-LaiW1HKw.js";import"./ErrorFallbackText-Ck2XCFF1.js";import"./ErrorFallbackWrapper-BumR9vBV.js";import"./Brand-D_DOo81n.js";import"./constants-CcDpWV1i.js";import"./Edit-M3NLeTM0.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Ft=["Basic","WithActions"];export{i as Basic,r as WithActions,Ft as __namedExportsOrder,Tt as default};
